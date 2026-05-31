/* ===========================================================
   Vereda — main.jsx  ·  shell, nav, chat, painel de fonte, trilha
   =========================================================== */

/* ---- highlight de trecho: <hl>…</hl> → span amarelo ---- */
function hlRender(line) {
  const out = []; let key = 0;
  const re = /<hl>([\s\S]*?)<\/hl>/g; let last = 0, m;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push(line.slice(last, m.index));
    out.push(<span className="hl" key={key++}>{m[1]}</span>);
    last = re.lastIndex;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
}

/* ---- Painel de fonte (direita) ---- */
function SourcePanel({ srcId, n, onClose }) {
  const s = window.VEREDA.sources[srcId];
  if (!s) return null;
  return (
    <aside className="src">
      <div className="src-top">
        <div className="src-eyebrow">
          <span className="n">{n}</span>Fonte citada
          <button className="x" onClick={onClose}><Icon n="x" s={16} /></button>
        </div>
        <div className="src-title">{s.title}</div>
        <div className="src-org">
          {s.org} · {s.kind}
          {s.verified && <span className="verified"><Icon n="check" s={11} sw={3} />verificada</span>}
        </div>
      </div>
      <div className="src-doc">
        <div className="meta-row">{s.tags.map((t, i) => <span className="tagpill" key={i}>{t}</span>)}</div>
        {s.series && <MiniSeries series={s.series} />}
        <h4>Trecho destacado</h4>
        {s.doc.map((p, i) => <p key={i}>{hlRender(p)}</p>)}
      </div>
      <div className="src-foot">
        <a><Icon n="link" s={13} />Abrir documento original</a>
        <span className="stamp">{s.stamp}</span>
      </div>
    </aside>
  );
}

