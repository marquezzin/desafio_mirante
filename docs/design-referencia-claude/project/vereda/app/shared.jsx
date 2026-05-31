/* ===========================================================
   Vereda — utilitários compartilhados (shared.jsx)
   Exporta p/ window: parseRich, Icon, Mark, ConfBandChart, AIBlocks
   =========================================================== */
const { useState, useEffect, useRef, useMemo } = React;

/* ---- ícones (stroke currentColor) ---- */
const ICONS = {
  home: "M3 11l9-8 9 8M5 10v10h14V10",
  search: "M11 11m-7 0a7 7 0 1014 0a7 7 0 10-14 0 M21 21l-4-4",
  doc: "M6 3h9l5 5v13H6z M14 3v6h6",
  chart: "M4 20V4 M4 16l5-5 4 3 7-8",
  pin: "M12 21s7-6.4 7-12a7 7 0 10-14 0c0 5.6 7 12 7 12z M12 9m-2.4 0a2.4 2.4 0 104.8 0a2.4 2.4 0 10-4.8 0",
  clock: "M12 12m-9 0a9 9 0 1018 0a9 9 0 10-18 0 M12 8v4l3 2",
  check: "M5 13l4 4 10-11",
  link: "M14 4h6v6 M20 4l-9 9 M10 4H5v15h15v-5",
  x: "M6 6l12 12 M18 6L6 18",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  alert: "M12 3l9 16H3z M12 10v4 M12 17h.01",
  gov: "M4 9l8-5 8 5 M5 9v10h14V9 M9 19v-6h6v6",
  edit: "M4 20h4l11-11-4-4L4 16z",
  download: "M12 4v11 M8 11l4 4 4-4 M5 20h14",
  refresh: "M4 12a8 8 0 0114-5l2 2 M20 12a8 8 0 01-14 5l-2-2 M18 4v5h-5 M6 20v-5h5",
  sliders: "M4 8h10 M18 8h2 M4 16h2 M10 16h10 M14 6v4 M6 14v4",
  spark: "M12 3l2.2 6.3L21 11l-6 2 .7 7-3.7-5.8L8 21l1-7-6-2 6.6-1.7z",
  chev: "M6 9l6 6 6-6"
};
function Icon({ n, s = 18, sw = 2, fill = false }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {ICONS[n].split(" M").map((d, i) => <path key={i} d={(i ? "M" : "") + d} />)}
    </svg>
  );
}

