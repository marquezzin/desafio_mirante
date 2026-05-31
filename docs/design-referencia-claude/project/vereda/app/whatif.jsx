/* ===========================================================
   Vereda — whatif.jsx  ·  Simulador de cenário (item 1)
   Motor: scoring de risco re-executado com inputs perturbados.
   =========================================================== */

function computeScenario(inp) {
  const base = window.VEREDA.simulator.base;
  const tChuva = (base.chuva - inp.chuva) * 0.25;   // mais seco → risco sobe
  const tMilho = (inp.milho - base.milho) * 0.40;   // milho acima de hoje → custo sobe
  const tBonif = inp.bonif * 3.25;                  // bonificação concorrente → risco de perda
  const tDolar = (inp.dolar - base.dolar) * 5.0;    // câmbio → custo de insumo
  let risk = 18 + tChuva + tMilho + tBonif + tDolar;
  risk = Math.max(5, Math.min(78, risk));

  const a = { cl: Math.abs(tChuva), cu: Math.abs(tMilho), co: Math.abs(tBonif), ca: Math.abs(tDolar) };
  const sum = a.cl + a.cu + a.co + a.ca;
  let drivers;
  if (sum < 1.2) {
    drivers = [{ n: "Clima", w: 38 }, { n: "Custo (milho)", w: 27 }, { n: "Competitivo", w: 21 }, { n: "Câmbio", w: 14 }];
  } else {
    drivers = [
      { n: "Clima", w: Math.round(a.cl / sum * 100) },
      { n: "Custo (milho)", w: Math.round(a.cu / sum * 100) },
      { n: "Competitivo", w: Math.round(a.co / sum * 100) },
      { n: "Câmbio", w: Math.round(a.ca / sum * 100) }
    ];
  }
  const dev = sum;
  const width = Math.round(12 + Math.min(20, dev * 0.7));
  const center = Math.round(70 - Math.min(14, dev * 0.5));
  const low = Math.max(35, center - Math.round(width / 2));
  const high = Math.min(92, center + Math.round(width / 2));
  const premium = Math.max(0, 5.1 - inp.bonif * 0.7).toFixed(1);
  return { risk: Math.round(risk), drivers, low, high, premium };
}

function buildScenarioMessage(inp, res) {
  const S = window.VEREDA.simulator;
  const fmt = (k) => S.sliders.find(s => s.key === k).fmt;
  const riskGood = res.risk < 20;
  return {
    id: "m-scenario", who: "ai", meta: "· what-if · scoring de risco v2.1",
    reasoning: [
      { say: "Cenário montado no simulador. Vejo o que cada alavanca faz no risco de perda." },
      { say: "Contratos e bonificação vigente pra base de comparação.", tool: "sap" },
      { say: "Re-rodo o scoring com os inputs perturbados que você escolheu.", model: "Scoring de risco de perda · v2.1" },
      { say: "Recalculando risco, prêmio relativo e a banda — que alarga com a extremidade do cenário." }
    ],
    blocks: [
      { t: "recalc", text: `Recalculei com chuva ${fmt("chuva")(inp.chuva)}, milho ${fmt("milho")(inp.milho)}, bonificação concorrente ${fmt("bonif")(inp.bonif)} e dólar ${fmt("dolar")(inp.dolar)}.` },
      { t: "delta", rows: [
        { label: "Risco de perda nos top 12", from: "18%", to: res.risk + "%", toGood: riskGood },
        { label: "Prêmio relativo vs. Itambé", from: "+5,1 pts", to: "+" + res.premium + " pts", toGood: parseFloat(res.premium) >= 4 }
      ] },
      { t: "p", text: `**Drivers reordenados:** ${res.drivers.map(d => d.n + " " + d.w + "%").join(" · ")}. Modelo: **scoring de risco v2.1** re-executado com os inputs perturbados.` },
      { t: "conf-line", band: res.low + "–" + res.high + "%", note: "cenário hipotético — a incerteza cresce com o quanto você afasta do base" }
    ],
    actions: ["trail", "onepager"],
    trail: "whatif",
    decisionable: true,
    recLabel: `Cenário simulado · risco ${res.risk}% nos top 12`
  };
}

