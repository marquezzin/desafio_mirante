/* =====================================================================
   VEREDA · DADOS (mocks ficcionais, internamente coerentes)
   ===================================================================== */

const BACIAS = [
  { id:'zona-mata', nome:'Zona da Mata', uf:'MG', unidade:'MG', semaforo:'verde',
    forecast:{ q1:+0.05, q2:+0.06, q3:+0.04 }, banda:0.03, acerto2T:72,
    pilares:{ P:0.00, E:+0.02, C:+0.04, A:+0.01 }, sinalClaro:true,
    cooperativa:'Itambé', cooperativaId:'itambe',
    analisadoEm:'Hoje, 06:42' },
  { id:'triangulo', nome:'Triângulo Mineiro', uf:'MG', unidade:'MG', semaforo:'amarelo',
    forecast:{ q1:+0.02, q2:+0.01, q3:-0.01 }, banda:0.07, acerto2T:51,
    pilares:{ P:-0.01, E:+0.02, C:-0.02, A:+0.01 }, sinalClaro:false,
    cooperativa:'CCPR', cooperativaId:'ccpr',
    analisadoEm:'Hoje, 06:18' },
  { id:'sul-minas', nome:'Sul de Minas', uf:'MG', unidade:'MG', semaforo:'verde',
    forecast:{ q1:+0.03, q2:+0.04, q3:+0.03 }, banda:0.035, acerto2T:69,
    pilares:{ P:0.00, E:+0.01, C:+0.03, A:0.00 }, sinalClaro:true,
    cooperativa:'Cooperativa Cooxupé Leite', cooperativaId:'cooxupe',
    analisadoEm:'Hoje, 05:55' },
  { id:'sul-goias', nome:'Sul de Goiás', uf:'GO', unidade:'GO', semaforo:'vermelho',
    forecast:{ q1:-0.04, q2:-0.05, q3:-0.03 }, banda:0.04, acerto2T:68,
    pilares:{ P:-0.01, E:-0.04, C:+0.01, A:-0.01 }, sinalClaro:true,
    cooperativa:'Cooperativa Comigo', cooperativaId:'comigo',
    analisadoEm:'Hoje, 05:21' },
  { id:'norte-pr', nome:'Norte do Paraná', uf:'PR', unidade:'PR', semaforo:'amarelo',
    forecast:{ q1:+0.01, q2:+0.02, q3:+0.02 }, banda:0.05, acerto2T:58,
    pilares:{ P:0.00, E:+0.02, C:0.00, A:0.00 }, sinalClaro:true,
    cooperativa:'Castrolanda', cooperativaId:'castrolanda',
    analisadoEm:'Hoje, 04:58' },
];

/* Detalhamento por região leiteira — ficha completa que abre no modal de detalhe */
const BACIAS_DETALHE = {
  'zona-mata':{
    cooperativa:'Cooperativa Itambé',
    municipios:['Juiz de Fora','Muriaé','Cataguases','Ubá','Leopoldina','São João Nepomuceno'],
    produtoresAtivos:148, produtoresSerie:[132,135,138,141,144,146,148],
    volumeMedioDia:'284.500 L/dia', volumeSerie:[262000,268000,272000,276000,279000,281000,284500],
    ccsMedio:412, ccsSerie:[345,360,375,388,395,402,412],
    cbtMedio:38, cbtSerie:[35,36,36,37,37,38,38],
    precoMedio:2.84, precoSerie:[2.62,2.68,2.71,2.74,2.78,2.81,2.84],
    cepeaSerie:[2.60,2.64,2.66,2.69,2.72,2.75,2.78],
    contrato:{
      inicio:'15/03/2022', vencimento:'14/03/2027',
      clausulaRevisao:'Revisão de preço trimestral · próxima janela em 12/08/2026',
      ultimaRenegociacao:'14/10/2025',
      bonificacao:'CCS<300: +R$ 0,08/L · CBT<50: +R$ 0,03/L · Fidelidade 12m: +R$ 0,02/L',
    },
    contato:{
      nome:'José Henrique Andrade', cargo:'Diretor de Captação · Itambé',
      email:'jh.andrade@itambe.com.br', telefone:'(31) 99841-2207',
      ultimoContato:'08/05/2026',
    },
    responsavelInterno:'Anderson Toledo · Gerente de Captação',
    inicioMonitoramento:'01/2023',
    fontes:['ERP de captação (romaneios diários)','Laudo lab. interno (CCS/CBT)','CEPEA/ESALQ (referência)','CHIRPS (chuva)','IBGE PPM (rebanho)'],
    notas:'Região âncora de qualidade da indústria. Sensível à seca de inverno (jun–set).',
  },
  'triangulo':{
    cooperativa:'CCPR · Cooperativa Central dos Produtores Rurais',
    municipios:['Uberaba','Uberlândia','Patrocínio','Araguari','Patos de Minas'],
    produtoresAtivos:92, produtoresSerie:[98,97,96,94,93,92,92],
    volumeMedioDia:'176.300 L/dia', volumeSerie:[182000,180000,179000,178000,177000,176500,176300],
    ccsMedio:368, ccsSerie:[340,348,355,360,365,366,368],
    cbtMedio:42, cbtSerie:[40,41,41,42,42,42,42],
    precoMedio:2.79, precoSerie:[2.64,2.68,2.72,2.74,2.76,2.78,2.79],
    cepeaSerie:[2.60,2.64,2.66,2.69,2.72,2.75,2.78],
    contrato:{
      inicio:'01/06/2021', vencimento:'31/05/2026',
      clausulaRevisao:'Revisão de preço semestral · próxima janela em 01/12/2026',
      ultimaRenegociacao:'02/12/2025',
      bonificacao:'CCS<350: +R$ 0,05/L · CBT<60: +R$ 0,02/L',
    },
    contato:{
      nome:'Marina Ribeiro Couto', cargo:'Gerente de Captação · CCPR',
      email:'marina.couto@ccpr.coop.br', telefone:'(34) 99732-8841',
      ultimoContato:'22/04/2026',
    },
    responsavelInterno:'Anderson Toledo · Gerente de Captação',
    inicioMonitoramento:'04/2023',
    fontes:['ERP de captação (romaneios diários)','Laudo lab. interno','CEPEA/ESALQ','Cocari (inteligência de mercado)'],
    notas:'Cooperativa concorrente (Cocari) ativa na rota desde 02/2026 pagando +R$ 0,04/L.',
  },
  'sul-minas':{
    cooperativa:'Cooxupé Leite',
    municipios:['Pouso Alegre','Varginha','Três Corações','São Lourenço','Itajubá'],
    produtoresAtivos:64, produtoresSerie:[60,61,62,62,63,64,64],
    volumeMedioDia:'118.700 L/dia', volumeSerie:[112000,113500,115000,116500,117500,118200,118700],
    ccsMedio:298, ccsSerie:[310,305,302,300,298,298,298],
    cbtMedio:34, cbtSerie:[36,35,35,34,34,34,34],
    precoMedio:2.86, precoSerie:[2.66,2.70,2.74,2.78,2.81,2.83,2.86],
    cepeaSerie:[2.60,2.64,2.66,2.69,2.72,2.75,2.78],
    contrato:{
      inicio:'01/01/2023', vencimento:'31/12/2027',
      clausulaRevisao:'Revisão anual · próxima janela em 01/01/2027',
      ultimaRenegociacao:'01/01/2026',
      bonificacao:'CCS<300: +R$ 0,10/L · Volume crescente: +R$ 0,03/L · Premium queijo: +R$ 0,05/L',
    },
    contato:{
      nome:'Eduardo Stein', cargo:'Diretor Comercial · Cooxupé Leite',
      email:'eduardo.stein@cooxupeleite.coop.br', telefone:'(35) 99918-7740',
      ultimoContato:'12/05/2026',
    },
    responsavelInterno:'Anderson Toledo · Gerente de Captação',
    inicioMonitoramento:'08/2023',
    fontes:['ERP de captação','Laudo lab. interno','CEPEA/ESALQ','INMET (estação Lavras)'],
    notas:'Qualidade premium consistente. Cooperativa investiu em assistência técnica em 2025.',
  },
  'sul-goias':{
    cooperativa:'Cooperativa Comigo',
    municipios:['Rio Verde','Jataí','Mineiros','Quirinópolis','Santa Helena de Goiás'],
    produtoresAtivos:71, produtoresSerie:[78,77,75,74,73,72,71],
    volumeMedioDia:'132.900 L/dia', volumeSerie:[145000,142000,140000,138000,136000,134000,132900],
    ccsMedio:445, ccsSerie:[395,410,420,428,436,442,445],
    cbtMedio:48, cbtSerie:[44,45,46,47,47,48,48],
    precoMedio:2.71, precoSerie:[2.58,2.62,2.66,2.69,2.70,2.71,2.71],
    cepeaSerie:[2.60,2.64,2.66,2.69,2.72,2.75,2.78],
    contrato:{
      inicio:'01/09/2022', vencimento:'31/08/2026',
      clausulaRevisao:'Revisão de preço trimestral · próxima janela em 01/09/2026',
      ultimaRenegociacao:'01/03/2026',
      bonificacao:'CCS<400: +R$ 0,04/L · Volume estável: +R$ 0,02/L',
    },
    contato:{
      nome:'Roberto Schneider', cargo:'Gerente de Captação · Comigo',
      email:'roberto.schneider@comigo.coop.br', telefone:'(64) 99647-3320',
      ultimoContato:'02/05/2026',
    },
    responsavelInterno:'Anderson Toledo · Gerente de Captação',
    inicioMonitoramento:'11/2023',
    fontes:['ERP de captação','Laudo lab. interno','CEPEA/ESALQ','CHIRPS (chuva)','B3 (milho futuro)'],
    notas:'Pressão de custo do milho. Câmbio favorável ao leite em pó importado em discussão.',
  },
  'norte-pr':{
    cooperativa:'Castrolanda',
    municipios:['Castro','Carambeí','Ponta Grossa','Arapoti','Tibagi'],
    produtoresAtivos:54, produtoresSerie:[50,51,52,52,53,53,54],
    volumeMedioDia:'168.400 L/dia', volumeSerie:[160000,162000,163500,165000,166500,167500,168400],
    ccsMedio:325, ccsSerie:[330,328,326,325,324,325,325],
    cbtMedio:36, cbtSerie:[38,37,36,36,36,36,36],
    precoMedio:2.82, precoSerie:[2.64,2.68,2.72,2.75,2.78,2.80,2.82],
    cepeaSerie:[2.60,2.64,2.66,2.69,2.72,2.75,2.78],
    contrato:{
      inicio:'15/07/2022', vencimento:'14/07/2027',
      clausulaRevisao:'Revisão semestral · próxima janela em 15/01/2027',
      ultimaRenegociacao:'15/01/2026',
      bonificacao:'CCS<350: +R$ 0,06/L · CBT<50: +R$ 0,02/L · Fidelidade: +R$ 0,02/L',
    },
    contato:{
      nome:'Henk van der Berg', cargo:'Gerente de Captação · Castrolanda',
      email:'henk.berg@castrolanda.coop.br', telefone:'(42) 99837-6614',
      ultimoContato:'28/04/2026',
    },
    responsavelInterno:'Anderson Toledo · Gerente de Captação',
    inicioMonitoramento:'02/2024',
    fontes:['ERP de captação','Laudo lab. interno','CEPEA/ESALQ','IBGE PPM','Frísia (inteligência de mercado)'],
    notas:'Genética holandesa + manejo industrializado. Estabilidade alta, margem fina.',
  },
};

/* Resultado fixo do "AI import" do fluxo de criação de nova região (demo) */
const IMPORTACAO_DEMO = {
  arquivo:'Aurora_oeste_sc_36meses.xlsx',
  tamanho:'3,4 MB',
  linhas:1842,
  abas:['Romaneios diarios','Laudos laboratorio','Contratos','Tabela de preco','Bonificacao qualidade'],
  steps:[
    { t:'Lendo arquivo Aurora_oeste_sc_36meses.xlsx (3,4 MB)…',                                  delay:600  },
    { t:'Detectando estrutura: 5 abas, 1.842 linhas, 22 colunas.',                               delay:700  },
    { t:'Mapeando colunas para o schema Vereda (data · produtor · volume · CCS · CBT · preço).', delay:900  },
    { t:'Cruzando CNPJ da cooperativa com base pública (Receita + OCB) → Cooperativa Central Aurora Alimentos Ltda.', delay:1000 },
    { t:'Identificando região leiteira pela distribuição de municípios → Oeste de Santa Catarina · SC.', delay:950 },
    { t:'Não há sobreposição com regiões cadastradas — esta é uma nova bacia para o Vereda.',    delay:700  },
    { t:'Consolidando 36 meses de série · 92 produtores ativos · contrato vigente até 30/09/2027.', delay:800 },
    { t:'Pronto. Pré-visualização da nova região leiteira abaixo.',                              delay:500  },
  ],
  resultado:{
    id:'oeste-sc',
    nome:'Oeste de Santa Catarina',
    uf:'SC',
    cooperativa:'Cooperativa Aurora',
    produtoresAtivos:92,
    volumeMedioDia:'196.800 L/dia',
    municipios:7,
    contratoVencimento:'30/09/2027',
    ccsMedio:298,
    precoMedio:'R$ 2,91/L',
    aviso:'Nova bacia — não há sobreposição com regiões cadastradas. A IA precisa de pelo menos 6 meses de série para gerar previsão com confiança; nesse intervalo a região entra em "modo observação" no Painel.',
  },
};

/* Payload aplicado ao confirmar o cadastro: vira um card no Painel e uma ficha em BACIAS_DETALHE */
const NOVA_REGIAO_PAYLOAD = {
  bacia:{
    id:'oeste-sc', nome:'Oeste de Santa Catarina', uf:'SC', unidade:'SC',
    semaforo:'amarelo',
    forecast:{ q1:+0.03, q2:+0.04, q3:+0.03 }, banda:0.08, acerto2T:null,
    pilares:{ P:0.00, E:+0.02, C:+0.01, A:+0.01 }, sinalClaro:false,
    cooperativa:'Cooperativa Aurora', cooperativaId:'aurora',
    novaRegiao:true,
    analisadoEm:'Acumulando série · 4 dias',
  },
  detalhe:{
    cooperativa:'Cooperativa Central Aurora Alimentos Ltda.',
    municipios:['Chapecó','Concórdia','Xanxerê','Pinhalzinho','São Miguel do Oeste','Maravilha','Seara'],
    produtoresAtivos:92, produtoresSerie:[78,81,83,85,87,90,92],
    volumeMedioDia:'196.800 L/dia', volumeSerie:[172000,176000,181000,186000,190000,193500,196800],
    ccsMedio:298, ccsSerie:[315,310,306,303,301,299,298],
    cbtMedio:33, cbtSerie:[36,35,34,34,33,33,33],
    precoMedio:2.91, precoSerie:[2.70,2.74,2.78,2.82,2.86,2.89,2.91],
    cepeaSerie:[2.60,2.64,2.66,2.69,2.72,2.75,2.78],
    contrato:{
      inicio:'01/10/2022', vencimento:'30/09/2027',
      clausulaRevisao:'Revisão de preço quadrimestral · próxima janela em 01/10/2026',
      ultimaRenegociacao:'01/06/2026',
      bonificacao:'CCS<300: +R$ 0,10/L · CBT<40: +R$ 0,04/L · Volume crescente: +R$ 0,03/L · Premium queijo: +R$ 0,04/L',
    },
    contato:{
      nome:'Daiana Fischer Hoffmann', cargo:'Gerente de Captação · Aurora Oeste',
      email:'daiana.hoffmann@auroraalimentos.com.br', telefone:'(49) 99812-4470',
      ultimoContato:'19/05/2026',
    },
    responsavelInterno:'Anderson Toledo · Gerente de Captação',
    inicioMonitoramento:'05/2026 · nova',
    fontes:['ERP de captação (planilha importada)','Laudo lab. interno','CEPEA/ESALQ','CHIRPS (chuva)','Epagri (assistência técnica SC)'],
    notas:'Bacia nova no Vereda. Genética holandesa + clima frio favorecem qualidade. Forte concorrência da Tirol e Piracanjuba na região.',
  },
};

