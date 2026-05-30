# Brainstorm de Features — Vereda

> Etapa 5 do Lean Inception. Divergência (lista bruta de features candidatas) seguida de convergência (aplicação do **princípio de corte** declarado no `02-e-nao-e-faz-nao-faz.md`).
>
> Não é priorização final — isso vem no Sequenciador (matriz esforço × valor) e no Canvas MVP. Aqui o objetivo é só **mapear o espaço de possibilidades por tela**, filtrar grosseiramente, e gerar insumo pra 3ª rodada de validação com as personas.
>
> Entrada: matriz §3 do `04-jornada-usuario.md` (8 telas/artefatos consolidados) + decomposição IA por tela validada na conversa anterior.

---

## 0. Princípio de corte (recapitulação)

Uma feature **entra no MVP** se passa simultaneamente em:

- **(a) Endereça uma alavanca real do comprador** — alocação por bacia, bonificação, cláusula com cooperativa, substituição parcial, NÃO buy/wait.
- **(b) É defensável pela Patrícia no Comitê** — drivers explicáveis, banda de confiança, auditável.
- **(c) Não duplica o que SAP/Power BI já faz** — relatório descritivo, ordem de compra, controle financeiro.

Status atribuídos abaixo:
- 🟢 **IN** — passa nos três critérios.
- 🟡 **CONDICIONAL** — passa em (a) e (b) mas tem custo de construção alto, ou precisa de validação na 3ª rodada antes de entrar.
- 🔴 **OUT** — falha em ao menos um critério, ou conflita com a discovery (geralmente porque "soa bonito mas alguém da discovery já matou").

---

## 1. Divergência — lista bruta por tela

### Tela 1 — Painel trimestral por bacia

| # | Feature candidata | Status |
|---|---|---|
| 1a | Cards de bacia com forecast Q+1 / Q+2 / Q+3 + banda de confiança + semáforo (verde/amarelo/vermelho) | 🟢 IN |
| 1b | Taxa de acerto histórica do horizonte exposta direto no card (não em aba) | 🟢 IN |
| 1c | Filtro por unidade industrial (MG / GO / PR) — só bacias relevantes ao usuário logado | 🟢 IN |
| 1d | Alerta visível "modelo sem sinal claro — decida no relacionamento" quando banda > X% da mediana | 🟢 IN |
| 1e | Mini-sparkline de cada pilar (4 micro-gráficos) indicando "vindo a favor / contra" no trimestre | 🟢 IN |
| 1f | Comparação com Rabobank / Scot — citação clicável quando relatório recente está disponível e contradiz | 🟡 CONDICIONAL — Anderson pediu (2ª rodada), valor alto, mas custo de construção fora do MVP (depende de parser de PDF de terceiro). Mockar uma instância no protótipo pra demonstrar; produção fica pra v2 |
| 1g | Ranking de bacias por "atratividade composta" (forecast favorável × baixa banda × baixo churn) | 🔴 OUT — vira black-box ranqueado. Anderson rejeitaria ("modelo pensando por mim"). Mantém panorama, não opina sobre prioridade. |
| 1h | Notificação push diária com mudanças no painel | 🔴 OUT — Anderson: "não vou abrir mais um sistema toda manhã". Frequência diária ≠ horizonte trimestral. |

### Tela 2 — Recomendação por bacia

| # | Feature candidata | Status |
|---|---|---|
| 2a | Cabeçalho com alavanca recomendada em linguagem natural ("antecipe negociação com Itambé em 30 dias") | 🟢 IN |
| 2b | Decomposição SHAP por pilar (4 barras horizontais +/–, com magnitude em R$/litro) — **é onde os 4 pilares ficam literalmente visíveis** | 🟢 IN |
| 2c | Drill-down por driver: clicar em "Climático" expande variáveis (chuva acumulada, ENSO, etc.) com **fonte clicável** | 🟢 IN |
| 2d | Botões **aceitar / ajustar pressuposto / recusar com justificativa** (textarea obrigatória se recusar) | 🟢 IN |
| 2e | Ajustar pressuposto faz SHAP e recomendação recalcularem ao vivo (ex.: "considero ENSO neutro, não La Niña" → modelo reflete) | 🟢 IN — alto valor pro requisito do briefing "reagindo a interações" |
| 2f | Banda de confiança e **probabilidade declarada** ("70% probabilidade do spread capturado entre R$ 0,03 e R$ 0,07/litro") | 🟢 IN |
| 2g | Histórico da bacia: últimas 4 recomendações + acerto realizado | 🟢 IN |
| 2h | Recomendação de **valor de bonificação** específico por produtor | 🔴 OUT — Anderson matou na 2ª rodada. "Tabela de bonificação é política comercial, não recomendação de software". |
| 2i | Recomendação de **timing exato** de negociação com cooperativa | 🔴 OUT — Anderson: "quem dita timing é a contraparte". Tirar palavra "timing". |
| 2j | Botão "exportar drivers pro one-pager" | 🟢 IN — Patrícia pediu defesa institucional |

