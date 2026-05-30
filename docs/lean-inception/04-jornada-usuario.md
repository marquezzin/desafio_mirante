# Jornada do Usuário — Vereda

> Etapa 4 do Lean Inception. Duas jornadas: **Anderson** num ciclo trimestral típico **pré-entressafra** (primária, longa) e **Patrícia** no ciclo do **Comitê S&OP** (secundária, curta).
>
> Princípio: jornada **operacional ancorada no calendário safra/entressafra**, não fluxo genérico de UI. Vereda **se encaixa em rituais que já existem** (Comitê de Captação mensal, S&OP, conversa com cooperativa) — não cria ritual novo. Onde o produto NÃO entra é tão importante quanto onde entra.

---

## 0. Premissa do calendário (por que pré-entressafra)

A janela onde a estratégia de captação se ganha ou se perde no laticínio Sudeste/Centro-Oeste é **abril–junho**, três meses antes do aperto seco de **julho–setembro**. É nessa janela que:

- bonificação extra precisa estar **comunicada ao produtor** (e provocando efeito de fidelização) com antecedência suficiente pra valer no pico;
- cláusula de banda com cooperativa precisa estar **assinada**, porque jurídico leva 60+ dias;
- substituição parcial de matéria-prima (leite em pó Mercosul) precisa estar **dimensionada** com Industrial e Marketing antes do câmbio piorar a equação;
- mix de captação por bacia precisa estar **acordado** com Industrial pra não chocar capacidade fabril.

Decisão tomada em **julho** já é reativa — spread evapora. Por isso a jornada do Anderson abaixo cobre **Abril → Junho de um ano-tipo** (Q2 calendário), com olhar em Q3 (entressafra). É o ciclo mais crítico do ano dele.

Anderson opera quatro ciclos por ano, mas o pré-entressafra é o que mais tensiona o sistema — qualquer ferramenta que sobreviva a esse ciclo sobrevive aos outros três.

---

## 1. Jornada do Anderson — ciclo trimestral pré-entressafra

Persona: `docs/lean-inception/03-personas.md` §Persona 1. Linha do tempo abaixo cobre **Abril–Junho** de um ano-tipo, preparando captação para a entressafra de **Julho–Setembro**. Fábricas em MG, GO, PR; bacia foco do piloto = **Zona da Mata mineira**.

### Fase 1 — Abertura do ciclo (1ª semana de Abril · T-90 dias da entressafra)

| Item | Detalhe |
|---|---|
| **Atividade** | Anderson revisa fechamento de Q1 (captação realizada vs. plano), lê últimos boletins INMET, CEPEA da semana, e tenta antecipar "como vai ser essa entressafra". Café com técnico de campo. |
| **Sentimento** | Ansiedade pré-corrida. "Vou conseguir blindar de novo, ou vou tomar porrada igual 2024?" |
| **Onde o Vereda entra** | **Tela inicial — painel trimestral por bacia** (forecast preço CEPEA Q3 + banda de confiança + taxa de acerto histórica do horizonte 1T/2T/3T). Anderson abre, lê em 3 min, vê quais bacias estão com sinal claro e quais estão com **banda larga / alerta de incerteza alta**. |
| **Onde o Vereda NÃO entra** | Não substitui o café com técnico de campo. Não puxa boletim INMET pra dentro como se fosse próprio — cita fonte clicável e mantém o Anderson na fonte primária quando ele quiser. |
| **Artefato gerado** | Snapshot do painel inicial (guardado pra rastreabilidade). |
| **Próxima conversa que alimenta** | Reunião quinzenal com técnico de campo (informal, sem ritual fixo). |

### Fase 2 — Diagnóstico por bacia (2ª e 3ª semana de Abril)

