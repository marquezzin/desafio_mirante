# Sequenciador de MVP — Vereda

> Etapa 6 do Lean Inception. Matriz esforço × valor sobre as ~39 features 🟢 IN consolidadas pós-3ª rodada (`05-brainstorm-features.md §6`). Adaptada ao nosso contexto real: **o "produto" é um link de protótipo HTML/CSS/JS**, não um software de verdade. O esforço de implementação está distorcido por isso — o gargalo não é construir motor, é **mockar interação convincente** no front.

---

## 0. Contexto do sequenciamento

### O que é "MVP" neste desafio

- **Entregável:** 1 link (briefing). Protótipo funcional HTML/CSS/JS com IA simulada no front. O Lean Inception fica como munição de defesa interna, não é entregue.
- **Avaliador:** VP de Recrutamento. Tempo estimado: **5–10 min por candidato**. Abre o link, navega 2–3 telas, lê (ou não) o doc de arquitetura.
- **Recursos:** uma pessoa, prazo curto. Sem time, sem build de produção, sem treinar modelo.
- **Briefing exige cobertura visível de:** (i) correlação dos 4 pilares; (ii) inteligência simulada no front reagindo a interações; (iii) doc de arquitetura mostrando que cada tela tem motor real construível por trás.

### Implicação operacional

O Sequenciador clássico (quick win / big bet / fill-in / money pit) precisa ser adaptado. O eixo "esforço" aqui não é esforço de produção — é **esforço de mockar com convicção no front**. O eixo "valor" também muda: não é valor pro usuário final do produto real, é **valor de demonstração** pro avaliador, ponderado pelos princípios da vaga (concepção, ética/transparência, ponte negócio↔tecnologia).

### Três níveis de inclusão

| Nível | Significado | Quando aplicar |
|---|---|---|
| **🔴 CORE** | Tela funcional completa no protótipo. Clicável, com interatividade real, dados mockados ricos o suficiente pra parecer produto. | Quando a feature é central pro briefing (4 pilares, interatividade) ou pra narrativa do produto (defesa, honestidade técnica). |
| **🟡 DEMO** | Representada por **um exemplo focado** / componente parcial. Mostra que existe, sem construir variações nem encher de dados. | Quando a feature é importante conceitualmente mas o avaliador não vai brincar com ela. Mostrar uma vez, mover adiante. |
| **🟢 ARQ** | Só descrita no doc de arquitetura ("Por que esta solução"). Não tem UI ou aparece como diagrama/texto. | Quando a feature é puramente de motor/governance e o valor está em **comprovar viabilidade técnica**, não em interatividade. |

**Princípio guia:** densidade de polish onde o avaliador vai bater o olho primeiro e onde o briefing manda. Tudo o mais é DEMO ou ARQ.

---

## 1. Matriz por tela

Status combinando aderência ao briefing × esforço de mock × narrativa de defesa.

| Tela | Nível | Razão |
|---|---|---|
| **Tela 1 — Painel trimestral por bacia** | 🔴 CORE | Porta de entrada. É o que o avaliador vê primeiro. Carrega o "olhar panorâmico" e mostra **acerto histórico exposto na UI** (princípio não-negociável). |
| **Tela 2 — Recomendação por bacia (drivers SHAP)** | 🔴 CORE | **A tela mais aderente ao briefing.** SHAP por pilar = "correlação preditiva dos 4 pilares" literalmente visível. Aceitar/ajustar/recusar = co-dono operacional. Mexer pressuposto = "reagindo a interações". Sem essa tela bem feita, o produto não cumpre o briefing. |
| **Tela 3 — Risco de churn por produtor** | 🟡 DEMO | Importante conceitualmente, mas tela inteira nova (Fase 3 da jornada). Demonstrar com **3-5 produtores fictícios** + categoria + motivo + botão "Sob controle". Mostrar uma vez o histórico, mover adiante. |
| **Tela 4 — Simulador what-if (4 sliders)** | 🔴 CORE | **A segunda mais aderente ao briefing.** "Inteligência reagindo a interações" é literal aqui — slider muda → forecast/SHAP/recomendação recalculam ao vivo. Avaliador vai brincar. Polish alto. |
| **Tela 5 — Painel de cooperativa** | 🟡 DEMO | Reposicionada como "munição pra defesa" (não tela de monitoramento). Pode aparecer como **componente da tela de recomendação** (botão "ver evidência pra defesa pra cima") em vez de tela própria. Reduz superfície sem perder narrativa. |
| **Tela 6 — Auditoria / memória de decisão** | 🔴 CORE | Carrega **honestidade técnica visível** (cobrança da vaga + Patrícia). Taxa de acerto granular + log + "modelo recalibrou após sua discordância" — provam que a IA não é caixa-preta. Polish médio-alto. |
| **Tela 7 — One-pager exportável** | 🟡 DEMO | Mostrar **um one-pager pronto**, exportável como PDF (ou aba dedicada printável). Não precisa de gerador dinâmico — basta um exemplo bem construído com hipótese de impacto, drivers, banda, acerto histórico. |
| **Tela 8 — "Por que esta solução"** | 🔴 CORE | **Entregável 2 obrigatório do briefing** (doc de arquitetura). Aba dedicada do protótipo. Aqui mora a **página de governance** que Patrícia condicionou (owner, métrica, log, escalonamento). |