### Tela 3 — Risco de churn por produtor

> ⚠ Tela inteira é **adição estrutural nova** (Fase 3 da jornada) — não foi validada com as personas ainda. Toda esta tela vai pra 3ª rodada como pacote.

| # | Feature candidata | Status |
|---|---|---|
| 3a | Lista de produtores estratégicos ordenada por score de risco de churn (0–100) | 🟡 CONDICIONAL — validar com Anderson se ele aceita "score numérico de produtor" ou prefere classificação categórica (alto / médio / baixo) — risco de soar frio em relação que é de 10–20 anos |
| 3b | Drivers do churn por produtor (movimento concorrência regional, queda de qualidade, tempo sem revisão de bonificação) | 🟢 IN — sem isso o score é black-box |
| 3c | Filtro por bacia, por cooperativa, por volume | 🟢 IN |
| 3d | Histórico do score (subiu/caiu nos últimos 3 ciclos) | 🟢 IN — sinal de tendência, não estado |
| 3e | Anotação manual do Anderson ("já conversei com ele em maio, está firme") que **rebaixa score** | 🟢 IN — co-dono operacional, sparring que aprende |
| 3f | Alerta quando concorrente (Italac, Piracanjuba, Embaré) aumenta coleta em rota próxima | 🟡 CONDICIONAL — depende de sinal observável real (movimento de caminhão de concorrente). Possível via informante/agronegócio mas frágil. Mockar; validar fonte na 3ª rodada |
| 3g | Recomendação automática de **valor de bonificação** pra rebaixar churn | 🔴 OUT — mesma razão de 2h. Sinal só. |
| 3h | Cadastro de visita / histórico de conversa com produtor | 🔴 OUT — vira CRM. Anderson matou. |
| 3i | Botão "enviar mensagem" pro produtor pelo Vereda | 🔴 OUT — Anderson: "se aparecer mensagem da plataforma no celular do seu Joaquim, eu perco produtor". Não conversa com produtor por canal nenhum. |

### Tela 4 — Simulador What-if

| # | Feature candidata | Status |
|---|---|---|
| 4a | 4 sliders fixos: câmbio (BRL/USD), milho futuro, ENSO (La Niña / neutro / El Niño), Mercosul (probabilidade alíquota/cota) | 🟢 IN — limite de 4 é decisão consciente (Anderson: "mais que isso vira videogame") |
| 4b | Forecast, banda, recomendação e drivers SHAP recalculam **em tempo real** ao mexer slider | 🟢 IN — coração do "reagindo a interações" do briefing |
| 4c | Comparação cenário base vs. cenário simulado (delta de R$/litro destacado) | 🟢 IN |
| 4d | Indicador visual "este cenário ultrapassa banda histórica" quando combinação é extrema | 🟢 IN — evita uso como videogame (cobrança da Patrícia: "risco de virar brinquedo executivo que dá conforto falso") |
| 4e | Botão "salvar cenário" → vira anexo do one-pager | 🟢 IN |
| 4f | Texto LLM curto explicando em linguagem natural a mudança ("dólar +5% empurra leite +R$ 0,04/litro principalmente via custo de pó importado") | 🟡 CONDICIONAL — útil mas é o tipo de feature que Patrícia pode questionar como "LLM enfeitando". Decidir se aparece no MVP ou v2. Mockar templates no protótipo. |
| 4g | Sliders adicionais customizáveis pelo usuário | 🔴 OUT — quebra o limite intencional de 4 |
| 4h | Histórico de cenários simulados por usuário | 🔴 OUT — escopo creep, vira "histórico de exploração" sem uso claro |

### Tela 5 — Painel da cooperativa

> ⚠ Tela inteira é **adição estrutural nova** (Fase 6 da jornada) — vai pra 3ª rodada como pacote, junto com a #3.

