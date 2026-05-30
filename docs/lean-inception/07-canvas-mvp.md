# Canvas MVP — Vereda

> Etapa final do Lean Inception. **Fecha a Fase 3 do roadmap.** Consolida as decisões do Sequenciador (`06-sequenciador-mvp.md`), resolve as 2 CONDICIONAIS remanescentes, crava stack/naming/hospedagem, declara a hipótese de impacto em R$/litro e entrega o **wireframe rápido das 5 telas CORE** (§7). É a ponte entre o Lean Inception (munição interna) e a Fase 4 (construção do protótipo HTML/CSS/JS — o entregável).
>
> Não é Canvas do Caroli ao pé da letra (proposta/personas/jornada/sequenciador/cronograma já vivem nos docs 01–06). É o **briefing de construção** consolidado: o documento que o "eu da Fase 4" abre pra começar a codar sem reabrir decisão.

---

## 0. Por que este doc existe

O Lean Inception gerou ~39 features 🟢 IN, 8 telas, 3 níveis de inclusão e uma pilha de decisões dispersas em 6 documentos. Antes da primeira linha de HTML, tudo precisa colapsar num único contrato de escopo — senão a Fase 4 reabre debate a cada tela e estoura o prazo. Este doc é esse contrato. **Tudo aqui está decidido.** Reabrir significa nova rodada de discovery (princípio do `ROADMAP.md §3`).

---

## 1. Decisões consolidadas (o contrato)

| Decisão | Resolução | Origem |
|---|---|---|
| **Telas CORE** | 5 telas: **1** (painel), **2** (recomendação SHAP), **4** (what-if), **6** (auditoria), **8** (doc de arquitetura + governance) | `06 §1` |
| **Telas DEMO** | 3: **3** (churn — 3-5 produtores fictícios), **5** (cooperativa — embutida como componente da Tela 2), **7** (one-pager — exemplo pronto exportável) | `06 §1` |
| **A1 — compromissos abertos com produtor** | 🔴 **CORTADA do MVP.** Registrada como v2. | Confirmado no Canvas (2026-05-30) |
| **A3 — quem falou com produtor por último** | 🔴 **CORTADA do MVP.** Registrada como v2. | Confirmado no Canvas (2026-05-30) |
| **Hipótese de impacto** | **R$ 0,03 a R$ 0,08 por litro** de spread vs. CEPEA, **65% de probabilidade**, horizonte de **2 trimestres**, numa bacia-piloto | Confirmado no Canvas — ver §3 |
| **Stack** | HTML + **Tailwind via CDN** + **Alpine.js** (reatividade sem build) + **Chart.js** (gráficos) | `06 §7.2` |
| **Hospedagem** | **GitHub Pages** (já é repo Git, deploy direto, zero config). Vercel como plano B. | `06 §7.2` |
| **Naming** | **Vereda** (placeholder defensável; troca = busca&substitui se mudar) | `01 §Alternativas de nome` |
| **Dados na UI** | Nomes fictícios da discovery: **Anderson Toledo**, bacias reais (**Zona da Mata**, **Triângulo Mineiro**, **Sul de Goiás**), cooperativa **Itambé**. **Nota discreta no rodapé da Tela 8** declarando personas + dados mockados. | `06 §7.3` |

---

## 2. Proposta de valor (1 frase, pro topo da Tela 1)

> **Vereda** cruza os 4 pilares (político, econômico, climático, agropecuário) e traduz o cenário em **recomendações trimestrais de captação auditáveis** — com banda de confiança, drivers visíveis por pilar e taxa de acerto histórica exposta. Não prevê "comprar ou esperar" (leite cru não estoca): apoia **como posicionar a captação** antes da janela apertar.

Essa frase é o teste de 5 segundos do avaliador VP. Se ele lê só isso, já entendeu a virada da perecibilidade.

---

## 3. Hipótese de impacto declarada (cobrança da Patrícia, operacionalizada)

Número que vai **literalmente escrito** na Tela 8 (doc de arquitetura) e no one-pager (Tela 7). Declarado **antes** do piloto — é assim que a Patrícia defende no Comitê.

> **Hipótese:** Numa bacia-piloto (Zona da Mata mineira), o Vereda captura entre **R$ 0,03 e R$ 0,08 por litro** de spread favorável vs. o preço CEPEA de referência, com **65% de probabilidade**, no horizonte de **2 trimestres** (1 ciclo pré-entressafra → entressafra).

