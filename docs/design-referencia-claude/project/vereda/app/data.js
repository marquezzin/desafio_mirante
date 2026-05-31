/* ===========================================================
   Vereda — conteúdo simulado (a "inteligência" no front-end)
   window.VEREDA = { sources, chat, onepager, calibration, alerts }
   Citações em texto: token {n|sourceId}  ·  negrito: **texto**
   =========================================================== */
(function () {
  // ---------------------------------------------------------
  // FONTES CITÁVEIS — abrem no painel lateral direito
  // ---------------------------------------------------------
  const sources = {
    inmet: {
      title: "Previsão climática regional — Sudeste",
      org: "INMET", kind: "Boletim sazonal · mai/2026", verified: true,
      tags: ["Climático", "Oficial", "5 documentos"],
      stamp: "acesso 31/05 09:14",
      doc: [
        "Para o trimestre maio–julho de 2026, os modelos sazonais indicam manutenção das condições de La Niña sobre a porção centro-sul do país.",
        "Na Zona da Mata mineira, <hl>a precipitação acumulada projetada situa-se em torno de 23% abaixo da média climatológica de referência (1991–2020) até o final de julho</hl>, com maior probabilidade de desvio negativo nos meses de junho e julho.",
        "O cenário favorece antecipação do período de estiagem regional, com possíveis reflexos sobre disponibilidade de pasto e estresse térmico do rebanho leiteiro."
      ]
    },
    noaa: {
      title: "ENSO Diagnostic Discussion — La Niña Advisory",
      org: "NOAA / Climate Prediction Center", kind: "Boletim mensal · 30/mai/2026", verified: true,
      tags: ["Climático", "Oficial", "ENSO"],
      stamp: "acesso 31/05 08:50",
      doc: [
        "La Niña conditions are present and are favored to continue through the Southern Hemisphere winter.",
        "<hl>The latest forecasts indicate a greater than 70% probability that La Niña persists through the June–August 2026 season</hl>, with cooler-than-average equatorial Pacific sea surface temperatures.",
        "Impacts over southeastern Brazil are typically associated with below-average rainfall during the dry season."
      ]
    },
    cbot: {
      title: "Milho — futuros e indicador físico",
      org: "CBOT / CEPEA-ESALQ", kind: "Série 60 dias · fechamento 30/mai", verified: true,
      tags: ["Econômico", "Insumo", "Custo de produtor"],
      stamp: "acesso 31/05 07:30",
      doc: [
        "O contrato futuro de milho com vencimento em julho operou em tendência de alta nas últimas semanas.",
        "<hl>No acumulado de 30 dias, a referência subiu 8,1%, pressionada por clima adverso no cinturão produtor e demanda firme por etanol de milho</hl>.",
        "O indicador físico CEPEA acompanha o movimento, com reflexo direto sobre o custo de concentrado na pecuária leiteira."
      ]
    },
    sap: {
      title: "Ranking de produtores — Zona da Mata",
      org: "SAP S/4HANA · Mestre de Produtor", kind: "Interno · sincronizado 31/mai 06:00", verified: true,
      tags: ["Interno", "40 registros", "Volume + custo"],
      stamp: "acesso 31/05 09:12",
      doc: [
        "Base mestre dos 40 maiores fornecedores ativos da bacia Zona da Mata, ordenados por volume sustentado nos últimos 12 meses.",
        "<hl>A dependência média de concentrado declarada situa-se entre 35% e 60% do custo de alimentação, concentrando-se acima de 50% nos 12 produtores do percentil 75 de volume</hl>.",
        "Contratos vigentes: 28 em fórmula indexada ao CEPEA, 9 em preço fixo trimestral, 3 spot. Bonificação por qualidade ativa em 31 fornecedores."
      ]
    },
    lab: {
      title: "Qualidade laboratorial — série CCS",
      org: "Laboratório Vale do Cedro", kind: "Interno · 12 semanas · 40 produtores", verified: true,
      tags: ["Interno", "Qualidade", "480 coletas"],
      stamp: "acesso 31/05 09:13",
      doc: [
        "Contagem de Células Somáticas (CCS) média ponderada por volume dos 40 maiores produtores da Zona da Mata.",
        "<hl>Nas últimas 4 semanas, o CCS médio da bacia subiu 12%, saindo de 318 para 356 mil cél/mL</hl> — movimento compatível com início de estresse térmico, ainda dentro do limite regulatório mas com tendência de alta.",
        "Sete produtores já cruzaram a faixa que reduz bonificação por qualidade no contrato vigente."
      ]
    },
    cepea: {
      title: "Indicador do Leite — Minas Gerais",
      org: "CEPEA-ESALQ / USP", kind: "Série 24 meses · referência oficial", verified: true,
      tags: ["Econômico", "Referência do setor"],
      stamp: "acesso 31/05 07:35",
      doc: [
        "O Indicador CEPEA do leite captado em Minas Gerais é a referência usada na maioria dos contratos indexados do setor.",
        "<hl>A série de 24 meses mostra padrão sazonal claro: vales na safra das águas (out–jan) e picos na entressafra (jun–ago), com amplitude média de 18% entre mínimo e máximo do ciclo</hl>.",
        "O valor é divulgado mensalmente, com pagamento referente ao mês seguinte ao da coleta."
      ]
    },
    mapa: {
      title: "Portaria SDA/MAPA nº 142, de 30 de maio de 2026",
      org: "Ministério da Agricultura e Pecuária", kind: "Diário Oficial da União · Seção 1", verified: true,
      tags: ["Político", "Oficial", "Publicada hoje"],
      stamp: "acesso 31/05 09:02",
      doc: [
        "Dispõe sobre requisitos complementares de conservação e refrigeração do leite cru na propriedade rural e no transporte.",
        "Art. 3º <hl>Os tanques de expansão e resfriamento deverão assegurar o resfriamento do leite a temperatura igual ou inferior a 4 °C em até 3 (três) horas após o término da ordenha</hl>, observado o cronograma de adequação previsto no Anexo I.",
        "Art. 7º O prazo para adequação dos equipamentos em uso é de 180 (cento e oitenta) dias contados da publicação desta Portaria."
      ]
    },
    gdt: {
      title: "Global Dairy Trade — Whole Milk Powder",
      org: "Global Dairy Trade", kind: "Leilão quinzenal · evento 357", verified: true,
      tags: ["Econômico", "Internacional", "Leite em pó"],
      stamp: "acesso 31/05 07:40",
      doc: [
        "O índice de preços do leite em pó integral (WMP) é referência para a paridade de importação no Mercosul.",
        "<hl>No último leilão, o WMP avançou 3,4%, reduzindo a competitividade do pó importado frente à captação nacional</hl>.",
        "Movimento relevante para decisões de substituição parcial de matéria-prima via pó Mercosul."
      ]
    }
  };

  // ---------------------------------------------------------
  // Gráfico de banda de confiança (paths reutilizados)
  // ---------------------------------------------------------
  const cepeaChart = {
    labelL: "CEPEA projetado · R$/L", labelR: "jul–set",
    bandPath: "M4 60 L70 54 L136 40 L202 22 L256 12 L256 40 L202 48 L136 60 L70 70 L4 74 Z",
    linePath: "M4 50 L70 46 L136 38 L202 26 L256 18",
    histPath: "M4 50 L70 46 L96 42",
    dot: { x: 96, y: 42 }, dotLabel: "hoje"
  };

  // ---------------------------------------------------------
  // CHAT — mensagem inicial + respostas roteirizadas
  // ---------------------------------------------------------
  const basinAnswer = {
    id: "m-basin", who: "ai", meta: "· cruzou 6 fontes · forecast v4.2",
    reasoning: [
      { say: "Entressafra Q3 na Zona da Mata, foco nos 40 maiores. Deixa eu montar isso por pilar pra não perder nada." },
      { say: "Começo pelo clima — preciso da previsão de chuva da região.", tool: "inmet" },
      { say: "Confirmo o pano de fundo: La Niña ainda de pé?", tool: "noaa" },
      { say: "Custo do produtor depende muito do milho. Puxo a série.", tool: "cbot" },
      { say: "Agora quem são os 40 e a dependência de concentrado de cada um.", tool: "sap" },
      { say: "Qualidade: como tá o CCS da bacia nas últimas semanas?", tool: "lab" },
      { say: "E o indicador CEPEA pra ancorar a projeção.", tool: "cepea" },
      { say: "Tenho os insumos. Projeto o trimestre por bacia.", model: "Forecast trimestral · v4.2" },
      { say: "E pontuo o risco de perder produtor.", model: "Scoring de risco de perda · v2.1" },
      { say: "Cruzando os três pilares e calculando a banda de confiança." }
    ],
    blocks: [
      { t: "p", text: "A Zona da Mata deve ter pressão **acima da média** na entressafra Q3, por três razões:" },
      { t: "pillar", k: "Climático", text: "Chuva projetada **23% abaixo** da média histórica até julho {1|inmet}, com La Niña confirmada pela NOAA {2|noaa}." },
      { t: "pillar", k: "Custo", text: "Milho subiu **8% em 30 dias** {3|cbot}; dependência de concentrado dos top 40 entre 35–60% {4|sap}." },
      { t: "pillar", k: "Qualidade", text: "CCS médio da bacia subiu **12% em 4 semanas** {5|lab} — estresse térmico precoce." },
      { t: "reco",
        rt: "Avaliar pacote de retenção para os **12 produtores** acima do percentil 75 de volume sustentado.",
        chart: cepeaChart,
        drivers: [ { n: "Clima", v: "+38%", w: 76, up: true }, { n: "Custo (milho)", v: "+27%", w: 54, up: true }, { n: "Qualidade (CCS)", v: "+21%", w: 42, up: true } ],
        conf: { band: "65–80%", note: "incerteza dominada por clima", pill: "incerteza alta", pillClass: "warn" }
      }
    ],
    actions: ["trail", "onepager", "simular"],
    trail: "basin",
    decisionable: true,
    recLabel: "Pacote de retenção pros 12 top — exposição climática alta"
  };

  const chips = [
    { id: "whatif-itambe", text: "E se a Itambé subir bonificação 4% em julho?" },
    { id: "producers-12", text: "Quais 12 produtores entram no pacote?" },
    { id: "compare-aguas", text: "Compara com a safra das águas" }
  ];

  const responses = {
    "whatif-itambe": {
      userText: "E se a Itambé subir bonificação 4% em julho na Zona da Mata?",
      ai: {
        id: "m-whatif", who: "ai", meta: "· what-if · scoring de risco v2.1",
        reasoning: [
          { say: "O que muda se a Itambé sobe 4%? Isso é retenção, não preço — mexe em quem pode migrar." },
          { say: "Preciso dos contratos e da bonificação vigente.", tool: "sap" },
          { say: "E de quem tá no limite de qualidade — CCS dos top 12.", tool: "lab" },
          { say: "É cenário hipotético: re-rodo o scoring com a bonificação concorrente perturbada.", model: "Scoring de risco de perda · v2.1" },
          { say: "Recalculando o risco e o prêmio relativo." }
        ],
        blocks: [
          { t: "recalc", text: "Recalculei com a bonificação concorrente alterada em +4%." },
          { t: "delta", rows: [
            { label: "Risco de perda nos top 12", from: "18%", to: "31%", toGood: false },
            { label: "Prêmio relativo Vale do Cedro vs. Itambé", from: "+5,1 pts", to: "+2,3 pts", toGood: false }
          ] },
          { t: "p", text: "**Drivers que mudaram:** elasticidade competitiva ganhou peso (+14%); o prêmio relativo caiu 2,8 pontos. Modelo usado: **scoring de risco de perda v2.1**, com input alterado apenas em \"bonificação do concorrente principal\"." },
          { t: "p", text: "**Sua margem de manobra:** você precisaria igualar pelo menos **60% da subida deles** para manter o risco abaixo de 20%. Acima disso, o ganho marginal de retenção não cobre o custo adicional por litro." },
          { t: "conf-line", band: "55–75%", note: "cenário hipotético amplia a incerteza" }
        ],
        actions: ["trail", "onepager"],
        trail: "whatif"
      }
    },
    "producers-12": {
      userText: "Quais 12 produtores entram no pacote?",
      ai: {
        id: "m-prod", who: "ai", meta: "· SAP + laboratório · 40 registros",
        reasoning: [
          { say: "Quem tá mais em risco? Não é só volume — combino com dependência de concentrado e tendência de CCS." },
          { say: "Ranking por volume sustentado dos 40.", tool: "sap" },
          { say: "Tendência de CCS por produtor.", tool: "lab" },
          { say: "Ordeno por exposição combinada e corto no percentil 75.", model: "Ranking de exposição combinada" }
        ],
        blocks: [
          { t: "p", text: "Os 12 acima do percentil 75 de volume sustentado, ordenados por exposição combinada (volume × dependência de concentrado × tendência de CCS) {1|sap}{2|lab}:" },
          { t: "producers", rows: [
            { nm: "Fazenda Boa Vista — Sr. Adelmo", vol: "11.200 L/dia", dep: "58%", ccs: "↑ 14%", risk: "alto" },
            { nm: "Sítio Três Barras — D. Conceição", vol: "9.800 L/dia", dep: "52%", ccs: "↑ 11%", risk: "alto" },
            { nm: "Faz. Santa Rita — Irmãos Prado", vol: "9.100 L/dia", dep: "49%", ccs: "↑ 9%", risk: "médio" },
            { nm: "Faz. Recanto — Sr. Otávio", vol: "8.400 L/dia", dep: "55%", ccs: "↑ 13%", risk: "alto" },
            { nm: "+ 8 produtores", vol: "5,2–7,9 mil L/dia", dep: "35–51%", ccs: "↑ 6–10%", risk: "médio" }
          ] },
          { t: "p", text: "Juntos representam **38% do volume captado** da bacia. Os 4 de risco alto concentram a maior dependência de concentrado — são os mais sensíveis ao milho." },
          { t: "note", title: "O que NÃO está aqui", text: "Quem topa pacote, quem está brigado com o filho, quem pensa em aposentar — isso é do campo, com o Vanderlei. Não invento esse sinal." }
        ],
        actions: ["trail"],
        trail: "producers"
      }
    },
    "compare-aguas": {
      userText: "Compara essa entressafra com a safra das águas.",
      ai: {
        id: "m-cmp", who: "ai", meta: "· CEPEA · série 24 meses",
        reasoning: [
          { say: "Águas vs. entressafra — o contraste sazonal é o que importa pra decisão de captação." },
          { say: "Puxo a série de 24 meses do indicador.", tool: "cepea" },
          { say: "Medindo a amplitude entre vale e pico do ciclo." }
        ],
        blocks: [
          { t: "p", text: "O contraste é o coração da decisão de captação {1|cepea}:" },
          { t: "delta", rows: [
            { label: "Safra das águas (out–jan)", from: "oferta sobra", to: "preço no vale", toGood: true },
            { label: "Entressafra Q3 (jun–ago)", from: "oferta aperta", to: "preço no pico", toGood: false }
          ] },
          { t: "p", text: "A amplitude média do ciclo é de **~18%** entre vale e pico {1|cepea}. Por isso a janela de antecipação importa: o compromisso de volume forward fechado **agora**, na transição, é o que protege margem quando o pico chega — e leite cru **não permite estocar** para esperar." },
          { t: "conf-line", band: "alta", note: "padrão sazonal é o sinal mais estável dos quatro pilares" }
        ],
        actions: ["trail", "onepager"],
        trail: "basin"
      }
    }
  };

  // resposta honesta de fallback (anti-sycophancy / coragem de dizer "não sei")
  const fallback = {
    id: "m-fallback", who: "ai", meta: "· sem fonte estruturada",
    reasoning: [
      { say: "Deixa eu ver se tenho fonte estruturada pra responder isso com segurança…" },
      { say: "Não encontrei dado confiável. Melhor declarar a incerteza do que inventar." }
    ],
    blocks: [
      { t: "p", text: "Não tenho fonte estruturada pra responder isso com segurança — então prefiro **declarar a incerteza** a inventar um número." },
      { t: "p", text: "Pra esta demonstração, eu sei aprofundar três caminhos com dado real por trás. Quer seguir por um deles?" }
    ],
    actions: [],
    suggestChips: true
  };

  // ---------------------------------------------------------
  // TRILHAS — "Como cheguei aqui"
  // ---------------------------------------------------------
  const trails = {
    basin: {
      title: "Como cheguei aqui",
      sub: "Leitura de entressafra Q3 · Zona da Mata · top 40 produtores",
      query: "\"leitura de entressafra Q3 pra Zona da Mata, foco nos 40 maiores produtores\"",
      sources: [
        { o: "INMET", c: "previsão regional (5 doc)", id: "inmet" },
        { o: "NOAA", c: "boletim ENSO mai/2026", id: "noaa" },
        { o: "CBOT", c: "série milho 60d", id: "cbot" },
        { o: "SAP", c: "ranking produtores (40)", id: "sap" },
        { o: "Laboratório", c: "CCS 12 semanas (480)", id: "lab" },
        { o: "CEPEA", c: "Indicador Leite 24m", id: "cepea" }
      ],
      models: [
        { nm: "Forecast trimestral de CEPEA por bacia", ver: "v4.2" },
        { nm: "Scoring de risco de perda de produtor", ver: "v2.1" },
        { nm: "Elasticidade qualidade × bonificação", ver: "heurística Q1/26" }
      ],
      premises: [
        "La Niña mantém intensidade até julho",
        "Sem mudança regulatória relevante em mai/jun além da Portaria 142 já considerada",
        "Preço do milho não cede antes de julho"
      ],
      conclusion: "Pressão acima da média na entressafra + recomendação de pacote de retenção para os 12 produtores do percentil 75.",
      band: { v: "65–80%", s: "Incerteza dominada por clima — o pilar climático tem o maior peso e a maior variância." }
    },
    whatif: {
      title: "Como cheguei aqui",
      sub: "Simulação what-if · bonificação concorrente +4%",
      query: "\"e se a Itambé subir bonificação 4% em julho na Zona da Mata?\"",
      sources: [
        { o: "SAP", c: "contratos e bonificação vigente", id: "sap" },
        { o: "Laboratório", c: "CCS top 12", id: "lab" }
      ],
      models: [
        { nm: "Scoring de risco de perda — input perturbado", ver: "v2.1" }
      ],
      premises: [
        "Subida da Itambé aplicada só aos produtores de fronteira competitiva",
        "Demais variáveis mantidas constantes (ceteris paribus)",
        "Movimento hipotético — não há fonte confirmando intenção real da Itambé"
      ],
      conclusion: "Risco de perda nos top 12 sobe de 18% para 31%; igualar 60% da subida mantém o risco abaixo de 20%.",
      band: { v: "55–75%", s: "Cenário hipotético amplia a incerteza — não há fonte estruturada sobre a intenção real do concorrente." }
    },
    producers: {
      title: "Como cheguei aqui",
      sub: "Seleção dos 12 produtores do pacote",
      query: "\"quais 12 produtores entram no pacote de retenção?\"",
      sources: [
        { o: "SAP", c: "ranking por volume sustentado (40)", id: "sap" },
        { o: "Laboratório", c: "tendência de CCS por produtor", id: "lab" }
      ],
      models: [
        { nm: "Ranking de exposição combinada", ver: "heurística calibrada" }
      ],
      premises: [
        "Exposição = volume × dependência de concentrado × tendência de CCS",
        "Corte no percentil 75 de volume sustentado 12 meses",
        "Sinais tácitos de campo ficam de fora por princípio"
      ],
      conclusion: "12 produtores selecionados; 4 de risco alto concentram a maior dependência de concentrado.",
      band: { v: "alta", s: "Dado interno estruturado — baixa incerteza na seleção; a incerteza está na adesão, que é do campo." }
    }
  };

  // ---------------------------------------------------------
  // ONE-PAGER
  // ---------------------------------------------------------
  const onepager = {
    genlog: [
      "Reunindo drivers da investigação da Zona da Mata",
      "Puxando banda de confiança do forecast v4.2",
      "Calculando hipótese de impacto em R$/L com probabilidade",
      "Declarando premissas e alternativas consideradas",
      "Montando rascunho editável"
    ],
    kicker: "Proposta para o Comitê de S&OP",
    title: "Pacote de retenção — Zona da Mata · Q3/2026",
    sub: ["Autor: Anderson Toledo", "Rascunho gerado pelo Vereda · 31/mai/2026", "Editável"],
    contexto: "A entressafra de Q3 na Zona da Mata mineira deve ter pressão acima da média sobre o custo de captação, puxada por clima seco (La Niña), milho em alta e elevação precoce de CCS na bacia. A janela de antecipação de compromisso de volume fecha nas próximas semanas.",
    drivers: [
      { k: "Climático", text: "Chuva projetada 23% abaixo da média até julho {1|inmet}; La Niña confirmada com >70% de persistência {2|noaa}." },
      { k: "Econômico", text: "Milho +8% em 30 dias {3|cbot}, pressionando o custo de concentrado dos produtores." },
      { k: "Qualidade", text: "CCS médio da bacia +12% em 4 semanas {5|lab} — bonificação por qualidade tende a pesar mais." },
      { k: "Competitivo", text: "Cenário hipotético de bonificação +4% da Itambé eleva o risco de perda dos top 12 de 18% para 31%." }
    ],
    recomendacao: "Bonificação adicional de R$ 0,03–0,05/L para os 12 produtores do percentil 75, condicionada a compromisso de volume sustentado entre julho e setembro.",
    impact: [
      { k: "Hipótese de impacto", v: "+R$ 0,018 a +0,032/L", s: "no spread captado vs. CEPEA no trimestre" },
      { k: "Probabilidade", v: "65%", s: "banda larga por exposição climática (forecast v4.2)" }
    ],
    alternativas: [
      { k: "Alternativa A", text: "Spot industrial em agosto — custo estimado superior e relação com produtor exposta." },
      { k: "Alternativa B", text: "Substituição parcial via pó Mercosul — requer alinhamento com a Industrial; WMP subiu 3,4% {8|gdt}." }
    ],
    premissas: "La Niña mantida até julho · sem mudança regulatória além da Portaria 142/2026 · preço do milho não cede antes de julho.",
    falta: "Intenção real da Itambé (apenas sinal indireto, sem fonte estruturada). Contexto de relacionamento dos produtores (input do Vanderlei, fora do modelo) — ex.: situação familiar do Sr. Adelmo."
  };

  // ---------------------------------------------------------
  // CALIBRAÇÃO — "onde errei no último trimestre"
  // ---------------------------------------------------------
  const calibration = {
    period: "Q3/2026 · encerrado",
    rec: "\"Pacote de retenção pros 12 top, exposição climática alta\" (recomendado em mai/2026).",
    kpis: [
      { kv: "9 / 12", ku: "produtores aceitaram", sub: "captação sustentada em 94% do esperado", cls: "good" },
      { kv: "+R$ 0,021", ku: "/L de spread vs. CEPEA", sub: "dentro da banda projetada (+0,018 a +0,032)", cls: "good" }
    ],
    band: { proj: "65%", real: "71%", note: "Previmos 65% de probabilidade; o realizado foi 71%. Banda ficou um pouco otimista — erramos para o conservador." },
    drivers: [
      { ok: true, n: "Clima", v: "previ chuva 23% abaixo · realizado 19% abaixo" },
      { ok: true, n: "Milho", v: "manteve o patamar projetado" },
      { ok: true, n: "CCS", v: "previ +12% · realizado +14%" },
      { ok: false, n: "Elasticidade competitiva", v: "subestimada em 1 bacia vizinha" }
    ],
    misses: [
      { t: "Não citei a movimentação da **Italac em Patos de Minas** na recomendação original — era sinal fraco que não entrou no modelo. Custou 1 produtor que migrou." },
      { t: "**Banda de confiança estreita demais:** previ 65%, observado 71%. Pequeno otimismo na probabilidade — vou alargar a banda em cenários de exposição climática alta." }
    ]
  };

  // ---------------------------------------------------------
  // ALERTAS — view Hoje
  // ---------------------------------------------------------
  const alerts = {
    risk: {
      kicker: "Sinal de risco · Entressafra Q3 sob pressão",
      title: "Zona da Mata deve apertar na entressafra",
      when: "publicado ontem",
      body: "La Niña confirmada pela NOAA {2|noaa} e milho CBOT +8% em 30 dias {3|cbot}. Probabilidade de entressafra severa na sua bacia: **alta**.",
      minibars: [
        { k: "Chuva proj. (jun–jul)", v: "−23%", cls: "up", s: "vs. média 91–20" },
        { k: "Milho 30d", v: "+8,1%", cls: "up", s: "CBOT/CEPEA" },
        { k: "CCS bacia 4 sem", v: "+12%", cls: "up", s: "356 mil cél/mL" }
      ]
    },
    gov: {
      kicker: "Publicação relevante · Político",
      title: "Portaria MAPA 142/2026 publicada hoje",
      when: "hoje, 09:02",
      body: "Exige resfriamento do leite a ≤4 °C em até 3h após a ordenha {7|mapa}. Possível impacto em custo de tanque na sua bacia. Prazo de adequação: 180 dias.",
      summary: "Em 3 linhas: (1) novo requisito de resfriamento rápido; (2) adequação de equipamento em 180 dias; (3) pode pesar nos produtores menores da bacia — vale mapear quem já tem tanque adequado."
    }
  };

  // ---------------------------------------------------------
  // ITEM 5 — mini-séries para o painel de fonte
  // ---------------------------------------------------------
  sources.cbot.series = { label: "Milho · 60 dias", val: "+8,1%", up: true, pts: [22, 24, 23, 27, 30, 33, 38, 42] };
  sources.cepea.series = { label: "Indicador CEPEA · 24 meses", val: "amplitude ~18%", up: true, pts: [30, 18, 12, 16, 28, 40, 46, 42, 30, 18, 14, 24] };
  sources.lab.series = { label: "CCS médio · 12 semanas (mil cél/mL)", val: "318 → 356", up: true, pts: [318, 320, 322, 328, 335, 344, 352, 356] };
  sources.gdt.series = { label: "WMP · últimos leilões", val: "+3,4%", up: true, pts: [40, 42, 41, 43, 44, 46] };
  sources.inmet.series = { label: "Chuva acumulada proj. vs. média (%)", val: "−23%", up: false, pts: [100, 93, 86, 79, 74, 70, 68] };
  sources.noaa.series = { label: "Probabilidade de La Niña (%)", val: ">70%", up: true, pts: [58, 62, 66, 70, 72, 73] };

  // ---------------------------------------------------------
  // ITEM 1 — simulador de cenário (sliders → modelo re-executado)
  // ---------------------------------------------------------
  const simulator = {
    base: { dolar: 5.20, milho: 8, bonif: 0, chuva: -23 },
    sliders: [
      { key: "chuva", label: "Chuva projetada vs. média", min: -45, max: 10, step: 1, fmt: v => (v > 0 ? "+" : "") + v + "%", pillar: "Climático" },
      { key: "milho", label: "Milho vs. patamar de hoje", min: -10, max: 30, step: 1, fmt: v => (v > 0 ? "+" : "") + v + "%", pillar: "Custo" },
      { key: "bonif", label: "Bonificação do concorrente (Itambé)", min: 0, max: 8, step: 0.5, fmt: v => "+" + v + "%", pillar: "Competitivo" },
      { key: "dolar", label: "Dólar (R$/US$)", min: 4.6, max: 6.2, step: 0.05, fmt: v => "R$ " + v.toFixed(2), pillar: "Econômico" }
    ]
  };

  // ---------------------------------------------------------
  // ITEM 2 — follow-ups dinâmicos (pool de chips + sugestão por mensagem)
  // ---------------------------------------------------------
  const chipPool = {
    "whatif-itambe": "E se a Itambé subir bonificação 4% em julho?",
    "producers-12": "Quais 12 produtores entram no pacote?",
    "compare-aguas": "Compara com a safra das águas",
    "igualar": "Quanto preciso igualar da Itambé pra segurar o risco?",
    "adelmo": "Resume o histórico do Sr. Adelmo"
  };
  const followups = {
    "m-basin": ["whatif-itambe", "producers-12", "compare-aguas"],
    "m-whatif": ["igualar", "producers-12", "compare-aguas"],
    "m-prod": ["adelmo", "whatif-itambe", "compare-aguas"],
    "m-cmp": ["whatif-itambe", "producers-12"],
    "m-igualar": ["producers-12", "adelmo"],
    "m-adelmo": ["whatif-itambe", "compare-aguas"],
    "m-fallback": ["whatif-itambe", "producers-12", "compare-aguas"],
    "m-scenario": ["producers-12", "compare-aguas", "igualar"]
  };

  // respostas novas do pool
  responses["igualar"] = {
    userText: "Quanto preciso igualar da Itambé pra segurar o risco?",
    ai: {
      id: "m-igualar", who: "ai", meta: "· scoring de risco v2.1 · otimização",
      reasoning: [
        { say: "Quanto preciso reagir pra segurar o risco abaixo de 20%?" },
        { say: "Bonificação vigente e margem por litro.", tool: "sap" },
        { say: "Otimizo: vario a minha reação e vejo onde o risco cruza 20%.", model: "Scoring de risco de perda · v2.1" }
      ],
      blocks: [
        { t: "p", text: "Pra manter o risco de perda dos top 12 **abaixo de 20%** num cenário de Itambé +4%, você precisa igualar pelo menos **60% da subida deles** — ou seja, ~**+2,4%** de bonificação adicional {4|sap}." },
        { t: "delta", rows: [
          { label: "Igualar 60% (+2,4%)", from: "risco", to: "19%", toGood: true },
          { label: "Igualar 100% (+4,0%)", from: "risco", to: "16%", toGood: true },
          { label: "Não reagir", from: "risco", to: "31%", toGood: false }
        ] },
        { t: "p", text: "Acima de 60%, o ganho marginal de retenção **não cobre** o custo adicional por litro. O ponto de equilíbrio fica em torno de +2,4 a +3,0%." },
        { t: "conf-line", band: "55–75%", note: "depende da intenção real da Itambé, que não tenho confirmada" }
      ],
      actions: ["trail", "onepager", "simular"],
      trail: "whatif"
    }
  };
  responses["adelmo"] = {
    userText: "Resume o histórico do Sr. Adelmo.",
    ai: {
      id: "m-adelmo", who: "ai", meta: "· SAP + laboratório · 1 produtor",
      reasoning: [
        { say: "Histórico do Sr. Adelmo — junto cadastro, volume e qualidade." },
        { say: "Ficha e contrato vigente.", tool: "sap" },
        { say: "Série de CCS dele.", tool: "lab" }
      ],
      blocks: [
        { t: "p", text: "**Fazenda Boa Vista — Sr. Adelmo** {1|sap}, um dos 4 de risco alto da bacia:" },
        { t: "delta", rows: [
          { label: "Volume sustentado (12m)", from: "média", to: "11.200 L/dia", toGood: true },
          { label: "Dependência de concentrado", from: "exposição", to: "58%", toGood: false },
          { label: "Tendência de CCS (4 sem)", from: "qualidade", to: "↑ 14%", toGood: false }
        ] },
        { t: "p", text: "Contrato vigente em **fórmula CEPEA**, bonificação por qualidade ativa. É o maior volume individual do pacote e o mais sensível ao milho — prioridade na conversa de campo." },
        { t: "note", title: "Fica com o Vanderlei", text: "Situação familiar, propensão a aceitar pacote, relação pessoal — isso é do campo. Não invento esse sinal." }
      ],
      actions: ["trail"],
      trail: "producers"
    }
  };

  // ---------------------------------------------------------
  // ITEM 8 — bacias monitoradas (view Hoje)
  // ---------------------------------------------------------
  const basins = [
    { id: "zm", nm: "Zona da Mata", status: "alto", metric: "CEPEA proj. +R$ 0,04/L", note: "piloto ativo · entressafra Q3", vol: "1,8 mi L/dia · 40 produtores", spark: [30, 32, 34, 33, 38, 44, 50], go: true, active: true },
    { id: "sm", nm: "Sul de Minas", status: "estável", metric: "CCS dentro do normal", note: "monitorada · fora do piloto", vol: "0,9 mi L/dia · 22 produtores", spark: [29, 28, 30, 29, 31, 30, 31], active: false },
    { id: "tr", nm: "Triângulo", status: "médio", metric: "milho começa a pressionar", note: "monitorada · fora do piloto", vol: "1,2 mi L/dia · 31 produtores", spark: [26, 28, 27, 30, 31, 33, 35], active: false }
  ];

  // ITEM jornada — starters do chat (bacia entra vazia)
  responses["basin"] = {
    userText: "Me explica o que tá acontecendo com a Zona da Mata pra próxima entressafra. Foco nos meus 40 maiores produtores.",
    ai: basinAnswer
  };
  const starters = [
    { key: "basin", text: "O que tá acontecendo com a Zona da Mata pra entressafra Q3?" },
    { key: "producers-12", text: "Quais produtores estão mais em risco?" },
    { key: "compare-aguas", text: "Como esse ciclo se compara com a safra das águas?" }
  ];

  // ITEM jornada — lista de one-pagers
  const onepagerList = [
    { id: "q3", title: "Pacote de retenção — Zona da Mata · Q3/2026", basin: "Zona da Mata", status: "rascunho", when: "31 mai 2026", active: true },
    { id: "sm1", title: "Revisão de fórmula CEPEA — Sul de Minas", basin: "Sul de Minas", status: "aprovado", when: "12 fev 2026" },
    { id: "y25", title: "Fechamento de captação 2025 — visão anual", basin: "Todas as bacias", status: "enviado", when: "08 jan 2026" }
  ];

  window.VEREDA = {
    sources, chips, basinAnswer, responses, fallback, trails,
    onepager, calibration, alerts, cepeaChart,
    simulator, chipPool, followups, basins, starters, onepagerList
  };
})();