const PILAR_NOME = { P:'Político', E:'Econômico', C:'Climático', A:'Agropecuário' };

const RECOMENDACAO_ZONA_MATA = {
  alavanca:'Antecipe em 30 dias a renegociação de contrato com a cooperativa Itambé e direcione mais volume de compra para esta região.',
  prob:70, spreadMin:+0.03, spreadMax:+0.07,
  // Plano de ação concreto — o "como fazer" por trás da alavanca
  plano:{
    porque:'A seca projetada (CHIRPS −18%) aperta a oferta regional nos próximos 6–9 meses. Travar volume e o tier de qualidade com a Itambé agora — antes do pico da seca — garante o leite quando o preço subir e o produtor tiver menos margem pra negociar.',
    janelaIdeal:'08/06/2026 a 22/06/2026',
    janelaJustificativa:'Cláusula de revisão trimestral abre em 12/08/2026. Negociar 30–60 dias antes evita pressão de prazo e dá margem pra ajustar volume contratado antes do pico da seca.',
    acoes:[
      { titulo:'Convocar reunião com José Henrique Andrade (Diretor de Captação · Itambé)', detalhe:'Apresentar projeção CHIRPS de oferta regional −6% e propor antecipação da janela de revisão de preço.' },
      { titulo:'Negociar aumento de volume contratado em +12% no trimestre 08–10/2026', detalhe:'Volume atual: 284.500 L/dia · proposta: 318.640 L/dia. Compensa o aperto previsto de oferta regional.' },
      { titulo:'Revisar bonificação por qualidade (CCS/CBT)', detalhe:'CCS regional subindo (+18% no trimestre). Travar tier CCS<300 em +R$ 0,10/L incentiva o produtor a investir em manejo antes do agravamento da seca.' },
      { titulo:'Documentar premissa climática no contrato', detalhe:'Incluir cláusula de gatilho: se chuva acumulada (CHIRPS) ficar >25% abaixo da média em jul–ago, abre janela extraordinária de renegociação.' },
    ],
    impactoEstimado:{
      ganhoLitro:'+R$ 0,05/L (mediana da faixa +R$ 0,03 a +R$ 0,07)',
      volumeMensal:'8,5 milhões de litros (284.500 L/dia × 30 dias)',
      impactoTrimestre:'R$ 1,27 milhão de margem adicional no trimestre vs. cenário de não agir',
      premissa:'Considera spread de preço estimado pela IA × volume contratado pós-renegociação. Sensível a câmbio (R$ 5,40) e premissa climática (neutro).',
    },
    naoFazer:[
      'Não conceder aumento de bônus antes da virada climática confirmada — espera mais 30 dias de leitura CHIRPS.',
      'Não estender contrato vigente sem cláusula de gatilho climático.',
    ],
    fontesAcao:[
      { nome:'Itambé · ERP de captação', detalhe:'Volume contratado e histórico de revisão.' },
      { nome:'CHIRPS', detalhe:'Projeção de chuva acumulada por satélite.' },
      { nome:'CEPEA/ESALQ', detalhe:'Preço de referência pra modelar spread.' },
    ],
  },
  // Metodologia exposta ao usuário
  metodologia:{
    resumo:'A IA cruza 4 pilares (Climático, Econômico, Agropecuário, Político) e cada pilar entra com um peso em R$/litro. A soma dos pilares ativos = ganho esperado vs. CEPEA. O fator Político fica em quarentena (peso zero) até virar fato consumado em Diário Oficial.',
    janelaPrevisao:'9 meses · ensemble SARIMAX (séries temporais) + LightGBM (não-linearidade)',
    calibracao:'Recalibrada a cada ciclo trimestral contra realizados. Acerto histórico em 6 meses para a Zona da Mata: 72%.',
  },
  drivers:[
    { pilar:'Climático', sigla:'C', valor:+0.04,
      detalhe:'Chuva acumulada 18% abaixo da média dos últimos 10 anos na região — projeção de menor oferta regional de leite na janela de 6–9 meses.',
      dadoBruto:'Acumulado mar–mai/2026: 142 mm vs. média 10 anos 173 mm (Δ −18%). Projeção CHIRPS jun–ago/2026: 38 mm vs. média 52 mm (−27%).',
      comparacao:'Padrão similar ao trimestre seco de 2014, quando oferta regional caiu 8% e preço subiu R$ 0,07/L.',
      fonte:'CHIRPS / NASA POWER', url:'https://www.chc.ucsb.edu/data/chirps',
      atualizadoEm:'27/05/2026' },
    { pilar:'Econômico', sigla:'E', valor:+0.02,
      detalhe:'Dólar a R$ 5,40 e milho futuro +3% pressionam o custo de produção do produtor e sustentam o preço pago pelo leite.',
      dadoBruto:'Dólar PTAX 28/05/2026: R$ 5,4087/USD. Milho futuro B3 (CCMK26): R$ 71,40/saca (+3,1% no mês).',
      comparacao:'Dólar acima de R$ 5,30 historicamente correlaciona com preço pago ao produtor +R$ 0,02 a +R$ 0,04/L vs. CEPEA.',
      fonte:'BCB-SGS / B3 (milho)', url:'https://www3.bcb.gov.br/sgspub/',
      atualizadoEm:'29/05/2026' },
    { pilar:'Agropecuário', sigla:'A', valor:+0.01,
      detalhe:'Rebanho estável (IBGE PPM); contagem de células somáticas (CCS) subindo na seca — sinaliza pressão de qualidade do leite.',
      dadoBruto:'Rebanho Zona da Mata 2024 (IBGE PPM): 312 mil cabeças (estável vs. 2023). CCS médio regional últimos 90 dias: 388 céls/mL (vs. 345 no mesmo período de 2025, +12%).',
      comparacao:'Aumento de CCS na entressafra é típico, mas a curva atual está 1 mês adiantada — sugere efeito climático antecipado.',
      fonte:'IBGE PPM / laboratório interno', url:'https://www.ibge.gov.br/',
      atualizadoEm:'25/05/2026' },
    { pilar:'Político', sigla:'P', valor:0.00, quarentena:true,
      detalhe:'Possível mudança de alíquota do leite em pó importado em discussão no Mercosul — observado, mas não entra no cálculo da IA até virar fato.',
      dadoBruto:'PL 1.247/2026 em discussão na Câmara propõe redução de alíquota TEC do leite em pó de 28% para 16% pra produtos Mercosul. Última movimentação: relatoria em 18/05/2026.',
      comparacao:'Se aprovado e em vigor, simulações sugerem pressão de −R$ 0,03 a −R$ 0,05/L no preço doméstico. Até virar lei, peso na IA = 0.',
      fonte:'MAPA / Diário Oficial', url:'https://www.gov.br/agricultura/',
      atualizadoEm:'18/05/2026' },
  ],
};