**Como esse número se sustenta (defesa oral, se cobrarem):**

- **Mecanismo, não mágica.** O ganho não vem de "prever o preço" — vem de **antecipar o posicionamento**: alocar volume pra bacias certas antes do pico de entressafra, antecipar negociação de cláusula com cooperativa antes da contraparte apertar, reduzir dependência de spot caro. Cada um desses move centavos no spread médio, não reais.
- **Ordem de grandeza honesta.** Preço CEPEA ao produtor orbita ~R$ 2,40–2,70/litro. R$ 0,03–0,08 é **~1,5% a 3%** do preço — modesto e crível. Number inflado (R$ 0,20+) seria o tipo de promessa que a Patrícia mata citando "a consultoria de 2021 que errou cenário".
- **Banda + probabilidade são feature, não ressalva.** 65% de probabilidade declarada na cara é coerente com o princípio não-negociável nº 4 (honestidade de incerteza visível). Um produto que promete 100% é o que ela desconfia.
- **Métrica definida ANTES.** Spread R$/litro vs. CEPEA na bacia-piloto, medido nos 2 trimestres do piloto. Sem mudar a régua no meio.

Alinhado ao exemplo já cravado na feature **2f** (`05 §Tela 2`): "70% de probabilidade do spread capturado entre R$ 0,03 e R$ 0,07/litro". O Canvas só formaliza a banda e o horizonte do piloto.

---

## 4. As 2 CONDICIONAIS — resolução final (blindagem contra escopo creep)

| # | Feature | Decisão | Razão registrada |
|---|---|---|---|
| **A1** | Tela de compromissos abertos com produtor | 🔴 **CORTADA. v2.** | Mesmo Anderson tendo pedido na 3ª rodada, cheira a CRM-light. Tensão direta com a regra "não é CRM" cravada na 2ª rodada (`03-validacao-docs.md`). Não há tempo de modelar UI cuidadosa que não escorregue pra CRM no escopo deste protótipo. Entra como linha do doc de arquitetura ("v2: lembrete operacional pessoal, não cadastro relacional"). |
| **A3** | Quem da equipe falou com produtor por último | 🔴 **CORTADA. v2.** | Mesma razão. Registro de interação interna está na fronteira do CRM. Cortada inteira — nem como elemento de card. |

**Esta decisão está fechada.** Qualquer reintrodução por impulso na Fase 4 viola o contrato. Se sobrar muito tempo (improvável), A1/A3 são as **últimas** coisas a considerar, depois de polish e teste em navegador limpo.

---

## 5. Stack e estrutura do protótipo

### 5.1 Stack (cravada)

- **HTML estático** (sem framework pesado, sem build step).
- **Tailwind via CDN** (`<script src="https://cdn.tailwindcss.com">`) — estilo sem pipeline.
- **Alpine.js via CDN** — reatividade declarativa (`x-data`, `x-model`, `x-show`). Coração do "reagindo a interações": slider muda `x-model` → forecast/SHAP recalculam via função JS.
- **Chart.js via CDN** — barras SHAP, linhas de forecast com banda, sparklines.
- **Sem backend.** Toda "inteligência" é função JS pura mapeando input → output (if/else fingindo SHAP). Dados em JSON estático.

### 5.2 Estrutura de arquivos sugerida (preview da Sessão 1)

```
prototipo/
├── index.html                 Tela 1 (painel) — porta de entrada
├── recomendacao.html          Tela 2 (SHAP) — ou SPA com Alpine x-show
├── whatif.html                Tela 4 (simulador)
├── auditoria.html             Tela 6
├── arquitetura.html           Tela 8 (doc + governance)
├── churn.html                 Tela 3 (DEMO)
├── onepager.html              Tela 7 (DEMO, com @media print)
├── assets/
│   ├── app.js                 navegação + "motor" mock (funções de recálculo)
│   ├── shap-engine.js         função que mapeia inputs dos 4 pilares → barras SHAP
│   └── print.css              CSS @media print pro one-pager
└── data/
    ├── bacias.json            forecast Q+1/2/3, banda, acerto histórico, semáforo
    ├── recomendacoes.json     alavanca + drivers SHAP por pilar + banda + prob
    ├── produtores.json        churn: categoria + motivo + histórico (3-5 fictícios)
    ├── cooperativas.json      Itambé: chuva CHIRPS + projeção + secas comparáveis
    └── auditoria.json         log cronológico + acerto por pilar/horizonte + divergência Rabo/Scot
```