### Resumo de telas

- **CORE (5 telas):** 1, 2, 4, 6, 8.
- **DEMO (3 telas / componentes):** 3, 5, 7.
- **ARQ (0 telas):** nenhuma — todas as 8 têm representação visual no protótipo.

---

## 2. Matriz por feature dentro das telas CORE

Detalha o que vai com polish vs. o que aparece como elemento parcial dentro de cada tela CORE.

### Tela 1 — Painel trimestral por bacia (CORE)

| Feature | Inclusão |
|---|---|
| 1a. Cards de bacia com forecast Q+1/Q+2/Q+3 + banda + semáforo | 🔴 CORE |
| 1b. Taxa de acerto histórica embutida no card | 🔴 CORE |
| 1c. Filtro por unidade (MG/GO/PR) | 🔴 CORE |
| 1d. Alerta "modelo sem sinal claro" quando banda larga | 🔴 CORE — **vitrine de honestidade técnica** |
| 1e. Mini-sparkline de cada pilar (4 micro-gráficos) | 🟡 DEMO — mostrar em 1-2 cards apenas |
| 1f. Comparação com Rabobank/Scot | 🟡 DEMO — instância única mockada, ilustrativa |

### Tela 2 — Recomendação por bacia (CORE)

| Feature | Inclusão |
|---|---|
| 2a. Alavanca recomendada em linguagem natural | 🔴 CORE |
| 2b. **Decomposição SHAP por pilar** (4 barras +/–) | 🔴 CORE — **tela do briefing** |
| 2c. Drill-down por driver (clica em pilar, expande variáveis com fonte clicável) | 🔴 CORE |
| 2d. Botões aceitar / ajustar / recusar com justificativa | 🔴 CORE |
| 2e. Ajustar pressuposto recalcula ao vivo | 🔴 CORE — **interatividade do briefing** |
| 2f. Banda + probabilidade declarada | 🔴 CORE |
| 2g. Histórico de últimas 4 recomendações da bacia | 🟡 DEMO — lista curta |
| 2j. Botão "exportar drivers pro one-pager" | 🟡 DEMO — ligado à Tela 7 |

### Tela 4 — Simulador what-if (CORE)

| Feature | Inclusão |
|---|---|
| 4a. 4 sliders fixos (câmbio, milho, ENSO, Mercosul) | 🔴 CORE — **representam os 4 pilares** |
| 4b. Forecast/banda/recomendação/SHAP recalculam em tempo real | 🔴 CORE — **interatividade central** |
| 4c. Delta base vs. simulado destacado | 🔴 CORE |
| 4d. Alerta "cenário ultrapassa banda histórica" | 🔴 CORE — antídoto contra videogame |
| 4e. Botão "salvar cenário" → vira anexo do one-pager | 🟡 DEMO — só visual, sem persistência real |
| 4f. Texto LLM curto explicando mudança | 🟡 DEMO — **templates pré-escritos** (Patrícia: 4 condições, ver §3 abaixo). Marcar visualmente "explicação assistida, não auditada". |

### Tela 6 — Auditoria / memória de decisão (CORE)

| Feature | Inclusão |
|---|---|
| 6a. Taxa de acerto por horizonte / bacia / alavanca | 🔴 CORE |
| 6b. Lista cronológica de recomendações + decisão + realizado | 🔴 CORE |
| 6c. Análise de discordância (recusou X, estava certo Y) | 🔴 CORE — **vitrine de sparring que aprende** |
| 6d. "Modelo recalibrou variável X após sua discordância em Y ciclos atrás" | 🟡 DEMO — uma instância mockada como prova de conceito |
| 6e. Filtros de auditoria | 🟡 DEMO — botões visuais, alguns funcionais |
| 6f. Exportação CSV/PDF | 🟢 ARQ — citar no doc |
| 6g. Quebra de acerto **por pilar** | 🔴 CORE — **aderência ao briefing** ("qual dos 4 pilares tem errado mais") |
| 6i. Taxa de acerto granular **por produtor/região** (Anderson A2) | 🟡 DEMO — uma seção do painel |
| 6j. **Painel de acerto em divergência** (Vereda vs. Rabo/Scot) (Patrícia P1) | 🔴 CORE — **defesa institucional** |
| 6k. Fluxo de recalibração (rejeição repetida → ticket) (Patrícia P3) | 🟢 ARQ — descrever no doc, não na UI |

