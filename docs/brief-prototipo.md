# Brief de construção do protótipo — Vereda

> **Como usar:** este documento é um *prompt autocontido*. Cole o conteúdo inteiro (do `═══ INÍCIO DO PROMPT ═══` em diante) no Claude (modo design / artifacts) para gerar o protótipo. Ele não depende de nenhum outro arquivo do repo — todas as decisões, dados e regras de interação estão aqui dentro.
>
> Fonte das decisões: `docs/lean-inception/07-canvas-mvp.md` (contrato de escopo) + `06-sequenciador-mvp.md` + `01-visao-produto.md`. Se algo divergir, o Canvas MVP manda.

---

═══════════════════════════════ INÍCIO DO PROMPT ═══════════════════════════════

# Construa um protótipo de produto: **Vereda**

Você vai construir um **protótipo navegável e interativo** de uma plataforma de IA chamada **Vereda**, para uma indústria de laticínios brasileira. É um protótipo de demonstração — a "inteligência" é **simulada no front-end** (funções JS com dados mockados fingindo o output de um modelo). **Não há backend, não há inferência real.** O objetivo é fazer o avaliador *sentir* a experiência do produto em 5–10 minutos de navegação.

## 1. Formato técnico (obrigatório)

- **Um único arquivo HTML autocontido** (`index.html`), sem build step.
- **Tailwind CSS via CDN** (`<script src="https://cdn.tailwindcss.com"></script>`).
- **Alpine.js via CDN** para reatividade e navegação (`x-data`, `x-model`, `x-show`, `x-for`).
- **Chart.js via CDN** para gráficos (barras SHAP, linhas de forecast com banda, sparklines).
- **Todos os dados mockados embutidos como objetos JS** no próprio arquivo (seção 5 abaixo). Sem fetch de JSON externo.
- **SPA leve:** uma única página, navegação entre "telas" via `x-show` / estado Alpine (`tela: 'painel'`). Troca instantânea, sem reload.
- **Responsivo** o suficiente para abrir bem em desktop (alvo principal: avaliador no notebook). Mobile não é prioridade.
- Português do Brasil em toda a interface.

## 2. O produto, em 3 parágrafos (contexto pra você entender o tom)

**A virada da perecibilidade.** Leite cru não se estoca nem permite "esperar o preço cair". Por isso o Vereda **NÃO** é previsor de "comprar ou esperar" e **NÃO** é ferramenta de hedge financeiro. Ele apoia a **estratégia trimestral de captação**: como alocar volume entre bacias, quando antecipar negociação de cláusula com cooperativa, onde há risco de perder produtor para concorrente. O ganho é capturar centavos de spread no preço pago vs. a referência CEPEA, antecipando o ciclo safra→entressafra antes da janela apertar.

**Os 4 pilares.** Toda recomendação cruza preditivamente 4 pilares: **Político** (P), **Econômico** (E), **Climático** (C), **Agropecuário** (A). Eles precisam aparecer *literalmente visíveis* na interface (barras SHAP na tela de recomendação; sliders no simulador).

**Honestidade de incerteza é feature, não ressalva.** Banda de confiança em todo forecast, taxa de acerto histórica exposta na cara (não escondida), alerta explícito quando o modelo não tem sinal claro, drivers explicáveis por pilar. O usuário primário (Anderson, gerente de captação) é tratado como **co-dono**: aceita, ajusta ou recusa recomendações com justificativa, e o sistema aprende com a discordância. Isso é o que separa o Vereda de uma "caixa-preta que promete o futuro".

## 3. Personas e nomes na interface (fictícios, dados mockados)

- Usuário logado: **Anderson Toledo**, Gerente de Captação.
- Sponsor/diretora citada na governance: **Patrícia Linhares**, Diretora de Suprimentos.
- Bacias reais brasileiras (nomes geográficos verdadeiros, dados fictícios): **Zona da Mata (MG)**, **Triângulo Mineiro (MG)**, **Sul de Minas (MG)**, **Sul de Goiás (GO)**, **Norte do Paraná (PR)**.
- Cooperativa: **Itambé**. Concorrentes citados: **Italac, Piracanjuba, Embaré**.
- **Rodapé discreto na tela "Por que esta solução":** "Protótipo de demonstração. Personas (Anderson Toledo, Patrícia Linhares) e dados são fictícios; fontes de dado citadas são reais."

## 4. Tom visual