/* ---- logomarca: traço de "vereda" (trilha) ---- */
function Mark({ s = 31, dark = false }) {
  return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#15795a" />
      <path d="M7 23c3-1 4.5-4 6-8s3.5-7 6-8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M12 24c2.2-.7 3.3-2.6 4.4-5.4" stroke="#7fd0ac" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/* ---- parser: **negrito** + {n|fonte} citações clicáveis ---- */
function parseRich(text, onCite, activeSrc) {
  const parts = [];
  const re = /\*\*(.+?)\*\*|\{(\d+)\|([a-z]+)\}/g;
  let last = 0, m, key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      parts.push(<b key={key++}>{m[1]}</b>);
    } else {
      const n = m[2], src = m[3];
      parts.push(
        <sup key={key++} className={"cite" + (activeSrc === src ? " on" : "")}
          onClick={(e) => { e.stopPropagation(); onCite && onCite(src, n); }}>{n}</sup>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/* ---- gráfico de banda de confiança ---- */
function ConfBandChart({ chart }) {
  return (
    <div className="chartbox">
      <div className="clab"><span>{chart.labelL}</span><span>{chart.labelR}</span></div>
      <svg height="92" viewBox="0 0 260 92" preserveAspectRatio="none">
        <defs>
          <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#15795a" stopOpacity=".16" />
            <stop offset="1" stopColor="#15795a" stopOpacity=".02" />
          </linearGradient>
        </defs>
        <line x1="0" y1="23" x2="260" y2="23" stroke="#eef1ef" />
        <line x1="0" y1="46" x2="260" y2="46" stroke="#eef1ef" />
        <line x1="0" y1="69" x2="260" y2="69" stroke="#eef1ef" />
        <path d={chart.bandPath} fill="url(#band)" />
        <path d={chart.linePath} stroke="#15795a" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeDasharray="3 3" />
        <path d={chart.histPath} stroke="#16201b" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <circle cx={chart.dot.x} cy={chart.dot.y} r="3" fill="#16201b" />
        <text x={chart.dot.x + 4} y={chart.dot.y - 8} fontSize="9" fill="#8b9690" fontFamily="Hanken Grotesk">{chart.dotLabel}</text>
      </svg>
      <div className="legend">
        <span><i style={{ background: "#16201b" }}></i>realizado</span>
        <span><i style={{ background: "#15795a" }}></i>projetado</span>
        <span><i style={{ background: "#c9e4d8" }}></i>banda 65–80%</span>
      </div>
    </div>
  );
}

/* ---- renderiza os blocos de uma resposta da IA ---- */
function AIBlocks({ blocks, onCite, activeSrc }) {
  const rich = (t) => parseRich(t, onCite, activeSrc);
  return blocks.map((b, i) => {
    switch (b.t) {
      case "p":
        return <p key={i}>{rich(b.text)}</p>;
      case "pillar":
        return (
          <div className="pillar" key={i}>
            <span className="k">{b.k}</span>
            <div>{rich(b.text)}</div>
          </div>
        );
      case "reco":
        return (
          <div className="reco" key={i}>
            <div className="reco-top">
              <div className="rh"><Icon n="spark" s={14} fill /> Recomendação preliminar</div>
              <div className="rt">{rich(b.rt)}</div>
            </div>
            <div className="chartwrap">
              <ConfBandChart chart={b.chart} />
              <div className="drivers">
                <div className="dlab">Peso dos drivers</div>
                {b.drivers.map((d, j) => (
                  <div className="drv" key={j}>
                    <div className="dn"><span>{d.n}</span><b>{d.v}</b></div>
                    <div className={"bar" + (d.up ? " up" : "")}><i style={{ width: d.w + "%" }}></i></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="conf">
              Banda de confiança <b>{b.conf.band}</b> · {b.conf.note}
              <span className={"pill " + b.conf.pillClass}>{b.conf.pill}</span>
            </div>
          </div>
        );
      case "recalc":
        return (
          <div className="recalc" key={i}>
            <span style={{ color: "var(--green)", display: "inline-flex" }}><Icon n="check" s={16} /></span>
            {b.text}
          </div>
        );
      case "delta":
        return (
          <div className="delta" key={i}>
            {b.rows.map((r, j) => (
              <div className="delta-row" key={j}>
                <div className="dl">{rich(r.label)}</div>
                <div className="arrow">
                  <span className="from">{r.from}</span>
                  <Icon n="arrow" s={14} />
                  <span className={"to" + (r.toGood ? " good" : "")}>{r.to}</span>
                </div>
              </div>
            ))}
          </div>
        );
      case "list":
        return (
          <ul className="op-list" key={i} style={{ margin: "10px 0" }}>
            {b.items.map((it, j) => (
              <li key={j}><span className="lk">{it.k}</span><span>{rich(it.text)}</span></li>
            ))}
          </ul>
        );
      case "producers":
        return (
          <div key={i} style={{ margin: "10px 0", border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }}>
            {b.rows.map((r, j) => (
              <div key={j} style={{
                display: "grid", gridTemplateColumns: "1fr auto auto auto",
                gap: 12, alignItems: "center", padding: "10px 14px",
                borderBottom: j < b.rows.length - 1 ? "1px solid var(--line-soft)" : "none",
                fontSize: 12.5, background: j % 2 ? "#fcfdfc" : "#fff"
              }}>
                <span style={{ fontWeight: 700, color: "var(--ink)" }}>{r.nm}</span>
                <span style={{ color: "var(--ink-soft)" }}>{r.vol}</span>
                <span style={{ color: "var(--ink-soft)" }}>conc. {r.dep}</span>
                <span style={{
                  fontWeight: 700, fontSize: 11, padding: "2px 8px", borderRadius: 999,
                  color: r.risk === "alto" ? "var(--warn)" : "var(--ink-soft)",
                  background: r.risk === "alto" ? "var(--warn-soft)" : "#eef1ef"
                }}>CCS {r.ccs}</span>
              </div>
            ))}
          </div>
        );
      case "note":
        return (
          <div className="note-box" key={i}>
            <span className="nk">{b.title}</span>{rich(b.text)}
          </div>
        );
      case "conf-line":
        return (
          <div className="conf" key={i} style={{ border: "1px solid var(--line)", borderRadius: 11, marginTop: 6 }}>
            Banda de confiança <b>{b.band}</b> · {b.note}
            <span className={"pill " + (b.band === "alta" ? "ok" : "warn")}>{b.band === "alta" ? "sinal estável" : "incerteza ampliada"}</span>
          </div>
        );
      default:
        return null;
    }
  });
}

/* ---- mini-série para o painel de fonte (item 5) ---- */
function MiniSeries({ series }) {
  const pts = series.pts, w = 300, h = 56, pad = 5;
  const min = Math.min(...pts), max = Math.max(...pts), rng = (max - min) || 1;
  const step = (w - pad * 2) / (pts.length - 1);
  const xy = pts.map((v, i) => [pad + i * step, h - pad - ((v - min) / rng) * (h - pad * 2)]);
  const line = xy.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const area = line + ` L${(w - pad).toFixed(1)} ${h - pad} L${pad} ${h - pad} Z`;
  return (
    <div className="minichart">
      <div className="mc-head"><span>{series.label}</span><b>{series.val}</b></div>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" height="56" style={{ width: "100%" }}>
        <defs><linearGradient id="ms" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#15795a" stopOpacity=".18" /><stop offset="1" stopColor="#15795a" stopOpacity="0" />
        </linearGradient></defs>
        <path d={area} fill="url(#ms)" />
        <path d={line} fill="none" stroke="#15795a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={xy[xy.length - 1][0]} cy={xy[xy.length - 1][1]} r="3" fill="#15795a" />
      </svg>
    </div>
  );
}

/* ---- streaming por token (item 2) ---- */
function tokenizeRich(text) {
  const toks = []; const re = /\*\*(.+?)\*\*|\{(\d+)\|([a-z]+)\}/g; let last = 0, m;
  const pushText = (str) => str.split(/(\s+)/).forEach(w => { if (w !== "") toks.push({ t: "t", v: w }); });
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) pushText(text.slice(last, m.index));
    if (m[1] !== undefined) toks.push({ t: "b", v: m[1] });
    else toks.push({ t: "c", n: m[2], src: m[3] });
    last = re.lastIndex;
  }
  if (last < text.length) pushText(text.slice(last));
  return toks;
}
function renderTokens(tokens, count, onCite, activeSrc) {
  const out = [];
  for (let i = 0; i < count && i < tokens.length; i++) {
    const t = tokens[i];
    if (t.t === "t") out.push(<React.Fragment key={i}>{t.v}</React.Fragment>);
    else if (t.t === "b") out.push(<b key={i}>{t.v}</b>);
    else out.push(<sup key={i} className={"cite" + (activeSrc === t.src ? " on" : "")}
      onClick={(e) => { e.stopPropagation(); onCite && onCite(t.src, t.n); }}>{t.n}</sup>);
  }
  return out;
}
function StreamingBlocks({ blocks, onCite, activeSrc, onDone }) {
  const plan = useMemo(() => {
    let offset = 0;
    return blocks.map(b => {
      const isText = b.t === "p" || b.t === "pillar";
      const tokens = isText ? tokenizeRich(b.text) : null;
      const units = isText ? Math.max(1, tokens.length) : 1;
      const start = offset; offset += units;
      return { b, isText, tokens, units, start };
    });
  }, [blocks]);
  const total = plan.reduce((s, p) => s + p.units, 0);
  const [prog, setProg] = useState(0);
  useEffect(() => {
    if (prog >= total) { const t = setTimeout(() => onDone && onDone(), 140); return () => clearTimeout(t); }
    const cur = plan.find(p => prog >= p.start && prog < p.start + p.units);
    const atomicStart = cur && !cur.isText && prog === cur.start;
    const id = setTimeout(() => setProg(p => p + 1), atomicStart ? 380 : 22);
    return () => clearTimeout(id);
  }, [prog, total]);

  return plan.map((p, i) => {
    const revealed = prog - p.start;
    if (revealed <= 0) return null;
    if (p.isText) {
      const cnt = Math.min(revealed, p.units);
      const nodes = renderTokens(p.tokens, cnt, onCite, activeSrc);
      const streaming = cnt < p.units;
      if (p.b.t === "pillar")
        return <div className="pillar" key={i}><span className="k">{p.b.k}</span><div>{nodes}{streaming && <span className="caret"></span>}</div></div>;
      return <p key={i}>{nodes}{streaming && <span className="caret"></span>}</p>;
    }
    return <div className="fade-in" key={i}><AIBlocks blocks={[p.b]} onCite={onCite} activeSrc={activeSrc} /></div>;
  });
}

/* ---- pensamento emergente (estilo Claude/ChatGPT): pensa → age → pensa ---- */
function thinkingEvents(aiBase) {
  const S = window.VEREDA.sources;
  if (aiBase && aiBase.reasoning) {
    return aiBase.reasoning.map(e => {
      if (e.tool) return { kind: "tool", label: S[e.tool] ? S[e.tool].org : e.tool, detail: S[e.tool] ? S[e.tool].kind : "", say: e.say, src: e.tool };
      if (e.model) return { kind: "model", label: e.model, say: e.say };
      return { kind: "thought", say: e.say || e.t };
    });
  }
  const t = aiBase ? window.VEREDA.trails[aiBase.trail] : null;
  const ev = [{ kind: "thought", say: "Entendendo o pedido e decidindo por onde começar." }];
  if (t) {
    t.sources.forEach(s => ev.push({ kind: "tool", label: s.o, detail: s.c, say: "Consultando " + s.o + ".", src: s.id }));
    t.models.forEach(m => ev.push({ kind: "model", label: m.nm + " · " + m.ver, say: "Rodando o modelo." }));
  }
  ev.push({ kind: "thought", say: "Sintetizando a resposta." });
  return ev;
}

/* visão ao vivo — o raciocínio se desenrolando */
function ThinkingStream({ aiBase, onComplete }) {
  const events = useMemo(() => thinkingEvents(aiBase), [aiBase]);
  const [step, setStep] = useState(0);     // nº de eventos revelados
  const [running, setRunning] = useState(false);
  const [el, setEl] = useState(0);
  const start = useRef(Date.now());

  useEffect(() => {
    const iv = setInterval(() => setEl(((Date.now() - start.current) / 1000)), 100);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (step >= events.length) {
      const id = setTimeout(() => onComplete && onComplete(Math.max(1, Math.round((Date.now() - start.current) / 1000))), 450);
      return () => clearTimeout(id);
    }
    const ev = events[step];
    let t1, t2;
    if (ev.kind === "tool" || ev.kind === "model") {
      setRunning(true);
      t1 = setTimeout(() => setRunning(false), 620);
      t2 = setTimeout(() => setStep(s => s + 1), 1180);
    } else {
      t2 = setTimeout(() => setStep(s => s + 1), 780);
    }
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [step, events.length]);

  return (
    <div className="thinking">
      <div className="thinking-head"><span className="th-pulse"></span>Pensando<span className="th-el">· {el.toFixed(0)}s</span></div>
      <div className="thinking-body">
        {events.slice(0, step + 1).map((ev, i) => {
          if (i > step) return null;
          const latest = i === step;
          const isCall = ev.kind === "tool" || ev.kind === "model";
          return (
            <div className="t-line fade-in" key={i}>
              {ev.say && <div className="t-say">{ev.say}</div>}
              {isCall && (
                <div className="t-call">
                  <span className="t-cic">{latest && running ? <span className="aspin"></span> : <Icon n="check" s={12} />}</span>
                  <span className="t-cverb">{ev.kind === "tool" ? "consultando" : "executando"}</span>
                  <span className="t-clabel">{ev.label}</span>
                  {ev.detail && <span className="t-cdetail">{ev.detail}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* disclosure colapsável na resposta publicada — "Pensou por Ns", auditável se quiser */
function ThoughtTrace({ aiBase, secs, onCite }) {
  const [open, setOpen] = useState(false);
  const events = useMemo(() => thinkingEvents(aiBase), [aiBase]);
  const nF = events.filter(e => e.kind === "tool").length;
  const nM = events.filter(e => e.kind === "model").length;
  return (
    <div className={"thought" + (open ? " open" : "")}>
      <button className="thought-head" onClick={() => setOpen(o => !o)}>
        <Icon n="check" s={13} />
        <span className="th-t">Pensou por {secs}s</span>
        <span className="th-meta">· {nF} {nF === 1 ? "fonte" : "fontes"}{nM ? " · " + nM + (nM === 1 ? " modelo" : " modelos") : ""}</span>
        <span className="th-chev"><Icon n="chev" s={15} /></span>
      </button>
      {open && (
        <div className="thought-body">
          {events.map((ev, i) => (
            <div className="t-line" key={i}>
              {ev.say && <div className="t-say">{ev.say}</div>}
              {(ev.kind === "tool" || ev.kind === "model") && (
                <div className={"t-call" + (ev.src ? " clickable" : "")} onClick={() => ev.src && onCite && onCite(ev.src, "•")}>
                  <span className="t-cic"><Icon n="check" s={12} /></span>
                  <span className="t-cverb">{ev.kind === "tool" ? "consultou" : "executou"}</span>
                  <span className="t-clabel">{ev.label}</span>
                  {ev.detail && <span className="t-cdetail">{ev.detail}</span>}
                  {ev.src && <span className="t-cgo">abrir ↗</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { parseRich, Icon, Mark, ConfBandChart, AIBlocks, MiniSeries, StreamingBlocks, ThinkingStream, ThoughtTrace, thinkingEvents });