function SimulatorPanel({ open, onClose, onRegister }) {
  const S = window.VEREDA.simulator;
  const [inp, setInp] = useState({ ...S.base });
  const res = computeScenario(inp);
  const set = (k, v) => setInp(p => ({ ...p, [k]: parseFloat(v) }));
  const reset = () => setInp({ ...S.base });

  const riskClass = res.risk < 20 ? "good" : res.risk <= 30 ? "warn" : "bad";
  const riskColor = res.risk < 20 ? "var(--good)" : res.risk <= 30 ? "var(--warn)" : "var(--bad)";

  return (
    <React.Fragment>
      <div className={"scrim" + (open ? " on" : "")} onClick={onClose}></div>
      <div className={"trail sim" + (open ? " on" : "")}>
        <div className="trail-top">
          <div className="ti">
            <div className="te" style={{ display: "flex", alignItems: "center", gap: 7 }}><Icon n="sliders" s={14} />Simulador de cenário</div>
            <h3>E se…?</h3>
            <p>Mexa nas alavancas — o modelo de risco recalcula na hora.</p>
          </div>
          <button className="x" onClick={onClose}><Icon n="x" s={18} /></button>
        </div>
        <div className="trail-body">
          <div className="sliders">
            {S.sliders.map(sl => {
              const pct = (inp[sl.key] - sl.min) / (sl.max - sl.min) * 100;
              const moved = Math.abs(inp[sl.key] - S.base[sl.key]) > 0.001;
              return (
                <div className="slider" key={sl.key}>
                  <div className="sl-top">
                    <span className="sl-lab">{sl.label}</span>
                    <span className={"sl-val" + (moved ? " moved" : "")}>{sl.fmt(inp[sl.key])}</span>
                  </div>
                  <input type="range" min={sl.min} max={sl.max} step={sl.step} value={inp[sl.key]}
                    style={{ "--pct": pct + "%" }} onChange={e => set(sl.key, e.target.value)} />
                  <div className="sl-base">base: {sl.fmt(S.base[sl.key])}</div>
                </div>
              );
            })}
          </div>

          <div className="sim-result">
            <div className="sr-head">Resultado recalculado</div>
            <div className="sr-risk">
              <div>
                <div className="srk-lab">Risco de perda · top 12</div>
                <div className="srk-val" style={{ color: riskColor }}>{res.risk}%</div>
              </div>
              <span className={"srk-pill " + riskClass}>
                {res.risk < 20 ? "sob controle" : res.risk <= 30 ? "atenção" : "crítico"}
              </span>
            </div>
            <div className="risk-track">
              <div className="rt-fill" style={{ width: Math.min(100, res.risk / 50 * 100) + "%", background: riskColor }}></div>
              <div className="rt-mark" style={{ left: 40 + "%" }}><span>limite 20%</span></div>
            </div>

            <div className="sr-sub">
              <div className="srs"><span className="k">Banda de confiança</span><b>{res.low}–{res.high}%</b></div>
              <div className="srs"><span className="k">Prêmio vs. Itambé</span><b>+{res.premium} pts</b></div>
            </div>

            <div className="sr-drivers">
              <div className="dlab">Peso dos drivers (recalculado)</div>
              {res.drivers.map((d, i) => (
                <div className="drv" key={i}>
                  <div className="dn"><span>{d.n}</span><b>{d.w}%</b></div>
                  <div className="bar"><i style={{ width: d.w + "%" }}></i></div>
                </div>
              ))}
            </div>
          </div>

          <div className="sim-foot">
            <button className="btn" onClick={reset}><Icon n="refresh" s={14} />Resetar ao base</button>
            <button className="btn key" onClick={() => { onRegister(inp, res); onClose(); }}>
              <Icon n="arrow" s={14} />Registrar no chat
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { computeScenario, buildScenarioMessage, SimulatorPanel });