| Item | Detalhe |
|---|---|
| **Atividade** | Para cada bacia que importa (MG centro-oeste, Zona da Mata, Triângulo, Sul Goiás, Oeste PR), Anderson cruza: preço esperado × **qualidade laboratorial** (CCS/CBT/gordura/proteína por produtor estratégico) × **rota de captação** (ociosidade, R$/litro de frete) × **contratos vigentes** (o que está amarrado, o que está livre). |
| **Sentimento** | Concentração técnica. É o momento em que se sente útil — sabe coisa que ninguém na empresa sabe. |
| **Onde o Vereda entra** | **Tela de recomendação por bacia** com decomposição por pilar (SHAP: quanto clima, milho, ENSO, política Mercosul, CEPEA defasado, risco competitivo empurraram). Cruza nativamente com qualidade laboratorial e rota de captação. Anderson pode **aceitar, ajustar pressuposto, ou recusar com justificativa** — discordância vai pra recalibração no ciclo seguinte. |
| **Onde o Vereda NÃO entra** | Não fala com produtor. Não sugere visita de campo. Não tenta substituir o que Anderson sabe sobre Seu Joaquim de Patos ("este aqui está pra vender pra Italac há seis meses, modelo não pega"). |
| **Artefato gerado** | Lista de recomendações por bacia com status (aceita / ajustada / recusada) e drivers visíveis. **Trilha auditável formal** começa aqui. |
| **Próxima conversa que alimenta** | Pré-Comitê interno (Fase 4). |

### Fase 3 — Identificação de risco competitivo (final de Abril)

| Item | Detalhe |
|---|---|
| **Atividade** | Anderson tenta ler movimento da concorrência — Italac, Piracanjuba, Embaré entraram em alguma bacia ofertando mais? Algum produtor estratégico já sinalizou que vai sair? WhatsApp com técnicos de campo, telefone com presidente de cooperativa, observação de campo. |
| **Sentimento** | Estresse. "Se eu perder a linha do Seu Joaquim, perco os três vizinhos em 90 dias." |
| **Onde o Vereda entra** | **Sinal de pressão competitiva e risco de churn por produtor estratégico** — Vereda cruza variáveis observáveis (movimento de coleta de concorrente na região, projeção de oferta da concorrência, sinal econômico-regional) e gera **score de risco de perda por produtor**. **NÃO** sugere valor de bonificação — sinaliza onde o fogo está. Anderson decide se mexe e como. |
| **Onde o Vereda NÃO entra** | Não conversa com produtor por nenhum canal (sem WhatsApp, sem SMS, sem e-mail, sem notificação direta). Relação é do Anderson e do técnico de campo. |
| **Artefato gerado** | Lista de produtores estratégicos com risco de churn classificado (alto/médio/baixo), com drivers explicáveis ("Italac aumentou coleta em rota X em 14% nas últimas 6 semanas; produtor Y está há 8 anos sem revisão de bonificação"). |
| **Próxima conversa que alimenta** | Conversa informal com técnico de campo; subsídio pro pré-Comitê. |

### Fase 4 — Pré-Comitê de Captação interno (1ª semana de Maio)

| Item | Detalhe |
|---|---|
| **Atividade** | Anderson formula propostas pro Comitê: mix de captação Q3 por bacia, proposta de bonificação extra (tabela desenhada por ele), pauta de negociação com Itambé/CCPR, sinal de Mercosul que precisa ir pra mesa de Industrial e Marketing. Usa what-if pra testar cenários ("e se o dólar for a 5,80 e La Niña confirmada?"). |
| **Sentimento** | Pressão de preparação. É a hora de transformar leitura em proposta defensável. |
| **Onde o Vereda entra** | **Tela de simulação what-if** com 4 sliders (câmbio BRL/USD, milho futuro, ENSO categórico La Niña/neutro/El Niño, Mercosul probabilidade de alíquota/cota) — mostra como cada cenário muda a recomendação por bacia. Sliders limitados de propósito (mais que 4 vira videogame de diretor). |
| **Onde o Vereda NÃO entra** | Não desenha a tabela de bonificação por produtor — Anderson desenha. Não escreve a pauta de negociação com cooperativa — Anderson escreve. Não decide substituição de pó Mercosul sozinho — é S&OP com Industrial e Marketing. |
| **Artefato gerado** | **One-pager exportável de defesa pro Comitê** — versão Anderson: recomendação por bacia + bonificação proposta + sinal de cooperativa + sinal Mercosul, com hipótese de impacto em R$/litro, banda e drivers. |
| **Próxima conversa que alimenta** | Comitê de Captação mensal (Fase 5). |