**Decisão de arquitetura do front:** SPA leve com Alpine (`x-show` trocando "telas" numa única `index.html`) **ou** páginas separadas. Recomendação: **SPA leve** — navegação instantânea sem reload, sensação de produto. Decidir na Sessão 1 conforme o peso ficar gerenciável.

### 5.3 Definir a "verdade" antes de pintar (Sessão 2)

Os JSONs de `data/` são a fonte da verdade do produto. Construir **primeiro** (Sessão 2, antes das telas) evita retrabalho: bacias, produtores, forecast, SHAP, cooperativas e recomendações históricas precisam ser **internamente coerentes** (a recomendação da Tela 2 tem que bater com o forecast da Tela 1 e com o acerto da Tela 6 — é o mesmo "mundo").

---

## 6. Mapa final de features por tela e nível

Consolidação do `06 §2–4`. Esta é a checklist de construção.

### 🔴 CORE — polish alto

**Tela 1 — Painel trimestral** · `index.html`
- 1a Cards de bacia: forecast Q+1/Q+2/Q+3 + banda + semáforo · 1b Acerto histórico no card · 1c Filtro unidade (MG/GO/PR) · 1d **Alerta "modelo sem sinal claro"** (banda larga — vitrine de honestidade) · 1e Sparkline dos 4 pilares (DEMO: 1-2 cards) · 1f Comparação Rabo/Scot (DEMO: instância única)

**Tela 2 — Recomendação SHAP** · *a tela do briefing*
- 2a Alavanca em linguagem natural · 2b **4 barras SHAP por pilar (+/–)** · 2c Drill-down por driver com fonte clicável · 2d Aceitar/ajustar/recusar (textarea obrigatória se recusar) · 2e **Ajustar pressuposto recalcula ao vivo** · 2f Banda + probabilidade · 2g Histórico 4 últimas (DEMO) · 2j Exportar pro one-pager (DEMO) · **+ Tela 5 embutida** (botão "ver evidência pra defesa") · **C2** assinatura nominal · **C4** pílula LLM político em quarentena (fonte clicável)

**Tela 4 — What-if** · *interatividade central*
- 4a 4 sliders (câmbio, milho, ENSO, Mercosul) · 4b **Forecast/banda/SHAP/recomendação recalculam em tempo real** · 4c Delta base vs. simulado · 4d **Alerta "ultrapassa banda histórica"** (antídoto videogame) · 4e Salvar cenário (DEMO, só visual) · 4f Texto LLM (DEMO: templates pré-escritos, marcado "explicação assistida, não auditada")

**Tela 6 — Auditoria**
- 6a Acerto por horizonte/bacia/alavanca · 6b Log cronológico + decisão + realizado · 6c Análise de discordância (recusou X, certo Y) · 6d "Modelo recalibrou após sua discordância" (DEMO: 1 instância) · 6g **Acerto por pilar** (aderência briefing) · 6i Acerto granular por produtor/região (DEMO) · 6j **Painel de acerto em divergência** (Vereda vs. Rabo/Scot) · 6e filtros (DEMO) · **C2** assinatura · **C3** card de escalonamento (DEMO: 1 instância) · 6f/6k exportação CSV + ticket recalibração → **🟢 ARQ** (só no doc)

**Tela 8 — Por que esta solução** · *entregável 2 do briefing*
- 8a Diagrama 4 pilares→ingestão→modelos→SHAP→API→front · 8b Mapa tela→motor · 8c Fontes reais com link · 8e Plano de piloto · 8f **Hipótese de impacto (§3 deste doc)** · 8g Virada da perecibilidade em 3 linhas · **Página de governance (8h–8k):** owner (papel+e-mail) + métrica (geral + divergência) + log auditável (snapshot+versão+inputs) + fluxo de escalonamento · **Nota de rodapé:** personas e dados fictícios

### 🟡 DEMO — um exemplo, sem variações

**Tela 3 — Churn** · `churn.html`: 3-5 produtores fictícios, categoria (Alto/Atenção/OK) + motivo de 1 linha + histórico · 1 produtor com botão "Marcar como sob controle" funcional (modal + prazo) · 3f alerta concorrência crowdsourced (1 instância: "movimentação reportada em 4 rotas")

