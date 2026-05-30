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
│   │   ├── 03-validacao-docs.md        Validação 2ª rodada: Anderson e
│   │   │                               Patrícia criticando Visão + É/Não É.
│   │   └── 04-validacao-features.md    Validação 3ª rodada: Anderson e
│   │                                   Patrícia estressando as 9 CONDICIONAIS
│   │                                   do brainstorm. Nenhum kill, ajustes
│   │                                   de formato + 6 features novas + página
│   │                                   de governance como bloqueador.
│   └── lean-inception/
│       ├── 01-visao-produto.md         Visão do Produto. Nome cravado: Vereda.
│       ├── 02-e-nao-e-faz-nao-faz.md   Escopo.
│       ├── 03-personas.md              Personas no formato canvas Lean.
│       ├── 04-jornada-usuario.md       Jornada operacional: Anderson em 8 fases
│       │                               (ciclo Abr→Jun pré-entressafra) + Patrícia
│       │                               em 4 momentos (S&OP). §3 = matriz tela↔
│       │                               momento, insumo direto do MVP.
│       ├── 05-brainstorm-features.md   Divergência/convergência por tela. ~50
│       │                               features → 39 IN, 2 CONDICIONAL, 15 OUT
│       │                               (pós-3ª rodada, ver §6 do doc).
│       └── 06-sequenciador-mvp.md      Matriz CORE/DEMO/ARQ + esforço estimado
│                                       (~12-13 sessões) + sequência de construção.
│                                       5 telas CORE: 1, 2, 4, 6, 8.
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
- [x] **Jornada do Usuário.** ✅ (2026-05-30)
  - Output: `docs/lean-inception/04-jornada-usuario.md`.
  - Jornada primária do Anderson em 8 fases (Abr→Jun, ciclo pré-entressafra Q2→Q3) + jornada secundária da Patrícia em 4 momentos (pré-S&OP, Comitê S&OP, defesa pro CFO, gatilho de escalonamento).
  - Operacional, ancorada no calendário safra/entressafra (não genérica de UI). Cada fase mapeia: atividade, sentimento, onde o Vereda entra, onde NÃO entra, artefato gerado, conversa que alimenta.
  - **Saída material**: matriz tela ↔ momento (§3 do doc) que substitui a lista preliminar de telas do MVP. Adições estruturais novas pra validar com personas: **tela de risco de churn por produtor** (Fase 3) e **painel de cooperativa** (Fase 6).
- [x] **Brainstorm de features.** ✅ (2026-05-30)
  - Output: `docs/lean-inception/05-brainstorm-features.md`.
  - Divergência: ~50 features candidatas listadas por tela (8 telas + cross-cutting governance).
  - Convergência: 34 🟢 IN, 9 🟡 CONDICIONAL, ~15 🔴 OUT — filtradas pelo princípio de corte do `02-e-nao-e-faz-nao-faz.md`.
  - OUT explicitamente declaradas pra blindar contra escopo creep (valor de bonificação, timing, ranking automático, push diário, canal com produtor, scoring do Anderson, slide deck, login real, integração SAP funcionando).
  - 8 perguntas concretas geradas pra 3ª rodada (5 pro Anderson, 3 pra Patrícia) — focadas nas 9 CONDICIONAIS, não em "valida tudo isso".