- **Sóbrio, institucional, confiável** — é uma ferramenta de decisão para diretoria de indústria, não um app de consumo colorido. Pense em ferramenta financeira/agro séria.
- Paleta: base neutra (cinzas/off-white), um verde profundo como cor de marca (remete a "vereda"/campo), e **semáforo funcional** para sinais: verde (`emerald`), amarelo/âmbar (`amber`), vermelho (`red`).
- Tipografia limpa, boa hierarquia, números com destaque (são o produto).
- **Banda de confiança e alertas de incerteza devem ser visualmente proeminentes**, não letrinha de rodapé — é ponto-chave do produto.
- Logo simples: um hexágono/símbolo + "VEREDA" em maiúsculas no topo.

## 5. O "mundo" de dados mockados (use exatamente estes — são internamente coerentes entre as telas)

> Crítico: a recomendação da Tela 2 tem que bater com o forecast da Tela 1 e com o acerto da Tela 6. É o mesmo mundo. Use os valores abaixo.

### 5.1 Bacias (Tela 1 — painel)

```js
const BACIAS = [
  {
    id: 'zona-mata', nome: 'Zona da Mata', uf: 'MG', unidade: 'MG',
    semaforo: 'verde', // forecast spread favorável
    forecast: { q1: +0.05, q2: +0.06, q3: +0.04 }, // R$/litro vs CEPEA
    banda: 0.03,        // ± R$/litro (banda estreita = sinal claro)
    acerto2T: 72,       // %
    pilares: { P: 0.00, E: +0.02, C: +0.04, A: +0.01 }, // contribuição R$/litro
    sinalClaro: true
  },
  {
    id: 'triangulo', nome: 'Triângulo Mineiro', uf: 'MG', unidade: 'MG',
    semaforo: 'amarelo',
    forecast: { q1: +0.02, q2: +0.01, q3: -0.01 },
    banda: 0.07,        // banda larga → modelo sem sinal claro
    acerto2T: 51,
    pilares: { P: -0.01, E: +0.02, C: -0.02, A: +0.01 },
    sinalClaro: false   // dispara alerta "modelo sem sinal claro"
  },
  {
    id: 'sul-minas', nome: 'Sul de Minas', uf: 'MG', unidade: 'MG',
    semaforo: 'verde',
    forecast: { q1: +0.03, q2: +0.04, q3: +0.03 },
    banda: 0.035, acerto2T: 69,
    pilares: { P: 0.00, E: +0.01, C: +0.03, A: 0.00 },
    sinalClaro: true
  },
  {
    id: 'sul-goias', nome: 'Sul de Goiás', uf: 'GO', unidade: 'GO',
    semaforo: 'vermelho', // pressão de custo
    forecast: { q1: -0.04, q2: -0.05, q3: -0.03 },
    banda: 0.04, acerto2T: 68,
    pilares: { P: -0.01, E: -0.04, C: +0.01, A: -0.01 },
    sinalClaro: true
  },
  {
    id: 'norte-pr', nome: 'Norte do Paraná', uf: 'PR', unidade: 'PR',
    semaforo: 'amarelo',
    forecast: { q1: +0.01, q2: +0.02, q3: +0.02 },
    banda: 0.05, acerto2T: 58,
    pilares: { P: 0.00, E: +0.02, C: 0.00, A: 0.00 },
    sinalClaro: true
  }
];
```

Comparação com terceiro (mockar 1 instância no painel): *"Rabobank projeta -2% no 2º semestre; Vereda diverge para Zona da Mata (+R$0,02). Ver auditoria → acerto em divergência."*

### 5.2 Recomendação — foco em Zona da Mata (Tela 2)