| # | Feature candidata | Status |
|---|---|---|
| 5a | Lista de cooperativas com pressão de oferta projetada Q+1, Q+2 (déficit / equilíbrio / superávit) | 🟡 CONDICIONAL — validar com Anderson se "projeção de pressão da contraparte" é leitura útil ou se ele já tem pelo telefone com presidente |
| 5b | Drivers da pressão (chuva regional na geografia da cooperativa, rebanho IBGE, preço pago pela cooperativa vs. mercado) | 🟢 IN |
| 5c | Histórico de cláusulas e bandas negociadas — referência pra próxima conversa | 🟡 CONDICIONAL — depende de cadastro de contratos vigentes (dado interno na v1). Esforço de modelagem do dado contratual não-trivial. |
| 5d | Comparação Itambé vs. CCPR vs. outras cooperativas na mesma região | 🟢 IN |
| 5e | "Pauta de negociação sugerida" — lista de pontos baseada nos drivers (sinal, NÃO roteiro) | 🟡 CONDICIONAL — risco de Anderson interpretar como "roteiro de negociação", que ele rejeitou. Validar formato exato com ele |
| 5f | Recomendação de **timing** de negociação | 🔴 OUT — repetido. Quem dita timing é a contraparte. |
| 5g | Canal direto de comunicação com presidente de cooperativa | 🔴 OUT — Vereda não conversa com ninguém de fora |

### Tela 6 — Auditoria / memória de decisão

| # | Feature candidata | Status |
|---|---|---|
| 6a | Taxa de acerto por horizonte (1T/2T/3T), por bacia, por tipo de alavanca | 🟢 IN — requisito não-negociável da Visão |
| 6b | Lista cronológica de recomendações + decisão registrada + resultado realizado | 🟢 IN — trilha auditável formal |
| 6c | Análise de discordância: quantas vezes Anderson recusou, quantas ele estava certo (com base no realizado) | 🟢 IN — vira munição **dele** ("recuso mais e acerto mais que vocês"), evita virar instrumento de pressão |
| 6d | Sinalização visível "modelo recalibrou variável X após sua discordância em ciclo Y" | 🟢 IN — operacionaliza o "sparring que aprende" (Anderson: sem isso é diário de bordo, não sparring) |
| 6e | Filtros pra auditoria interna / board (período, escopo, decisor) | 🟢 IN |
| 6f | Exportação CSV / PDF da trilha | 🟢 IN — Patrícia: requisito de auditoria formal |
| 6g | Quebra de acerto **por pilar** (qual dos 4 pilares tem errado mais) | 🟢 IN — endereça diretamente "correlacionar preditivamente os 4 pilares" do briefing |
| 6h | Sistema de scoring de "qualidade do julgamento do Anderson" | 🔴 OUT — vira avaliação de pessoa, não de modelo. Politicamente tóxico, mata adoção. |

### Tela 7 — One-pager exportável

| # | Feature candidata | Status |
|---|---|---|
| 7a | Versão Comitê de Captação (Anderson apresenta) vs. versão CFO (Patrícia leva) — níveis de detalhe diferentes | 🟢 IN |
| 7b | Hipótese de impacto em R$/litro + banda + probabilidade no topo | 🟢 IN — requisito não-negociável da Patrícia |
| 7c | Drivers principais (top-3, não todos) | 🟢 IN |
| 7d | Taxa de acerto histórica embarcada no corpo do relatório | 🟢 IN |
| 7e | Premissas explícitas listadas (ex.: "considera ENSO neutro; câmbio R$ 5,40; safra MG normal") | 🟢 IN |
| 7f | Geração via LLM com templates pré-escritos (mock no protótipo) | 🟢 IN |
| 7g | Exportação PDF (no MVP, gerar a partir de HTML printável) | 🟢 IN |
| 7h | Slide deck PowerPoint gerado automático | 🔴 OUT — escopo creep. PDF resolve. Patrícia não pediu deck. |
| 7i | Comparação direta com posicionamento de Rabobank / Scot quando disponível | 🟡 CONDICIONAL — mesma lógica de 1f. Mockar uma instância demonstrativa. |

### Tela 8 — "Por que esta solução" (doc de arquitetura embarcado)

> Esta "tela" não é parte da jornada operacional — é o **entregável 2 do briefing** (documento de arquitetura de viabilidade) embarcado no protótipo como aba dedicada. Todas as features abaixo são 🟢 IN por construção: são exigência do briefing, não opcionais.