### Tela 8 — "Por que esta solução" (CORE)

| Feature | Inclusão |
|---|---|
| 8a. Diagrama 4 pilares → ingestão → modelos → SHAP → API → front | 🔴 CORE |
| 8b. Mapa tela → motor real (8 telas) | 🔴 CORE |
| 8c. Lista de fontes reais de dado com link | 🔴 CORE |
| 8d. Owner do modelo declarado | 🔴 CORE |
| 8e. Plano de piloto (Zona da Mata, 6 meses, métrica de spread) | 🔴 CORE |
| 8f. Hipótese de impacto declarada (R$/litro + banda + probabilidade) | 🔴 CORE — **cobrança da Patrícia** |
| 8g. Virada da perecibilidade em 3 linhas | 🔴 CORE — **diferenciador puro, abertura** |
| **8h–8k. Página de governance** (owner + métrica + log + escalonamento) | 🔴 CORE — **bloqueador da Patrícia pra Comitê de junho** |

---

## 3. Matriz por feature dentro das telas DEMO

### Tela 3 — Risco de churn (DEMO)

- Mostrar **3-5 produtores fictícios** com categoria (Alto / Atenção / OK) + motivo de 1 linha + histórico de risco (linha do tempo curta).
- **1 produtor com botão "Sob controle" funcional** (clica, abre modal, escolhe prazo, fecha) — pra mostrar o sparring que aprende sem implementar persistência.
- Alerta de movimento concorrência (3f) — uma instância visual, formato "movimentação reportada em 4 rotas, atenção" (não "Italac +14%").

### Tela 5 — Painel de cooperativa (DEMO)

- **Reposicionada como componente da Tela 2** (botão "ver evidência pra defesa pra cima") em vez de tela própria. Reduz superfície.
- Modal/painel lateral com: dado de chuva CHIRPS + projeção de produção regional + histórico de 2-3 secas comparáveis. Uma cooperativa mockada (Itambé) suficiente.
- "Resumo pré-conversa" (5e) — bullets mockados, formato "O que mudou desde a última conversa".

### Tela 7 — One-pager exportável (DEMO)

- **Um one-pager pronto** como aba dedicada do protótipo + botão "Imprimir" (window.print() com CSS @media print).
- Conteúdo: hipótese de impacto + drivers top-3 + banda + taxa de acerto + premissas + comparação com Rabo (instância mockada).
- Versão Comitê e versão CFO podem ser representadas por um toggle simples — ou apenas uma versão (a do Comitê) com link "versão CFO disponível na exportação".

---

## 4. Cross-cutting / governance

| Feature | Inclusão |
|---|---|
| C1. Trilha de auditoria formal de cada recomendação | 🟢 ARQ + 🟡 DEMO (snapshot de uma recomendação mostrado na Tela 6) |
| C2. Assinatura nominal do Anderson em recomendação aceita | 🔴 CORE (visual nas Telas 2 e 6 — "Aceito por Anderson Toledo, 10/05/2026") |
| C3. Gatilho de escalonamento (percentual + materialidade, fluxo Anderson-primeiro) | 🟢 ARQ + 🟡 DEMO (uma instância na Tela 6: card "você está em 55% de recusa neste trimestre, quer revisar?") |
| C4. LLM político em quarentena (sinal observado, fonte clicável, não driver) | 🟡 DEMO — pílulas com fonte clicável em 1-2 instâncias na Tela 2 |
| C5. Owner do modelo na UI | 🔴 CORE (footer / aba "Sobre" com papel + e-mail) |

---

## 5. Estimativa de esforço (sessões de trabalho)

Sessão = bloco de ~3-4h focado. Não é estimativa de produção — é estimativa do esforço de **mockar com convicção** num protótipo.

| Bloco | Esforço estimado |
|---|---|
| **Setup do protótipo** (Tailwind CDN, Alpine.js ou JS vanilla, estrutura de navegação entre telas, layout base) | 1 sessão |
| **Mock de dados** (JSONs com bacias, produtores, forecast, SHAP, cooperativas, recomendações históricas) | 1 sessão |
| **Tela 1 — Painel** | 1 sessão |
| **Tela 2 — Recomendação (CORE pesada)** | 2 sessões (SHAP visual + drill-down + aceitar/ajustar/recusar com reatividade) |
| **Tela 4 — What-if (CORE pesada)** | 2 sessões (sliders reativos + recálculo visível + alerta de extremo + LLM mock) |
| **Tela 6 — Auditoria** | 1,5 sessões (múltiplos painéis + divergência com Rabo) |
| **Tela 8 — Doc de arquitetura embarcado** | 1,5 sessões (diagrama + texto + página de governance) |
| **Telas DEMO (3, 5, 7)** | 1,5 sessões somadas |
| **Polish final** (responsivo, microinterações, "honestidade de incerteza" visualmente clara, hospedagem, teste em navegador limpo) | 1 sessão |

