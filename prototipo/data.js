/* =====================================================================
   VEREDA · DADOS (mocks ficcionais, internamente coerentes)
   ===================================================================== */

const BACIAS = [
  { id:'zona-mata', nome:'Zona da Mata', uf:'MG', unidade:'MG', semaforo:'verde',
    forecast:{ q1:+0.05, q2:+0.06, q3:+0.04 }, banda:0.03, acerto2T:72,
    pilares:{ P:0.00, E:+0.02, C:+0.04, A:+0.01 }, sinalClaro:true,
    cooperativa:'Itambé', cooperativaId:'itambe' },
  { id:'triangulo', nome:'Triângulo Mineiro', uf:'MG', unidade:'MG', semaforo:'amarelo',
    forecast:{ q1:+0.02, q2:+0.01, q3:-0.01 }, banda:0.07, acerto2T:51,
    pilares:{ P:-0.01, E:+0.02, C:-0.02, A:+0.01 }, sinalClaro:false,
    cooperativa:'CCPR', cooperativaId:'ccpr' },
  { id:'sul-minas', nome:'Sul de Minas', uf:'MG', unidade:'MG', semaforo:'verde',
    forecast:{ q1:+0.03, q2:+0.04, q3:+0.03 }, banda:0.035, acerto2T:69,
    pilares:{ P:0.00, E:+0.01, C:+0.03, A:0.00 }, sinalClaro:true,
    cooperativa:'Cooperativa Cooxupé Leite', cooperativaId:'cooxupe' },
  { id:'sul-goias', nome:'Sul de Goiás', uf:'GO', unidade:'GO', semaforo:'vermelho',
    forecast:{ q1:-0.04, q2:-0.05, q3:-0.03 }, banda:0.04, acerto2T:68,
    pilares:{ P:-0.01, E:-0.04, C:+0.01, A:-0.01 }, sinalClaro:true,
    cooperativa:'Cooperativa Comigo', cooperativaId:'comigo' },
  { id:'norte-pr', nome:'Norte do Paraná', uf:'PR', unidade:'PR', semaforo:'amarelo',
    forecast:{ q1:+0.01, q2:+0.02, q3:+0.02 }, banda:0.05, acerto2T:58,
    pilares:{ P:0.00, E:+0.02, C:0.00, A:0.00 }, sinalClaro:true,
    cooperativa:'Castrolanda', cooperativaId:'castrolanda' },
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
  drivers:[
    { pilar:'Climático', sigla:'C', valor:+0.04,
      detalhe:'Chuva acumulada 18% abaixo da média dos últimos 10 anos na região — projeção de menor oferta regional de leite na janela de 6–9 meses.',
      fonte:'CHIRPS / NASA POWER', url:'https://www.chc.ucsb.edu/data/chirps' },
    { pilar:'Econômico', sigla:'E', valor:+0.02,
      detalhe:'Dólar a R$ 5,40 e milho futuro +3% pressionam o custo de produção do produtor e sustentam o preço pago pelo leite.',
      fonte:'BCB-SGS / B3 (milho)', url:'https://www3.bcb.gov.br/sgspub/' },
    { pilar:'Agropecuário', sigla:'A', valor:+0.01,
      detalhe:'Rebanho estável (IBGE PPM); contagem de células somáticas (CCS) subindo na seca — sinaliza pressão de qualidade do leite.',
      fonte:'IBGE PPM / laboratório interno', url:'https://www.ibge.gov.br/' },
    { pilar:'Político', sigla:'P', valor:0.00, quarentena:true,
      detalhe:'Possível mudança de alíquota do leite em pó importado em discussão no Mercosul — observado, mas não entra no cálculo da IA até virar fato.',
      fonte:'MAPA / Diário Oficial', url:'https://www.gov.br/agricultura/' },
  ],
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
    motivo:'Volume em queda + qualidade do leite (CCS) piorando + concorrente ativa na rota.',
    sinais:[
      { label:'Volume caiu 18% em 60 dias',                                peso:+24 },
      { label:'CCS médio acima do limite em 3 leituras consecutivas',      peso:+18 },
      { label:'Italac (concorrente) reportada na rota desde abril/2026',   peso:+12 },
      { label:'Sem revisão de bonificação há 11 meses',                    peso:+8  },
    ],
    volumeSerie:[4200,4150,4000,3850,3700,3450],
    ccsSerie:[380,420,450,510,590,640],
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
    motivo:'Italac (concorrente) ativa na rota; sem revisão de bonificação há 8 meses.',
    sinais:[
      { label:'Italac (concorrente) reportada na rota desde fevereiro',  peso:+20 },
      { label:'Sem revisão de bonificação há 8 meses',                   peso:+15 },
      { label:'Volume estável mas levemente abaixo da meta (-3%)',       peso:+7  },
    ],
    volumeSerie:[5400,5350,5300,5250,5200,5200],
    ccsSerie:[320,310,330,325,320,315],
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
    motivo:'Volume oscilando; cooperativa vizinha pagando acima do mercado.',
    sinais:[
      { label:'Cooperativa Cocari pagando +R$ 0,04/litro na região',     peso:+22 },
      { label:'Volume oscilando ±12% nos últimos 4 meses',                peso:+14 },
      { label:'Produtor pediu segunda via de contrato em 18/04',          peso:+10 },
    ],
    volumeSerie:[2900,3100,2700,3200,2600,2800],
    ccsSerie:[280,295,310,290,305,295],
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
    motivo:'Relação estável, qualidade dentro da meta, tendência de risco em queda.',
    sinais:[
      { label:'Volume estável há 6 meses',                                peso:-8  },
      { label:'CCS dentro do limite premium (<300)',                       peso:-6  },
      { label:'Contrato renovado em 02/2026 com bonificação atualizada',  peso:-10 },
    ],
    volumeSerie:[1850,1900,1920,1900,1880,1900],
    ccsSerie:[270,265,275,260,255,260],
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
    motivo:'Contrato vigente, sem sinais de saída.',
    sinais:[
      { label:'Contrato anual vigente até 12/2026',                       peso:-12 },
      { label:'Volume crescendo +2% ao mês (expansão de rebanho)',         peso:-5  },
      { label:'Sem registro de concorrente ativo na rota',                peso:-6  },
    ],
    volumeSerie:[6100,6180,6240,6310,6360,6400],
    ccsSerie:[295,290,295,285,290,288],
    acoesSugeridas:[
      'Acompanhar plano de expansão do rebanho — oportunidade de crescer volume contratado.',
    ],
    ultimoContato:'20/04/2026',
    fontes:['Romaneios diários (ERP)','Histórico de contratos','Equipe de campo'],
  },
];
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
};