### Fase 5 — Comitê de Captação mensal (2ª semana de Maio)

| Item | Detalhe |
|---|---|
| **Atividade** | Ritual existente. Anderson apresenta proposta de Q3 pra Patrícia + Diretor Industrial + Diretor Comercial + analista de S&OP. Debate sobre bonificação extra, mix por bacia, exposição cambial, sinal Mercosul. |
| **Sentimento** | Tensão controlada. "Se eu não tiver argumento factual, Industrial me corta a bonificação alegando CMV." |
| **Onde o Vereda entra** | **One-pager projetado em tela** durante o Comitê. Anderson abre tela de recomendação ao vivo se alguém questiona driver específico ("por que você acha que o leite vai estar 12% mais caro em agosto?"). Taxa de acerto histórica exposta serve de blindagem contra "modelo nunca acerta". |
| **Onde o Vereda NÃO entra** | Não substitui o Comitê. Não vota. Não decide. É insumo qualificado pra deliberação humana — Patrícia decide o que vai pro Comitê Executivo, Anderson assina embaixo. |
| **Artefato gerado** | Decisão do Comitê registrada na trilha auditável (aceito / ajustado / recusado, com motivo) + **assinatura nominal do Anderson** na recomendação aceita. |
| **Próxima conversa que alimenta** | Negociação com cooperativa (Fase 6); bonificação operacionalizada (Fase 7); pauta S&OP da Patrícia (Jornada 2). |

### Fase 6 — Negociação com cooperativa (3ª e 4ª semana de Maio)

| Item | Detalhe |
|---|---|
| **Atividade** | Anderson liga pro presidente da Itambé, almoça, fala da família, encosta no assunto: revisão de cláusula de banda, compromisso de volume Q3, condições de qualidade. Não controla timing — quem dita é a cooperativa. |
| **Sentimento** | Diplomacia. Relação de 12 anos. "Não posso entrar com cara de software." |
| **Onde o Vereda entra** | **Subsídio à negociação** — Anderson abre antes da reunião o painel da cooperativa: projeção de pressão de volume da contraparte ("Itambé com déficit projetado em Goiás por seca; vai entrar apertada no Q3"), histórico de cláusulas, posicionamento de banda. Chega na conversa com a faca certa. |
| **Onde o Vereda NÃO entra** | Não gera roteiro de negociação. Não recomenda timing ("negocie agora"). Não fala com cooperativa por nenhum canal. Não substitui a relação de Anderson com o presidente. |
| **Artefato gerado** | Anotação do Anderson na trilha: cláusula proposta, contrapartida obtida, justificativa. (Re-calibra modelo no próximo ciclo.) |
| **Próxima conversa que alimenta** | Fechamento jurídico do aditivo contratual (fora do escopo do Vereda). |

### Fase 7 — Definição e comunicação de bonificação (Junho)

| Item | Detalhe |
|---|---|
| **Atividade** | Com base no sinal de risco de churn (Fase 3) + decisão do Comitê (Fase 5), Anderson desenha **a tabela de bonificação** por bacia / por faixa de qualidade (CCS, CBT, gordura, proteína). Política comercial passa por ele, Patrícia, jurídico e — quando mexe em CMV — CFO. Depois é comunicada via técnico de campo e contrato escrito. |
| **Sentimento** | Responsabilidade. "Mudei o bônus do Zé, vizinho fica sabendo na semana. Efeito de manada." |
| **Onde o Vereda entra** | Vereda mostra **o sinal** que justifica a tabela (pressão competitiva, risco de churn, sazonalidade de qualidade na seca — CCS sobe, gordura sobe, proteína cai), mas **não cria a tabela**. Registro da decisão na trilha auditável. |
| **Onde o Vereda NÃO entra** | Não calcula valor de bonificação. Não comunica produtor. Não emite contrato (continua no SAP / jurídico). Não opera CRM (sem cadastro de visita, sem histórico de conversa). |
| **Artefato gerado** | Tabela final de bonificação Q3 assinada por Anderson, com **sinal Vereda que motivou cada faixa** anexado pra auditoria. |
| **Próxima conversa que alimenta** | Comunicação operacional com técnico de campo (fora do escopo); registro no SAP. |