**Total estimado: ~12-13 sessões de trabalho.** É escopo viável pra prazo de desafio, mas exige disciplina — qualquer feature adicionada que escape do CORE/DEMO acima estoura.

---

## 6. Sequência de construção sugerida

Ordem que **maximiza valor de demo cedo** (se cortar pelo prazo, ainda fica produto navegável) e que **deixa o que mais aderência tem ao briefing pra ser feito com mais clareza** (não fica pro fim correndo).

| Ordem | Bloco | Justificativa |
|---|---|---|
| 1 | Setup + estrutura de navegação | Sem isso nada funciona. |
| 2 | Mock de dados (JSONs) | Define a "verdade" do produto antes de pintar telas — evita retrabalho. |
| 3 | **Tela 1 (painel)** + **Tela 8 (arquitetura)** | Porta de entrada + munição obrigatória do briefing. Se cortar aqui, já tem produto navegável defensável. |
| 4 | **Tela 2 (recomendação SHAP)** | **A tela mais importante.** Concentrar polish aqui. |
| 5 | **Tela 4 (what-if)** | A segunda mais importante. Brincar é o que vende. |
| 6 | **Tela 6 (auditoria)** | Honestidade técnica visível — diferencial da vaga. |
| 7 | Tela 3 (churn DEMO), Tela 5 (cooperativa embutida em Tela 2), Tela 7 (one-pager DEMO) | Telas DEMO em paralelo, sem polish profundo. |
| 8 | Polish final + responsivo + teste em navegador limpo + hospedagem | Última coisa. |

**Regra de corte se o prazo apertar:** preservar 1+2+8 (porta de entrada + briefing + doc), polir 4 (interatividade), DEMOs ficam por último. Telas 3/5/7 são as primeiras a virar versão simplificada se faltar tempo.

---

## 7. Decisões pendentes pro Canvas MVP

### 7.1 As 2 CONDICIONAIS remanescentes

| # | Feature | Recomendação |
|---|---|---|
| **A1** | Tela de compromissos abertos com produtor | **Cortar do MVP.** Cheira a CRM-light (mesmo Anderson tendo pedido). Tensão com regra "não é CRM" da 2ª rodada. Se for pra entrar, é v2 — não há tempo de modelar UI cuidadosa no escopo deste protótipo. |
| **A3** | "Quem da equipe falou com este produtor por último" | **Cortar do MVP.** Mesma razão. Pode aparecer como elemento de uma linha no card de produtor (Tela 3 DEMO) se sobrar tempo, mas não como feature própria. |

Ambas precisam ser **decididas explicitamente no Canvas MVP** — recomendação aqui é "cortar", mas vai pro registro pra blindar de adição posterior por impulso.

### 7.2 Stack final

Recomendação:

- **HTML + Tailwind via CDN + Alpine.js** (reatividade leve sem build step).
- Gráficos: **Chart.js** ou **uPlot** (leve, sem React).
- Hospedagem: **Vercel** (deploy via `vercel --prod`, domínio automático) ou **GitHub Pages** (mais simples se já está no repo Git).

Confirmar no Canvas MVP.

### 7.3 Quem é "Anderson" e "Vale do Cedro" no protótipo

O Lean Inception construiu personas fictícias com nomes. O protótipo precisa decidir: usa esses nomes fictícios na UI (mais imersivo, mas exige nota explicativa) ou usa nomes genéricos ("Comprador", "Indústria X")?

**Recomendação:** usar os nomes fictícios — Anderson Toledo, Vale do Cedro, bacias reais (Zona da Mata, Triângulo, Sul Goiás). Coerente com a profundidade do trabalho de discovery e dá sensação de produto real. **Nota discreta no rodapé da Tela 8** explicando que são personas e dados mockados. Confirmar no Canvas MVP.

---

## 8. Próximo passo

**Canvas MVP** consolidando:

1. As decisões aprovadas deste Sequenciador (telas CORE/DEMO, features por nível, sequência de construção, esforço estimado).
2. Decisões pendentes resolvidas (A1/A3, stack, naming).
3. Wireframe rápido (papel ou Excalidraw) das 5 telas CORE — não Figma alta-fidelidade.
4. Hipótese de impacto declarada antes do "piloto" (cobrança da Patrícia operacionalizada para o entregável: número declarado no doc de arquitetura).

Com isso fechado, abre Fase 4 (construção).