| # | Feature candidata | Status |
|---|---|---|
| 8a | Diagrama 4 pilares → ingestão → feature store → modelos (SARIMAX + LightGBM) → SHAP → API → front | 🟢 IN |
| 8b | Mapa tela → motor real (atualizado com as 8 telas, substituindo o §5 antigo do estudo preliminar) | 🟢 IN |
| 8c | Lista de fontes reais de dado citadas (CEPEA, NASA POWER, CHIRPS, BCB-SGS, INMET, CONAB, MAPA, Global Dairy Trade) com link | 🟢 IN |
| 8d | Owner do modelo declarado (papel, não pessoa) | 🟢 IN |
| 8e | Plano de piloto — Zona da Mata mineira, 6 meses, métrica de spread R$/litro definida ANTES | 🟢 IN |
| 8f | Hipótese de impacto declarada (R$/litro com banda e probabilidade) | 🟢 IN |
| 8g | Virada da perecibilidade em 3 linhas (diferenciador puro) — abertura do doc | 🟢 IN |

### Cross-cutting / governance (não-tela)

| # | Feature candidata | Status |
|---|---|---|
| C1 | Trilha de auditoria formal de cada recomendação (snapshot do cenário, banda, drivers, decisão, justificativa, resultado realizado) | 🟢 IN — requisito Patrícia |
| C2 | Assinatura nominal do Anderson na recomendação aceita | 🟢 IN — operacionaliza o "co-dono" |
| C3 | Gatilho de escalonamento pra Patrícia se Anderson ignorar 3 recomendações seguidas | 🟢 IN — governance Patrícia, jornada P4 |
| C4 | LLM político em **quarentena**: sinal observado com pauta restrita (Mercosul, Conab, sanitário, tributário MG/GO/PR), aparece como pílula com fonte clicável, **não entra como driver** no motor SHAP | 🟢 IN — convergência forte das duas personas |
| C5 | Indicação visível do owner do modelo na UI ("quem assina embaixo": papel + e-mail) | 🟢 IN — Anderson: "se quebrar às 23h, quem atende?" |
| C6 | Plano de contingência se SAP cair / integração quebrar (degradação graciosa, não tela em branco) | 🟡 CONDICIONAL — importante mas dimensionar no protótipo é overkill; declarar no doc de arquitetura |
| C7 | Login / autenticação real | 🔴 OUT — protótipo. Mock de "Olá, Anderson" basta. |
| C8 | Integração SAP funcionando | 🔴 OUT — declarar dimensionamento no doc de arquitetura (tabelas, frequência, owner de TI, esforço). Não construir. |
| C9 | Notificação por e-mail / Slack / WhatsApp | 🔴 OUT — Anderson rejeita canal pra produtor (regra dura) e não pediu canal pra ele próprio. Patrícia recebe one-pager via e-mail/pasta (pode ser mock). |

---

## 2. Convergência — síntese das features que sobrevivem

Total: ~50 features brutas listadas → **34 🟢 IN, 9 🟡 CONDICIONAL, ~15 🔴 OUT**.

### Features 🟢 IN agrupadas por tema (insumo direto do Sequenciador e Canvas MVP)

**Panorama e forecast (4 pilares cruzados):** 1a, 1b, 1c, 1d, 1e
**Recomendação explicável (SHAP visível):** 2a, 2b, 2c, 2d, 2e, 2f, 2g, 2j, 6g
**Risco competitivo:** 3b, 3c, 3d, 3e
**Simulação what-if (interativa):** 4a, 4b, 4c, 4d, 4e
**Subsídio à negociação com cooperativa:** 5b, 5d
**Memória e auditoria:** 6a, 6b, 6c, 6d, 6e, 6f
**Defesa institucional (one-pager):** 7a, 7b, 7c, 7d, 7e, 7f, 7g
**Documento de arquitetura embarcado:** 8a–8g (bloco completo)
**Governance:** C1, C2, C3, C4, C5

### Features 🟡 CONDICIONAL — vão pra 3ª rodada como perguntas concretas