### Fase 8 — Acompanhamento e re-calibração (durante Q3, Jul–Set)

| Item | Detalhe |
|---|---|
| **Atividade** | Entressafra rodando. Anderson acompanha realizado vs. recomendado por semana. Onde o modelo errou, ele anota por quê (sinal não capturado, contexto local, evento idiossincrático). |
| **Sentimento** | Vigilância. "Se quebrar em julho, o telefone toca às 23h — quem atende?" |
| **Onde o Vereda entra** | **Tela de auditoria / memória de decisão** — taxa de acerto realizada vs. histórica por horizonte, por bacia, por tipo de alavanca. Painel atualiza semanalmente. Discordância anotada por Anderson vira **input de re-calibração do modelo no ciclo seguinte** (sparring que aprende, não diário de bordo). |
| **Onde o Vereda NÃO entra** | Não gera ordem de compra (SAP). Não substitui o telefone do produtor. Não esconde quando errou — alerta "modelo sem sinal claro, decida no relacionamento" continua visível em bandas largas. |
| **Artefato gerado** | Log de variância por recomendação, com causa atribuída (modelo / contexto / execução). Insumo pro Comitê de outubro (fechamento de ciclo). |
| **Próxima conversa que alimenta** | Próximo ciclo trimestral (Q4 prep para Q1 águas-cheias) e Comitê S&OP da Patrícia. |

---

## 2. Jornada da Patrícia — ciclo do Comitê S&OP

Persona: `docs/lean-inception/03-personas.md` §Persona 2. Patrícia **não opera o Vereda no dia-a-dia** — ela consome dois artefatos (one-pager + painel de auditoria) e usa em três momentos do mês. Jornada de propósito mais curta — sponsor não opera ferramenta operacional, sponsor consome saída sintetizada.

### Momento P1 — Recebimento do one-pager pré-S&OP (mensal · D-3 do Comitê)

| Item | Detalhe |
|---|---|
| **Atividade** | Três dias úteis antes do Comitê de S&OP mensal, Patrícia recebe (e-mail ou pasta compartilhada) o **one-pager exportável de defesa pro Comitê** — versão sintética com: hipótese de impacto em R$/litro com banda e probabilidade, drivers principais por pilar, taxa de acerto histórica do horizonte, premissas explícitas, decisões do Anderson registradas. |
| **Sentimento** | Cobrança. "Trinta minutos pra digerir. Se vier confuso, eu não levo." |
| **Onde o Vereda entra** | One-pager é **artefato concreto exportável** (PDF ou aba dedicada do protótipo). Patrícia lê na agenda apertada dela, anota perguntas pro Anderson. |
| **Onde o Vereda NÃO entra** | Não toma decisão por ela. Não substitui o relatório RaboResearch / Scot que ela lê em paralelo — mas **dialoga** com essas fontes (se a recomendação contradisser Rabobank, o one-pager explica por quê). |
| **Artefato consumido** | One-pager + (opcional) painel de auditoria pra checar histórico de acerto da bacia que mais expõe variância. |

### Momento P2 — Comitê S&OP mensal (mensal · D0)

| Item | Detalhe |
|---|---|
| **Atividade** | Patrícia preside. Anderson apresenta proposta de captação Q+1 / Q+2 / Q+3 com o one-pager. Industrial fala de capacidade, Comercial fala de pricing, Marketing fala de posicionamento. Patrícia decide o que vai pro Comitê Executivo e o que precisa de aprovação adicional do CFO. |
| **Sentimento** | Foco institucional. "Meu nome vai embaixo. Tenho que poder defender." |
| **Onde o Vereda entra** | One-pager projetado, painel de auditoria acessível ao vivo se alguém questiona acerto histórico. **Trilha auditável** dá segurança contra "modelo nunca acerta" — Patrícia consegue puxar safra anterior e mostrar realizado. |
| **Onde o Vereda NÃO entra** | Não substitui o S&OP. Não vota. Não decide alocação de capacidade industrial. Sinal Mercosul aparece como **um dos insumos** da decisão colegiada — não recomendação isolada de captação. |
| **Artefato gerado** | Decisão do Comitê S&OP registrada (institucional, fora do Vereda) + **assinatura da Patrícia** na recomendação que vai pro CFO (se houver investimento adicional). |