- [x] **Revisão das features com as personas (3ª rodada de validação).** ✅ (2026-05-30)
  - Output: `docs/discovery/04-validacao-features.md` + patch §6 em `05-brainstorm-features.md`.
  - **Nenhuma rejeição material** — todas as 9 CONDICIONAIS resolvidas com ajustes de formato (não kills). Total atualizado: ~39 🟢 IN, 2 🟡 CONDICIONAL, ~15 🔴 OUT.
  - Convergências de alto sinal: (i) taxa de acerto granular exposta (Anderson por produtor + Patrícia em divergência); (ii) log auditável com snapshot de inputs e versão do modelo; (iii) discordância vira ticket pra time de modelos, não anotação morta.
  - Ajustes materiais de formato: score de churn vira **categoria + motivo curto + histórico** (não 0–100); "pauta de negociação" vira **"Resumo pré-conversa"** (3-5 bullets sem verbo de ação); painel de cooperativa **reposicionado como munição pra defesa**, não monitoramento diário; alerta de concorrência vira **crowdsourced interno**; escalonamento vira **percentual em janela móvel + materialidade**, com fluxo Anderson-primeiro.
  - **Bloqueador identificado:** Patrícia condicionou pauta de Comitê à entrega de uma **página de governance completa** — vira conteúdo obrigatório da Tela 8 ("Por que esta solução"). Adicionado como features 8h–8k.
  - 2 CONDICIONAIS remanescentes (tela de compromissos abertos / quem falou por último com produtor) — tensão com regra "não é CRM" da 2ª rodada. Decidir no Canvas MVP.
- [x] **Sequenciador de MVP.** ✅ (2026-05-30)
  - Output: `docs/lean-inception/06-sequenciador-mvp.md`.
  - 3 níveis de inclusão (🔴 CORE / 🟡 DEMO / 🟢 ARQ), adaptados ao contexto real (link único, IA mockada no front, avaliador VP com 5–10 min).
  - **CORE (5 telas):** 1 (painel), 2 (recomendação SHAP), 4 (what-if), 6 (auditoria), 8 (doc de arquitetura + página de governance).
  - **DEMO (3 telas):** 3 (churn — 3-5 produtores fictícios), 5 (cooperativa — embutida como componente da Tela 2), 7 (one-pager — exemplo pronto exportável).
  - **Esforço estimado:** ~12-13 sessões de ~3-4h. Sequência de construção definida (1+2+8 primeiro pra ter produto navegável defensável mesmo se cortar pelo prazo).
  - **Recomendações pré-Canvas:** cortar A1 e A3 (tensão com "não é CRM"), stack HTML + Tailwind CDN + Alpine.js + Chart.js, hospedar em Vercel ou GitHub Pages, usar nomes fictícios de discovery na UI (Anderson, Vale do Cedro) com nota discreta no rodapé.
- [ ] **Canvas MVP.** ⏳ **(próximo passo)**
  - Consolida decisões do Sequenciador, resolve as 2 CONDICIONAIS remanescentes (A1, A3), confirma stack e naming, declara hipótese de impacto em R$/litro pro doc de arquitetura.
  - Inclui wireframe rápido (papel ou Excalidraw) das 5 telas CORE — não Figma alta-fidelidade.

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

1. **Canvas MVP** — fecha Fase 3 do roadmap. Consolida as decisões CORE/DEMO/ARQ do Sequenciador (`06-sequenciador-mvp.md`), confirma corte de A1/A3 sob a regra "não é CRM", confirma stack (HTML + Tailwind CDN + Alpine.js + Chart.js) e hospedagem (Vercel ou GitHub Pages), **declara a hipótese de impacto em R$/litro com banda e probabilidade** pra entrar no doc de arquitetura (cobrança da Patrícia operacionalizada).
2. **Wireframe rápido** (papel ou Excalidraw) das **5 telas CORE** — 1 (painel), 2 (recomendação SHAP), 4 (what-if), 6 (auditoria), 8 (doc de arquitetura). Não Figma alta-fidelidade. Custo/benefício ruim — o entregável é HTML/CSS/JS, não tela bonita em ferramenta de design.
3. **Setup do protótipo + mock de dados** (Sessões 1 e 2 da sequência do `06-sequenciador-mvp.md §6`). Estrutura de navegação entre telas + JSONs com bacias, produtores, forecast, SHAP, cooperativas, recomendações históricas. Define a "verdade" do produto antes de pintar telas — evita retrabalho.

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