```js
const RECOMENDACAO_ZONA_MATA = {
  alavanca: 'Antecipe a revisão de cláusula de banda com a Itambé nos próximos 30 dias e priorize alocação de volume nesta bacia.',
  prob: 70, // %
  spreadMin: +0.03, spreadMax: +0.07, // R$/litro, banda da probabilidade
  drivers: [
    { pilar: 'Climático',    sigla: 'C', valor: +0.04,
      detalhe: 'Chuva acumulada 18% abaixo da média de 10 anos na geografia da bacia → menor oferta regional projetada no Q3.',
      fonte: 'CHIRPS / NASA POWER' },
    { pilar: 'Econômico',    sigla: 'E', valor: +0.02,
      detalhe: 'Câmbio BRL/USD em 5,40 e milho futuro +3% pressionam custo de produção e sustentam preço doméstico.',
      fonte: 'BCB-SGS / B3 (milho)' },
    { pilar: 'Agropecuário', sigla: 'A', valor: +0.01,
      detalhe: 'Rebanho estável (IBGE PPM); CCS subindo sazonalmente na seca, sinaliza pressão de qualidade.',
      fonte: 'IBGE PPM / laboratório interno' },
    { pilar: 'Político',     sigla: 'P', valor: 0.00, quarentena: true,
      detalhe: 'Alíquota de leite em pó do Mercosul em pauta — SINAL OBSERVADO em quarentena, não entra como driver da recomendação.',
      fonte: 'MAPA / Diário Oficial' }
  ],
  assinatura: { por: 'Anderson Toledo', status: 'pendente', data: null }
};
```

Histórico das últimas 4 recomendações da bacia (Tela 2g + Tela 6):
```js
const HISTORICO_ZONA_MATA = [
  { data: '10/05/2026', alavanca: 'Antecipar cláusula Itambé', decisao: 'Aceito', realizado: +0.05, acertou: true },
  { data: '02/04/2026', alavanca: 'Priorizar alocação Zona da Mata', decisao: 'Aceito', realizado: +0.04, acertou: true },
  { data: '18/02/2026', alavanca: 'Revisar bonificação por qualidade', decisao: 'Ajustado', realizado: +0.02, acertou: true },
  { data: '07/01/2026', alavanca: 'Manter mix atual', decisao: 'Recusado', realizado: -0.01, acertou: false }
];
```

### 5.3 Produtores — risco de churn (Tela 3, DEMO)

```js
const PRODUTORES = [
  { id: 1, nome: 'Sítio Boa Vista',     bacia: 'Zona da Mata', categoria: 'Alto',
    motivo: 'Não bate meta de volume há 2 meses + CCS subindo.', tendencia: 'subindo', sobControle: false },
  { id: 2, nome: 'Fazenda Santa Rita',  bacia: 'Zona da Mata', categoria: 'Atenção',
    motivo: 'Italac ativa na rota; sem revisão de bonificação há 8 meses.', tendencia: 'estável', sobControle: false },
  { id: 3, nome: 'Granja Três Irmãos',  bacia: 'Triângulo',    categoria: 'Atenção',
    motivo: 'Volume oscilando; cooperativa vizinha pagando acima do mercado.', tendencia: 'subindo', sobControle: false },
  { id: 4, nome: 'Sítio Recanto',       bacia: 'Zona da Mata', categoria: 'OK',
    motivo: 'Relação estável, qualidade dentro da meta.', tendencia: 'caindo', sobControle: false },
  { id: 5, nome: 'Laticínio do Vale',   bacia: 'Sul de Minas', categoria: 'OK',
    motivo: 'Contrato vigente, sem sinais de churn.', tendencia: 'estável', sobControle: false }
];
// Alerta de concorrência (crowdsourced interno, NÃO dado externo de volume de concorrente):
const ALERTA_CONCORRENCIA = 'Movimentação da Italac reportada por técnicos de campo em 4 rotas da Zona da Mata. Atenção.';
```

### 5.4 Cooperativa — Itambé (Tela 5, DEMO, embutida na Tela 2 como painel lateral)

```js
const COOPERATIVA_ITAMBE = {
  nome: 'Itambé',
  chuva: 'CHIRPS: 18% abaixo da média de 10 anos na geografia da cooperativa.',
  projecao: 'Produção regional projetada -6% no Q3 (modelo de oferta).',
  secasComparaveis: ['Seca de 2014 (oferta -8%)', 'Seca de 2021 (oferta -5%)'],
  resumoPreConversa: [ // 3-5 bullets, fatos novos, SEM verbo de ação, SEM proposta de número
    'Chuva acumulada na região caiu 18% vs. média de 10 anos.',
    'Projeção de oferta regional -6% no Q3 — pressão de captação à frente.',
    'CCS médio da bacia subindo (sazonal da seca).',
    'Última cláusula de banda negociada há 7 meses.'
  ]
};
```

### 5.5 Auditoria / memória de decisão (Tela 6)