/* Planos de ação por região (Zona da Mata é o RECOMENDACAO_ZONA_MATA acima) */
const PLANOS_POR_BACIA = {
  'triangulo':{
    alavanca:'Não comprometa volume adicional nesta região no próximo trimestre. Foque em reter os produtores categoria Atenção antes que a Cocari pegue a base.',
    prob:51, spreadMin:-0.06, spreadMax:+0.08,
    plano:{
      porque:'Sinal misto (faixa ±0,07, acerto 51%) não justifica comprometer capital agora. Mas a Cocari paga +R$ 0,04/L na rota desde fev — o risco real não é preço, é perder produtores categoria Atenção. A ação protege a base sem mover alocação enquanto o sinal não se define.',
      janelaIdeal:'10/06/2026 a 25/06/2026',
      janelaJustificativa:'Cocari (cooperativa concorrente) está pagando +R$ 0,04/L na região desde fev/2026. Esperar mais 30 dias arrisca perda gradual de produtores categoria Atenção sem chance de reação.',
      acoes:[
        { titulo:'Visitar Granja Três Irmãos e os outros 3 produtores categoria Atenção em 15 dias', detalhe:'Pedido de segunda via de contrato em 18/04 é sinal forte de comparação de propostas. Visita reverte 60–70% dessas tendências em janela de até 30 dias.' },
        { titulo:'Lançar bônus de fidelidade temporário (90 dias)', detalhe:'+R$ 0,02/L para produtores com 24+ meses de contrato — cobre o gap vs. Cocari sem virar gatilho permanente.' },
        { titulo:'Não renegociar volume contratado com a CCPR neste trimestre', detalhe:'Sinal misto da IA (faixa larga, acerto 51%) — não é hora de comprometer alocação de capital. Mantenha a posição até o próximo ciclo.' },
        { titulo:'Pedir à CCPR boletim semanal de inteligência de mercado', detalhe:'Marina Couto já mantém esse boletim internamente. Visibilidade contínua sobre Cocari vale mais que decisão pontual agora.' },
      ],
      impactoEstimado:{
        ganhoLitro:'Defensivo · valor em não perder',
        volumeMensal:'5,3 milhões de L/mês (176.300 L/dia × 30 dias)',
        impactoTrimestre:'Evitar perda estimada de R$ 380 mil em volume captado',
        premissa:'Considera 8% de churn de produtores Atenção se ação não acontecer (taxa histórica em regiões com concorrente ativo na rota há >90 dias).',
      },
      naoFazer:[
        'Não conceder bônus permanente — risco de virar piso fixo.',
        'Não antecipar revisão contratual com a CCPR — sinal não é claro o suficiente.',
        'Não comprometer aumento de volume contratado neste ciclo.',
      ],
    },
    metodologia:{
      resumo:'A IA tem baixa confiança nesta região por causa do conflito entre sinal econômico positivo (+R$ 0,02 do câmbio/milho) e sinal climático negativo (−R$ 0,02 de oferta acima da média). Faixa de previsão fica larga (±0,07).',
      janelaPrevisao:'9 meses · ensemble SARIMAX + LightGBM',
      calibracao:'Acerto histórico em 6 meses para o Triângulo: 51%. Sinal de pouca confiança fica visível no painel.',
    },
    drivers:[
      { pilar:'Climático', sigla:'C', valor:-0.02,
        detalhe:'Chuva acumulada acima da média no Triângulo — projeção de oferta regional levemente maior do que o esperado.',
        dadoBruto:'Acumulado mar–mai/2026: 198 mm vs. média 10 anos 175 mm (+13%). Projeção CHIRPS jun–ago: 65 mm vs. média 58 mm (+12%).',
        comparacao:'Excesso de chuva moderado historicamente reduz o preço pago em R$ 0,02–0,03/L vs. CEPEA.',
        fonte:'CHIRPS / NASA POWER', url:'https://www.chc.ucsb.edu/data/chirps', atualizadoEm:'27/05/2026' },
      { pilar:'Econômico', sigla:'E', valor:+0.02,
        detalhe:'Câmbio elevado sustenta preço pago, mas o efeito é parcialmente neutralizado pela maior oferta regional.',
        dadoBruto:'Dólar PTAX 28/05/2026: R$ 5,4087/USD. Milho futuro B3 (CCMK26): R$ 71,40/saca (+3,1% no mês).',
        comparacao:'Em regiões de sinal misto, o pilar econômico costuma dominar quando a oferta é estável — não é o caso aqui.',
        fonte:'BCB-SGS / B3 (milho)', url:'https://www3.bcb.gov.br/sgspub/', atualizadoEm:'29/05/2026' },
      { pilar:'Agropecuário', sigla:'A', valor:+0.01,
        detalhe:'Rebanho regional estável; CCS médio em piso histórico (368 céls/mL).',
        dadoBruto:'Rebanho Triângulo Mineiro 2024 (IBGE PPM): 198 mil cabeças (+1,2% vs. 2023). CCS médio últimos 90 dias: 368 céls/mL.',
        comparacao:'CCS abaixo de 400 sustenta tier de bonificação atual, mas não tem efeito de margem adicional.',
        fonte:'IBGE PPM / laboratório interno', url:'https://www.ibge.gov.br/', atualizadoEm:'25/05/2026' },
      { pilar:'Político', sigla:'P', valor:0.00, quarentena:true,
        detalhe:'Mesma pauta Mercosul observada nacionalmente. Quarentena permanente.',
        dadoBruto:'PL 1.247/2026 em discussão na Câmara — TEC do leite em pó. Última movimentação: relatoria em 18/05/2026.',
        comparacao:'Sem efeito direto enquanto não virar lei. Peso na IA = 0.',
        fonte:'MAPA / Diário Oficial', url:'https://www.gov.br/agricultura/', atualizadoEm:'18/05/2026' },
    ],
  },
  'sul-minas':{
    alavanca:'Antecipe conversa com a Cooxupé Leite e proponha aumento de +15% no volume contratado anual. Sul de Minas é o melhor par risco-retorno do portfólio atual.',
    prob:69, spreadMin:+0.01, spreadMax:+0.07,
    plano:{
      porque:'Sul de Minas reúne as três condições pra crescer com segurança: oferta sob controle (clima estável), qualidade premium (CCS<300) e contrato vigente até 2027. É o melhor par risco-retorno da carteira — onde vale concentrar volume adicional agora.',
      janelaIdeal:'01/07/2026 a 15/07/2026',
      janelaJustificativa:'Revisão anual de contrato com a Cooxupé Leite abre em 01/01/2027. Conversa preliminar 6 meses antes pega Eduardo Stein no fim do ciclo de planejamento da cooperativa.',
      acoes:[
        { titulo:'Reunião com Eduardo Stein (Diretor Comercial · Cooxupé Leite)', detalhe:'Apresentar projeção de demanda interna +15% para 2027 + plano de expansão de bonificação tier premium para incentivar manejo confinado.' },
        { titulo:'Negociar volume anual +15% (volume atual 118.700 L/dia → meta 136.500 L/dia)', detalhe:'Cooperativa já investiu em assistência técnica em 2025 — base de produtores tem capacidade técnica pra absorver crescimento.' },
        { titulo:'Travar tier premium CCS<300 em +R$ 0,12/L', detalhe:'CCS médio regional já está em 298 (abaixo do limite premium). Pequeno aumento do tier vira retenção barata.' },
        { titulo:'Avaliar contrato 5 anos com cláusula de revisão anual', detalhe:'Cooxupé tem perfil de longo prazo. Contrato longo reduz pressão de renegociação anual e libera capital pra outras frentes.' },
      ],
      impactoEstimado:{
        ganhoLitro:'+R$ 0,04/L (mediana da faixa +R$ 0,01 a +R$ 0,07)',
        volumeMensal:'4,1 milhões de L/mês após expansão (136.500 L/dia × 30 dias)',
        impactoTrimestre:'R$ 491 mil de margem adicional no trimestre pós-expansão',
        premissa:'Considera execução em 01/01/2027. Sensível ao câmbio (R$ 5,40) e à premissa de absorção de qualidade pelo mercado interno.',
      },
      naoFazer:[
        'Não pressionar prazo — Cooxupé responde mal a urgência negocial.',
        'Não envolver outros tiers de bonificação na mesma conversa — mantenha foco no volume + CCS premium.',
        'Não comprometer logística (rotas, frota) sem confirmação da operação interna.',
      ],
    },
    metodologia:{
      resumo:'Região de sinal claro e consistente: oferta sob controle, qualidade premium, contrato vigente até 2027. Combinação ideal pra crescer volume contratado.',
      janelaPrevisao:'9 meses · ensemble SARIMAX + LightGBM',
      calibracao:'Acerto histórico em 6 meses para Sul de Minas: 69%.',
    },
    drivers:[
      { pilar:'Climático', sigla:'C', valor:+0.03,
        detalhe:'Chuva levemente abaixo da média + INMET indica entressafra branda — oferta projetada estável.',
        dadoBruto:'Acumulado mar–mai/2026: 162 mm vs. média 10 anos 168 mm (−4%). Estação INMET Lavras: padrão normal.',
        comparacao:'Estabilidade climática histórica em Sul de Minas correlaciona com prêmio de preço de R$ 0,02–0,04/L vs. CEPEA.',
        fonte:'CHIRPS / INMET', url:'https://www.chc.ucsb.edu/data/chirps', atualizadoEm:'27/05/2026' },
      { pilar:'Econômico', sigla:'E', valor:+0.01,
        detalhe:'Câmbio sustenta preço base, mas demanda interna premium (queijos) é o driver principal.',
        dadoBruto:'Demanda de queijos premium MG +8% em 12 meses (dados ABIQ). Preço pago Cooxupé Leite: R$ 2,86/L (R$ 0,08 acima do CEPEA).',
        comparacao:'Mercado de queijos premium tem alavancagem maior que o leite UHT — efeito não captado pelo CEPEA.',
        fonte:'BCB-SGS / ABIQ', url:'https://www3.bcb.gov.br/sgspub/', atualizadoEm:'29/05/2026' },
      { pilar:'Agropecuário', sigla:'A', valor:0.00,
        detalhe:'Qualidade do leite consistentemente premium. Rebanho expandiu 6% em 2024.',
        dadoBruto:'CCS médio regional 12 meses: 298 céls/mL. Rebanho 2024 (IBGE PPM): 287 mil cabeças (+6,2% vs. 2023).',
        comparacao:'Único caso entre as 5 regiões com CCS médio abaixo do limite premium 300.',
        fonte:'IBGE PPM / laboratório interno', url:'https://www.ibge.gov.br/', atualizadoEm:'25/05/2026' },
      { pilar:'Político', sigla:'P', valor:0.00, quarentena:true,
        detalhe:'Sem pauta política específica afetando a região. Quarentena permanente.',
        dadoBruto:'Pauta Mercosul (TEC) é nacional. Sem impacto regional específico mapeado.',
        comparacao:'—',
        fonte:'MAPA / Diário Oficial', url:'https://www.gov.br/agricultura/', atualizadoEm:'18/05/2026' },
    ],
  },
  'sul-goias':{
    alavanca:'Postura defensiva: mantenha o volume contratado, não conceda aumentos de bônus e prepare plano B com a Cooperativa Comigo. Sul de Goiás vai apertar nos próximos 6 meses.',
    prob:68, spreadMin:-0.09, spreadMax:-0.01,
    plano:{
      porque:'Câmbio e milho favorecem o leite em pó importado e o CCS está subindo — sinal negativo com 68% de confiança e faixa estreita. Conceder bônus ou crescer aqui é jogar capital contra a maré. A ação preserva margem e libera volume pra realocar em Sul de Minas e Zona da Mata.',
      janelaIdeal:'NÃO antecipar · esperar revisão trimestral em 01/09/2026',
      janelaJustificativa:'IA tem 68% de confiança no sinal negativo. Antecipar conversa expõe a indústria — melhor deixar a cooperativa vir com a próxima janela formal e barganhar com a leitura na mão.',
      acoes:[
        { titulo:'Não conceder bônus extra à Cooperativa Comigo neste ciclo', detalhe:'CCS subindo 13% nos últimos 90 dias (445 céls/mL atual) sugere qualidade pressionada — não premiar quando a base de qualidade está se deteriorando.' },
        { titulo:'Revisar contratos de menor volume na região e considerar não-renovar até 12 produtores Atenção', detalhe:'Concentração em produtores OK reduz exposição. Capital liberado vai pra reforçar Sul de Minas e Zona da Mata.' },
        { titulo:'Preparar plano B com Sul de Minas e Norte do Paraná', detalhe:'Reduzir 8% do volume contratado em Sul de Goiás e realocar para regiões com sinal positivo de IA. Início da realocação em out/2026.' },
        { titulo:'Monitorar B3 (milho) e PL 1.247 da TEC do leite em pó semanalmente', detalhe:'Dois gatilhos: milho >R$ 80/saca ou aprovação da TEC, qualquer um, vira sinal de saída antecipada de Sul de Goiás.' },
      ],
      impactoEstimado:{
        ganhoLitro:'Defensivo · −R$ 0,05/L (mediana da faixa −R$ 0,09 a −R$ 0,01)',
        volumeMensal:'4,0 milhões de L/mês (132.900 L/dia × 30 dias)',
        impactoTrimestre:'Evitar perda estimada de R$ 595 mil ao manter postura defensiva',
        premissa:'Considera que o cenário não-defensivo levaria a aumento de bônus de +R$ 0,03/L sem ganho de margem. Premissa de câmbio R$ 5,40 e milho B3 estável.',
      },
      naoFazer:[
        'Não antecipar a renegociação contratual — ela vem em 01/09.',
        'Não conceder aumento de tier de bonificação enquanto CCS estiver subindo.',
        'Não cortar produtores OK por engano — limpe Atenção primeiro.',
      ],
    },
    metodologia:{
      resumo:'Sinal claramente negativo: pressão climática + câmbio favorecendo leite em pó importado + CCS subindo. Faixa estreita (banda ±0,04) com 68% de confiança no sinal de pressão.',
      janelaPrevisao:'9 meses · ensemble SARIMAX + LightGBM',
      calibracao:'Acerto histórico em 6 meses para Sul de Goiás: 68%.',
    },
    drivers:[
      { pilar:'Climático', sigla:'C', valor:+0.01,
        detalhe:'Padrão climático neutro. Sem efeito significativo de oferta projetada.',
        dadoBruto:'Acumulado mar–mai/2026: 174 mm vs. média 10 anos 180 mm (−3%). CHIRPS projeção jun–ago: dentro da banda histórica.',
        comparacao:'Sem padrão de seca ou excesso de chuva identificado.',
        fonte:'CHIRPS / NASA POWER', url:'https://www.chc.ucsb.edu/data/chirps', atualizadoEm:'27/05/2026' },
      { pilar:'Econômico', sigla:'E', valor:-0.04,
        detalhe:'Câmbio + custo do milho favorecem leite em pó importado. Pressão direta no preço doméstico.',
        dadoBruto:'Dólar PTAX 28/05/2026: R$ 5,4087/USD. Milho futuro B3 (CCMK26): R$ 71,40/saca (+3,1%). Importação de leite em pó +14% nos últimos 90 dias (SECEX).',
        comparacao:'Cenário similar ao 1º semestre de 2018 — preço pago caiu R$ 0,06/L em 4 meses.',
        fonte:'BCB-SGS / SECEX / B3', url:'https://www3.bcb.gov.br/sgspub/', atualizadoEm:'29/05/2026' },
      { pilar:'Agropecuário', sigla:'A', valor:-0.01,
        detalhe:'CCS regional subindo, sinaliza pressão de qualidade. Rebanho estável.',
        dadoBruto:'CCS médio últimos 90 dias: 445 céls/mL (+12,7% vs. mesmo período 2025). Rebanho 2024 (IBGE PPM): 165 mil cabeças (estável).',
        comparacao:'CCS acima de 400 sinaliza pressão de qualidade pré-seca atípica.',
        fonte:'IBGE PPM / laboratório interno', url:'https://www.ibge.gov.br/', atualizadoEm:'25/05/2026' },
      { pilar:'Político', sigla:'P', valor:0.00, quarentena:true,
        detalhe:'Pauta Mercosul (TEC) particularmente relevante para esta região — leite em pó importado da Argentina e Paraguai entra por aqui.',
        dadoBruto:'PL 1.247/2026: redução de TEC do leite em pó 28% → 16%. Última movimentação: relatoria em 18/05/2026. Sul de Goiás importa 38% do leite em pó MERCOSUL.',
        comparacao:'Se aprovado, pressão adicional estimada de −R$ 0,03 a −R$ 0,05/L na região. Quarentena: peso = 0 até virar lei.',
        fonte:'MAPA / SECEX', url:'https://www.gov.br/agricultura/', atualizadoEm:'18/05/2026' },
    ],
  },
  'norte-pr':{
    alavanca:'Mantenha o ritmo atual de captação e use o próximo trimestre para explorar relacionamento de longo prazo com a Castrolanda. Sinal positivo de baixa magnitude — ação calma.',
    prob:58, spreadMin:-0.03, spreadMax:+0.07,
    plano:{
      porque:'Sinal positivo, mas pequeno (+R$ 0,02/L) — não justifica mudança estrutural de alocação. O valor aqui é a relação de longo prazo com a Castrolanda, que tem o padrão mais estável da carteira. A ação é ajuste fino e construção de horizonte, não aposta de volume.',
      janelaIdeal:'15/11/2026 a 30/11/2026',
      janelaJustificativa:'Revisão semestral da Castrolanda abre em 15/01/2027. 60 dias antes é janela ideal para construir conversa de longo prazo sem pressão imediata.',
      acoes:[
        { titulo:'Manter visitas técnicas mensais', detalhe:'Castrolanda mantém perfil de estabilidade alta. Não há sinal forte de risco — frequência de relacionamento é o que sustenta a posição.' },
        { titulo:'Iniciar diálogo sobre contrato de longo prazo (5+ anos)', detalhe:'Henk van der Berg tem perfil de planejamento longo. Conversa de antecipação de horizonte traz previsibilidade para os 2 lados.' },
        { titulo:'Avaliar bonificação por CBT premium (<40)', detalhe:'CBT médio regional já em 36 — tier premium novo de R$ 0,03/L pode amarrar produtores premium sem grande custo marginal.' },
        { titulo:'Não comprometer mudança estrutural sem nova rodada de dado', detalhe:'Sinal de IA é de baixa magnitude (+R$ 0,02/L em 6 meses). Não justifica mudança grande de alocação — só ajuste fino.' },
      ],
      impactoEstimado:{
        ganhoLitro:'+R$ 0,02/L (mediana da faixa −R$ 0,03 a +R$ 0,07)',
        volumeMensal:'5,0 milhões de L/mês (168.400 L/dia × 30 dias)',
        impactoTrimestre:'R$ 303 mil de margem adicional no trimestre se mantida a posição',
        premissa:'Considera execução do plano sem mudança estrutural. Sensível à premissa de câmbio R$ 5,40 e estabilidade do rebanho holandês.',
      },
      naoFazer:[
        'Não comprometer volume adicional além da capacidade atual da Castrolanda.',
        'Não pressionar prazo — relacionamento de longo prazo é o ativo aqui.',
        'Não introduzir bonificações novas além do CBT premium.',
      ],
    },
    metodologia:{
      resumo:'Sinal positivo claro mas de baixa magnitude (+R$ 0,02/L). Acerto histórico de 58% reflete que a região tem padrão estável — não há grandes mudanças pra prever, e o modelo erra mais quando o sinal é pequeno.',
      janelaPrevisao:'9 meses · ensemble SARIMAX + LightGBM',
      calibracao:'Acerto histórico em 6 meses para Norte do Paraná: 58%. Menor da carteira por baixa amplitude do sinal.',
    },
    drivers:[
      { pilar:'Climático', sigla:'C', valor:0.00,
        detalhe:'Padrão climático típico de PR. Estabilidade alta no histórico.',
        dadoBruto:'Acumulado mar–mai/2026: 168 mm vs. média 10 anos 172 mm (−2%). CHIRPS projeção jun–ago: dentro da banda histórica.',
        comparacao:'Norte do PR é a região climaticamente mais estável da carteira.',
        fonte:'CHIRPS / NASA POWER', url:'https://www.chc.ucsb.edu/data/chirps', atualizadoEm:'27/05/2026' },
      { pilar:'Econômico', sigla:'E', valor:+0.02,
        detalhe:'Câmbio sustenta preço base. Custo do milho favorece a região (PR é grande produtor).',
        dadoBruto:'Dólar PTAX 28/05/2026: R$ 5,4087/USD. Milho futuro B3 (CCMK26): R$ 71,40/saca. PR responde por 22% da produção nacional de milho — vantagem logística.',
        comparacao:'Margem de produtor PR aguenta câmbio +20% sem repasse, dado vantagem logística do milho.',
        fonte:'BCB-SGS / CONAB', url:'https://www3.bcb.gov.br/sgspub/', atualizadoEm:'29/05/2026' },
      { pilar:'Agropecuário', sigla:'A', valor:0.00,
        detalhe:'Qualidade do leite premium consistente. Rebanho holandês com manejo industrializado.',
        dadoBruto:'CCS médio últimos 90 dias: 325 céls/mL. CBT médio: 36 (UFC ×10³/mL). Rebanho 2024 (IBGE PPM): 142 mil cabeças (+2,8%).',
        comparacao:'Padrão estável historicamente. Sem efeito de margem adicional.',
        fonte:'IBGE PPM / laboratório interno', url:'https://www.ibge.gov.br/', atualizadoEm:'25/05/2026' },
      { pilar:'Político', sigla:'P', valor:0.00, quarentena:true,
        detalhe:'Pauta Mercosul (TEC) com efeito moderado por logística PR. Quarentena permanente.',
        dadoBruto:'PL 1.247/2026 em discussão. Norte do PR recebe leite em pó importado pelo porto de Paranaguá.',
        comparacao:'Se aprovado, efeito estimado em −R$ 0,02/L. Quarentena: peso = 0.',
        fonte:'MAPA / Diário Oficial', url:'https://www.gov.br/agricultura/', atualizadoEm:'18/05/2026' },
    ],
  },
};

const HISTORICO_ZONA_MATA = [
  { data:'10/05/2026', alavanca:'Antecipar renegociação Itambé',     decisao:'Aceito',   realizado:+0.05, acertou:true },
  { data:'02/04/2026', alavanca:'Priorizar volume na Zona da Mata',  decisao:'Aceito',   realizado:+0.04, acertou:true },
  { data:'18/02/2026', alavanca:'Revisar bônus por qualidade',       decisao:'Ajustado', realizado:+0.02, acertou:true },
  { data:'07/01/2026', alavanca:'Manter mix atual',                  decisao:'Recusado', realizado:-0.01, acertou:false },
];