**Tela 5 — Cooperativa** · embutida na Tela 2 como painel lateral: chuva CHIRPS + projeção regional + 2-3 secas comparáveis (Itambé) · 5e "Resumo pré-conversa" (3-5 bullets, sem verbo de ação)

**Tela 7 — One-pager** · `onepager.html` printável: hipótese de impacto + top-3 drivers + banda + acerto + premissas + comparação Rabo (instância) · botão Imprimir (`window.print()` + `@media print`)

### 🟢 ARQ — só no doc de arquitetura
- 6f Exportação CSV/PDF da trilha · 6k Ticket de recalibração pro time de modelos · C6 Plano de contingência se SAP cair · C8 Dimensionamento da integração SAP (tabelas, frequência, owner de TI, esforço)

---

## 7. Wireframe rápido das 5 telas CORE

> Baixa fidelidade proposital (ASCII no repo > Figma). Define layout e hierarquia de informação, não pixel. É o blueprint que a Fase 4 traduz pra HTML.

### Tela 1 — Painel trimestral por bacia

```
┌──────────────────────────────────────────────────────────────────────┐
│ ⬡ VEREDA          Painel · Recomendações · What-if · Auditoria · Por quê│
│ Olá, Anderson Toledo · Captação                    [Unidade: MG ▾]      │
├──────────────────────────────────────────────────────────────────────┤
│  Cenário trimestral por bacia — Q2 → Q4 2026                            │
│                                                                         │
│  ┌─ ZONA DA MATA (MG) ────────────┐  ┌─ TRIÂNGULO (MG) ──────────────┐ │
│  │ 🟢 Forecast spread favorável    │  │ 🟡 Sinal misto                 │ │
│  │ Q+1 +R$0,05  Q+2 +R$0,06        │  │ Q+1 +R$0,02  Q+2 ±R$0,01       │ │
│  │ banda ▓▓▓░░ ±R$0,03             │  │ banda ▓▓▓▓▓ ±R$0,07            │ │
│  │ pilares ▁▂▆▃ (P E C A)          │  │ ⚠ MODELO SEM SINAL CLARO —     │ │
│  │ Acerto histórico 2T: 72%        │  │   banda larga, decida no       │ │
│  │                      [Ver reco→]│  │   relacionamento  Acerto: 51%  │ │
│  └─────────────────────────────────┘  └────────────────────────────────┘ │
│  ┌─ SUL DE GOIÁS (GO) ─────────────┐  + comparação Rabobank (instância)  │
│  │ 🔴 Pressão de custo             │    "Rabo projeta -2% no 2S; Vereda  │
│  │ Q+1 -R$0,04 ...                 │     diverge: +R$0,02 — ver auditoria"│
│  └─────────────────────────────────┘                                     │
└──────────────────────────────────────────────────────────────────────┘
```
Destaque de honestidade: o card Triângulo carrega o **alerta de banda larga** — feature 1d, vitrine direta do princípio nº 4.

### Tela 2 — Recomendação por bacia (a tela do briefing)

```
┌──────────────────────────────────────────────────────────────────────┐
│ ← Zona da Mata (MG) · Recomendação Q2→Q3 2026          Acerto bacia:72% │
├──────────────────────────────────────────────────────────────────────┤
│ ► "Antecipe a revisão de cláusula de banda com a Itambé nos próximos    │
│    30 dias e priorize alocação de volume nesta bacia."                  │
│    Banda: 70% de prob. do spread entre +R$0,03 e +R$0,07/litro          │
│                                                                         │
│  Drivers por pilar (SHAP — contribuição em R$/litro):                   │
│   Climático   ▇▇▇▇▇▇  +0,04  ▸ chuva CHIRPS abaixo da média … [fonte]    │
│   Econômico   ▇▇▇     +0,02  ▸ câmbio BRL/USD, milho futuro    [fonte]   │
│   Agropecuário▇▇      +0,01  ▸ rebanho IBGE, qualidade CCS↑    [fonte]   │
│   Político   ▏        ±0,00  ⚑ quarentena: "Mercosul em pauta" [fonte]   │
│                                                                         │
│  [ Aceitar e assinar ]  [ Ajustar pressuposto ]  [ Recusar c/ justif. ] │
│  ── Ajustar: "ENSO neutro, não La Niña" → recalcula SHAP ao vivo ──      │
│                                                                         │
│  [📎 Ver evidência pra defesa pra cima ▸]  (abre painel cooperativa)     │
│  Assinatura: Aceito por Anderson Toledo · pendente                      │
└──────────────────────────────────────────────────────────────────────┘
```
SHAP por pilar = os 4 pilares **literalmente visíveis**. Ajustar pressuposto = "reagindo a interações". Painel da cooperativa (Tela 5) entra embutido aqui.