```js
const AUDITORIA = {
  acertoHorizonte: { '1T': 78, '2T': 72, '3T': 61 }, // %
  acertoPilar: { 'Climático': 81, 'Econômico': 68, 'Agropecuário': 74, 'Político': null }, // Político em quarentena
  acertoDivergencia: 64, // % — Vereda vs. Rabobank/Scot, separado da taxa geral
  acertoEmRecusa: { acertos: 3, total: 4 }, // munição do Anderson
  log: [
    { data: '10/05/2026', bacia: 'Zona da Mata', decisao: 'Aceito', por: 'Anderson Toledo', realizado: +0.05, ok: true },
    { data: '02/04/2026', bacia: 'Sul de Goiás', decisao: 'Recusado', justificativa: 'Câmbio vai virar', realizado: -0.03, ok: true, recusaCorreta: true },
    { data: '15/03/2026', bacia: 'Triângulo', decisao: 'Ajustado', justificativa: 'ENSO neutro, não La Niña', realizado: +0.01, ok: true },
    { data: '20/02/2026', bacia: 'Zona da Mata', decisao: 'Aceito', por: 'Anderson Toledo', realizado: +0.04, ok: true }
  ],
  recalibracao: 'O modelo recalibrou o peso da variável "milho futuro" após sua discordância no ciclo de 03/2026.',
  escalonamento: 'Você está em 55% de recusa neste trimestre (recomendações com impacto > R$ X). Quer revisar antes que vire pauta de 1:1?'
};
```

### 5.6 Governance e arquitetura (Tela 8)

```js
const GOVERNANCE = {
  owner: 'Líder de Modelagem de Captação — modelagem@empresa.com.br',
  metrica: 'Acerto geral (por horizonte/bacia/pilar) + acerto em divergência vs. terceiros, ambos expostos na tela de Auditoria.',
  log: 'Cada recomendação registra snapshot dos inputs, versão do modelo, drivers, decisão do Anderson, justificativa e resultado realizado.',
  escalonamento: '>50% de recusa em janela móvel (recomendações com impacto material) → alerta vai para o Anderson primeiro (5 dias úteis para agir) → só depois sobe para 1:1 quinzenal com a Patrícia. Nunca em S&OP coletivo, nunca alerta vermelho público.'
};
const HIPOTESE_IMPACTO = 'Numa bacia-piloto (Zona da Mata mineira), o Vereda captura entre +R$ 0,03 e +R$ 0,08 por litro de spread favorável vs. o preço CEPEA de referência, com 65% de probabilidade, no horizonte de 2 trimestres (1 ciclo pré-entressafra → entressafra).';
const FONTES_REAIS = [
  { nome: 'CEPEA/ESALQ', uso: 'Preço de referência do leite', url: 'https://www.cepea.esalq.usp.br/br/indicador/leite.aspx' },
  { nome: 'BCB-SGS', uso: 'Câmbio, séries econômicas', url: 'https://www3.bcb.gov.br/sgspub/' },
  { nome: 'NASA POWER', uso: 'Dados climáticos por grade ~5km', url: 'https://power.larc.nasa.gov/' },
  { nome: 'CHIRPS', uso: 'Chuva por satélite, atualização diária', url: 'https://www.chc.ucsb.edu/data/chirps' },
  { nome: 'INMET', uso: 'Estações meteorológicas', url: 'https://portal.inmet.gov.br/' },
  { nome: 'CONAB', uso: 'Safra, oferta agrícola', url: 'https://www.conab.gov.br/' },
  { nome: 'IBGE PPM', uso: 'Rebanho, produção pecuária', url: 'https://www.ibge.gov.br/' },
  { nome: 'MAPA', uso: 'Sanitário, tributário, Diário Oficial', url: 'https://www.gov.br/agricultura/' },
  { nome: 'Global Dairy Trade', uso: 'Preço internacional de lácteos', url: 'https://www.globaldairytrade.info/' }
];
```

## 6. O "motor" mock — como o What-if recalcula (determinístico)

A Tela 4 (simulador) tem **4 sliders** representando os 4 pilares. Ao mexer qualquer um, o forecast, a banda, os drivers SHAP e a recomendação recalculam **ao vivo**. Implemente uma função JS determinística (não aleatória). Base = Zona da Mata.

Sliders e pesos (aplicados sobre o forecast Q+2 base de Zona da Mata = +R$0,06):