const PRODUTORES = [
  {
    id:1, nome:'Sítio Boa Vista', bacia:'Zona da Mata',
    categoria:'Alto', tendencia:'subindo', sobControle:false,
    riskScore:78, confianca:'alta', volumeMedio:'3.450 L/dia',
    analisadoEm:'Hoje, 06:42',
    proprietario:'Carlos Henrique Vasconcelos', cpf:'***.418.302-23',
    municipio:'Muriaé · MG', areaHa:42, vinculo:'cooperativa',
    rebanho:{ leiteiras:38, secas:7, raca:'Holandês × Gir (3/4)', regime:'Semiconfinado' },
    contrato:{
      inicio:'15/03/2024', vencimento:'14/03/2027',
      precoBase:2.78, bonificacaoAtual:'CCS<300: +R$ 0,08/L (não atinge desde fev/2026)',
      ultimaRevisaoBonificacao:'14/06/2025',
    },
    motivo:'Volume em queda + qualidade do leite (CCS) piorando + concorrente ativa na rota.',
    sinais:[
      { label:'Volume caiu 18% em 60 dias', peso:+24,
        fonte:'ERP de captação · romaneios diários',
        detalhe:'Média 60 dias atrás: 4.200 L/dia → últimos 30 dias: 3.450 L/dia (Δ −750 L/dia, −17,9%).',
        data:'calculado em 28/05/2026' },
      { label:'CCS acima do limite em 3 leituras consecutivas', peso:+18,
        fonte:'Laudo lab. interno (LabAgro Juiz de Fora)',
        detalhe:'510 (mar/26) · 590 (abr/26) · 640 (mai/26) — limite legal IN 76: 500 céls/mL.',
        data:'última leitura 22/05/2026' },
      { label:'Italac (concorrente) reportada na rota', peso:+12,
        fonte:'Report de campo · técnico João Silva',
        detalhe:'Caminhão da Italac visto coletando na Fazenda Bom Jesus (vizinha) em 03/04/2026. Boa Vista mencionou ter recebido proposta verbal.',
        data:'reportado em 04/04/2026' },
      { label:'Sem revisão de bonificação há 11 meses', peso:+8,
        fonte:'Contrato em sistema · ERP',
        detalhe:'Última revisão em 14/06/2025. Política da indústria: revisar a cada 6 meses para produtores categoria Alto.',
        data:'—' },
    ],
    volumeSerie:[4200,4150,4000,3850,3700,3450],
    ccsSerie:[380,420,450,510,590,640],
    visitasTecnicas:[
      { data:'12/04/2026', tecnico:'João Silva (eq. campo Itambé)', achado:'Tanque com defeito no termômetro; rebanho com sinais de subfecundidade. Orientou troca de cortina e revisão do conjunto de ordenha.' },
      { data:'28/02/2026', tecnico:'João Silva', achado:'Acompanhou medição CCS 510. Orientou rotina de pré-dipping mais rigorosa.' },
      { data:'14/12/2025', tecnico:'Mariana Castro', achado:'Visita de rotina; tudo dentro do esperado na ocasião.' },
    ],
    acoesSugeridas:[
      'Visita técnica nos próximos 7 dias para diagnosticar causa da queda de volume.',
      'Revisar bonificação por qualidade — concorrente paga aprox. 8% acima.',
      'Renegociar cláusula contratual nos próximos 30 dias.',
    ],
    ultimoContato:'12/04/2026',
    fontes:['Romaneios diários (ERP)','Laudos de laboratório (CCS/CBT)','Equipe de campo'],
  },
  {
    id:2, nome:'Fazenda Santa Rita', bacia:'Zona da Mata',
    categoria:'Atenção', tendencia:'estável', sobControle:false,
    riskScore:48, confianca:'média', volumeMedio:'5.200 L/dia',
    analisadoEm:'Hoje, 06:05',
    proprietario:'Marlene Aparecida Coutinho', cpf:'***.207.118-90',
    municipio:'Cataguases · MG', areaHa:78, vinculo:'cooperativa',
    rebanho:{ leiteiras:58, secas:9, raca:'Holandês PO', regime:'Confinado · free stall' },
    contrato:{
      inicio:'10/08/2022', vencimento:'09/08/2026',
      precoBase:2.82, bonificacaoAtual:'CCS<350: +R$ 0,05/L (atinge consistentemente)',
      ultimaRevisaoBonificacao:'10/09/2025',
    },
    motivo:'Italac (concorrente) ativa na rota; sem revisão de bonificação há 8 meses.',
    sinais:[
      { label:'Italac (concorrente) reportada na rota', peso:+20,
        fonte:'Report de campo · técnico João Silva',
        detalhe:'Caminhão da Italac coletando em 2 propriedades vizinhas desde fevereiro/2026.',
        data:'reportado em 11/02/2026' },
      { label:'Sem revisão de bonificação há 8 meses', peso:+15,
        fonte:'Contrato em sistema · ERP',
        detalhe:'Última revisão em 10/09/2025. Produtores categoria Atenção: revisão a cada 6 meses.',
        data:'—' },
      { label:'Volume levemente abaixo da meta (−3%)', peso:+7,
        fonte:'ERP de captação · romaneios diários',
        detalhe:'Meta contratual 5.400 L/dia; média últimos 30 dias 5.230 L/dia (Δ −3,2%).',
        data:'calculado em 28/05/2026' },
    ],
    volumeSerie:[5400,5350,5300,5250,5200,5200],
    ccsSerie:[320,310,330,325,320,315],
    visitasTecnicas:[
      { data:'28/03/2026', tecnico:'João Silva (eq. campo Itambé)', achado:'Produtora comentou que recebeu visita de comprador da Italac. Não topou proposta mas pediu para revisarmos bonificação.' },
      { data:'05/01/2026', tecnico:'João Silva', achado:'Visita de rotina; manejo de free stall exemplar.' },
    ],
    acoesSugeridas:[
      'Antecipar revisão de bonificação para evitar perda gradual.',
      'Reforçar visitas técnicas — produtor estável é mais sensível a oferta concorrente.',
    ],
    ultimoContato:'28/03/2026',
    fontes:['Romaneios diários (ERP)','Equipe de campo','Histórico de contratos'],
  },
  {
    id:3, nome:'Granja Três Irmãos', bacia:'Triângulo Mineiro',
    categoria:'Atenção', tendencia:'subindo', sobControle:false,
    riskScore:55, confianca:'média', volumeMedio:'2.800 L/dia',
    analisadoEm:'Hoje, 06:18',
    proprietario:'Família Tertuliano (Edson, José e Renato)', cpf:'CNPJ ***.402/0001-77',
    municipio:'Patos de Minas · MG', areaHa:55, vinculo:'cooperativa',
    rebanho:{ leiteiras:32, secas:5, raca:'Girolando 5/8', regime:'Semiconfinado' },
    contrato:{
      inicio:'01/06/2023', vencimento:'31/05/2026',
      precoBase:2.74, bonificacaoAtual:'CCS<400: +R$ 0,04/L',
      ultimaRevisaoBonificacao:'01/12/2025',
    },
    motivo:'Volume oscilando; cooperativa vizinha pagando acima do mercado.',
    sinais:[
      { label:'Cocari (cooperativa concorrente) pagando +R$ 0,04/L na região', peso:+22,
        fonte:'Inteligência de mercado regional · CCPR',
        detalhe:'Boletim interno da CCPR de 22/04/2026 confirma Cocari pagando R$ 2,82/L no Triângulo — acima dos R$ 2,78 da CCPR.',
        data:'levantado em 22/04/2026' },
      { label:'Volume oscilando ±12% nos últimos 4 meses', peso:+14,
        fonte:'ERP de captação · romaneios diários',
        detalhe:'Volume mensal: 2.900 → 3.100 → 2.700 → 3.200 → 2.600 → 2.800 L/dia. CV = 8,3% acima do esperado.',
        data:'calculado em 28/05/2026' },
      { label:'Produtor pediu segunda via de contrato', peso:+10,
        fonte:'Atendimento · CRM',
        detalhe:'Renato Tertuliano ligou em 18/04/2026 pedindo segunda via do contrato. Sinal recorrente de comparação de propostas com concorrente.',
        data:'18/04/2026' },
    ],
    volumeSerie:[2900,3100,2700,3200,2600,2800],
    ccsSerie:[280,295,310,290,305,295],
    visitasTecnicas:[
      { data:'05/04/2026', tecnico:'Marina Couto (CCPR)', achado:'Edson reclamou de pagamento atrasado em fev/26. Demanda corrigida via ERP.' },
    ],
    acoesSugeridas:[
      'Visita imediata — pedido de segunda via é sinal forte de comparação de propostas.',
      'Avaliar bonificação por fidelidade ou bônus de assinatura.',
    ],
    ultimoContato:'05/04/2026',
    fontes:['Romaneios diários (ERP)','Atendimento (CRM)','Inteligência de mercado regional'],
  },
  {
    id:4, nome:'Sítio Recanto', bacia:'Zona da Mata',
    categoria:'OK', tendencia:'caindo', sobControle:false,
    riskScore:12, confianca:'alta', volumeMedio:'1.900 L/dia',
    analisadoEm:'Hoje, 05:40',
    proprietario:'Antônio Lourenço Mendes', cpf:'***.601.230-45',
    municipio:'Leopoldina · MG', areaHa:28, vinculo:'cooperativa',
    rebanho:{ leiteiras:22, secas:4, raca:'Girolando 1/2', regime:'Extensivo' },
    contrato:{
      inicio:'02/02/2026', vencimento:'01/02/2029',
      precoBase:2.84, bonificacaoAtual:'CCS<300: +R$ 0,08/L (atinge) · CBT<50: +R$ 0,03/L (atinge)',
      ultimaRevisaoBonificacao:'02/02/2026',
    },
    motivo:'Relação estável, qualidade dentro da meta, tendência de risco em queda.',
    sinais:[
      { label:'Volume estável há 6 meses', peso:-8,
        fonte:'ERP de captação · romaneios diários',
        detalhe:'Variação de volume <3% nos últimos 6 meses. Padrão típico de produtor consolidado.',
        data:'calculado em 28/05/2026' },
      { label:'CCS dentro do limite premium (<300)', peso:-6,
        fonte:'Laudo lab. interno (LabAgro Juiz de Fora)',
        detalhe:'CCS médio últimos 6 meses: 264 céls/mL — bem abaixo do limite premium 300.',
        data:'última leitura 19/05/2026' },
      { label:'Contrato renovado em 02/2026 com bonificação atualizada', peso:-10,
        fonte:'Contrato em sistema · ERP',
        detalhe:'Contrato 3 anos vigente. Bonificação atualizada com tier premium + CBT.',
        data:'02/02/2026' },
    ],
    volumeSerie:[1850,1900,1920,1900,1880,1900],
    ccsSerie:[270,265,275,260,255,260],
    visitasTecnicas:[
      { data:'02/05/2026', tecnico:'João Silva (eq. campo Itambé)', achado:'Visita de rotina. Produtor satisfeito com bonificação renegociada em fev/26.' },
    ],
    acoesSugeridas:[
      'Manter ritmo regular de visitas técnicas.',
    ],
    ultimoContato:'02/05/2026',
    fontes:['Romaneios diários (ERP)','Laudos de laboratório'],
  },
  {
    id:5, nome:'Laticínio do Vale', bacia:'Sul de Minas',
    categoria:'OK', tendencia:'estável', sobControle:false,
    riskScore:18, confianca:'alta', volumeMedio:'6.400 L/dia',
    analisadoEm:'Hoje, 05:55',
    proprietario:'Vale Pecuária Ltda. (família Reis)', cpf:'CNPJ ***.118/0001-23',
    municipio:'Três Corações · MG', areaHa:210, vinculo:'cooperativa',
    rebanho:{ leiteiras:72, secas:14, raca:'Holandês PO', regime:'Confinado · free stall' },
    contrato:{
      inicio:'01/12/2024', vencimento:'30/11/2026',
      precoBase:2.86, bonificacaoAtual:'CCS<300: +R$ 0,10/L · Volume crescente: +R$ 0,03/L',
      ultimaRevisaoBonificacao:'01/12/2025',
    },
    motivo:'Contrato vigente, sem sinais de saída.',
    sinais:[
      { label:'Contrato anual vigente até 11/2026', peso:-12,
        fonte:'Contrato em sistema · ERP',
        detalhe:'Faltam 6 meses para vencimento. Bonificação tier premium ativa.',
        data:'—' },
      { label:'Volume crescendo +2%/mês (expansão de rebanho)', peso:-5,
        fonte:'ERP de captação + relato do produtor',
        detalhe:'Volume mensal: 6.100 → 6.180 → 6.240 → 6.310 → 6.360 → 6.400 L/dia. Família comprou 18 vacas em 02/2026.',
        data:'calculado em 28/05/2026' },
      { label:'Sem registro de concorrente ativo na rota', peso:-6,
        fonte:'Report de campo · técnico Eduardo Stein',
        detalhe:'Rota Três Corações–Varginha sem registro de coleta concorrente nos últimos 90 dias.',
        data:'verificado em 15/05/2026' },
    ],
    volumeSerie:[6100,6180,6240,6310,6360,6400],
    ccsSerie:[295,290,295,285,290,288],
    visitasTecnicas:[
      { data:'20/04/2026', tecnico:'Eduardo Stein (Cooxupé Leite)', achado:'Família Reis apresentou plano de expansão pra 90 vacas até dez/26. Oportunidade de crescer volume contratado.' },
    ],
    acoesSugeridas:[
      'Acompanhar plano de expansão do rebanho — oportunidade de crescer volume contratado.',
    ],
    ultimoContato:'20/04/2026',
    fontes:['Romaneios diários (ERP)','Histórico de contratos','Equipe de campo'],
  },
];

/* Opções de selects/dropdowns no formulário CRUD de produtor */
const PRODUTOR_OPCOES = {
  racas:['Holandês PO','Holandês × Gir (3/4)','Girolando 5/8','Girolando 1/2','Jersey','Pardo Suíço','Outra'],
  regimes:['Extensivo','Semiconfinado','Confinado · free stall','Confinado · compost barn'],
  vinculos:['cooperativa','direto com a indústria'],
};
const ALERTA_CONCORRENCIA = 'Movimentação da Italac (concorrente) reportada por técnicos de campo em 4 rotas da Zona da Mata. Atenção.';

