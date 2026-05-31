/* =====================================================================
   VEREDA · MOTOR DE SIMULAÇÃO (determinístico, no front)
   Não há inferência real — é uma função coerente que finge o output
   de um ensemble SARIMAX + LightGBM por região leiteira.
   ===================================================================== */

function recalcular({ cambio, milho, enso, mercosulProb }){
  const dCambio   = (cambio - 5.40) * 0.08;
  const dMilho    = (milho / 100) * 0.10;
  const dEnso     = enso === 'La Niña' ? +0.02 : enso === 'El Niño' ? -0.015 : 0;
  const dMercosul = ((mercosulProb - 30) / 100) * -0.03;
  const forecast = +(0.06 + dCambio + dMilho + dEnso + dMercosul).toFixed(3);
  const delta    = +(forecast - 0.06).toFixed(3);
  const shap = {
    'Econômico':    +(0.02 + dCambio + dMilho).toFixed(3),
    'Climático':    +(0.04 + dEnso).toFixed(3),
    'Político':     +(0.00 + dMercosul).toFixed(3),
    'Agropecuário': +0.01,
  };
  const extremo = Math.abs(delta) > 0.07
    || (cambio > 6.00 && enso === 'La Niña')
    || (cambio < 5.00 && mercosulProb > 70);
  return { forecast, delta, shap, extremo };
}

/* Formatters --------------------------------------------------------- */
const fmtR     = (v) => (v>=0?'+':'−') + 'R$ ' + Math.abs(v).toFixed(2).replace('.',',');
const fmtRsign = (v) => (v>0?'+':v<0?'−':'')  + 'R$ ' + Math.abs(v).toFixed(2).replace('.',',');

const HOJE = '30/05/2026';