```js
// estado base
const BASE = { cambio: 5.40, milho: 0, enso: 'Neutro', mercosulProb: 30, forecastBase: 0.06 };

function recalcular({ cambio, milho, enso, mercosulProb }) {
  // Econômico: câmbio mais fraco (BRL desvaloriza) encarece pó importado → sustenta preço doméstico
  const dCambio  = (cambio - 5.40) * 0.08;          // cada +R$0,10 no câmbio → +R$0,008
  // Econômico: milho futuro sobe → custo de produção sobe, oferta cai → preço sobe
  const dMilho   = (milho / 100) * 0.10;            // +10% milho → +R$0,010
  // Climático: ENSO
  const dEnso    = enso === 'La Niña' ? +0.02 : enso === 'El Niño' ? -0.015 : 0;
  // Político: maior prob. de alíquota/cota Mercosul → mais pó importado disponível → preço cai
  const dMercosul = ((mercosulProb - 30) / 100) * -0.03; // +50pp → -R$0,015

  const forecast = +(0.06 + dCambio + dMilho + dEnso + dMercosul).toFixed(3);
  const delta = +(forecast - 0.06).toFixed(3);

  // SHAP recalculado por pilar (contribuição de cada pilar ao forecast simulado)
  const shap = {
    'Econômico':    +(0.02 + dCambio + dMilho).toFixed(3),
    'Climático':    +(0.04 + dEnso).toFixed(3),
    'Político':     +(0.00 + dMercosul).toFixed(3), // sai da quarentena só no simulador exploratório
    'Agropecuário': +0.01
  };

  // Alerta de cenário extremo (antídoto contra "videogame"):
  const extremo = Math.abs(delta) > 0.07               // ultrapassa banda histórica (±0,07 do Triângulo como teto)
    || (cambio > 6.00 && enso === 'La Niña')           // combinação extrema
    || (cambio < 5.00 && mercosulProb > 70);
  return { forecast, delta, shap, extremo };
}
```

Texto LLM (template, marcado "explicação assistida, não auditada") — escolha por maior contribuição:
- se câmbio dominou: *"Dólar mais alto empurra o leite para cima via custo do leite em pó importado."*
- se milho dominou: *"Milho mais caro pressiona o custo de produção e sustenta o preço."*
- se ENSO La Niña: *"La Niña reduz a oferta regional projetada e sustenta o preço."*
- se Mercosul dominou: *"Maior probabilidade de cota Mercosul amplia a oferta de pó importado e pressiona o preço para baixo."*

## 7. Especificação das telas

Navegação no topo (sempre visível): **Painel · Recomendações · What-if · Auditoria · Por que esta solução**. Marca "VEREDA" + "Olá, Anderson Toledo · Captação" + filtro de unidade (MG/GO/PR).

8 telas: **5 CORE** (completas, polidas, interativas) + **3 DEMO** (um exemplo focado, sem variações).

### 🔴 Tela 1 — Painel trimestral por bacia (CORE) — *porta de entrada*
- Grade de **cards de bacia**, um por item de `BACIAS`. Cada card: nome+UF, semáforo (🟢🟡🔴), forecast Q+1/Q+2/Q+3 em R$/litro, **barra de banda de confiança** (estreita=sinal claro, larga=incerto), **mini-sparkline dos 4 pilares** (P/E/C/A), e **"Acerto histórico 2T: X%"** visível no card.
- **Card do Triângulo dispara alerta proeminente** "⚠ MODELO SEM SINAL CLARO — banda larga, decida no relacionamento" (porque `sinalClaro: false`). Esta é uma vitrine central de honestidade de incerteza — destaque visual.
- Filtro por unidade (MG/GO/PR) filtra os cards.
- Uma instância de comparação com Rabobank (texto da seção 5.1) com link "ver auditoria".
- Botão "Ver recomendação →" em cada card leva à Tela 2 daquela bacia.