const COOPERATIVA_ITAMBE = {
  nome:'Itambé',
  chuva:'CHIRPS: chuva 18% abaixo da média de 10 anos na região da cooperativa.',
  projecao:'Produção regional projetada -6% no próximo trimestre (modelo de oferta).',
  secasComparaveis:['Seca de 2014 (oferta -8%)','Seca de 2021 (oferta -5%)'],
  resumoPreConversa:[
    'Chuva acumulada na região caiu 18% vs. média de 10 anos.',
    'Projeção de oferta regional -6% nos próximos 3 meses — pressão de captação à frente.',
    'Qualidade do leite (CCS) subindo, como esperado na seca.',
    'Última cláusula contratual de preço foi negociada há 7 meses.',
  ],
  // Argumentos estruturados — para defender a decisão na reunião com a cooperativa
  pontosDefesa:[
    {
      titulo:'Antecipar revisão protege os dois lados, não só a indústria',
      argumento:'A indústria garante suprimento sem disputa de spot price; a cooperativa trava preço antes do pico de demanda da seca e captura prêmio sem confrontar produtor.',
      dadosSuporte:[
        'CHIRPS: chuva 18% abaixo da média 10 anos · projeção CHIRPS jul–ago: -27% vs. base',
        'Seca de 2014 (padrão similar): oferta regional caiu 8% e preço subiu R$ 0,07/L',
        'Última cláusula de preço foi negociada em 14/10/2025 (há 7 meses)',
      ],
    },
    {
      titulo:'Cláusula de gatilho climático elimina risco de erro de previsão',
      argumento:'Em vez de discutir agora o quanto subir, definimos um gatilho automático: se CHIRPS de jul–ago confirmar >25% abaixo, a janela extraordinária abre. Se não confirmar, mantém status quo. Ninguém sai apostando.',
      dadosSuporte:[
        'CHIRPS publica diariamente · dado público auditável',
        'Modelo já usado em contratos de soja e milho na safra 24/25',
        'Reduz peso da reunião — a leitura técnica decide, não o jogo de poder',
      ],
    },
    {
      titulo:'Tier CCS<300 incentiva o produtor a investir antes da seca apertar',
      argumento:'Travar +R$ 0,10/L para CCS<300 agora — quando o produtor ainda tem caixa pré-seca — vira proteção de qualidade no pico da estiagem. Custo marginal pra Itambé, ganho de mix premium pra indústria.',
      dadosSuporte:[
        'CCS regional subiu 12% nos últimos 90 dias',
        'Histórico: produtores que receberam tier pré-seca em 2021 mantiveram CCS<300 em 78% do período',
      ],
    },
    {
      titulo:'Aumento de volume contratado em +12% é absorvível pela base atual',
      argumento:'Nossa projeção mostra que 148 produtores ativos × volume médio crescente pode entregar 318k L/dia sem demandar captação extra. Cooperativa não precisa correr atrás de novos produtores no curto prazo.',
      dadosSuporte:[
        'Volume atual: 284.500 L/dia · capacidade técnica estimada: 325k L/dia',
        'Tendência de volume últimos 7 meses: +8,5% (orgânico)',
      ],
    },
  ],
  // Contra-argumentos antecipados — "se ele disser X, responda Y"
  contraargumentos:[
    {
      vemDeles:'"O CHIRPS pode estar errado. Vamos esperar mais 30 dias pra ter certeza."',
      respondaCom:'Cláusula de gatilho automático resolve. A revisão só dispara se o dado confirmar — quem estiver errado paga o custo zero. Mas se esperarmos 30 dias e o sinal fechar, perdemos a janela de planejamento.',
    },
    {
      vemDeles:'"Vocês querem antecipar pra forçar bônus menor antes da escassez."',
      respondaCom:'Pelo contrário — proponho travar bonificação CCS<300 em +R$ 0,10/L já. A indústria assume o custo da bonificação antes da seca apertar. Se o objetivo fosse forçar bônus menor, esperaríamos a oferta ficar curta.',
    },
    {
      vemDeles:'"Mas o Rabobank diz que o mercado vai cair 2% no semestre."',
      respondaCom:'O Rabobank cobre o mercado nacional. Nossa leitura é regional — CHIRPS na sua área específica está 18% abaixo. Históricamente, quando discordamos do Rabobank com base em dado climático regional, acertamos 64% das vezes (transparência disponível).',
    },
    {
      vemDeles:'"Precisamos discutir o tier de bonificação separadamente."',
      respondaCom:'Razoável. Podemos fechar a antecipação de volume + gatilho climático nesta reunião e marcar uma segunda em 15 dias só para o tier de qualidade. Mostra que cada peça tem critério próprio.',
    },
  ],
  roteiroConversa:{
    abertura:'Não vim apresentar número — vim apresentar uma leitura nova de oferta regional que pode reforçar a parceria pros dois lados. Posso compartilhar?',
    centro:'Mostrar dado CHIRPS + comparativo histórico (2014) + impacto na janela de captação. Propor cláusula de gatilho automático. Listar +12% volume como derivada, não como pedido inicial.',
    fechamento:'Posso voltar com proposta formal de cláusula de gatilho na próxima semana? E a gente marca tier de bonificação pra 2 semanas depois?',
  },
  pontosEvitar:[
    'Não propor valor de bonificação fora dos tiers atuais sem revisão interna prévia da indústria.',
    'Não mencionar Italac (concorrente) — pode soar como ameaça e queimar a confiança da Itambé.',
    'Não comprometer +12% de volume sem antes confirmar capacidade fabril de processar.',
    'Não jogar previsão de IA como verdade absoluta — apresentar como leitura técnica com banda de incerteza.',
  ],
};