### Tela 4 — Simulador what-if

```
┌──────────────────────────────────────────────────────────────────────┐
│ Simulador de cenário — Zona da Mata          ⚠ uso exploratório interno │
├───────────────────────────┬──────────────────────────────────────────┤
│  Câmbio BRL/USD  5,40 ●──── │  Forecast spread Q+2                       │
│  Milho futuro    +0% ──●─── │   Base:     +R$0,06   ████████            │
│  ENSO    [La Niña|Neutro|El]│   Simulado: +R$0,09   ███████████  ▲+0,03 │
│  Mercosul prob.  30% ──●─── │   banda ▓▓▓░░                              │
│                            │                                            │
│                            │  SHAP recalculado: Climático ▇▇▇▇▇▇▇       │
│                            │  ⚠ Este cenário ULTRAPASSA a banda          │
│                            │    histórica — combinação extrema, cautela │
│                            │                                            │
│  [ Salvar cenário ]        │  💬 "Dólar +5% empurra +R$0,04/litro via   │
│                            │     pó importado" (assistida, não auditada)│
└───────────────────────────┴──────────────────────────────────────────┘
```
4 sliders = os 4 pilares manipuláveis. Recálculo ao vivo + alerta de extremo (4d) = antídoto contra "videogame executivo".

### Tela 6 — Auditoria / memória de decisão

```
┌──────────────────────────────────────────────────────────────────────┐
│ Auditoria & memória de decisão           [Período ▾] [Bacia ▾] [Decisor]│
├──────────────────────────────────────────────────────────────────────┤
│  Taxa de acerto                  Acerto POR PILAR (qual erra mais)      │
│   Horizonte 1T: 78%               Climático ▇▇▇▇▇▇▇▇ 81%                 │
│   Horizonte 2T: 72%               Econômico ▇▇▇▇▇▇   68%                 │
│   Horizonte 3T: 61%               Agropec.  ▇▇▇▇▇▇▇  74%                 │
│                                   Político  ▇▇▇      —  (quarentena)     │
│                                                                         │
│  Acerto EM DIVERGÊNCIA (Vereda vs. Rabo/Scot): 64%  ◂ defesa do produto │
│                                                                         │
│  Log cronológico                                                        │
│   10/05 Itambé · ACEITO (Anderson) · realizado +R$0,05 ✓                │
│   02/04 Sul GO · RECUSADO "câmbio vai virar" · realizado -R$0,03 ✓(ele) │
│         ▸ Você recusou e estava certo. Acerto seu em recusa: 3/4        │
│   ⟳ Modelo recalibrou peso de 'milho' após sua discordância em 03/2026  │
│                                                                         │
│  ⚠ Você está em 55% de recusa neste trimestre (impacto >R$X). Revisar?  │
└──────────────────────────────────────────────────────────────────────┘
```
Discordância vira munição **dele** (6c). Acerto por pilar (6g) e em divergência (6j) = aderência ao briefing + defesa institucional. Recalibração (6d) prova "sparring que aprende".

### Tela 8 — Por que esta solução (doc de arquitetura embarcado)

