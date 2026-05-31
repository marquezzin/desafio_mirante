/* =====================================================================
   VEREDA · MOTOR DE SIMULAÇÃO (determinístico, no front)
   Não há inferência real — é uma função coerente que finge o output
   de um ensemble SARIMAX + LightGBM por região leiteira.
   ===================================================================== */

function recalcular({ cambio, milho, enso, mercosulProb }, base){
  // base opcional — { q2: 0.06, pilares: { P:0, E:.02, C:.04, A:.01 } }
  // Sem base = comportamento histórico (Zona da Mata).
  const b = base || { q2:0.06, pilares:{ P:0.00, E:0.02, C:0.04, A:0.01 } };
  const dCambio   = (cambio - 5.40) * 0.08;
  const dMilho    = (milho / 100) * 0.10;
  const dEnso     = enso === 'La Niña' ? +0.02 : enso === 'El Niño' ? -0.015 : 0;
  const dMercosul = ((mercosulProb - 30) / 100) * -0.03;
  const forecast = +(b.q2 + dCambio + dMilho + dEnso + dMercosul).toFixed(3);
  const delta    = +(forecast - b.q2).toFixed(3);
  const shap = {
    'Econômico':    +((b.pilares.E||0) + dCambio + dMilho).toFixed(3),
    'Climático':    +((b.pilares.C||0) + dEnso).toFixed(3),
    'Político':     +((b.pilares.P||0) + dMercosul).toFixed(3),
    'Agropecuário': +(b.pilares.A||0).toFixed(3),
  };
  const extremo = Math.abs(delta) > 0.07
    || (cambio > 6.00 && enso === 'La Niña')
    || (cambio < 5.00 && mercosulProb > 70);
  return { forecast, delta, shap, extremo, baseQ2:b.q2 };
}

/* Formatters --------------------------------------------------------- */
const fmtR     = (v) => (v>=0?'+':'−') + 'R$ ' + Math.abs(v).toFixed(2).replace('.',',');
const fmtRsign = (v) => (v>0?'+':v<0?'−':'')  + 'R$ ' + Math.abs(v).toFixed(2).replace('.',',');

const HOJE = '30/05/2026';
