# Roadmap do Desafio — Designer de Soluções Digitais (AI-First) · Setor de Laticínios

> Documento de continuidade do projeto. Estado em **2026-05-30**.
> Autossuficiente: aponta pros artefatos certos quando precisar de profundidade.

---

## 1. Contexto rápido

- **Vaga:** Designer de Soluções Digitais (AI-First). Não é vaga de DS/ML. Avaliam concepção de solução, jornada, prompt engineering, ética/transparência em IA, ponte negócio↔tecnologia. Detalhes em `docs/vaga.md`.
- **Desafio:** Indústria de laticínios sofre com volatilidade do preço do leite cru. Conceber uma solução de IA que correlacione preditivamente 4 pilares (Político, Econômico, Climático, Agropecuário) para apoiar o comprador. Enunciado original em `docs/desafio.md`.
- **Entregável obrigatório (pelo briefing):**
  1. **Protótipo funcional em HTML/CSS/JS** (não slides, não Figma). Simula a experiência do comprador. A "inteligência" da IA é **simulada no front-end**.
  2. **Documento de arquitetura de viabilidade** (1 página). Mostra que cada tela do protótipo tem um motor real construível por trás — é o que diferencia "arquiteto de soluções" de "designer que promete o que soa bonito".
- **Forma de entrega:** **um único link**. O VP que vai avaliar tem 5–10 min por candidato; ele abre o link, navega 2–3 telas, lê (ou não) o doc. O Lean Inception inteiro **não é entregue** — vira motor interno + munição pra defesa oral, se chamarem pra entrevista.

---

## 2. Como ler este repo

```
desafio/
├── ROADMAP.md                          ← VOCÊ ESTÁ AQUI
├── docs/
│   ├── desafio.md                      Enunciado original do desafio
│   ├── vaga.md                         Descrição da vaga
│   ├── 00-estudo-preliminar.md         Estudo de contexto do setor e
│   │                                   enquadramento do problema. §2 (virada
│   │                                   da perecibilidade) e §5 (arquitetura
│   │                                   de viabilidade) são a espinha técnica
│   │                                   do produto.
│   ├── discovery/
│   │   ├── 00-sintese.md               Cruzamento das entrevistas com as
│   │   │                               personas: premissas validadas/refutadas
│   │   │                               e insights novos que mudaram o produto.
│   │   ├── 01-entrevista-anderson.md   Transcrição integral 1ª rodada
│   │   ├── 02-entrevista-patricia.md   Transcrição integral 1ª rodada
│   │   └── 03-validacao-docs.md        Validação 2ª rodada: Anderson e
│   │                                   Patrícia criticando Visão + É/Não É.
│   │                                   ENTRADA PRO PATCH dos docs do Lean.
│   └── lean-inception/
│       ├── 01-visao-produto.md         Visão do Produto. Nome cravado: Vereda.
│       ├── 02-e-nao-e-faz-nao-faz.md   Escopo.
│       └── 03-personas.md              Personas no formato canvas Lean.
└── .claude/
    └── agents/
        ├── anderson-comprador.md       Subagent: Gerente de Captação (chão).
        └── patricia-diretora.md        Subagent: Diretora de Suprimentos (exec).
```

---

## 3. Princípios não-negociáveis

Filtre qualquer decisão futura por estes princípios. Eles estão validados pelas personas; revisar significa abrir nova rodada de discovery.