### Momento P3 — Comitê Executivo / defesa pro CFO (mensal · D+5 a D+10)

| Item | Detalhe |
|---|---|
| **Atividade** | Quando o ciclo de captação demanda investimento adicional (bonificação extra acima de orçamento, compra spot de pó Mercosul, contrato de banda mais largo com cooperativa), Patrícia leva pro Comitê Executivo. CFO cobra business case: payback, impacto em COGS, banda de cenário, probabilidade. |
| **Sentimento** | Defesa institucional. "Hipótese tem que estar declarada antes, não justificada depois." |
| **Onde o Vereda entra** | **Hipótese de impacto em R$/litro com banda e probabilidade declarada** sai do one-pager direto pro slide do CFO. Drivers SHAP por pilar viram justificativa técnica. Taxa de acerto histórica vira credenciamento ("nas últimas 4 entressafras o modelo acertou direção em 3, ficou abaixo da banda em 1"). |
| **Onde o Vereda NÃO entra** | Não substitui o business case completo (que Patrícia monta com Controladoria). Não conversa com CFO. Não substitui a defesa institucional dela. |
| **Artefato consumido** | One-pager + extrato de auditoria histórica. |

### Momento P4 — Gatilho de escalonamento (eventual · 1ª ocorrência)

| Item | Detalhe |
|---|---|
| **Atividade** | Se Anderson **ignorar 3 recomendações seguidas** sem justificativa registrada (definido na governance do MVP), Vereda dispara alerta pra Patrícia. Patrícia chama Anderson pra entender — é desconforto operacional? perda de confiança? sinal de que o modelo está calibrado errado pra alguma bacia? |
| **Sentimento** | Sponsor cobrando uso, não punindo. Patrícia tem cicatriz do BI de 2019 — quer **detectar morte por desuso antes** que se consolide. |
| **Onde o Vereda entra** | Apenas o **alerta** (notificação ou item no painel da Patrícia). Não envia para Anderson, não cria conflito automático. |
| **Onde o Vereda NÃO entra** | Não pune Anderson. Não força aceitação. Não vira ferramenta de gestão de pessoas. Não conversa direto com nenhum dos dois — é sinal pro sponsor agir como sponsor. |
| **Artefato gerado** | Log de escalonamento (snapshot das 3 recomendações ignoradas, contexto, sinal de cada uma) — insumo da conversa. |

---

## 3. Mapa de artefatos ↔ telas do protótipo (entrada pra Fase 4)

Cada momento da jornada dispara uma **tela** ou um **artefato exportável**. Esta matriz vira insumo direto pro brainstorm de features e pro Canvas MVP — não é decorativa.

| Momento da jornada | Persona | Tela / artefato Vereda | Estado do sinal |
|---|---|---|---|
| Fase 1 — Abertura do ciclo | Anderson | Tela inicial: painel trimestral por bacia (forecast + banda + acerto histórico) | Visão panorâmica |
| Fase 2 — Diagnóstico por bacia | Anderson | Tela de recomendação por bacia (drivers SHAP, aceitar/ajustar/recusar) | Acionável |
| Fase 3 — Risco competitivo | Anderson | Tela de risco de churn por produtor estratégico (score + drivers) | Diagnóstico |
| Fase 4 — Pré-Comitê | Anderson | Tela what-if (4 sliders: câmbio, milho, ENSO, Mercosul) + exportação do one-pager | Cenarização |
| Fase 5 — Comitê de Captação | Anderson | One-pager projetado + tela de recomendação ao vivo (quando questionado) | Defesa |
| Fase 6 — Negociação cooperativa | Anderson | Painel da cooperativa: pressão de volume da contraparte, histórico de cláusulas | Subsídio |
| Fase 7 — Bonificação | Anderson | Sinal de pressão competitiva + sazonalidade de qualidade (anexado à tabela manual do Anderson) | Justificativa |
| Fase 8 — Acompanhamento | Anderson | Painel de auditoria: realizado vs. recomendado, taxa de acerto, anotação de discordância | Aprendizado |
| Momento P1 — Pré-S&OP | Patrícia | One-pager exportável (PDF / aba dedicada) | Síntese |
| Momento P2 — Comitê S&OP | Patrícia | One-pager projetado + painel de auditoria acessível | Defesa colegiada |
| Momento P3 — Defesa pro CFO | Patrícia | Hipótese de impacto + drivers + acerto histórico (extraído do one-pager) | Business case |
| Momento P4 — Escalonamento | Patrícia | Alerta de 3 recomendações ignoradas + snapshot | Governance |