1. **1f / 7i — Comparação com Rabobank / Scot.** Anderson pediu. Custo de produção alto (parser de PDF de terceiros). MVP mockaria uma instância pra demonstrar.
2. **3a — Score numérico de churn por produtor.** Validar se Anderson aceita escala 0–100 ou prefere categórica (alto/médio/baixo). Risco de soar frio.
3. **3f — Alerta de movimento da concorrência em rota próxima.** Depende de sinal observável real. Fonte frágil.
4. **4f — Texto LLM explicando mudança no what-if.** Risco de Patrícia questionar como "LLM enfeitando".
5. **5a — Pressão projetada da cooperativa.** Anderson já tem pelo telefone com o presidente? Marginal?
6. **5c — Histórico de cláusulas negociadas.** Esforço de modelagem do dado contratual.
7. **5e — Pauta de negociação sugerida.** Risco de virar "roteiro de negociação" rejeitado pelo Anderson.
8. **C6 — Plano de contingência se SAP cair.** Importante mas dimensionar no protótipo é overkill.

### Features 🔴 OUT — declarar morte explícita pra blindar contra escopo creep

- Recomendação de **valor** de bonificação (2h, 3g).
- Recomendação de **timing** de negociação (2i, 5f).
- Ranking automático de bacias (1g).
- Notificação push diária (1h).
- Cadastro / canal de comunicação com produtor (3h, 3i, 5g, C9 parcial).
- Histórico ilimitado de cenários what-if (4h).
- Sliders customizáveis (4g).
- Scoring do julgamento do Anderson (6h).
- Slide deck PowerPoint (7h).
- Login real, integração SAP funcionando, notificação por canal (C7, C8, C9).

---

## 3. O que isto significa pro protótipo (preview do Canvas MVP)

Sem ainda priorizar formalmente (isso é o próximo passo), o brainstorm já indica o seguinte:

- **As 8 telas da matriz §3 da jornada se mantêm como mapa de navegação do MVP.**
- **Densidade muito alta** nas Telas 2 (recomendação) e 4 (what-if) — são onde a IA fica mais visível e mais aderente ao briefing ("correlacionar 4 pilares" e "reagindo a interações"). Concentrar polish aqui.
- **Telas 3 (churn) e 5 (cooperativa)** carregam o maior risco de escopo: validar **inteiramente** na 3ª rodada antes de qualquer linha de código.
- **Tela 8** (doc de arquitetura embarcado) é entregável obrigatório do briefing — não negociável.
- **Cross-cutting C1–C5** atravessam todas as telas — modelar no protótipo como camada de UX consistente (assinatura, trilha, owner, quarentena LLM).

---

## 4. Insumos pra 3ª rodada de validação

Mandar **em paralelo** pros dois subagents (`@anderson-comprador` e `@patricia-diretora`) com perguntas direcionadas. Não é "valida tudo isso" (resposta vaga = teatro). É:

### Pro Anderson (5 perguntas concretas)

1. **Tela de risco de churn (Fase 3 da jornada).** Você usaria score numérico por produtor (0–100) ou prefere categoria (alto/médio/baixo)? Por quê?
2. **Tela de cooperativa (Fase 6).** A "projeção de pressão de oferta da contraparte" te ajuda na conversa com presidente da Itambé, ou você já tem isso pelo telefone? Vale a tela?
3. **Pauta de negociação sugerida (5e).** Qual formato evita parecer "roteiro de negociação" (que você rejeitou)? Lista de tópicos? Resumo de drivers? Outra coisa?
4. **Alerta de movimento da concorrência (3f).** Existe fonte observável real (movimento de caminhão de concorrente, oferta pública) ou isso é só boato de campo? Vale tentar?
5. **Anotação manual sua que rebaixa score de churn (3e).** Como você descreveria isso pra ficar útil sem virar trabalho a mais? Frase livre? Checkbox?

### Pra Patrícia (3 perguntas concretas)

1. **Comparação automática com Rabobank / Scot no one-pager (7i).** Você quer ver explicitamente quando a recomendação contradiz esses relatórios, ou prefere que o Vereda se mantenha agnóstico? Risco de cada lado?
2. **Texto LLM explicando mudança no what-if (4f).** Isso te ajuda a defender no Comitê ou abre flanco ("o LLM falou X")? Em que condição vale entrar?
3. **Gatilho de escalonamento (C3) — 3 recomendações ignoradas seguidas.** Qual o ritual da sua intervenção? Conversa privada? Pauta de S&OP? E qual a contagem que faz sentido — 3, 5, percentual?

---

## 5. Próximo passo

Disparar as duas entrevistas paralelas com os subagents (3ª rodada de validação) usando as perguntas acima. Registrar em `docs/discovery/04-validacao-features.md`. Depois disso, **Sequenciador de MVP** (matriz esforço × valor) e **Canvas MVP**.