1. **A virada da perecibilidade é a espinha do produto.** Leite cru não permite estocar nem "esperar o preço cair". O Vereda **NÃO** é previsor de buy/wait, NÃO é hedge financeiro. É apoio à **estratégia trimestral de captação** (alocação, bonificação pré-entressafra, antecipação de cláusula com cooperativa, substituição parcial de matéria-prima). Ver `docs/00-estudo-preliminar.md` §2 e `docs/lean-inception/02-e-nao-e-faz-nao-faz.md`.
2. **A IA é simulada no front-end** (regra do briefing). Não construir backend real, não treinar modelo. Mas **toda tela precisa ter um motor real plausível** documentado no doc de arquitetura. Mapa tela→motor em `docs/00-estudo-preliminar.md` §5.
3. **Citar fontes de dado reais** (CEPEA, BCB-SGS, INMET, NASA POWER, CHIRPS, CONAB, MAPA, Global Dairy Trade). Mesmo com dado mockado no protótipo. Lista em `docs/00-estudo-preliminar.md` §4.
4. **Ética/transparência/honestidade de incerteza são features visíveis**, não disclaimer. Banda de confiança em todo forecast, drivers SHAP por pilar, taxa de acerto histórica exposta na UI, alerta quando incerteza está alta. Isso ganha pontos diretos na vaga.
5. **Anderson como co-dono, não vítima.** UI permite anotar discordância, ajustar pressuposto, recusar com justificativa. Sem isso, Patrícia cita o "BI de 2019 que morreu" e mata o projeto.
6. **Entrega final é 1 link. Lean Inception não é entregue.** Ele aparece como resposta de defesa de 30s se perguntarem "como você chegou aqui?". Não criar Miro/Figma do Caroli — tempo aí sai do protótipo.

---

## 4. Estado atual e roadmap

Legenda: ✅ feito · ⏳ em andamento (próximo) · ⬜ pendente

### Fase 1 — Discovery e enquadramento

- [x] **Ler briefing, vaga e enquadrar o problema.** ✅
  - Output: `docs/00-estudo-preliminar.md` §1–§3.
  - Insight central capturado: a virada da perecibilidade.
- [x] **Criar personas simuladas como sparring de discovery.** ✅
  - Output: `.claude/agents/anderson-comprador.md` e `.claude/agents/patricia-diretora.md`.
  - Decisão metodológica: como não dá pra rodar discovery com stakeholders reais, usamos LLMs adversariais ancorados em fatos do setor pra estressar premissas. Isso vira também demonstração de prompt engineering aplicado a discovery — responsabilidade explícita do JD.
- [x] **1ª rodada de entrevistas (discovery exploratória).** ✅
  - Output: `docs/discovery/00-sintese.md`, `01-entrevista-anderson.md`, `02-entrevista-patricia.md`.
  - Premissas do estudo preliminar §6 validadas/refutadas. 6 insights novos.

### Fase 2 — Lean Inception (artefatos)

- [x] **Visão do Produto.** ✅
  - Output: `docs/lean-inception/01-visao-produto.md`.
  - Nome cravado: **Vereda**. Alternativas (Lume, Norte) ficam abertas pra revisão.
- [x] **É / Não É / Faz / Não Faz.** ✅
  - Output: `docs/lean-inception/02-e-nao-e-faz-nao-faz.md`.
- [x] **Personas (formato canvas Lean).** ✅
  - Output: `docs/lean-inception/03-personas.md`.
  - Anderson = usuário primário. Patrícia = sponsor + usuário secundário.
- [x] **Validação dos artefatos com as personas (2ª rodada).** ✅
  - Output: `docs/discovery/03-validacao-docs.md`.
  - Ambos aprovam a espinha mas pediram patches importantes (alguns convergentes — alto sinal).

### Fase 3 — Patch e fechamento do Lean Inception ⏳ EM ANDAMENTO

- [x] **Patch da Visão do Produto e do É/Não É/Faz/Não Faz.** ✅ (2026-05-30)
  - Entrada: tabela e listas em `docs/discovery/03-validacao-docs.md` (seção "Síntese de mudanças").
  - Output: edits cirúrgicos em `docs/lean-inception/01-visao-produto.md` e `02-e-nao-e-faz-nao-faz.md` cobrindo todas as convergências de Anderson + Patrícia.
  - Itens aplicados:
    - Bonificação reposicionada como **sinal de pressão competitiva + risco de perda de produtor** (Anderson desenha a tabela).
    - LLM político em **quarentena** com pauta restrita — sinal observado, não driver direto.
    - Fontes internas na v1: qualidade laboratorial por produtor, linha/rota de captação, contratos vigentes, capacidade fabril.
    - Variáveis novas: risco de churn pro concorrente; sazonalidade de qualidade na seca; capacidade fabril como restrição.
    - "Não conversa direto com produtor por canal nenhum" (sem WhatsApp/SMS).
    - One-pager exportável de defesa pro Comitê (artefato concreto).
    - Co-dono virou accountability operacional explícita (assinatura nominal + gatilho de escalonamento se ignorar 3 recomendações).
    - Tempo de reação interno como requisito não-negociável (janela de antecedência no S&OP).
    - "Diferente de intuição" → "complementa o julgamento de campo com leitura sistematizada".
    - Hipótese de impacto em R$/litro com banda e probabilidade declarada antes do piloto.
    - Motor real declarado: SHAP sobre ensemble SARIMAX + gradient boosting (sem DL/LLM no driver do MVP).
    - Sparring que **aprende** com discordância (re-calibra no ciclo seguinte).
    - Sliders what-if limitados a 4 variáveis: câmbio, milho, ENSO, Mercosul.
    - Mercosul reposicionado como sinal multi-área (S&OP com Industrial e Marketing).
    - Trilha de auditoria formal (não anotação).
    - "Não é" expandido: CRM de produtor, substituto de contrato longo prazo, cláusula CEPEA em B2B, previsão de demanda de produto acabado.