const AUDITORIA = {
  acertoHorizonte:{ '1T':78, '2T':72, '3T':61 },
  acertoPilar:{ 'Climático':81, 'Econômico':68, 'Agropecuário':74, 'Político':null },
  acertoDivergencia:64,
  acertoEmRecusa:{ acertos:3, total:4 },
  log:[
    /* ──────────────── Zona da Mata · 13 entradas · 10 ok = 77% ────────────────
       Climático 5 ent / 4 ok = 80% · Econômico 5 ent / 4 ok = 80% · Agropecuário 3 ent / 2 ok = 67%
       1T 5 ent / 4 ok = 80% · 2T 5 ent / 4 ok = 80% · 3T 3 ent / 2 ok = 67% */
    { data:'10/05/2026', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Climático',    realizado:+0.05, ok:true },
    { data:'22/03/2026', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Econômico',    realizado:+0.03, ok:true },
    { data:'20/02/2026', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Climático',    realizado:+0.04, ok:true },
    { data:'05/01/2026', bacia:'Zona da Mata',     decisao:'Ajustado', por:'Anderson Toledo', horizonte:'3T', pilarDominante:'Climático',    justificativa:'Calibrar peso do milho', realizado:+0.02, ok:true },
    { data:'18/11/2025', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Agropecuário', realizado:+0.03, ok:true },
    { data:'02/10/2025', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Econômico',    realizado:-0.01, ok:false },
    { data:'02/09/2025', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Climático',    realizado:-0.01, ok:false },
    { data:'14/08/2025', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Agropecuário', realizado:+0.04, ok:true },
    { data:'14/06/2025', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Econômico',    realizado:+0.03, ok:true },
    { data:'15/03/2025', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Climático',    realizado:+0.04, ok:true },
    { data:'18/02/2025', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'3T', pilarDominante:'Econômico',    realizado:+0.03, ok:true },
    { data:'08/12/2024', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Econômico',    realizado:+0.02, ok:true },
    { data:'12/09/2024', bacia:'Zona da Mata',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'3T', pilarDominante:'Agropecuário', realizado:+0.01, ok:false },

    /* ──────────────── Triângulo Mineiro · 13 entradas · 7 ok = 54% (baixa confiança) ────────────────
       Climático 5 / 3 ok = 60% · Econômico 4 / 2 ok = 50% · Agropecuário 4 / 2 ok = 50%
       1T 5 / 3 ok = 60% · 2T 5 / 3 ok = 60% · 3T 3 / 1 ok = 33% */
    { data:'15/03/2026', bacia:'Triângulo Mineiro',decisao:'Ajustado', por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Climático',    justificativa:'Clima neutro, não La Niña', realizado:+0.01, ok:true },
    { data:'08/12/2025', bacia:'Triângulo Mineiro',decisao:'Recusado', por:'Carlos Mendes',   horizonte:'2T', pilarDominante:'Agropecuário', justificativa:'Risco operacional alto', realizado:+0.02, ok:false },
    { data:'22/10/2025', bacia:'Triângulo Mineiro',decisao:'Aceito',   por:'Anderson Toledo', horizonte:'3T', pilarDominante:'Econômico',    realizado:-0.02, ok:false },
    { data:'15/08/2025', bacia:'Triângulo Mineiro',decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Agropecuário', realizado:+0.02, ok:true },
    { data:'05/05/2025', bacia:'Triângulo Mineiro',decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'2T', pilarDominante:'Climático',    realizado:+0.02, ok:true },
    { data:'18/03/2025', bacia:'Triângulo Mineiro',decisao:'Ajustado', por:'Anderson Toledo', horizonte:'3T', pilarDominante:'Climático',    justificativa:'Pondera Cocari', realizado:+0.01, ok:true },
    { data:'02/02/2025', bacia:'Triângulo Mineiro',decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'2T', pilarDominante:'Econômico',    realizado:+0.02, ok:true },
    { data:'15/11/2024', bacia:'Triângulo Mineiro',decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Agropecuário', realizado:+0.02, ok:true },
    { data:'04/08/2024', bacia:'Triângulo Mineiro',decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'3T', pilarDominante:'Climático',    realizado:-0.01, ok:false },
    { data:'18/05/2024', bacia:'Triângulo Mineiro',decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Climático',    realizado:+0.02, ok:true },
    { data:'10/02/2024', bacia:'Triângulo Mineiro',decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Econômico',    realizado:+0.01, ok:true },
    { data:'12/11/2023', bacia:'Triângulo Mineiro',decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Agropecuário', realizado:+0.02, ok:true },
    { data:'08/08/2023', bacia:'Triângulo Mineiro',decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Climático',    realizado:0.00, ok:false },

    /* ──────────────── Sul de Minas · 13 entradas · 10 ok = 77% (premium consistente) ────────────────
       Climático 5 / 4 ok = 80% · Econômico 4 / 3 ok = 75% · Agropecuário 4 / 3 ok = 75%
       1T 5 / 4 ok = 80% · 2T 5 / 4 ok = 80% · 3T 3 / 2 ok = 67% */
    { data:'28/04/2026', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Agropecuário', realizado:+0.04, ok:true },
    { data:'18/02/2026', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'2T', pilarDominante:'Climático',    realizado:+0.03, ok:true },
    { data:'14/01/2026', bacia:'Sul de Minas',     decisao:'Ajustado', por:'Anderson Toledo', horizonte:'3T', pilarDominante:'Econômico',    justificativa:'Câmbio acima do projetado', realizado:+0.03, ok:true },
    { data:'22/10/2025', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Climático',    realizado:+0.02, ok:true },
    { data:'15/07/2025', bacia:'Sul de Minas',     decisao:'Recusado', por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Agropecuário', justificativa:'Cooperativa em revisão de gestão', realizado:0.00, ok:true, recusaCorreta:true },
    { data:'02/05/2025', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Climático',    realizado:+0.05, ok:true },
    { data:'10/02/2025', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'2T', pilarDominante:'Econômico',    realizado:+0.01, ok:false },
    { data:'08/11/2024', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'3T', pilarDominante:'Agropecuário', realizado:+0.03, ok:true },
    { data:'15/08/2024', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'3T', pilarDominante:'Climático',    realizado:0.00, ok:false },
    { data:'22/04/2024', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Econômico',    realizado:+0.02, ok:true },
    { data:'18/02/2024', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Climático',    realizado:+0.01, ok:false },
    { data:'14/11/2023', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Agropecuário', realizado:+0.01, ok:false },
    { data:'05/08/2023', bacia:'Sul de Minas',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Econômico',    realizado:+0.02, ok:true },

    /* ──────────────── Sul de Goiás · 13 entradas · 9 ok = 69% (defensivo, decente) ────────────────
       Climático 5 / 3 ok = 60% · Econômico 4 / 3 ok = 75% · Agropecuário 4 / 3 ok = 75%
       1T 5 / 3 ok = 60% · 2T 5 / 4 ok = 80% · 3T 3 / 2 ok = 67% */
    { data:'02/04/2026', bacia:'Sul de Goiás',     decisao:'Recusado', por:'Carlos Mendes',   horizonte:'2T', pilarDominante:'Econômico',    justificativa:'Câmbio vai virar', realizado:-0.03, ok:true, recusaCorreta:true },
    { data:'12/11/2025', bacia:'Sul de Goiás',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'3T', pilarDominante:'Econômico',    realizado:+0.01, ok:false },
    { data:'25/08/2025', bacia:'Sul de Goiás',     decisao:'Recusado', por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Climático',    justificativa:'Sinal climático muito incerto', realizado:-0.01, ok:true, recusaCorreta:true },
    { data:'18/06/2025', bacia:'Sul de Goiás',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'3T', pilarDominante:'Agropecuário', realizado:-0.02, ok:true },
    { data:'22/03/2025', bacia:'Sul de Goiás',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Climático',    realizado:-0.04, ok:true },
    { data:'10/01/2025', bacia:'Sul de Goiás',     decisao:'Ajustado', por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Agropecuário', justificativa:'Concentrar produtores OK', realizado:+0.02, ok:false },
    { data:'15/10/2024', bacia:'Sul de Goiás',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'2T', pilarDominante:'Econômico',    realizado:-0.03, ok:true },
    { data:'05/07/2024', bacia:'Sul de Goiás',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Climático',    realizado:+0.01, ok:false },
    { data:'18/04/2024', bacia:'Sul de Goiás',     decisao:'Recusado', por:'Carlos Mendes',   horizonte:'3T', pilarDominante:'Climático',    justificativa:'Padrão sazonal histórico', realizado:-0.02, ok:true, recusaCorreta:true },
    { data:'10/02/2024', bacia:'Sul de Goiás',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Agropecuário', realizado:-0.02, ok:true },
    { data:'15/11/2023', bacia:'Sul de Goiás',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Econômico',    realizado:+0.01, ok:false },
    { data:'08/08/2023', bacia:'Sul de Goiás',     decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Climático',    realizado:+0.01, ok:false },
    { data:'04/05/2023', bacia:'Sul de Goiás',     decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Agropecuário', realizado:-0.01, ok:true },

    /* ──────────────── Norte do Paraná · 13 entradas · 9 ok = 69% (sinal baixo, acerto medio) ────────────────
       Climático 5 / 3 ok = 60% · Econômico 4 / 3 ok = 75% · Agropecuário 4 / 3 ok = 75%
       1T 5 / 3 ok = 60% · 2T 5 / 4 ok = 80% · 3T 3 / 2 ok = 67% */
    { data:'18/03/2026', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Climático',    realizado:-0.01, ok:false },
    { data:'25/10/2025', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Agropecuário', realizado:+0.02, ok:true },
    { data:'05/08/2025', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Anderson Toledo', horizonte:'3T', pilarDominante:'Econômico',    realizado:+0.02, ok:true },
    { data:'12/06/2025', bacia:'Norte do Paraná',  decisao:'Ajustado', por:'Carlos Mendes',   horizonte:'2T', pilarDominante:'Climático',    justificativa:'Padrão estável de PR', realizado:+0.02, ok:true },
    { data:'04/04/2025', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Agropecuário', realizado:+0.01, ok:true },
    { data:'08/02/2025', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'3T', pilarDominante:'Climático',    realizado:0.00, ok:false },
    { data:'14/11/2024', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Anderson Toledo', horizonte:'2T', pilarDominante:'Econômico',    realizado:+0.02, ok:true },
    { data:'22/08/2024', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'1T', pilarDominante:'Climático',    realizado:+0.01, ok:false },
    { data:'05/05/2024', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Anderson Toledo', horizonte:'3T', pilarDominante:'Agropecuário', realizado:+0.01, ok:true },
    { data:'18/02/2024', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'2T', pilarDominante:'Climático',    realizado:+0.02, ok:true },
    { data:'12/11/2023', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Econômico',    realizado:+0.02, ok:true },
    { data:'08/08/2023', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Carlos Mendes',   horizonte:'2T', pilarDominante:'Agropecuário', realizado:+0.03, ok:true },
    { data:'15/04/2023', bacia:'Norte do Paraná',  decisao:'Aceito',   por:'Anderson Toledo', horizonte:'1T', pilarDominante:'Econômico',    realizado:-0.01, ok:false },
  ],
  recalibracao:'A IA recalibrou automaticamente o peso do milho futuro depois que você discordou no ciclo de março/2026 e estava certo.',
  escalonamento:'Você está em 55% de recusa neste trimestre (em recomendações de alto impacto). O sistema sugere uma revisão antes que o assunto chegue à diretoria — para reagir antes, não ser pego de surpresa.',
};

const CHAT_SUGGESTIONS = [
  {
    q: 'Qual região tem maior chance de vantagem de preço nos próximos 6 meses?',
    a: 'Zona da Mata (MG) — previsão de +R$ 0,06/litro acima do preço CEPEA com 70% de probabilidade. O acerto histórico em 6 meses nessa região é de 72%. Principal motivo: chuva 18% abaixo da média (CHIRPS) deve reduzir a oferta regional. Veja detalhes em "Painel por região".'
  },
  {
    q: 'Por que a IA recomenda antecipar negociação com a Itambé?',
    a: 'Três fatores se somam: (1) chuva abaixo da média na região da cooperativa, projetando -6% de oferta no próximo trimestre; (2) dólar a R$ 5,40 e milho +3% pressionando custo do produtor; (3) última cláusula contratual foi negociada há 7 meses. Detalhamento por fator em "Recomendações" > Zona da Mata.'
  },
  {
    q: 'E se o dólar cair para R$ 4,80? Como muda a previsão?',
    a: 'Dólar a R$ 4,80 reduziria a previsão da Zona da Mata em cerca de R$ 0,05/litro (de +R$ 0,06 para perto de +R$ 0,01). O motivo: dólar mais baixo torna o leite em pó importado mais competitivo e enfraquece o preço doméstico. Teste essa hipótese no "Simulador".'
  },
  {
    q: 'A IA já errou alguma vez? Quanto?',
    a: 'Sim. Em previsões de 6 meses, a IA acerta 72% das vezes; em 9 meses, cai para 61%. O fator que mais erra é o Econômico (68% de acerto). O fator Político fica em quarentena e não entra no cálculo. Métricas completas em "Transparência da IA".'
  },
  {
    q: 'Em que a IA do Vereda discorda dos analistas de mercado?',
    a: 'O Rabobank projeta -2% no mercado geral no semestre. A IA do Vereda discorda especificamente para a Zona da Mata (+R$ 0,02/litro), com base em dados climáticos locais (CHIRPS) que o Rabobank não usa. Quando a IA discorda dos analistas de referência, acerta 64% das vezes — métrica em "Transparência da IA".'
  }
];

/* =====================================================================
   CHAT DE INVESTIGAÇÃO — perguntas direcionadas à recomendação atual
   Cada preset tem a pergunta do usuário, o "pensar" da IA (passos),
   blocos de resposta e ações inline.
   ===================================================================== */
const REC_CHAT_PRESETS = {
  'por-que-agora':{
    pergunta:'Por que essa recomendação agora?',
    metaIA:'· cruzando 4 fatores · análise temporal',
    pensando:[
      'Verificando convergência dos 4 pilares…',
      'Cruzando CHIRPS + NOAA + CBOT…',
      'Checando janela contratual da cooperativa…',
    ],
    blocos:[
      { tipo:'p', texto:'Três sinais convergiram **esta semana** e abriram a janela:' },
      { tipo:'list', itens:[
        '**Climático (+R$ 0,04/L):** CHIRPS confirma 23% abaixo da média até julho. La Niña ativa (NOAA, prob >70%) reforça.',
        '**Econômico (+R$ 0,02/L):** milho CBOT +8,1% em 30 dias — pressiona o custo do produtor.',
        '**Contratual:** a cláusula de revisão da cooperativa abre em **12/08/2026**. Antecipar 30 dias evita pressão de prazo.',
      ]},
      { tipo:'p', texto:'O sinal é direcional claro (semáforo verde), a banda é estreita (±R$ 0,03/L) e essa região tem **72% de acerto histórico** em 6 meses.' },
    ],
    acoes:['trail','argumentos']
  },
  'fontes-usadas':{
    pergunta:'Quais fontes de dado fundamentam essa recomendação?',
    metaIA:'· 6 fontes · 4 externas + 2 internas',
    pensando:[
      'Listando fontes consultadas…',
      'Verificando frescor das séries…',
    ],
    blocos:[
      { tipo:'p', texto:'A IA cruzou **6 fontes** pra montar essa recomendação:' },
      { tipo:'fontes', itens:[
        ['CHIRPS','climático','chuva por satélite, grade 5km, atualização diária'],
        ['NOAA / CPC','climático','boletim ENSO mensal — La Niña advisory'],
        ['CEPEA-ESALQ','econômico','preço de referência do leite em MG'],
        ['CBOT','econômico','futuros de milho — custo do produtor'],
        ['SAP S/4HANA','interno','contratos, volume e histórico de revisão'],
        ['Lab. Vale do Cedro','interno','série de CCS dos 40 maiores produtores'],
      ]},
      { tipo:'nota', titulo:'Fator político em quarentena', texto:'A Portaria SDA/MAPA nº 142 de 30/mai foi vista mas **não pesa no cálculo** — quarentena evita viés político no modelo.' },
    ],
    acoes:['trail']
  },
  'cenario-climatico-virar':{
    pergunta:'E se o cenário climático virar (chuva voltar acima da média)?',
    metaIA:'· simulação what-if · pilar Climático',
    pensando:[
      'Recalculando com peso climático invertido…',
      'Verificando dependência dos outros pilares…',
    ],
    blocos:[
      { tipo:'p', texto:'Se a chuva voltar acima da média no trimestre (cenário com 20% de probabilidade hoje):' },
      { tipo:'delta', linhas:[
        { rotulo:'Ganho previsto (q2)', de:'+R$ 0,06/L', para:'+R$ 0,02/L', sinal:'queda' },
        { rotulo:'Banda de confiança', de:'±R$ 0,03', para:'±R$ 0,06', sinal:'queda' },
        { rotulo:'Probabilidade do ganho', de:'70%', para:'48%', sinal:'queda' },
      ]},
      { tipo:'p', texto:'Recomendação **não se inverte** — ainda compensa antecipar pela cláusula contratual, mas o ganho fica modesto. Vale registrar premissa climática no contrato (passo 4 do plano).' },
    ],
    acoes:['simular']
  },
  'historico-comparacao':{
    pergunta:'Como essa bacia se comportou na última entressafra?',
    metaIA:'· série 12 meses · comparação ano anterior',
    pensando:[
      'Carregando série da bacia (12m)…',
      'Cruzando com calendário sazonal…',
    ],
    blocos:[
      { tipo:'p', texto:'Comparando com a entressafra Q3/2025 (mesma janela do ano passado):' },
      { tipo:'delta', linhas:[
        { rotulo:'Chuva acumulada (mai–jul)','de':'média histórica','para':'−23% em 2026','sinal':'queda' },
        { rotulo:'CCS médio (mai)','de':'318 mil cél/mL','para':'412 mil cél/mL','sinal':'queda' },
        { rotulo:'Preço efetivo (cooperativa)','de':'+R$ 0,02/L vs. CEPEA','para':'+R$ 0,06/L projetado','sinal':'subida' },
      ]},
      { tipo:'p', texto:'Em 2025 o gerente **não antecipou** a renegociação e o spread ficou em +R$ 0,02 — perdeu janela. Em 2024 antecipou em 22 dias e capturou +R$ 0,07/L. **Padrão claro:** antecipação paga em entressafra seca.' },
    ],
    acoes:['historico']
  },
  'quem-lidera':{
    pergunta:'Quem na equipe deve liderar a execução?',
    metaIA:'· cruzando contatos do CRM + histórico de relacionamento',
    pensando:[
      'Verificando responsável atual pela cooperativa…',
      'Listando histórico de reuniões…',
    ],
    blocos:[
      { tipo:'p', texto:'**Vanderlei (Captação MG)** é o ponto certo — ele tem relação direta com a cooperativa há 4 anos.' },
      { tipo:'list', itens:[
        'Última reunião foi em **02/04/2026**, fechou aceitação do pacote anterior.',
        'Contato cooperativa: **José Henrique Andrade**, Diretor de Captação.',
        'Janela sugerida: marcar reunião na semana de **08–12/06**, antes do pico da seca.',
      ]},
      { tipo:'nota', titulo:'Fica com o Vanderlei', texto:'Tom de conversa, abertura pessoal, momento certo de propor — isso é do campo. A IA não simula esse sinal.' },
    ],
    acoes:[]
  },
};

const REC_CHAT_STARTERS = [
  'por-que-agora','fontes-usadas','cenario-climatico-virar','historico-comparacao','quem-lidera'
];

// follow-ups: chips que aparecem após cada resposta da IA (excluindo a que foi usada)
const REC_CHAT_FOLLOWUPS = {
  'por-que-agora':['fontes-usadas','cenario-climatico-virar','quem-lidera'],
  'fontes-usadas':['por-que-agora','cenario-climatico-virar','historico-comparacao'],
  'cenario-climatico-virar':['historico-comparacao','quem-lidera'],
  'historico-comparacao':['por-que-agora','quem-lidera'],
  'quem-lidera':['historico-comparacao','fontes-usadas'],
};

/* =====================================================================
   PRESETS POR BACIA — investigação especializada para Sul de Minas
   e Sul de Goiás (Zona da Mata usa o REC_CHAT_PRESETS default acima).
   ===================================================================== */

const HISTORICO_SUL_MINAS = [
  { data:'12/05/2026', alavanca:'Reforçar tier CCS premium · Cooxupé Leite', decisao:'Aceito',   realizado:+0.04, acertou:true  },
  { data:'03/04/2026', alavanca:'Manter rota de assistência técnica regional', decisao:'Aceito',   realizado:+0.03, acertou:true  },
  { data:'22/02/2026', alavanca:'Expandir volume contratado em +10%',          decisao:'Ajustado', realizado:+0.02, acertou:true  },
  { data:'11/01/2026', alavanca:'Reduzir bonificação fidelidade',              decisao:'Recusado', realizado:+0.02, acertou:false },
];

const HISTORICO_SUL_GOIAS = [
  { data:'14/05/2026', alavanca:'Postura defensiva · Cooperativa Comigo',     decisao:'Aceito',   realizado:-0.03, acertou:true  },
  { data:'02/04/2026', alavanca:'Recusar pedido de bônus extra (Comigo)',     decisao:'Aceito',   realizado:-0.02, acertou:true  },
  { data:'19/02/2026', alavanca:'Reduzir volume contratado em 8% na região',  decisao:'Ajustado', realizado:-0.04, acertou:false },
  { data:'06/01/2026', alavanca:'Manter tier CBT premium sem ajuste',         decisao:'Recusado', realizado:-0.05, acertou:true  },
];

const PRESETS_SUL_MINAS = {
  'por-que-agora':{
    pergunta:'Por que essa recomendação agora?',
    metaIA:'· cruzando 4 fatores · análise temporal',
    pensando:[
      'Verificando convergência dos pilares…',
      'Cruzando CHIRPS + INMET Lavras + ABIQ…',
      'Checando janela contratual da Cooxupé Leite…',
    ],
    blocos:[
      { tipo:'p', texto:'Três sinais convergiram nesta janela e abriram espaço para **expansão segura** — não é defesa, é crescimento:' },
      { tipo:'list', itens:[
        '**Climático (+R$ 0,03/L):** chuva levemente abaixo da média (−4%, CHIRPS) com padrão estável em Lavras (INMET). Entressafra branda → oferta projetada equilibrada.',
        '**Econômico (+R$ 0,01/L):** demanda de queijos premium MG +8% em 12 meses (ABIQ). Cooxupé já paga R$ 0,08 acima do CEPEA.',
        '**Contratual:** revisão **anual** da Cooxupé abre em **01/01/2027** — 6 meses de antecedência é exatamente o ciclo de planejamento da cooperativa.',
      ]},
      { tipo:'p', texto:'Sinal direcional positivo (semáforo verde), banda estreita (±R$ 0,03/L), e essa bacia tem **69% de acerto histórico** em 6 meses. CCS médio em 298 céls/mL — único caso da carteira abaixo do limite premium 300.' },
    ],
    acoes:['trail','argumentos']
  },
  'fontes-usadas':{
    pergunta:'Quais fontes de dado fundamentam essa recomendação?',
    metaIA:'· 6 fontes · 4 externas + 2 internas',
    pensando:[
      'Listando fontes consultadas…',
      'Verificando frescor das séries…',
    ],
    blocos:[
      { tipo:'p', texto:'A IA cruzou **6 fontes** especificamente pra Sul de Minas:' },
      { tipo:'fontes', itens:[
        ['CHIRPS','climático','chuva por satélite, grade 5km — Sul de Minas: −4% vs. média'],
        ['INMET Lavras','climático','estação de superfície local, padrão estável'],
        ['CEPEA-ESALQ','econômico','preço de referência do leite em MG'],
        ['ABIQ','econômico','demanda de queijos premium MG (12m)'],
        ['SAP S/4HANA','interno','contrato Cooxupé Leite e histórico de revisão'],
        ['Lab. Cooxupé','interno','série de CCS dos 30 maiores produtores'],
      ]},
      { tipo:'nota', titulo:'Por que ABIQ aqui', texto:'O efeito de **queijos premium não é captado pelo CEPEA**. ABIQ traz a alavancagem do mercado interno — driver oculto pra Sul de Minas que torna a recomendação mais agressiva que parece à primeira vista.' },
    ],
    acoes:['trail']
  },
  'cenario-climatico-virar':{
    pergunta:'E se o cenário climático virar (chuva voltar acima da média)?',
    metaIA:'· what-if · pilar Climático · Sul de Minas',
    pensando:[
      'Recalculando peso climático invertido…',
      'Conferindo se o sinal econômico segura a direção…',
    ],
    blocos:[
      { tipo:'p', texto:'Se a chuva voltar acima da média no trimestre (cenário com 35% de probabilidade hoje em Sul de Minas):' },
      { tipo:'delta', linhas:[
        { rotulo:'Ganho previsto (q2)',       de:'+R$ 0,04/L',  para:'+R$ 0,01/L',  sinal:'queda'   },
        { rotulo:'Banda de confiança',         de:'±R$ 0,03',     para:'±R$ 0,05',     sinal:'queda'   },
        { rotulo:'Probabilidade do ganho',     de:'69%',          para:'52%',          sinal:'queda'   },
      ]},
      { tipo:'p', texto:'A recomendação **não se inverte** — Sul de Minas tem driver dominante de demanda interna (queijos premium), que segura o sinal mesmo se o climático ficar neutro. Mas o ganho médio cai pela metade. Vale revisar a meta de **+15% para +10%** de volume nesse cenário.' },
    ],
    acoes:['simular']
  },
  'historico-comparacao':{
    pergunta:'Como essa bacia se comportou na última entressafra?',
    metaIA:'· série 12 meses · comparação ano anterior',
    pensando:[
      'Carregando série da bacia (12m)…',
      'Cruzando com calendário sazonal…',
    ],
    blocos:[
      { tipo:'p', texto:'Comparando com a entressafra Q3/2025 (mesma janela do ano passado):' },
      { tipo:'delta', linhas:[
        { rotulo:'Chuva acumulada (mai–jul)',          de:'média histórica',         para:'−4% em 2026',          sinal:'queda'  },
        { rotulo:'CCS médio regional',                  de:'305 mil cél/mL',          para:'298 mil cél/mL',        sinal:'subida' },
        { rotulo:'Preço efetivo (Cooxupé Leite)',       de:'+R$ 0,06/L vs. CEPEA',    para:'+R$ 0,08/L projetado', sinal:'subida' },
      ]},
      { tipo:'p', texto:'Em 2025 antecipamos a conversa e capturamos +R$ 0,04/L. Em 2024 também antecipamos (+R$ 0,03/L). **Padrão consistente:** Sul de Minas responde bem a planejamento longo — a relação com a Cooxupé tem 9 anos de continuidade.' },
    ],
    acoes:['historico']
  },
  'quem-lidera':{
    pergunta:'Quem na equipe deve liderar a execução?',
    metaIA:'· cruzando contatos do CRM + histórico de relacionamento',
    pensando:[
      'Verificando responsável atual pela cooperativa…',
      'Listando histórico de reuniões…',
    ],
    blocos:[
      { tipo:'p', texto:'**Marcos Andrade (Captação Sul de MG)** é o ponto certo — relação direta com a Cooxupé há 6 anos.' },
      { tipo:'list', itens:[
        'Última reunião foi em **22/03/2026**, fechou expansão de tier CCS premium.',
        'Contato cooperativa: **Eduardo Stein**, Diretor Comercial · Cooxupé Leite.',
        'Janela sugerida: marcar reunião na primeira semana de **julho/2026**, no fim do ciclo de planejamento da cooperativa.',
      ]},
      { tipo:'nota', titulo:'Cooxupé responde mal a urgência', texto:'Eduardo Stein tem perfil de planejamento longo. Não pressionar prazo — a conversa de antecipação 6 meses antes da revisão é exatamente o tom certo.' },
    ],
    acoes:[]
  },
};

const PRESETS_SUL_GOIAS = {
  'por-que-agora':{
    pergunta:'Por que essa recomendação agora?',
    metaIA:'· cruzando 4 fatores · análise temporal',
    pensando:[
      'Verificando convergência dos pilares…',
      'Cruzando SECEX + B3 + Lab. Comigo…',
      'Checando próxima janela contratual…',
    ],
    blocos:[
      { tipo:'p', texto:'A IA leu **três sinais negativos convergindo** — daí a postura **defensiva**, não expansiva:' },
      { tipo:'list', itens:[
        '**Econômico (−R$ 0,04/L):** importação de leite em pó MERCOSUL **+14% em 90 dias** (SECEX). Sul de Goiás absorve 38% desse fluxo. Milho B3 +3,1% pressiona custo do produtor.',
        '**Agropecuário (−R$ 0,01/L):** CCS regional subiu 12,7% em 90 dias (445 céls/mL). Qualidade pressionada **antes** mesmo da seca.',
        '**Contratual:** revisão **trimestral** da Cooperativa Comigo abre em **01/09/2026** — IA recomenda **não antecipar**, deixar a próxima janela vir.',
      ]},
      { tipo:'p', texto:'Sinal direcional negativo claro, banda estreita (±R$ 0,04/L), **68% de acerto histórico** em 6 meses. Antecipar conversa expõe a indústria — melhor barganhar com a leitura na mão quando a janela formal abrir.' },
    ],
    acoes:['trail','argumentos']
  },
  'fontes-usadas':{
    pergunta:'Quais fontes de dado fundamentam essa recomendação?',
    metaIA:'· 6 fontes · 4 externas + 2 internas',
    pensando:[
      'Listando fontes consultadas…',
      'Verificando frescor das séries…',
    ],
    blocos:[
      { tipo:'p', texto:'A IA cruzou **6 fontes** especificamente pra Sul de Goiás — o eixo é econômico, não climático:' },
      { tipo:'fontes', itens:[
        ['SECEX','econômico','volume de importação leite em pó MERCOSUL · 90d'],
        ['B3 (milho)','econômico','futuro CCMK26 — custo do produtor'],
        ['BCB-SGS','econômico','PTAX e séries cambiais'],
        ['CHIRPS','climático','chuva por satélite — padrão neutro (sem alerta)'],
        ['SAP S/4HANA','interno','contrato Cooperativa Comigo e revisões trimestrais'],
        ['Lab. Comigo','interno','série de CCS dos 50 maiores produtores'],
      ]},
      { tipo:'nota', titulo:'Pauta Mercosul TEC em quarentena', texto:'PL 1.247/2026 (redução de TEC do leite em pó 28% → 16%) afetaria **Sul de Goiás mais que qualquer outra bacia** — mas só entra no cálculo quando virar lei. Peso atual = 0. Monitore semanalmente.' },
    ],
    acoes:['trail']
  },
  'cenario-climatico-virar':{
    pergunta:'E se o cenário climático virar (chuva voltar acima da média)?',
    metaIA:'· what-if · pilar Climático · Sul de Goiás',
    pensando:[
      'Recalculando peso climático…',
      'Conferindo se sinal econômico segura a direção…',
    ],
    blocos:[
      { tipo:'p', texto:'Sul de Goiás é diferente das outras bacias — aqui o sinal climático já é **neutro** (+R$ 0,01/L). Mesmo se chover acima da média:' },
      { tipo:'delta', linhas:[
        { rotulo:'Ganho previsto (q2)',     de:'−R$ 0,05/L', para:'−R$ 0,04/L', sinal:'subida' },
        { rotulo:'Banda de confiança',       de:'±R$ 0,04',    para:'±R$ 0,06',    sinal:'queda'  },
        { rotulo:'Probabilidade do sinal',   de:'68%',         para:'59%',         sinal:'queda'  },
      ]},
      { tipo:'p', texto:'A **direção não muda** — o problema aqui é importação MERCOSUL + CCS subindo, não clima. **Postura defensiva continua válida** mesmo no melhor cenário climático. O que ajudaria de verdade é uma trava regulatória na TEC.' },
    ],
    acoes:['simular']
  },
  'historico-comparacao':{
    pergunta:'Como essa bacia se comportou na última entressafra?',
    metaIA:'· série 12 meses · comparação ano anterior',
    pensando:[
      'Carregando série da bacia (12m)…',
      'Cruzando com calendário sazonal…',
    ],
    blocos:[
      { tipo:'p', texto:'Comparando com a entressafra Q3/2025 — destaque pra pressão econômica externa:' },
      { tipo:'delta', linhas:[
        { rotulo:'Importação leite em pó MERCOSUL (90d)', de:'+5%',                     para:'+14% em 2026',         sinal:'queda' },
        { rotulo:'CCS médio regional',                      de:'395 mil cél/mL',          para:'445 mil cél/mL',       sinal:'queda' },
        { rotulo:'Preço efetivo (Cooperativa Comigo)',     de:'−R$ 0,02/L vs. CEPEA',    para:'−R$ 0,05/L projetado', sinal:'queda' },
      ]},
      { tipo:'p', texto:'Em **2018** (cenário econômico similar) a área concedeu bônus extra de +R$ 0,03/L e a margem afundou. Em **2022** segurou o bônus e o preço caiu menos do que projetado. **Padrão claro:** em Sul de Goiás, postura defensiva paga em ciclos de importação alta.' },
    ],
    acoes:['historico']
  },
  'quem-lidera':{
    pergunta:'Quem na equipe deve liderar a execução?',
    metaIA:'· cruzando contatos do CRM + histórico de relacionamento',
    pensando:[
      'Verificando responsável atual pela cooperativa…',
      'Listando histórico de reuniões…',
    ],
    blocos:[
      { tipo:'p', texto:'**Renata Furtado (Captação Centro-Oeste)** é o ponto certo — segue a relação com a Comigo há 5 anos.' },
      { tipo:'list', itens:[
        'Última reunião foi em **08/04/2026**, recusou pedido de bônus extra — decisão validada pela IA depois.',
        'Contato cooperativa: **Lúcio Alvarenga**, Diretor de Captação · Cooperativa Comigo.',
        'Janela sugerida: **aguardar reunião formal** de revisão trimestral em **01/09/2026**.',
      ]},
      { tipo:'nota', titulo:'A liderança aqui é "não fazer"', texto:'Postura defensiva exige firmeza sob pressão da cooperativa, não proatividade. A Renata tem bom histórico de barganha defensiva — segura bem.' },
    ],
    acoes:[]
  },
};

const TRAIL_SUL_MINAS = [
  ['Detectei sinal climático moderado','CHIRPS + INMET Lavras: chuva −4% abaixo da média, padrão estável',{
    fonte:'CHIRPS · INMET',
    consulta:'Acumulado mar–mai/2026 + estação de superfície (Lavras)',
    trecho:'"Acumulado 162 mm vs. média 10 anos 168 mm (−4%)" · "Padrão climático normal, sem evento ENSO ativo"',
    acesso:'consultado 31/05 06:42',
    url:'https://www.chc.ucsb.edu/data/chirps'
  }],
  ['Identifiquei alavanca de demanda premium','ABIQ: queijos premium MG +8% em 12 meses · Cooxupé já +R$ 0,08 acima do CEPEA',{
    fonte:'ABIQ · CEPEA-ESALQ',
    consulta:'Demanda de queijos premium MG · janela 12 meses',
    trecho:'"Cooxupé Leite paga R$ 2,86/L (+R$ 0,08 acima do CEPEA), com demanda de queijos premium +8% no período"',
    acesso:'consultado 31/05 06:40',
    url:'https://www.cepea.esalq.usp.br/'
  }],
  ['Verifiquei janela contratual','Cooxupé Leite: revisão anual em 01/01/2027',{
    fonte:'SAP S/4HANA · Mestre de Contratos',
    consulta:'Contrato Cooxupé Leite · cláusula de revisão',
    trecho:'"Revisão de preço anual · próxima janela em 01/01/2027 · última renegociação em 01/01/2026"',
    acesso:'consultado 31/05 06:00',
    url:null
  }],
  ['Validei direção','Soma dos pilares = +R$ 0,04/L vs. CEPEA — verde claro',{
    fonte:'Modelo Vereda · ensemble SARIMAX + LightGBM',
    consulta:'Soma ponderada dos 4 pilares (P=quarentena)',
    trecho:'Climático +0,03 · Econômico +0,01 · Agropecuário ±0,00 · Político ±0,00 → total +0,04/L',
    acesso:'calculado 31/05 06:42',
    url:null
  }],
  ['Conferi confiança','Banda estreita (±R$ 0,03), 69% de acerto histórico em 6m',{
    fonte:'Backtest interno · 18 recomendações na bacia',
    consulta:'Banda de confiança 68% + taxa de acerto em 6m',
    trecho:'"Banda projetada ±R$ 0,03 · 69% acerto nas últimas 18 recomendações de Sul de Minas"',
    acesso:'calculado 31/05 06:42',
    url:null
  }],
  ['Gerei plano executável','4 passos focados em expansão',{
    fonte:'Modelo Vereda · gerador de plano',
    consulta:'Plano condicionado à expansão + janela contratual longa',
    trecho:'Reunião Eduardo Stein · negocia +15% volume · trava tier CCS<300 +R$ 0,12/L · avalia contrato 5 anos',
    acesso:'gerado 31/05 06:42',
    url:null
  }],
];

const TRAIL_SUL_GOIAS = [
  ['Detectei pressão econômica externa','SECEX + BCB-SGS + B3: importação MERCOSUL +14%, dólar 5,40, milho +3%',{
    fonte:'SECEX · BCB-SGS · B3',
    consulta:'Volume de importação leite em pó MERCOSUL · janela 90d',
    trecho:'"Importação +14% em 90d · Sul de Goiás absorve 38% do fluxo · PTAX R$ 5,4087 · milho CCMK26 +3,1%"',
    acesso:'consultado 31/05 06:42',
    url:'https://comexstat.mdic.gov.br/'
  }],
  ['Cruzei com qualidade regional','Lab. Comigo: CCS subiu 12,7% em 90 dias (445 céls/mL)',{
    fonte:'Lab. Comigo · IBGE PPM',
    consulta:'CCS médio dos 50 maiores produtores · 90 dias',
    trecho:'"CCS médio 445 céls/mL (+12,7% vs. mesmo período 2025) · acima do limiar premium 300 e do alerta 400"',
    acesso:'consultado 31/05 06:38',
    url:'https://www.ibge.gov.br/'
  }],
  ['Verifiquei janela contratual','Cooperativa Comigo: revisão trimestral em 01/09/2026',{
    fonte:'SAP S/4HANA · Mestre de Contratos',
    consulta:'Contrato Cooperativa Comigo · próxima revisão',
    trecho:'"Revisão de preço trimestral · próxima janela em 01/09/2026 · última renegociação em 01/06/2026"',
    acesso:'consultado 31/05 06:00',
    url:null
  }],
  ['Validei direção negativa','Soma dos pilares = −R$ 0,05/L vs. CEPEA — vermelho',{
    fonte:'Modelo Vereda · ensemble SARIMAX + LightGBM',
    consulta:'Soma ponderada dos pilares com sinais contrários',
    trecho:'Climático +0,01 · Econômico −0,04 · Agropecuário −0,01 · Político ±0,00 (quarentena) → total −0,04 (clamp −0,05)',
    acesso:'calculado 31/05 06:42',
    url:null
  }],
  ['Conferi confiança','Banda estreita (±R$ 0,04), 68% de acerto histórico em 6m',{
    fonte:'Backtest interno · 16 recomendações na bacia',
    consulta:'Banda + taxa de acerto em janela de 6m',
    trecho:'"Banda projetada ±R$ 0,04 · 68% acerto nas últimas 16 recomendações de Sul de Goiás"',
    acesso:'calculado 31/05 06:42',
    url:null
  }],
  ['Gerei plano defensivo','4 passos · não antecipar · plano B em outras bacias',{
    fonte:'Modelo Vereda · gerador de plano',
    consulta:'Plano condicionado à postura defensiva',
    trecho:'Não conceder bônus extra · não-renovar até 12 produtores Atenção · plano B com Sul de Minas/Norte do PR · monitorar TEC + B3 semanal',
    acesso:'gerado 31/05 06:42',
    url:null
  }],
];

// Tabela de lookup: bacia → { historico, presets, trail }.
// Bacias não listadas caem no fallback genérico (zona-mata) ou no estado
// "bacia em monitoramento" do verHistoricoBacia.
const BACIA_CHAT_DATA = {
  'sul-minas': { historico:HISTORICO_SUL_MINAS, presets:PRESETS_SUL_MINAS, trail:TRAIL_SUL_MINAS },
  'sul-goias': { historico:HISTORICO_SUL_GOIAS, presets:PRESETS_SUL_GOIAS, trail:TRAIL_SUL_GOIAS },
};

/* =====================================================================
   CHAT DE BACIA EM OBSERVAÇÃO — conversa contextual com a IA sobre
   bacias que NÃO têm recomendação ativa (sinal misto ou em monitoramento).
   Diferente do REC_CHAT: aqui não há recomendação pra investigar — a IA
   conversa sobre status, monitoramento, novidades operacionais e o que
   ainda falta pra emitir um sinal direcional.
   ===================================================================== */

const PRESETS_OBS_TRIANGULO = {
  'por-que-observacao':{
    pergunta:'Por que essa bacia ainda está em observação?',
    metaIA:'· análise de sinal · 18 meses de série',
    pensando:[
      'Conferindo magnitude dos pilares…',
      'Cruzando direção de cada pilar…',
      'Calculando largura da banda projetada…',
    ],
    blocos:[
      { tipo:'p', texto:'O Triângulo Mineiro tem **sinais contraditórios** nos pilares — daí a IA não emite recomendação direcional:' },
      { tipo:'delta', linhas:[
        { rotulo:'Climático', de:'sentido —', para:'−R$ 0,02/L · chuva +13%', sinal:'queda'  },
        { rotulo:'Econômico', de:'sentido —', para:'+R$ 0,02/L · câmbio/milho', sinal:'subida' },
        { rotulo:'Agropecuário', de:'sentido —', para:'+R$ 0,01/L · CCS 368', sinal:'subida' },
      ]},
      { tipo:'p', texto:'Os pilares se cancelam: oferta regional acima da média **anula** o efeito do câmbio. A banda projetada fica larga (**±R$ 0,07**) e o acerto histórico cai pra **51%** — abaixo do limiar de 65% que a IA usa pra publicar recomendação direcional.' },
      { tipo:'nota', titulo:'Não é ausência de dado', texto:'Tenho **18 meses de série local** com 4 fontes externas e 2 internas. O problema é que a região é **estruturalmente bimodal** — clima e câmbio puxando em direções opostas. Quando um dos dois dominar, a recomendação aparece.' },
    ],
    acoes:[]
  },
  'status-monitoramento':{
    pergunta:'Como está o monitoramento desta região?',
    metaIA:'· snapshot · CCPR · Unidade MG',
    pensando:[
      'Carregando série local de 18 meses…',
      'Verificando frescor das fontes…',
      'Listando categoria dos produtores…',
    ],
    blocos:[
      { tipo:'p', texto:'**Snapshot operacional do Triângulo Mineiro:**' },
      { tipo:'list', itens:[
        '**Volume captado:** 176.300 L/dia em 5 municípios (Uberaba, Uberlândia, Patrocínio, Araguari, Patos de Minas)',
        '**Rebanho:** 198 mil cabeças (+1,2% em 2024 · IBGE PPM)',
        '**Qualidade:** CCS médio 368 céls/mL · CBT médio 42 (UFC×10³/mL)',
        '**Produtores na carteira:** 84 ativos · 4 em categoria Atenção',
        '**Cooperativa parceira:** CCPR · contrato vigente até 31/05/2026',
      ]},
      { tipo:'fontes', itens:[
        ['CHIRPS','climático','última leitura 31/05 06:42 · padrão acima da média'],
        ['BCB-SGS / B3','econômico','PTAX 5,4087 · milho CCMK26 +3,1%'],
        ['IBGE PPM','agropecuário','rebanho 2024 publicado em 28/04/2026'],
        ['Lab. CCPR','interno','série de CCS dos 30 maiores · diária'],
      ]},
      { tipo:'nota', titulo:'Frescor das séries', texto:'Tudo atualizado nas últimas **72h**. Nenhuma fonte com lag crítico — o que falta não é dado, é convergência de sinal.' },
    ],
    acoes:[]
  },
  'novidades-operacionais':{
    pergunta:'Tem alguma novidade operacional nesta bacia?',
    metaIA:'· alertas · 7 dias',
    pensando:[
      'Consultando feed de alertas de concorrência…',
      'Cruzando com pedidos de segunda via de contrato…',
      'Verificando movimentos contratuais recentes…',
    ],
    blocos:[
      { tipo:'p', texto:'Sim — **três sinais operacionais** que valem o seu olhar essa semana:' },
      { tipo:'list', itens:[
        '🚩 **Cocari (concorrente)** continua ativa na rota desde **fev/2026** pagando **+R$ 0,04/L** acima do tier base da CCPR. Já são 4 meses — o risco de churn cresce mês a mês.',
        '📄 **Granja Três Irmãos** (produtor categoria Atenção) pediu segunda via de contrato em **18/04/2026** — sinal forte de comparação de propostas com a Cocari.',
        '📅 **Cláusula de revisão da CCPR** abre em **31/05/2026** (hoje) — janela natural pra colocar contraproposta, mas a IA prefere **não recomendar movimento** porque o sinal direcional ainda é misto.',
      ]},
      { tipo:'nota', titulo:'Marina Couto mantém boletim', texto:'A **Marina Ribeiro Couto** (Gerente de Captação · CCPR, contato direto na cooperativa) mantém um boletim semanal de inteligência de mercado. Vale pedir o último — é a leitura mais fresca de campo que existe.' },
    ],
    acoes:[]
  },
  'comparar-bacias':{
    pergunta:'Como esta bacia se compara com Zona da Mata?',
    metaIA:'· comparativo · 4 dimensões',
    pensando:[
      'Carregando snapshot da Zona da Mata…',
      'Cruzando pilares lado a lado…',
    ],
    blocos:[
      { tipo:'p', texto:'Comparativo direto entre **Triângulo Mineiro** e **Zona da Mata** (referência operacional da carteira):' },
      { tipo:'delta', linhas:[
        { rotulo:'Chuva mar–mai vs. média',  de:'Zona da Mata: −18%',     para:'Triângulo: +13%',         sinal:'queda'  },
        { rotulo:'Sinal direcional',          de:'Zona da Mata: verde',    para:'Triângulo: amarelo',      sinal:'queda'  },
        { rotulo:'Acerto histórico (6m)',     de:'Zona da Mata: 72%',      para:'Triângulo: 51%',          sinal:'queda'  },
        { rotulo:'Volume captado',            de:'Zona da Mata: 284k L/d', para:'Triângulo: 176k L/d',     sinal:null     },
        { rotulo:'Concorrente ativa na rota', de:'Zona da Mata: não',      para:'Triângulo: Cocari (4m)',  sinal:'queda'  },
      ]},
      { tipo:'p', texto:'O **fator econômico é nacional** — câmbio + milho afeta os dois igualmente. O que separa Zona da Mata do Triângulo é **clima** (oferta apertada vs. abundante) e **risco competitivo** (sem concorrente vs. Cocari ativa).' },
    ],
    acoes:[]
  },
  'o-que-falta':{
    pergunta:'O que precisaria mudar para uma recomendação aparecer aqui?',
    metaIA:'· gatilhos de recomendação',
    pensando:[
      'Listando condições de ativação…',
      'Ranqueando por probabilidade nos próximos 90 dias…',
    ],
    blocos:[
      { tipo:'p', texto:'Três cenários, em ordem de probabilidade nos próximos 90 dias, **virariam** a observação em recomendação:' },
      { tipo:'list', itens:[
        '🔴 **Cocari fechar acordo formal com 2+ produtores Atenção** (estimativa: 40% até ago/2026) → recomendação **defensiva** (não conceder bônus, visitar os 4 Atenção em 15 dias).',
        '🟡 **Climático virar** (chuva voltar pra dentro da média) — La Niña tardia, 25% até set/2026 → sinal climático neutraliza, banda estreita, **recomendação direcional positiva** aparece.',
        '🟢 **Regulatório** (PL 1.247/2026 da TEC do leite em pó for aprovado) — 15% até dez/2026 → afeta nacionalmente, mas Triângulo se beneficia menos que Sul de Goiás.',
      ]},
      { tipo:'nota', titulo:'Limiar técnico', texto:'Pra IA publicar recomendação, a banda projetada precisa ficar **abaixo de ±R$ 0,05** e o acerto histórico simulado precisa **cruzar 65%**. Hoje estamos em ±R$ 0,07 e 51%.' },
    ],
    acoes:[]
  },
};

const PRESETS_OBS_NORTE_PR = {
  'por-que-observacao':{
    pergunta:'Por que essa bacia ainda está em observação?',
    metaIA:'· análise de sinal · 14 meses de série',
    pensando:[
      'Conferindo magnitude dos pilares…',
      'Cruzando direção × tamanho do efeito…',
      'Calibrando contra acerto histórico…',
    ],
    blocos:[
      { tipo:'p', texto:'Norte do Paraná tem **sinal positivo claro**, mas **de baixa magnitude** — é exatamente o caso onde a IA prefere **não recomendar**:' },
      { tipo:'delta', linhas:[
        { rotulo:'Soma dos pilares',           de:'limiar +R$ 0,04/L',   para:'+R$ 0,02/L',  sinal:'queda' },
        { rotulo:'Banda de confiança',         de:'estreita ±R$ 0,05',   para:'±R$ 0,05',     sinal:null    },
        { rotulo:'Acerto histórico em 6m',     de:'limiar 65%',          para:'58%',          sinal:'queda' },
      ]},
      { tipo:'p', texto:'O sinal existe, mas é **modesto demais**: o custo de mover ação contratual com a Castrolanda (mobilizar equipe, reunião, ajuste de tier) **não se paga** num ganho esperado de R$ 0,02/L. A IA reconhece o limite — recomendar movimento aqui seria gerar ruído.' },
      { tipo:'nota', titulo:'Erra mais quando sinal é pequeno', texto:'Modelo perde precisão quando a magnitude é baixa: 58% de acerto em 6m reflete que a região é **estruturalmente estável** — pouco a prever, e o que se prevê é pequeno.' },
    ],
    acoes:[]
  },
  'status-monitoramento':{
    pergunta:'Como está o monitoramento desta região?',
    metaIA:'· snapshot · Castrolanda · Unidade PR',
    pensando:[
      'Carregando série local de 14 meses…',
      'Verificando frescor das fontes…',
      'Lendo categoria dos produtores…',
    ],
    blocos:[
      { tipo:'p', texto:'**Snapshot operacional do Norte do Paraná:**' },
      { tipo:'list', itens:[
        '**Volume captado:** 168.400 L/dia em 4 municípios (Londrina, Maringá, Arapongas, Cambé)',
        '**Rebanho:** 142 mil cabeças holandês (+2,8% em 2024 · IBGE PPM)',
        '**Qualidade:** CCS médio 325 céls/mL · **CBT médio 36** (premium consistente)',
        '**Produtores na carteira:** 62 ativos · 0 em categoria Atenção (única bacia da carteira com base 100% OK)',
        '**Cooperativa parceira:** Castrolanda · revisão semestral em 15/01/2027',
      ]},
      { tipo:'fontes', itens:[
        ['CHIRPS','climático','padrão climaticamente mais estável da carteira'],
        ['BCB-SGS / CONAB','econômico','PR responde por 22% da produção nacional de milho'],
        ['IBGE PPM','agropecuário','rebanho holandês com manejo industrializado'],
        ['Lab. Castrolanda','interno','série de CCS+CBT dos 40 maiores · semanal'],
      ]},
      { tipo:'nota', titulo:'Bacia mais "previsível" da carteira', texto:'Norte do PR tem o **menor desvio-padrão** de preço pago nos últimos 24 meses. Isso é bom operacionalmente, ruim pra IA — quanto menos varia, menos margem de vantagem dá pra capturar.' },
    ],
    acoes:[]
  },
  'novidades-operacionais':{
    pergunta:'Tem alguma novidade operacional nesta bacia?',
    metaIA:'· alertas · 30 dias',
    pensando:[
      'Consultando feed de alertas de concorrência…',
      'Verificando movimentos contratuais…',
      'Lendo notas de campo do responsável…',
    ],
    blocos:[
      { tipo:'p', texto:'Quase nada — e isso aqui **é uma boa notícia**:' },
      { tipo:'list', itens:[
        '🟢 **Zero concorrentes ativos** na rota Norte do PR nos últimos 30 dias.',
        '🟢 **Zero pedidos de segunda via** de contrato. Zero produtores movendo categoria pra Atenção.',
        '💬 **Henk van der Berg** (Gerente Comercial · Castrolanda) abriu conversa sobre **contrato de 5 anos** com revisão anual — encontro em 28/06/2026.',
        '📊 **CBT médio caiu pra 36** (era 38 em jan/2026) — sinal pra avaliar tier premium novo de R$ 0,03/L pra produtores com CBT<40.',
      ]},
      { tipo:'nota', titulo:'Castrolanda joga longo', texto:'Henk tem perfil de planejamento longo (5+ anos de relação). Conversa de contrato extenso vem **dele**, não da pressão — isso é diferente do que rola em Sul de Goiás ou Triângulo. Aproveite a janela de calma pra construir relação.' },
    ],
    acoes:[]
  },
  'comparar-bacias':{
    pergunta:'Como esta bacia se compara com Zona da Mata?',
    metaIA:'· comparativo · 4 dimensões',
    pensando:[
      'Carregando snapshot da Zona da Mata…',
      'Cruzando pilares lado a lado…',
    ],
    blocos:[
      { tipo:'p', texto:'Comparativo direto entre **Norte do Paraná** e **Zona da Mata**:' },
      { tipo:'delta', linhas:[
        { rotulo:'Sinal direcional',             de:'Zona da Mata: verde · +R$ 0,06', para:'Norte do PR: amarelo · +R$ 0,02', sinal:'queda' },
        { rotulo:'Banda de confiança',            de:'Zona da Mata: ±R$ 0,03',         para:'Norte do PR: ±R$ 0,05',           sinal:'queda' },
        { rotulo:'Acerto histórico (6m)',         de:'Zona da Mata: 72%',              para:'Norte do PR: 58%',                 sinal:'queda' },
        { rotulo:'Produtores categoria Atenção',  de:'Zona da Mata: 6',                para:'Norte do PR: 0',                   sinal:'subida' },
        { rotulo:'Estabilidade (desvio 24m)',     de:'Zona da Mata: média',            para:'Norte do PR: máxima da carteira',  sinal:'subida' },
      ]},
      { tipo:'p', texto:'Inversão clássica de **risco × retorno**: Zona da Mata oferece **mais retorno** (sinal forte), Norte do PR oferece **mais previsibilidade** (zero churn, zero ruído). Em portfólio, o Norte do PR é o "lastro" — onde nada explode.' },
    ],
    acoes:[]
  },
  'o-que-falta':{
    pergunta:'O que precisaria mudar para uma recomendação aparecer aqui?',
    metaIA:'· gatilhos de recomendação',
    pensando:[
      'Listando condições de ativação…',
      'Ranqueando por probabilidade nos próximos 90 dias…',
    ],
    blocos:[
      { tipo:'p', texto:'Três caminhos pra Norte do PR sair de observação nos próximos 90 dias:' },
      { tipo:'list', itens:[
        '🟡 **Sinal subir de magnitude** (>R$ 0,04 em 6m) — depende de câmbio passar de R$ 5,80 ou milho >R$ 80/saca. Probabilidade ~30%.',
        '🔴 **Concorrente aparecer na rota** (improvável historicamente, ~10%) → recomendação **defensiva imediata** para reforçar tier de fidelidade.',
        '🟢 **Mudança regulatória** que privilegie produção paranaense (PL específico) — 8% até dez/2026.',
      ]},
      { tipo:'nota', titulo:'Cenário mais provável', texto:'Norte do PR continua em observação até 2027 e a recomendação que aparecer vai ser **conservadora** (ajuste fino de tier, conversa de contrato longo). É a bacia que **menos pede ação** da equipe — e isso é exatamente o tipo de leitura que protege capital pra alocar nas outras.' },
    ],
    acoes:[]
  },
};

const BACIA_OBS_CHAT_DATA = {
  'triangulo': {
    presets:PRESETS_OBS_TRIANGULO,
    starters:['por-que-observacao','status-monitoramento','novidades-operacionais','comparar-bacias','o-que-falta'],
    followups:{
      'por-que-observacao':   ['novidades-operacionais','o-que-falta','comparar-bacias'],
      'status-monitoramento': ['novidades-operacionais','por-que-observacao','comparar-bacias'],
      'novidades-operacionais':['o-que-falta','status-monitoramento','comparar-bacias'],
      'comparar-bacias':      ['por-que-observacao','o-que-falta'],
      'o-que-falta':          ['novidades-operacionais','status-monitoramento'],
    },
  },
  'norte-pr': {
    presets:PRESETS_OBS_NORTE_PR,
    starters:['por-que-observacao','status-monitoramento','novidades-operacionais','comparar-bacias','o-que-falta'],
    followups:{
      'por-que-observacao':   ['o-que-falta','status-monitoramento','comparar-bacias'],
      'status-monitoramento': ['novidades-operacionais','por-que-observacao','comparar-bacias'],
      'novidades-operacionais':['status-monitoramento','o-que-falta'],
      'comparar-bacias':      ['por-que-observacao','o-que-falta'],
      'o-que-falta':          ['por-que-observacao','comparar-bacias'],
    },
  },
};

const FONTES_REAIS = [
  { nome:'CEPEA/ESALQ', uso:'Preço de referência do leite no Brasil', url:'https://www.cepea.esalq.usp.br/br/indicador/leite.aspx' },
  { nome:'BCB-SGS', uso:'Câmbio, séries econômicas (Banco Central)', url:'https://www3.bcb.gov.br/sgspub/' },
  { nome:'NASA POWER', uso:'Dados climáticos por satélite, grade ~5km', url:'https://power.larc.nasa.gov/' },
  { nome:'CHIRPS', uso:'Chuva por satélite, atualização diária', url:'https://www.chc.ucsb.edu/data/chirps' },
  { nome:'INMET', uso:'Estações meteorológicas brasileiras', url:'https://portal.inmet.gov.br/' },
  { nome:'CONAB', uso:'Safra, oferta agrícola nacional', url:'https://www.conab.gov.br/' },
  { nome:'IBGE PPM', uso:'Rebanho e produção pecuária municipal', url:'https://www.ibge.gov.br/' },
  { nome:'MAPA', uso:'Decisões sanitárias, tributárias, Diário Oficial', url:'https://www.gov.br/agricultura/' },
  { nome:'Global Dairy Trade', uso:'Preço internacional de lácteos', url:'https://www.globaldairytrade.info/' },
];