const AUDITORIA = {
  acertoHorizonte:{ '1T':78, '2T':72, '3T':61 },
  acertoPilar:{ 'Climático':81, 'Econômico':68, 'Agropecuário':74, 'Político':null },
  acertoDivergencia:64,
  acertoEmRecusa:{ acertos:3, total:4 },
  log:[
    { data:'10/05/2026', bacia:'Zona da Mata', decisao:'Aceito',   por:'Anderson Toledo', realizado:+0.05, ok:true },
    { data:'02/04/2026', bacia:'Sul de Goiás', decisao:'Recusado', justificativa:'Câmbio vai virar', realizado:-0.03, ok:true, recusaCorreta:true },
    { data:'15/03/2026', bacia:'Triângulo',    decisao:'Ajustado', justificativa:'Clima neutro, não La Niña', realizado:+0.01, ok:true },
    { data:'20/02/2026', bacia:'Zona da Mata', decisao:'Aceito',   por:'Anderson Toledo', realizado:+0.04, ok:true },
  ],
  recalibracao:'A IA recalibrou automaticamente o peso do milho futuro depois que você discordou no ciclo de março/2026 e estava certo.',
  escalonamento:'Você está em 55% de recusa neste trimestre (em recomendações de alto impacto). O sistema sugere uma revisão antes que o assunto chegue à diretoria — para reagir antes, não ser pego de surpresa.',
};

const HIPOTESE_IMPACTO = 'Exemplo de promessa mensurável: numa região leiteira como a Zona da Mata mineira, a IA do Vereda projetaria um ganho de R$ 0,03 a R$ 0,08 por litro vs. o preço de referência do mercado (CEPEA), com 65% de probabilidade, em 6 meses. Cada região teria sua própria estimativa, calibrada com dados locais.';
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