- [ ] **Jornada do Usuário.** ⏳ **(próximo passo)**
  - Escopo recomendado: jornada do Anderson num ciclo trimestral típico (pré-entressafra), mapeando momentos, sentimentos, onde o Vereda entra e onde NÃO entra. Jornada secundária mais curta da Patrícia no ciclo de Comitê S&OP.
  - Não fazer jornada genérica de UI — fazer jornada operacional ancorada no calendário safra/entressafra.
- [ ] **Brainstorm de features.** ⬜
  - Organizar pelo princípio de corte declarado no `02-e-nao-e-faz-nao-faz.md`: (a) endereça alavanca real do comprador, (b) defensável pra Patrícia, (c) não duplica SAP/Power BI.
- [ ] **Revisão das features com as personas (3ª rodada de validação).** ⬜
  - Mandar lista de features pros dois subagents em paralelo, pedir kill/keep/ajustar com motivo.
- [ ] **Sequenciador de MVP.** ⬜
  - Matriz esforço × valor com base no que sobreviveu da revisão.
- [ ] **Canvas MVP.** ⬜

### Fase 4 — Construção

- [ ] **Wireframe rápido (papel ou Excalidraw)** das telas chave do MVP. ⬜
  - Não Figma alta-fidelidade. Custo/benefício ruim. O entregável é HTML/CSS/JS.
- [ ] **Protótipo HTML/CSS/JS.** ⬜
  - Stack sugerida (leve): HTML + Tailwind via CDN + JS vanilla, ou Alpine.js se precisar de reatividade. Sem framework pesado.
  - Hospedagem: Vercel, Netlify ou GitHub Pages.
  - **Mockar a IA no front:** dados em JSON estático, "modelo" é função JS que mapeia input→output com if/else fingindo SHAP. O VP precisa **sentir** a interação, não rodar inferência real.
  - Telas mínimas (a confirmar no Canvas MVP, mas provavelmente):
    1. Tela inicial — painel trimestral por bacia com forecast + banda de confiança + taxa de acerto histórica.
    2. Tela de recomendação — alavancas acionáveis com drivers por pilar (SHAP-like).
    3. Tela de simulação what-if — 3-4 sliders (câmbio, milho, ENSO, Mercosul).
    4. Tela de auditoria/memória de decisão — Anderson aceitou/refutou + por quê.
    5. Aba "Por que esta solução" — abre o doc de arquitetura sem sair do link.
  - **Mostrar honestidade de incerteza** visivelmente: alerta "modelo sem sinal claro" quando banda for larga.
- [ ] **Documento de arquitetura de viabilidade (1 página).** ⬜
  - Pode ser PDF, página HTML dentro do protótipo (aba "Por que esta solução"), ou ambos.
  - Conteúdo mínimo:
    - Virada da perecibilidade em 3 linhas (diferenciador puro).
    - Diagrama: 4 pilares → ingestão → feature store → modelos (SARIMAX/LightGBM + LLM pra pilar político) → SHAP → API → front.
    - Mapa tela→motor real (base: `docs/00-estudo-preliminar.md` §5, atualizado com os patches).
    - Fontes reais de dado citadas (CEPEA, NASA POWER, BCB-SGS, etc.).
    - Plano de piloto (uma bacia — sugestão do Anderson: Zona da Mata mineira, 6 meses, métrica de spread R$/litro definida antes).
    - Hipótese de impacto em R$/litro com banda e probabilidade (cobrança da Patrícia — precisa estar lá).