### 🔴 Tela 2 — Recomendação por bacia (CORE) — *a tela mais importante, polish máximo*
- Cabeçalho: alavanca em linguagem natural (`RECOMENDACAO_ZONA_MATA.alavanca`) + banda de probabilidade ("70% de probabilidade do spread entre +R$0,03 e +R$0,07/litro").
- **Decomposição SHAP: 4 barras horizontais por pilar** (P/E/C/A), com magnitude em R$/litro e sinal (+/–). É aqui que os 4 pilares ficam literalmente visíveis — capriche.
- **Drill-down:** clicar num pilar expande o `detalhe` + **fonte clicável** (link real da seção 5.6).
- Pilar **Político** aparece marcado como **quarentena** (pílula visual distinta: "sinal observado, não driver") com fonte clicável.
- **3 botões:** `Aceitar e assinar` · `Ajustar pressuposto` · `Recusar com justificativa` (textarea obrigatória se recusar).
- **Ajustar pressuposto recalcula ao vivo:** ex. um seletor "ENSO: La Niña → Neutro" que refaz as barras SHAP e o forecast usando o motor da seção 6. (Pode ser um mini-controle que reaproveita `recalcular()`.)
- Ao **Aceitar**, mostra a assinatura nominal: "Aceito por Anderson Toledo · [data de hoje]".
- **Painel da cooperativa embutido:** botão "📎 Ver evidência pra defesa pra cima" abre painel lateral/modal com os dados de `COOPERATIVA_ITAMBE` + o "Resumo pré-conversa" (bullets).
- Histórico das últimas 4 recomendações da bacia (`HISTORICO_ZONA_MATA`) numa lista curta.
- Botão "Exportar drivers pro one-pager" (leva à Tela 7).

### 🔴 Tela 4 — Simulador What-if (CORE) — *interatividade central, polish alto*
- Header com aviso "⚠ uso exploratório interno".
- **4 sliders/controles** (seção 6): câmbio (4,80–6,20), milho futuro (−20%…+20%), ENSO (toggle La Niña/Neutro/El Niño), Mercosul prob (0–100%).
- **Ao mexer qualquer controle**, recalcula em tempo real via `recalcular()`: forecast simulado, **delta vs. base destacado** (▲/▼ em R$/litro), barras SHAP refeitas, banda.
- **Alerta "⚠ Este cenário ultrapassa a banda histórica — combinação extrema, cautela"** quando `extremo === true`. Antídoto contra usar como videogame.
- Texto LLM curto (template da seção 6) marcado visualmente **"explicação assistida, não auditada"**.
- Botão "Salvar cenário" (só visual, sem persistência — pode mostrar um toast "cenário salvo, anexável ao one-pager").

### 🔴 Tela 6 — Auditoria / memória de decisão (CORE)
- **Taxa de acerto por horizonte** (1T/2T/3T) — gráfico ou cards (`AUDITORIA.acertoHorizonte`).
- **Acerto por pilar** (barras) — Político mostra "— (quarentena)", os outros com %. Endereça o briefing ("qual dos 4 pilares erra mais").
- **Acerto em divergência** (Vereda vs. Rabo/Scot): 64%, destacado e separado da taxa geral — é a métrica que defende o produto.
- **Log cronológico** (`AUDITORIA.log`): data, bacia, decisão, realizado, ✓/✗. Destaque a linha de Sul de Goiás: "Você recusou e estava certo" + "Acerto seu em recusa: 3/4" (munição do Anderson).
- Card de **recalibração**: `AUDITORIA.recalibracao` (prova "sparring que aprende").
- Card de **escalonamento**: `AUDITORIA.escalonamento` (55% de recusa, fluxo Anderson-primeiro).
- Filtros visuais (período/bacia/decisor) — podem ser estéticos.

### 🔴 Tela 8 — Por que esta solução (CORE) — *documento de arquitetura embarcado*
- **Abertura: a virada da perecibilidade em 3 linhas** (use o 1º parágrafo da seção 2, condensado).
- **Diagrama de arquitetura** (pode ser CSS/HTML, caixas e setas): `4 PILARES (P/E/C/A) → ingestão (APIs) → feature store → ensemble [SARIMAX + LightGBM] → SHAP → API → front`. Mostre o **LLM político numa caixa lateral marcada "QUARENTENA — sinal observado, não driver"**.
- **Mapa tela → motor real:** T1 painel→forecast SARIMAX; T2 recomendação→LightGBM+SHAP; T4 what-if→recomputo do ensemble; T6 auditoria→backtesting.
- **Fontes reais de dado** com link (`FONTES_REAIS`) — lista clicável.
- **Plano de piloto:** Zona da Mata mineira, 6 meses, métrica de spread R$/litro definida ANTES.
- **Hipótese de impacto** destacada (`HIPOTESE_IMPACTO`).
- **Caixa de GOVERNANCE** proeminente (bloqueador da diretora) com os 4 itens de `GOVERNANCE`: owner, métrica, log auditável, escalonamento.
- **Rodapé com a nota de dados fictícios** (seção 3).

