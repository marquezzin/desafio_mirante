/* ===========================================================
   Vereda — views.jsx  ·  Hoje, One-pager, Calibração
   =========================================================== */
const V = () => window.VEREDA;

/* ============================ HOJE ============================ */
function HojeView({ onCite, onTrail, onInvestigarBacia, onOpenBasin, alertsActive, onDismiss, basins }) {
  const a = V().alerts;
  const [showSummary, setShowSummary] = useState(false);
  const rich = (t) => parseRich(t, onCite, null);
  const nActive = (alertsActive.risk ? 1 : 0) + (alertsActive.gov ? 1 : 0);
  return (
    <div className="scroll">
      <div className="hoje">
        <div className="greet">
          <h2>Bom dia, Anderson.</h2>
          <p>Segunda-feira, 31 de maio · ciclo de pré-entressafra. Enquanto você não olhava, eu monitorei suas bacias.</p>
        </div>

        <div className="sec-lbl">{nActive > 0 ? "Precisa da sua atenção" : "Tudo tratado por aqui"}</div>

        {nActive === 0 && (
          <div className="card" style={{ textAlign: "center", padding: "30px 20px", color: "var(--ink-faint)", fontSize: 14 }}>
            Você zerou os sinais do dia. Eu sigo monitorando as bacias e te aviso quando algo mudar.
          </div>
        )}

        {alertsActive.risk && (
          <div className="alert risk">
            <div className="alert-dismiss">
              <button className="alert-x" title="Dispensar" onClick={() => onDismiss("risk")}><Icon n="x" s={15} /></button>
            </div>
            <div className="alert-head">
              <div className="alert-icon"><Icon n="alert" s={20} /></div>
              <div className="at">
                <div className="alert-kicker">{a.risk.kicker}</div>
                <div className="alert-title">{a.risk.title}</div>
              </div>
              <div className="alert-when" style={{ marginRight: 34 }}>{a.risk.when}</div>
            </div>
            <div className="alert-body">{rich(a.risk.body)}</div>
            <div className="minibars">
              {a.risk.minibars.map((m, i) => (
                <div className="mb" key={i}>
                  <span className="mk">{m.k}</span>
                  <span className={"mv " + m.cls}>{m.v}</span>
                  <span className="ms">{m.s}</span>
                </div>
              ))}
            </div>
            <div className="alert-foot">
              <button className="btn sm" onClick={() => onCite("noaa", "2")}><Icon n="doc" s={14} />Ler trecho NOAA</button>
              <button className="btn sm" onClick={() => onCite("cbot", "3")}><Icon n="chart" s={14} />Ver milho CBOT</button>
              <button className="btn sm" onClick={() => onTrail("basin")}><Icon n="clock" s={14} />Como cheguei aqui</button>
              <button className="btn key sm" onClick={onInvestigarBacia}><Icon n="search" s={14} />Investigar a bacia</button>
            </div>
          </div>
        )}

        {alertsActive.gov && (
          <div className="alert gov">
            <div className="alert-dismiss">
              <button className="alert-x" title="Dispensar" onClick={() => onDismiss("gov")}><Icon n="x" s={15} /></button>
            </div>
            <div className="alert-head">
              <div className="alert-icon"><Icon n="gov" s={20} /></div>
              <div className="at">
                <div className="alert-kicker">{a.gov.kicker}</div>
                <div className="alert-title">{a.gov.title}</div>
              </div>
              <div className="alert-when" style={{ marginRight: 34 }}>{a.gov.when}</div>
            </div>
            <div className="alert-body">{rich(a.gov.body)}</div>
            {showSummary && (
              <div className="alert-body fade-in" style={{ marginTop: 10, color: "var(--ink)" }}>
                <b>Resumo:</b> {a.gov.summary}
              </div>
            )}
            <div className="alert-foot">
              <button className="btn key sm" onClick={() => onCite("mapa", "7")}><Icon n="doc" s={14} />Ler o trecho original</button>
              <button className="btn sm" onClick={() => setShowSummary(s => !s)}>{showSummary ? "Ocultar resumo" : "Resumo em 3 linhas"}</button>
            </div>
          </div>
        )}

        <div className="sec-lbl">Suas bacias</div>
        <div className="basins">
          {basins.map(b => {
            const min = Math.min(...b.spark), max = Math.max(...b.spark), rng = (max - min) || 1;
            const step = 100 / (b.spark.length - 1);
            const line = b.spark.map((v, i) => (i ? "L" : "M") + (i * step).toFixed(1) + " " + (30 - ((v - min) / rng) * 24).toFixed(1)).join(" ");
            const col = b.status === "alto" ? "var(--warn)" : b.status === "médio" ? "#c9a227" : "var(--good)";
            return (
              <div className={"bcard go"} key={b.id} onClick={() => onOpenBasin(b.id)}>
                <div className="bc-top">
                  <span className="bc-nm">{b.nm}</span>
                  <span className={"bc-status " + b.status}>{b.status}</span>
                </div>
                <div className="bc-metric">{b.metric}</div>
                <div className="bc-note">{b.note}</div>
                <svg viewBox="0 0 100 32" preserveAspectRatio="none" height="32">
                  <path d={line} fill="none" stroke={col} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b.go && <div className="bc-go"><Icon n="search" s={13} />Abrir investigação</div>}
                {!b.go && <div className="bc-go" style={{ color: "var(--ink-faint)" }}><Icon n="pin" s={13} />Abrir bacia</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ========================= ONE-PAGER ========================= */
function OnePagerView({ onCite, generated, onGenerated, toast }) {
  const d = V().onepager;
  const [step, setStep] = useState(generated ? d.genlog.length : 0);
  const [drivers, setDrivers] = useState(d.drivers);
  const [alts, setAlts] = useState(d.alternativas);
  const rich = (t) => parseRich(t, onCite, null);

  useEffect(() => {
    if (generated) return;
    let s = 0;
    const iv = setInterval(() => {
      s++; setStep(s);
      if (s >= d.genlog.length) { clearInterval(iv); setTimeout(onGenerated, 600); }
    }, 620);
    return () => clearInterval(iv);
  }, []);

  if (!generated) {
    const prog = Math.round((step / d.genlog.length) * 100);
    return (
      <div className="op-wrap">
        <div className="op-gen">
          <div className="gmark"><Mark s={54} /></div>
          <h3>Redigindo o rascunho…</h3>
          <p>Montando a defesa pro Comitê a partir da investigação da Zona da Mata.</p>
          <div className="op-genbar"><i style={{ width: prog + "%" }}></i></div>
          <div className="op-genlog">
            {d.genlog.map((g, i) => (
              <div className={"gl" + (i < step ? " on" : "")} key={i}>
                <span className="ck">{i < step ? "✓" : "·"}</span>{g}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="op-wrap">
      <div className="op-toolbar">
        <Icon n="doc" s={17} />
        <span className="t-title">One-pager · Comitê de S&amp;OP</span>
        <span className="t-meta">· rascunho editável · clique no texto pra editar</span>
        <div className="right">
          <button className="btn sm" onClick={onGenerated}><Icon n="refresh" s={14} />Regerar</button>
          <button className="btn key sm" onClick={() => { toast("Exportando PDF — abra o diálogo de impressão"); setTimeout(() => window.print(), 400); }}>
            <Icon n="download" s={14} />Exportar PDF
          </button>
        </div>
      </div>

      <div className="paper">
        <div className="doc-head">
          <div className="doc-kicker">{d.kicker}</div>
          <h1 className="doc-title" contentEditable suppressContentEditableWarning>{d.title}</h1>
          <div className="doc-sub">{d.sub.map((s, i) => <span key={i}>{s}</span>)}</div>
        </div>

        <div className="op-sec">
          <div className="oh">Contexto</div>
          <div className="oc" contentEditable suppressContentEditableWarning>{d.contexto}</div>
        </div>

        <div className="op-sec">
          <div className="oh">Drivers principais <span className="editflag">fontes clicáveis</span></div>
          <ul className="op-list">
            {drivers.map((dr, i) => (
              <li key={i}>
                <span className="lk">{dr.k}</span>
                <span>{rich(dr.text)}</span>
                <button className="rm" title="Remover" onClick={() => setDrivers(drivers.filter((_, j) => j !== i))}>×</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="op-sec">
          <div className="oh">Recomendação</div>
          <div className="oc" contentEditable suppressContentEditableWarning style={{ fontWeight: 600 }}>{d.recomendacao}</div>
        </div>

        <div className="op-sec">
          <div className="oh">Hipótese de impacto</div>
          <div className="impact">
            {d.impact.map((im, i) => (
              <div className="ic" key={i}>
                <div className="ik">{im.k}</div>
                <div className="iv" style={{ color: i === 0 ? "var(--good)" : "var(--ink)" }}>{im.v}</div>
                <div className="is">{im.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="op-sec">
          <div className="oh">Alternativas consideradas</div>
          <ul className="op-list">
            {alts.map((al, i) => (
              <li key={i}>
                <span className="lk" style={{ color: "var(--ink-soft)", background: "#eef1ef" }}>{al.k}</span>
                <span>{rich(al.text)}</span>
                <button className="rm" title="Remover" onClick={() => setAlts(alts.filter((_, j) => j !== i))}>×</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="op-sec">
          <div className="oh">Premissas declaradas</div>
          <div className="oc" contentEditable suppressContentEditableWarning>{d.premissas}</div>
        </div>

        <div className="op-sec">
          <div className="oh">O que falta saber</div>
          <div className="note-box"><span className="nk">Honestidade sobre o que o modelo não vê</span>{d.falta}</div>
        </div>
      </div>
    </div>
  );
}

/* ======================== CALIBRAÇÃO ======================== */
function CalibracaoView({ decisions }) {
  const c = V().calibration;
  const actLabel = { acc: "Aceitou", adj: "Ajustou", ref: "Recusou" };
  return (
    <div className="scroll">
      <div className="cal">
        <div className="cal-head">
          <div className="ci"><Icon n="chart" s={23} /></div>
          <div>
            <h2>Como me saí no último trimestre</h2>
            <p>Calibração honesta da recomendação principal — onde acertei, onde errei e por quê. {c.period}.</p>
          </div>
        </div>
        <div className="honest"><Icon n="check" s={14} /> Esconder erro encerra o piloto — acordo com o Anderson desde o dia 1</div>

        <div className="card full" style={{ marginBottom: 16 }}>
          <div className="ch">Recomendação avaliada</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", lineHeight: 1.5 }}>{c.rec}</div>
        </div>

        <div className="cal-grid">
          {c.kpis.map((k, i) => (
            <div className="card" key={i}>
              <div className="ch">Resultado</div>
              <div className="kpi"><span className={"kv " + k.cls}>{k.kv}</span><span className="ku">{k.ku}</span></div>
              <div className="kpi-sub">{k.sub}</div>
            </div>
          ))}
        </div>

        <div className="card full" style={{ marginBottom: 16 }}>
          <div className="ch">Banda de confiança — projetada vs. realizada</div>
          <div className="bandcmp">
            <div className="row">
              <span className="lab">Projetada</span>
              <div className="track"><div className="seg proj" style={{ left: "0%", width: c.band.proj }}></div></div>
              <span className="val" style={{ color: "var(--green)" }}>{c.band.proj}</span>
            </div>
            <div className="row">
              <span className="lab">Realizada</span>
              <div className="track"><div className="seg real" style={{ left: "0%", width: c.band.real }}></div></div>
              <span className="val" style={{ color: "var(--ink)" }}>{c.band.real}</span>
            </div>
          </div>
          <div className="kpi-sub" style={{ marginTop: 4 }}>{c.band.note}</div>
        </div>

        <div className="cal-grid">
          <div className="card">
            <div className="ch">Drivers — o que se confirmou</div>
            <div className="driver-check">
              {c.drivers.map((dr, i) => (
                <div className="dc-row" key={i}>
                  <div className={"dcic " + (dr.ok ? "ok" : "miss")}>
                    <Icon n={dr.ok ? "check" : "x"} s={14} />
                  </div>
                  <span className="dcn">{dr.n}</span>
                  <span className="dcv">{dr.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="ch">Onde errei</div>
            <div className="miss-list">
              {c.misses.map((m, i) => (
                <div className="miss-item" key={i}>
                  <div className="mi">!</div>
                  <div className="mt">{parseRich(m.t, null, null)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card full" style={{ marginTop: 16 }}>
          <div className="ch">Decisões registradas neste ciclo <span className="editflag" style={{ marginLeft: "auto" }}>trilha auditável</span></div>
          {(!decisions || decisions.length === 0) ? (
            <div className="dec-empty">Nenhuma decisão registrada ainda. Em <b>Investigar</b>, use Aceitar / Ajustar / Recusar numa recomendação — cada escolha entra aqui com sua justificativa.</div>
          ) : (
            <div className="dec-log">
              {decisions.map((d, i) => (
                <div className="dl-row" key={i}>
                  <div className={"dl-ic " + d.action}>{d.action === "acc" ? "✓" : d.action === "adj" ? "~" : "✕"}</div>
                  <div className="dl-body">
                    <div className="dl-rec">{actLabel[d.action]} · {d.rec}</div>
                    {d.just && <div className="dl-just">"{d.just}"</div>}
                    <div className="dl-when">{d.when} · registrado por Anderson Toledo</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ===================== LISTA DE BACIAS ===================== */
function BasinPicker({ basins, onOpen }) {
  return (
    <div className="scroll">
      <div className="listview">
        <div className="lv-head">
          <h2>Investigar — escolha a bacia</h2>
          <p>Cada bacia tem produtores, qualidade e logística próprios. O piloto do Vereda está ativo na Zona da Mata; as demais estão em monitoramento.</p>
        </div>
        <div className="basin-list">
          {basins.map(b => {
            const min = Math.min(...b.spark), max = Math.max(...b.spark), rng = (max - min) || 1;
            const step = 150 / (b.spark.length - 1);
            const line = b.spark.map((v, i) => (i ? "L" : "M") + (i * step).toFixed(1) + " " + (34 - ((v - min) / rng) * 26).toFixed(1)).join(" ");
            const col = b.status === "alto" ? "var(--warn)" : b.status === "médio" ? "#c9a227" : "var(--good)";
            return (
              <button className={"blrow" + (b.active ? "" : " off")} key={b.id} onClick={() => onOpen(b.id)}>
                <div className="bl-main">
                  <div className="bl-nm">{b.nm}
                    <span className={"bl-pill " + (b.active ? "piloto" : "fora")}>{b.active ? "piloto ativo" : "fora do piloto"}</span>
                  </div>
                  <div className="bl-vol">{b.vol}</div>
                  <div className="bl-metric"><span className={"bl-status " + b.status}>{b.status}</span>{b.metric}</div>
                </div>
                <div className="bl-spark"><svg viewBox="0 0 150 36" preserveAspectRatio="none" height="36">
                  <path d={line} fill="none" stroke={col} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg></div>
                <span className="bl-go"><Icon n="arrow" s={18} /></span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============== BACIA FORA DO PILOTO (estado vazio) ============== */
function BasinEmptyState({ basin, onBack, onRequest }) {
  return (
    <div className="scroll">
      <div className="basin-empty">
        <div className="be-ic"><Icon n="pin" s={26} /></div>
        <h3>{basin.nm} · monitorada</h3>
        <p>Esta bacia está sob monitoramento, mas <b>fora do piloto Q3</b>. O Vereda só investiga e recomenda onde o piloto está ativo — por princípio de escopo contido. {basin.vol}.</p>
        <div className="be-foot">
          <button className="btn" onClick={onBack}><Icon n="arrow" s={14} style={{ transform: "rotate(180deg)" }} />Voltar às bacias</button>
          <button className="btn key" onClick={onRequest}><Icon n="check" s={14} />Solicitar ativação no piloto</button>
        </div>
      </div>
    </div>
  );
}

/* ================== LISTA DE ONE-PAGERS ================== */
function OnePagerList({ docs, onOpen }) {
  return (
    <div className="scroll">
      <div className="listview">
        <div className="lv-head">
          <h2>One-pagers</h2>
          <p>Defesas estruturadas pro Comitê de S&amp;OP — com drivers, banda de confiança, hipótese de impacto e fontes. Abra um rascunho pra editar e exportar.</p>
        </div>
        <div className="op-list-v">
          {docs.map(d => (
            <button className="oprow" key={d.id} onClick={() => onOpen(d)}>
              <div className="op-ic"><Icon n="doc" s={20} /></div>
              <div className="op-main">
                <div className="op-t">{d.title}</div>
                <div className="op-m">{d.basin} · {d.when}</div>
              </div>
              <span className={"op-stat " + d.status}>{d.status}</span>
              <span className="bl-go"><Icon n="arrow" s={18} /></span>
            </button>
          ))}
        </div>
        <button className="btn op-new" onClick={() => onOpen({ id: "q3", active: true })}><Icon n="edit" s={14} />Novo a partir da investigação da Zona da Mata</button>
      </div>
    </div>
  );
}

Object.assign(window, { HojeView, OnePagerView, CalibracaoView, BasinPicker, BasinEmptyState, OnePagerList });