/* ---- Trilha "Como cheguei aqui" (slide-over) ---- */
function TrailPanel({ trailKey, open, onClose, onSource }) {
  const t = window.VEREDA.trails[trailKey];
  return (
    <React.Fragment>
      <div className={"scrim" + (open ? " on" : "")} onClick={onClose}></div>
      <div className={"trail" + (open ? " on" : "")}>
        {t && (
          <React.Fragment>
            <div className="trail-top">
              <div className="ti">
                <div className="te">Trilha de raciocínio</div>
                <h3>{t.title}</h3>
                <p>{t.sub}</p>
              </div>
              <button className="x" onClick={onClose}><Icon n="x" s={18} /></button>
            </div>
            <div className="trail-body">
              <div className="step done"><div className="num">1</div>
                <h4>Query interpretada</h4>
                <div className="desc">{t.query}</div>
              </div>
              <div className="step done"><div className="num">2</div>
                <h4>Fontes consultadas</h4>
                <div className="srclist">
                  {t.sources.map((s, i) => (
                    <div className="srcrow" key={i} onClick={() => onSource(s.id)}>
                      <span className="si"><Icon n="doc" s={15} /></span>
                      <span className="so">{s.o}</span><span> — {s.c}</span>
                      <span className="sc">abrir ↗</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="step done"><div className="num">3</div>
                <h4>Modelos quantitativos chamados</h4>
                {t.models.map((m, i) => (
                  <div className="modelrow" key={i}><span className="ver">{m.ver}</span>{m.nm}</div>
                ))}
              </div>
              <div className="step done"><div className="num">4</div>
                <h4>Premissas declaradas</h4>
                {t.premises.map((p, i) => <div className="premise" key={i}>{p}</div>)}
              </div>
              <div className="step done"><div className="num">5</div>
                <h4>Conclusão</h4>
                <div className="desc">{t.conclusion}</div>
              </div>
              <div className="step"><div className="num">6</div>
                <h4>Banda de confiança</h4>
                <div className="bandnote">
                  <div className="bk">Confiança da recomendação</div>
                  <div className="bv">{t.band.v}</div>
                  <div className="bs">{t.band.s}</div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

/* ---- Barra de decisão (aceitar/ajustar/recusar) ---- */
function DecisionBar({ done, onDecision }) {
  const [pending, setPending] = useState(null);
  const [just, setJust] = useState("");
  if (done) {
    const lab = { acc: "aceita", adj: "ajustada", ref: "recusada" }[done.action];
    return (
      <div className={"decision-done " + done.action}>
        <Icon n={done.action === "ref" ? "x" : "check"} s={16} />
        <div>Recomendação <b>{lab}</b>{done.just && <span className="dd-just"> — "{done.just}"</span>}</div>
      </div>
    );
  }
  return (
    <div className="decision">
      <div className="decision-q"><Icon n="check" s={14} />O que você decide? Fica registrado na trilha auditável.</div>
      {!pending ? (
        <div className="decision-bar">
          <button className="dbtn acc" onClick={() => setPending("acc")}><Icon n="check" s={14} />Aceitar</button>
          <button className="dbtn adj" onClick={() => setPending("adj")}><Icon n="sliders" s={14} />Ajustar</button>
          <button className="dbtn ref" onClick={() => setPending("ref")}><Icon n="x" s={14} />Recusar</button>
        </div>
      ) : (
        <div className="decision-form">
          <textarea autoFocus value={just} onChange={e => setJust(e.target.value)}
            placeholder={pending === "acc" ? "Observação (opcional)…" : "Por quê? A justificativa entra na trilha auditável."} />
          <div className="df-foot">
            <button className="btn key sm" disabled={pending !== "acc" && !just.trim()}
              onClick={() => onDecision(pending, just.trim())}>Registrar decisão</button>
            <button className="btn sm" onClick={() => { setPending(null); setJust(""); }}>Cancelar</button>
            <span className="df-hint">{pending === "acc" ? "Aceitar não exige justificativa" : "Ajustar/recusar pede justificativa"}</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---- Chat (Investigar) ---- */
function ChatView({ messages, working, streamingSid, onStreamDone, onWorkComplete, onCite, onTrail, goView,
  onSend, used, activeSrc, decisionsDone, onDecision, openSimulator, starters, onMakeOnepager }) {
  const D = window.VEREDA;
  const threadRef = useRef(null);
  const [val, setVal] = useState("");
  useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  });
  const busy = !!working || !!streamingSid;

  const renderActions = (msg) => (
    <div className="actions">
      {msg.actions.map((a) => {
        if (a === "trail") return <button className="btn key" key={a} onClick={() => onTrail(msg.trail)}><Icon n="clock" s={14} />Como cheguei aqui</button>;
        if (a === "onepager") return <button className="btn" key={a} onClick={onMakeOnepager}><Icon n="doc" s={14} />Montar one-pager</button>;
        if (a === "simular") return <button className="btn" key={a} onClick={openSimulator}><Icon n="sliders" s={14} />Simular cenário</button>;
        return null;
      })}
    </div>
  );

  const submitFree = () => { const t = val.trim(); if (!t) return; setVal(""); onSend(null, t); };

  const lastAi = [...messages].reverse().find(m => m.who === "ai");
  const sugg = (lastAi && D.followups[lastAi.id] ? D.followups[lastAi.id] : [])
    .filter(id => !used.has(id));
  const empty = messages.length === 0 && !working;

  return (
    <div className="main">
      <header className="topbar">
        <div className="crumb">Investigar · <b>Zona da Mata</b> · pré-entressafra Q3</div>
        <button className="btn sm" onClick={openSimulator} style={{ marginLeft: "auto" }}><Icon n="sliders" s={14} />Simulador</button>
        <div className="basin"><span className="dot"></span>Risco: <b style={{ color: "var(--warn)" }}>alto</b></div>
      </header>

      <div className="thread" ref={threadRef}>
        <div className="thread-inner">
          {empty ? (
            <div className="starter">
              <div className="st-mark"><Mark s={50} /></div>
              <h3>Investigando a Zona da Mata</h3>
              <p>Pergunte em linguagem natural. Eu busco nas fontes internas (SAP, laboratório) e externas (CEPEA, INMET, NOAA…) e respondo sempre com citação clicável e trilha de raciocínio.</p>
              <div className="st-chips">
                {starters.map(s => (
                  <button className="st-chip" key={s.key} onClick={() => onSend(s.key)}><Icon n="search" s={16} />{s.text}</button>
                ))}
              </div>
            </div>
          ) : (
            <React.Fragment>
              {messages.map((msg, i) => msg.who === "user" ? (
                <div className="turn user" key={i}><div className="bubble-user">{msg.text}</div></div>
              ) : (
                <div className="turn fade-in" key={i}>
                  <div className="ai-head">
                    <span className="ai-mark"><Mark s={23} /></span>
                    <span className="ai-name">Vereda</span>
                    <span className="ai-meta">{msg.meta}</span>
                  </div>
                  <div className="ai-body">
                    {msg._think && <ThoughtTrace aiBase={msg} secs={msg._think} onCite={onCite} />}
                    {msg._sid && msg._sid === streamingSid ? (
                      <StreamingBlocks blocks={msg.blocks} onCite={onCite} activeSrc={activeSrc} onDone={onStreamDone} />
                    ) : (
                      <React.Fragment>
                        <AIBlocks blocks={msg.blocks} onCite={onCite} activeSrc={activeSrc} />
                        {msg.actions && msg.actions.length > 0 && renderActions(msg)}
                        {msg.decisionable && <DecisionBar done={decisionsDone[msg._sid]} onDecision={(act, j) => onDecision(msg._sid, msg.recLabel, act, j)} />}
                      </React.Fragment>
                    )}
                  </div>
                </div>
              ))}
              {working && (
                <div className="turn fade-in">
                  <div className="ai-head">
                    <span className="ai-mark"><Mark s={23} /></span>
                    <span className="ai-name">Vereda</span>
                  </div>
                  <div className="ai-body">
                    <ThinkingStream aiBase={working} onComplete={onWorkComplete} />
                  </div>
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      </div>

      <div className="composer">
        <div className="composer-inner">
          {!empty && (
            <div className="chips">
              {sugg.length > 0 ? sugg.map(id => (
                <button className="chip" key={id} disabled={busy} onClick={() => onSend(id)}>{D.chipPool[id]}</button>
              )) : <span style={{ fontSize: 12.5, color: "var(--ink-faint)" }}>Digite uma pergunta livre ou abra o simulador de cenário.</span>}
            </div>
          )}
          <div className="inputwrap">
            <input value={val} disabled={busy}
              onChange={e => setVal(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") submitFree(); }}
              placeholder="Pergunte sobre uma bacia, cenário ou produtor…" />
            <button className="send" disabled={busy || !val.trim()} onClick={submitFree}><Icon n="arrow" s={17} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================ APP ============================ */
function App() {
  const D = window.VEREDA;
  const [view, setView] = useState("hoje");
  const [basin, setBasin] = useState(null);     // null = picker de bacias
  const [opDoc, setOpDoc] = useState(null);      // null = lista de one-pagers
  const [messages, setMessages] = useState([]);  // chat começa vazio
  const [working, setWorking] = useState(null);  // aiBase pendente (agente trabalhando)
  const [streamingSid, setStreamingSid] = useState(null);
  const [src, setSrc] = useState({ open: false, id: null, n: null });
  const [trail, setTrail] = useState({ open: false, key: null });
  const [used, setUsed] = useState(new Set());
  const [opGen, setOpGen] = useState(false);
  const [toast, setToast] = useState("");
  const [decisions, setDecisions] = useState([]);
  const [decisionsDone, setDecisionsDone] = useState({});
  const [alertsActive, setAlertsActive] = useState({ risk: true, gov: true });
  const [simOpen, setSimOpen] = useState(false);
  const toastTimer = useRef(null);

  const showToast = (t) => {
    setToast(t); clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2800);
  };
  const openCite = (id, n) => setSrc({ open: true, id, n });
  const closeCite = () => setSrc(s => ({ ...s, open: false }));
  const openTrail = (key) => setTrail({ open: true, key });
  const closeTrail = () => setTrail(t => ({ ...t, open: false }));

  const goView = (v) => {
    if (v === "investigar") setBasin(null);   // volta pro picker de bacias
    if (v === "onepager") setOpDoc(null);      // volta pra lista de one-pagers
    setView(v);
  };

  // resolve a mensagem da IA a partir de um chip/pergunta
  const resolveAI = (chipId, freeText) => {
    let resp = null, userText = freeText;
    if (chipId && D.responses[chipId]) {
      resp = D.responses[chipId]; userText = resp.userText;
      setUsed(u => new Set(u).add(chipId));
    } else if (freeText) {
      const t = freeText.toLowerCase(); let key = null;
      if (/(itamb|4%|concorr|bonifica)/.test(t)) key = "whatif-itambe";
      else if (/adelmo/.test(t)) key = "adelmo";
      else if (/(igual|quanto)/.test(t)) key = "igualar";
      else if (/(produtor|12|quais|quem|risco)/.test(t)) key = "producers-12";
      else if (/(águas|aguas|safra|compar|sazonal)/.test(t)) key = "compare-aguas";
      else if (/(entressafra|zona|bacia|acontec)/.test(t)) key = "basin";
      if (key) { resp = D.responses[key]; setUsed(u => new Set(u).add(key)); }
    }
    return { aiBase: resp ? resp.ai : D.fallback, userText };
  };

  // dispara: empurra a pergunta e coloca o agente pra trabalhar
  const send = (chipId, freeText) => {
    const { aiBase, userText } = resolveAI(chipId, freeText);
    setMessages(m => [...m, { who: "user", text: userText }]);
    setWorking(aiBase);
  };

  // agente terminou de "trabalhar" → publica a resposta e começa o streaming
  const finishWith = (aiBase, secs) => {
    if (!aiBase) return;
    const sid = "s" + Date.now() + Math.floor(Math.random() * 1e4);
    setMessages(m => [...m, { ...aiBase, _sid: sid, _think: secs || 6 }]);
    setStreamingSid(sid);
    setWorking(null);
  };

  const openBasin = (id, seedKey) => {
    setBasin(id);
    setView("investigar");
    if (seedKey && messages.length === 0) {
      const { aiBase, userText } = resolveAI(seedKey, null);
      setMessages([{ who: "user", text: userText }]);
      setWorking(aiBase);
    }
  };

  const registerScenario = (inp, res) => {
    setView("investigar"); setBasin("zm");
    setMessages(m => [...m, { who: "user", text: "Rodei um cenário no simulador — me mostra o impacto." }]);
    setWorking(buildScenarioMessage(inp, res));
  };

  const openDoc = (d) => {
    if (d.active) { setOpDoc("q3"); }
    else showToast("Documento arquivado — somente leitura nesta demo");
  };

  const onDecision = (sid, recLabel, action, just) => {
    const rec = recLabel || "Recomendação";
    setDecisions(d => [...d, { action, rec, just, when: "31/05/2026" }]);
    setDecisionsDone(m => ({ ...m, [sid]: { action, just } }));
    const lab = { acc: "aceita", adj: "ajustada", ref: "recusada" }[action];
    showToast("Decisão registrada na trilha — recomendação " + lab);
  };

  const dismissAlert = (k) => { setAlertsActive(a => ({ ...a, [k]: false })); showToast("Alerta dispensado"); };

  const alertCount = (alertsActive.risk ? 1 : 0) + (alertsActive.gov ? 1 : 0);
  const basinObj = basin ? D.basins.find(b => b.id === basin) : null;
  const nav = [
    { id: "hoje", label: "Hoje", icon: "home" },
    { id: "investigar", label: "Investigar", icon: "search" },
    { id: "onepager", label: "One-pager", icon: "doc" },
    { id: "calibracao", label: "Calibração", icon: "chart" }
  ];

  return (
    <div className="app">
      <aside className="rail">
        <div className="brand" onClick={() => goView("hoje")}>
          <span className="mark"><Mark s={31} /></span>
          <div><h1>Vereda</h1><div className="tag">Captação · Vale do Cedro</div></div>
        </div>
        <div className="cycle">
          <div className="ck">Ciclo</div>
          <div className="cv">Pré-entressafra · mai–ago/26</div>
          <div className="bar"><i></i></div>
        </div>
        <nav className="nav">
          {nav.map(it => {
            const badge = it.id === "hoje" ? (alertCount || null) : it.id === "calibracao" ? (decisions.length || null) : null;
            const on = view === it.id;
            return (
              <button key={it.id} className={on ? "on" : ""} onClick={() => goView(it.id)}>
                <span className="ico"><Icon n={it.icon} s={17} /></span>{it.label}
                {badge && !on && <span className="badge-n">{badge}</span>}
              </button>
            );
          })}
          <div className="lbl">Bacias</div>
          <button className={view === "investigar" && basin === "zm" ? "on" : ""} onClick={() => openBasin("zm")}><span className="ico"><Icon n="pin" s={17} /></span>Zona da Mata</button>
          <button className={view === "investigar" && basin === "sm" ? "on" : ""} onClick={() => openBasin("sm")}><span className="ico"><Icon n="pin" s={17} /></span>Sul de Minas</button>
        </nav>
        <div className="who">
          <div className="avatar">AT</div>
          <div><div className="nm">Anderson Toledo</div><div className="rl">Gerente de Captação</div></div>
        </div>
      </aside>

      <div className={"stage" + (src.open ? " src-open" : "")}>
        {view === "hoje" && (
          <div className="main">
            <header className="topbar">
              <div className="crumb">Hoje · <b>Vale do Cedro</b></div>
              <div className="basin"><span className="dot"></span>{alertCount} {alertCount === 1 ? "sinal novo" : "sinais novos"}</div>
            </header>
            <HojeView onCite={openCite} onTrail={openTrail}
              onInvestigarBacia={() => openBasin("zm", "basin")} onOpenBasin={(id) => openBasin(id)}
              alertsActive={alertsActive} onDismiss={dismissAlert} basins={D.basins} />
          </div>
        )}

        {view === "investigar" && !basin && (
          <div className="main">
            <header className="topbar"><div className="crumb">Investigar</div></header>
            <BasinPicker basins={D.basins} onOpen={(id) => openBasin(id)} />
          </div>
        )}
        {view === "investigar" && basinObj && !basinObj.active && (
          <div className="main">
            <header className="topbar"><div className="crumb">Investigar · <b>{basinObj.nm}</b></div></header>
            <BasinEmptyState basin={basinObj} onBack={() => setBasin(null)} onRequest={() => showToast("Solicitação de ativação enviada ao time do piloto")} />
          </div>
        )}
        {view === "investigar" && basinObj && basinObj.active && (
          <ChatView messages={messages} working={working} streamingSid={streamingSid}
            onStreamDone={() => setStreamingSid(null)} onWorkComplete={(secs) => finishWith(working, secs)}
            onCite={openCite} onTrail={openTrail} goView={goView} onSend={send} used={used}
            activeSrc={src.open ? src.id : null} decisionsDone={decisionsDone} onDecision={onDecision}
            openSimulator={() => setSimOpen(true)} starters={D.starters}
            onMakeOnepager={() => { setView("onepager"); setOpDoc("q3"); }} />
        )}

        {view === "onepager" && !opDoc && (
          <div className="main">
            <header className="topbar"><div className="crumb">One-pagers</div></header>
            <OnePagerList docs={D.onepagerList} onOpen={openDoc} />
          </div>
        )}
        {view === "onepager" && opDoc && (
          <div className="main">
            <header className="topbar">
              <button className="btn sm" onClick={() => setOpDoc(null)}><Icon n="arrow" s={14} style={{ transform: "rotate(180deg)" }} />One-pagers</button>
              <div className="crumb" style={{ marginLeft: 4 }}>· <b>Pacote de retenção Q3</b></div>
              <div className="basin" style={{ marginLeft: "auto", background: "var(--green-soft)", borderColor: "var(--green-line)", color: "var(--green)" }}>
                <span className="dot" style={{ background: "var(--green)" }}></span>defesa pro Comitê
              </div>
            </header>
            <OnePagerView onCite={openCite} generated={opGen} onGenerated={() => setOpGen(true)} toast={showToast} />
          </div>
        )}

        {view === "calibracao" && (
          <div className="main">
            <header className="topbar"><div className="crumb">Calibração · <b>Q3/2026</b></div></header>
            <CalibracaoView decisions={decisions} />
          </div>
        )}

        {src.open
          ? <SourcePanel srcId={src.id} n={src.n} onClose={closeCite} />
          : <div></div>}
      </div>

      <TrailPanel trailKey={trail.key} open={trail.open} onClose={closeTrail}
        onSource={(id) => { openCite(id, "•"); closeTrail(); }} />

      <SimulatorPanel open={simOpen} onClose={() => setSimOpen(false)} onRegister={registerScenario} />

      <div className={"toast" + (toast ? " on" : "")}><Icon n="check" s={16} />{toast}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