### 🟡 Tela 3 — Risco de churn (DEMO)
- Lista de `PRODUTORES`: nome, bacia, **categoria (Alto/Atenção/OK)** com cor de semáforo, **motivo de 1 linha**, ícone de tendência (subindo/estável/caindo). **Nunca mostrar score numérico** — só categoria.
- **Um produtor com botão "Marcar como sob controle" funcional:** abre modal com textarea opcional (1 linha) + seletor de prazo (30/60/90 dias, default 60); ao confirmar, o card muda de estado ("sob controle até [data]").
- Banner de **alerta de concorrência** (`ALERTA_CONCORRENCIA`) — formato crowdsourced interno.

### 🟡 Tela 5 — Cooperativa (DEMO)
- Não é tela própria: é o **painel lateral/modal embutido na Tela 2** (descrito lá). Use `COOPERATIVA_ITAMBE`.

### 🟡 Tela 7 — One-pager exportável (DEMO)
- Uma página/aba com **um one-pager pronto** (Zona da Mata): hipótese de impacto no topo, top-3 drivers, banda, taxa de acerto histórica, premissas explícitas ("ENSO neutro; câmbio R$ 5,40; safra MG normal"), uma comparação com Rabobank.
- **Botão "Imprimir / Exportar PDF"** que chama `window.print()`, com **CSS `@media print`** que esconde a navegação e formata pra uma folha A4 limpa.

## 8. Coisas que NÃO devem aparecer (escopo cortado — não adicione)

- ❌ Recomendação de **valor** de bonificação ou de **timing** exato de negociação (o sistema dá sinal, não dita número nem quando).
- ❌ Ranking automático de bacias por "atratividade".
- ❌ Qualquer canal de comunicação com o produtor (mensagem, WhatsApp, e-mail).
- ❌ Cadastro de visitas / histórico de conversas / "quem falou com o produtor" (não é CRM).
- ❌ Score numérico de produtor (0–100) visível — só categoria.
- ❌ Login real, integração SAP funcionando, notificação push.
- ❌ LLM político como driver de recomendação (só como sinal observado em quarentena).

## 9. Critérios de aceite (definition of done)

1. As 8 telas navegáveis numa SPA de arquivo único; as 5 CORE polidas e interativas, as 3 DEMO presentes.
2. **Os 4 pilares aparecem literalmente** na Tela 2 (barras SHAP) e na Tela 4 (sliders).
3. **Interatividade real e ao vivo:** mexer slider (T4) e ajustar pressuposto (T2) recalculam forecast/SHAP na hora, de forma determinística.
4. **Honestidade de incerteza visível:** banda em todo forecast + alerta de banda larga (T1, Triângulo) + alerta de cenário extremo (T4).
5. Tela 8 cobre os 8 itens (virada, diagrama, mapa tela→motor, fontes, piloto, hipótese de impacto, governance, rodapé).
6. Coerência entre telas (mesmos números do "mundo" da seção 5).
7. Nenhum item da seção 8 vazou para a interface.
8. Abre num navegador limpo sem erro de console.

Construa o protótipo agora como um único arquivo HTML completo.

═══════════════════════════════ FIM DO PROMPT ═══════════════════════════════

---

## Notas pra você (Gabriel) — fora do prompt

- **Por que arquivo único:** o Claude (design/artifacts) renderiza melhor um HTML autocontido. Se preferir multi-arquivo depois, dá pra fatiar — mas pra gerar e iterar rápido, um arquivo só é o caminho.
- **Iteração esperada:** o primeiro resultado provavelmente acerta layout e dados, mas a Tela 2 (SHAP) e a Tela 4 (what-if) costumam precisar de um segundo passe pedindo "mais polish nas barras SHAP" e "garanta que o recálculo é instantâneo e o alerta de extremo dispara". Mande follow-ups específicos.
- **Se o gerador travar no tamanho:** peça primeiro as telas CORE 1+2+8 (porta de entrada + briefing + recomendação), depois 4+6, depois as DEMO. A ordem está no `07-canvas-mvp.md §9`.
- **Hospedagem:** quando o HTML estiver bom, salva como `index.html`, joga no repo numa pasta `prototipo/` e publica via GitHub Pages — é 1 link, que é o entregável.
- **Antes de enviar:** teste em janela anônima (critério de aceite nº 8 + Fase 5 do roadmap).