**Telas essenciais do protótipo (consolidado):**

1. **Painel trimestral por bacia** (Fase 1)
2. **Tela de recomendação por bacia** com drivers SHAP e aceitar/ajustar/recusar (Fases 2, 5)
3. **Tela de risco de churn por produtor** (Fase 3)
4. **What-if com 4 sliders** (Fase 4)
5. **Painel da cooperativa** (Fase 6) — pode ser uma seção da tela de recomendação por bacia, ou tela própria; decidir no Canvas MVP
6. **Painel de auditoria / memória de decisão** (Fase 8 + Momento P2)
7. **One-pager exportável** (Fase 4 → Momentos P1/P2/P3) — é a ponte concreta Anderson↔Patrícia
8. **Aba "Por que esta solução"** — documento de arquitetura de viabilidade embarcado (fora da jornada operacional, mas obrigatório no entregável)

Esta lista substitui a sugestão preliminar do `ROADMAP.md §4 — Fase 4`. A diferença material: incluímos **risco de churn por produtor** (Fase 3) e **painel da cooperativa** (Fase 6) como telas próprias, e tratamos o **one-pager exportável como artefato de primeira classe** — não anexo.

---

## 4. Onde o Vereda NÃO entra em NENHUMA fase (negative space)

Reforço pra evitar drift no protótipo. Nada disso deve aparecer em tela alguma:

- **Conversa direta com produtor** — nenhum canal, em momento nenhum.
- **CRM de produtor** — sem cadastro de visita, sem histórico de conversa, sem agenda de relacionamento.
- **Ordem de compra / nota fiscal / pagamento** — continua no SAP.
- **Decisão automática** — toda recomendação espera humano.
- **Previsão de demanda de produto acabado** — fora do escopo.
- **Cláusula CEPEA em contrato B2B de saída** — fora do escopo.
- **Recomendação de valor de bonificação** — só sinal de pressão; Anderson desenha a tabela.
- **Recomendação de timing de negociação com cooperativa** — só leitura antecipada de pressão da contraparte.
- **Driver direto vindo de LLM político** — fica em quarentena (sinal observado com pauta restrita, sem peso no motor de recomendação) até provar acurácia em ciclo controlado.

---

## 5. Próximos passos (encadeamento com o roadmap)

Esta jornada é **entrada direta** pra:

1. **Brainstorm de features** (`ROADMAP.md §4 — Fase 3`) — cada tela da matriz §3 vira candidata, filtrada pelo princípio de corte do `02-e-nao-e-faz-nao-faz.md`.
2. **Revisão das features com as personas** (3ª rodada de validação) — submeter a matriz §3 e perguntar kill/keep/ajustar com motivo. Atenção especial à Fase 3 (risco de churn) e Fase 6 (painel de cooperativa), que são adições estruturais não testadas ainda com os subagents.
3. **Wireframe e protótipo HTML/CSS/JS** (`ROADMAP.md §4 — Fase 4`) — a matriz §3 vira mapa de navegação direto.

Convergência forte com o que já está no roadmap. Divergência consciente: adicionamos duas telas (risco de churn por produtor, painel de cooperativa) que precisam ser validadas com Anderson antes de irem pro protótipo — risco de inflar escopo.