```
┌──────────────────────────────────────────────────────────────────────┐
│ Por que esta solução — arquitetura de viabilidade                       │
├──────────────────────────────────────────────────────────────────────┤
│ A virada da perecibilidade (3 linhas)                                   │
│  Leite cru não estoca nem "espera o preço cair". O problema real não é  │
│  prever preço — é posicionar a captação trimestral sob incerteza.       │
│                                                                         │
│ Arquitetura                                                             │
│  4 PILARES → ingestão → feature store → [SARIMAX + LightGBM] → SHAP     │
│   (P E C A)   (APIs)      (interno)        ensemble            → API→UI  │
│              LLM político ⟶ QUARENTENA (sinal observado, não driver)     │
│                                                                         │
│ Mapa tela → motor real          Fontes reais de dado                    │
│  T1 painel → SARIMAX forecast    CEPEA · BCB-SGS · INMET · NASA POWER    │
│  T2 SHAP   → LightGBM + SHAP      CHIRPS · CONAB · MAPA · Global Dairy    │
│  T4 what-if→ recomputo do ensemble                          [links]     │
│                                                                         │
│ Plano de piloto: Zona da Mata · 6 meses · métrica spread R$/litro       │
│ Hipótese de impacto: +R$0,03 a +R$0,08/litro · 65% prob · 2 trimestres  │
│                                                                         │
│ ┌─ GOVERNANCE (bloqueador Patrícia p/ Comitê) ──────────────────────┐  │
│ │ Owner: Líder de Modelagem de Captação · modelagem@empresa.com      │  │
│ │ Métrica: acerto geral + acerto em divergência (expostos na T6)     │  │
│ │ Log auditável: snapshot de inputs + versão do modelo + decisão     │  │
│ │ Escalonamento: >50% recusa (janela móvel, impacto >R$X) → Anderson │  │
│ │   primeiro (5 dias úteis) → 1:1 quinzenal Patrícia. Nunca S&OP.     │  │
│ └────────────────────────────────────────────────────────────────────┘ │
│ Nota: personas (Anderson Toledo) e dados são fictícios — protótipo.     │
└──────────────────────────────────────────────────────────────────────┘
```
Entregável 2 do briefing. A caixa de governance é o **bloqueador que a Patrícia condicionou** (features 8h–8k).

---

## 8. Critérios de "pronto" (definition of done do link)

O link está pronto pra enviar quando:

- [ ] As 5 telas CORE navegáveis e clicáveis; 3 DEMO presentes (mesmo que com 1 instância).
- [ ] **Os 4 pilares aparecem literalmente** na Tela 2 (SHAP) e na Tela 4 (sliders) — exigência direta do briefing.
- [ ] **Interatividade real:** mexer slider (T4) ou ajustar pressuposto (T2) recalcula forecast/SHAP **ao vivo**.
- [ ] **Honestidade de incerteza visível:** banda em todo forecast + alerta de banda larga (1d) + alerta de cenário extremo (4d).
- [ ] Tela 8 cobre os 8 itens do briefing **+ a caixa de governance (8h–8k)** completa.
- [ ] Hipótese de impacto (§3) escrita na Tela 8 e no one-pager.
- [ ] Nenhuma feature 🔴 OUT ou A1/A3 vazou pro protótipo.
- [ ] **Testado em navegador limpo (modo anônimo)** — sem dependência de cache/estado local.
- [ ] Hospedado, 1 link funcional.

---

## 9. Sequência de construção (da Fase 4)

Herdada do `06 §6`. Maximiza valor de demo cedo — se cortar pelo prazo, ainda fica produto navegável defensável.

| Ordem | Bloco | Sessões |
|---|---|---|
| 1 | Setup + estrutura de navegação (Alpine SPA leve) | 1 |
| 2 | **Mock de dados** (`data/*.json` coerentes entre si) | 1 |
| 3 | **Tela 1 (painel) + Tela 8 (arquitetura)** — porta de entrada + briefing | ~2,5 |
| 4 | **Tela 2 (recomendação SHAP)** — concentrar polish | 2 |
| 5 | **Tela 4 (what-if)** — brincar é o que vende | 2 |
| 6 | **Tela 6 (auditoria)** — honestidade técnica | 1,5 |
| 7 | Telas DEMO (3 churn, 5 cooperativa embutida, 7 one-pager) | 1,5 |
| 8 | Polish + responsivo + teste navegador limpo + hospedagem | 1 |

**Total: ~12-13 sessões.** Regra de corte se apertar: preservar **1+2+8**, polir **4**, DEMOs por último.

---

## 10. Próximo passo

✅ **Lean Inception fechado.** Este Canvas é o último artefato da Fase 3.

➡️ **Abre a Fase 4 (Construção).** Primeira tarefa: **Sessão 1 — setup do protótipo** (estrutura de pastas em `prototipo/`, Tailwind + Alpine + Chart.js via CDN, navegação SPA leve), seguida da **Sessão 2 — mock de dados** (`data/*.json`). Definir a "verdade" do produto antes de pintar telas.

Os wireframes da §7 são o blueprint. O mapa de features da §6 é a checklist. As decisões da §1 são o contrato — não reabrir.