### Fase 5 — Entrega

- [ ] **Hospedar protótipo + doc.** ⬜
- [ ] **Testar o link num navegador limpo** (modo anônimo) antes de enviar. ⬜
- [ ] **Preparar 3 falas de defesa** caso chamem pra entrevista oral: ⬜
  1. **A virada** (30s): "Briefing pede previsor de preço, mas leite cru é perecível — então o problema real é estratégia de captação trimestral sob incerteza."
  2. **Método AI-First** (30s): "Usei LLMs como sparring de discovery — criei duas personas adversariais ancoradas no setor pra estressar minhas hipóteses, validei premissas com elas em duas rodadas, registrei tudo. Isso é prompt engineering aplicado a discovery."
  3. **Honestidade técnica** (30s): "Cada tela do protótipo tem um motor real plausível. SHAP pra explicabilidade, SARIMAX/LightGBM pra forecast, LLM curado pra pilar político em quarentena até provar acurácia."
- [ ] **Enviar o link.** ⬜

---

## 5. Próximos 3 passos imediatos

1. **Reler `docs/lean-inception/01-visao-produto.md` e `02-e-nao-e-faz-nao-faz.md` pós-patch** (10 min) — checar coerência da espinha após reposicionamentos da 2ª rodada (sinal vs. recomendação de número, LLM em quarentena, dados internos na v1).
2. **Desenhar a Jornada do Usuário do Anderson num ciclo trimestral pré-entressafra** (ancorada no calendário safra/entressafra, não em fluxo genérico de UI). Mapear: momentos, sentimentos, onde o Vereda entra, onde ele NÃO entra, qual artefato vira input para qual conversa (Comitê de Captação mensal, S&OP, conversa com cooperativa).
3. **Desenhar jornada secundária mais curta da Patrícia no ciclo de Comitê S&OP** — momento de uso do one-pager exportável, gatilho de escalonamento se Anderson ignorar recomendação.

---

## 6. Armadilhas e avisos

- **Risco de sycophancy dos subagents.** Anderson e Patrícia foram prompted pra serem adversariais. Se em algum momento parecer que eles estão concordando demais com qualquer ideia que você jogar, suspeite — re-leia o teste de calibração que usei (a isca da "esperar o preço cair", que ambos corrigiram na 1ª rodada). Se parar de funcionar, o prompt precisa de mais músculo.
- **LLM político em quarentena no MVP.** Tanto Anderson ("40 alertas/semana e eu desligo") quanto Patrícia ("pode descredibilizar o produto inteiro") sinalizaram fragilidade. Manter no escopo conceitual, mas no protótipo aparece como **sinal observado** com pauta restrita — NÃO como driver de recomendação.
- **Não fazer Miro/Figma do Caroli como entregável.** Lean Inception é processo, não produto. Tempo gasto ali sai do protótipo, que é o que o VP vai abrir.
- **Não criar README pomposo.** O briefing pede 1 link.
- **Nome "Vereda" é placeholder defensável, não cravado em pedra.** Se for trocar (Lume, Norte, ou outro), basta substituir em busca&substitui nos três docs e na primeira tela do protótipo.

---

## 7. Como conversar com as personas

Há dois subagents disponíveis no Claude Code deste repo:

- `@anderson-comprador` — qualquer pergunta operacional, validação de feature, "isso aqui faz sentido no chão?".
- `@patricia-diretora` — qualquer pergunta executiva, defensibilidade no Comitê, governance, ROI.

Eles foram instruídos pra resistir por padrão. Não compram ideia sem prova. Para validar uma feature/tela/decisão, é preciso mandar com contexto suficiente — quanto mais vaga a pergunta, mais ácida a resposta. O orquestrador (Claude) também pode disparar entrevistas formais usando esses agentes via Agent tool (foi assim que as duas rodadas registradas em `docs/discovery/` foram conduzidas).

---

Qualquer dúvida de método ou contexto, abrir uma conversa nova neste repo — o Claude consegue se guiar a partir destes documentos.
