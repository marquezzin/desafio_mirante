/* =====================================================================
   VEREDA · APP (Alpine.js factory + Chart.js builders)
   ===================================================================== */

function app(){
  return {
    // ---- navigation / global state ----
    tela:'porque',                  // landing = Visão geral
    unidade:'Todas',
    tabs:[
      { id:'porque',       label:'Sobre o sistema',     icon:'home',     group:'about' },
      { id:'painel',       label:'Hoje',                icon:'today',    group:'main' },
      { id:'bacias',       label:'Bacias',              icon:'droplet',  group:'main', type:'group' },
      { id:'recomendacao', label:'Recomendações',       icon:'sparkles', group:'main' },
      { id:'produtores',   label:'Produtores',          icon:'users',    group:'main' },
      { id:'whatif',       label:'Simulador',           icon:'sliders',  group:'main' },
      { id:'auditoria',    label:'Transparência da IA', icon:'shield',   group:'main' },
    ],
    sidebarSections:[
      { id:'about', label:'Sobre' },
      { id:'main',  label:'Operação' },
    ],
    toasts:[],

    // ---- sidebar state ----
    sidebarCollapsed:false,   // desktop: recolhido (só ícones)
    sidebarMobileOpen:false,  // mobile: drawer aberto
    baciasOpen:false,         // grupo "Bacias" fechado por padrão
    icons:{
      home:    '<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
      today:   '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6L4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4L4.2 19.8M19.8 4.2l-1.4 1.4"/>',
      droplet: '<path d="M12 3l5.5 7.3c2 2.7 1.4 6.5-1.5 8.4-2.5 1.6-5.5 1.6-8 0-2.9-1.9-3.5-5.7-1.5-8.4L12 3z"/>',
      pin:     '<path d="M12 22s-7-6-7-12a7 7 0 0114 0c0 6-7 12-7 12z"/><circle cx="12" cy="10" r="2.5"/>',
      sparkles:'<path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z"/><path d="M19 14l.9 2.1 2.1.9-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z"/>',
      users:   '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5"/><path d="M15 19c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5"/>',
      sliders: '<path d="M3 6h11M17 6h4M3 12h4M10 12h11M3 18h13M19 18h2"/><circle cx="15.5" cy="6" r="2"/><circle cx="8.5" cy="12" r="2"/><circle cx="17.5" cy="18" r="2"/>',
      shield:  '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
      chevron:     '<path d="M15 6l-6 6 6 6"/>',
      chevronDown: '<path d="M6 9l6 6 6-6"/>',
      caret:       '<path d="M9 6l6 6-6 6"/>',
      menu:        '<path d="M3 6h18M3 12h18M3 18h18"/>',
    },

    // ---- fluxo de pensamento (timeline na landing) ----
    flowSteps:[
      {
        title:'Enquadrar o problema',
        body:'Captação de leite cru numa indústria de laticínios é decisão <strong>estratégica trimestral</strong>: de qual região puxar volume, quando antecipar renegociação com cooperativa, como alocar entre bacias. Hoje essa decisão se apoia em instinto e tabela manual — faltava uma camada que organizasse os sinais que chegam dispersos (clima, câmbio, regulatório) numa leitura única, defensável e auditável.'
      },
      {
        title:'Virada da perecibilidade',
        body:'Insight central: leite cru <strong>não dá pra estocar</strong> nem segurar pra negociar quando o preço estiver melhor. Diferente do café ou da soja. A cada trimestre a indústria refaz contratos com cooperativas e realoca volume — errar essa janela custa centavos por litro em milhões de litros captados. Daqui nasceu o recorte do produto: copiloto pra <strong>decisão trimestral de captação</strong>, não previsor de preço spot nem ferramenta de hedge.'
      },
      {
        title:'Mapear fontes reais de dado',
        body:'Pra cada um dos 4 pilares do modelo, uma fonte pública concreta e gratuita: <strong>CHIRPS / NASA POWER</strong> (chuva e satélite), <strong>CEPEA</strong> (preço do leite), <strong>SIDRA/IBGE</strong> (rebanho e produção), <strong>BCB-SGS</strong> (câmbio, milho, soja), <strong>MAPA + Diário Oficial</strong> (regulatório). O motor é construível porque o dado existe — não é arquitetura de promessa.'
      },
      {
        title:'Personas adversariais como sparring',
        body:'<strong>Anderson Toledo</strong> (Gerente de Captação, chão de fábrica) e <strong>Patrícia Linhares</strong> (Diretora de Suprimentos, perspectiva executiva) foram modelados como interlocutores adversariais — ancorados em fatos do setor e instruídos a <strong>resistir por padrão</strong>, sem comprar ideia sem prova. 3 rodadas de discovery serviram pra <strong>estressar premissas</strong>, não pra confirmar com viés.'
      },
      {
        title:'Lean Inception completo',
        body:'Visão do produto → É/Não É/Faz/Não Faz → Jornada do Anderson em 8 fases (ciclo pré-entressafra) → ~50 features brainstormadas → Sequenciador CORE/DEMO/ARQ → <strong>Canvas MVP</strong> com hipótese de impacto declarada antes do piloto: <strong>+R$ 0,03 a +R$ 0,08/litro</strong> de spread vs. CEPEA, 65% de probabilidade, bacia-piloto Zona da Mata mineira.'
      },
      {
        title:'Construção',
        body:'Stack leve, sem framework pesado: <strong>HTML + Tailwind + Alpine.js + Chart.js</strong> via CDN — carrega rápido e é auditável linha a linha. A IA está representada por <strong>mocks JSON estruturados</strong> e um motor <code>recalcular()</code> determinístico: as relações entre variáveis seguem a lógica do modelo real (ensemble SARIMAX + LightGBM, explicação por peso de fator estilo SHAP), só executadas no front.'
      }
    ],

    // ---- shared world ----
    bacias:BACIAS, pilarNome:PILAR_NOME,
    historicoZM:HISTORICO_ZONA_MATA,
    recZM:RECOMENDACAO_ZONA_MATA,
    produtores:JSON.parse(JSON.stringify(PRODUTORES)),
    alertaConcorrencia:ALERTA_CONCORRENCIA,
    cooperativa:COOPERATIVA_ITAMBE,
    auditoria:AUDITORIA,
    hipoteseImpacto:HIPOTESE_IMPACTO, fontesReais:FONTES_REAIS,

    // ---- recomendação state ----
    selBacia:'zona-mata',
    recBaseEnso:'Neutro',
    ajustarOpen:false,
    recStatus:'pendente',            // pendente | aceito | recusado | ajustado
    recAssinaturaData:null,
    recJustificativa:'',
    recusaOpen:false,
    expandedDriver:null,
    coopOpen:false,
    coopTab:'resumo',   // resumo | argumentos | contra | roteiro | evitar

    // ---- what-if state ----
    wf:{ cambio:5.40, milho:0, enso:'Neutro', mercosulProb:30 },
    wfBacia:'zona-mata',     // região base do simulador (selecionável)

    // ---- auditoria: filtro do log (apenas região) ----
    audFiltro:{ regiao:'Todas as regiões' },
    audPage:1,
    audPerPage:10,

    // ---- produtores modais ----
    ctrlOpen:false, ctrlProdutor:null, ctrlNota:'', ctrlPrazo:60,
    detalheOpen:false, detalheProdutor:null,

    // ---- CRUD produtor ----
    produtorOpcoes:PRODUTOR_OPCOES,
    formProdutorOpen:false, formProdutorMode:'create',
    formProdutorErrors:{},
    formProdutor:{
      id:null, nome:'', bacia:'', proprietario:'', cpf:'',
      municipio:'', areaHa:'', vinculo:'cooperativa',
      categoria:'OK',
      rebanho:{ leiteiras:'', secas:'', raca:'Holandês × Gir (3/4)', regime:'Semiconfinado' },
      contrato:{ inicio:'', vencimento:'', precoBase:'', bonificacaoAtual:'' },
      volumeMedio:'',
    },
    delProdutorOpen:false, delProdutorTarget:null,
    expSinalProdutor:null,         // sinal expandido no detalhe (label)

    // ---- região: detalhe + criação ----
    baciasDetalhe:BACIAS_DETALHE,
    regiaoOpen:false, regiaoSel:null,
    novaRegiaoOpen:false,
    novaStep:0,                   // 0: drop · 1: processando · 2: preview
    novaStepIdx:0,                // índice da linha de log atual
    novaLog:[],
    novaResultado:null,
    novaArquivo:null,
    importacaoDemo:IMPORTACAO_DEMO,

    // ---- chat widget ----
    chatOpen:false,
    chatHistory:[],
    chatSuggestions:CHAT_SUGGESTIONS,
    chatTyping:false,

    init(){
      const validTabs = this.tabs.map(t=>t.id);
      const hashTela = window.location.hash.replace('#','');
      if(validTabs.includes(hashTela)) this.tela = hashTela;

      // restaura estado do sidebar (desktop)
      try {
        const saved = localStorage.getItem('vereda.sidebarCollapsed');
        if(saved !== null) this.sidebarCollapsed = saved === '1';
      } catch(e){}
      this.$watch('sidebarCollapsed', v => {
        try { localStorage.setItem('vereda.sidebarCollapsed', v ? '1' : '0'); } catch(e){}
      });

      this.$watch('tela', (v) => {
        // fecha drawer mobile ao trocar de tela
        this.sidebarMobileOpen = false;
        if(window.location.hash.replace('#','') !== v){
          history.replaceState(null, '', '#'+v);
        }
        this.$nextTick(()=> this.renderCharts());
      });

      window.addEventListener('hashchange', () => {
        const h = window.location.hash.replace('#','');
        if(validTabs.includes(h) && h !== this.tela) this.tela = h;
      });

      this.$nextTick(()=> this.renderCharts());

      // re-renderiza o chart de horizonte quando o filtro de região mudar
      this.$watch('audFiltro.regiao', () => { this.audPage = 1; this.rebuildAudCharts(); });
    },

    go(id){ this.tela = id; window.scrollTo({top:0,behavior:'smooth'}); },
    toggleSidebar(){ this.sidebarCollapsed = !this.sidebarCollapsed; },
    selectBacia(id){
      this.selBacia = id;
      this.go('recomendacao');
    },
    iconSvg(name){
      const path = this.icons[name] || '';
      return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+path+'</svg>';
    },
    toast(msg){
      const id=Date.now()+Math.random();
      this.toasts.push({id,msg});
      setTimeout(()=>{ this.toasts=this.toasts.filter(t=>t.id!==id); }, 3200);
    },

    // ---- derived ----
    get baciasFiltradas(){
      return this.unidade==='Todas' ? this.bacias : this.bacias.filter(b=>b.unidade===this.unidade);
    },
    bacia(id){ return this.bacias.find(b=>b.id===id); },
    get baciaSel(){ return this.bacia(this.selBacia); },

    semColor(s){ return s==='verde' ? 'var(--sem-verde)' : s==='amarelo' ? 'var(--sem-amber)' : 'var(--sem-red)'; },
    semLabel(s){ return s==='verde' ? 'Vantagem de preço' : s==='amarelo' ? 'Sinal misto' : 'Pressão de custo'; },

    fmtR, fmtRsign,

    // band/sparkline geometry — escala [-0.10 .. +0.10] mapeada para 0..100%
    scalePos(v){ return Math.max(0, Math.min(100, ((v+0.10)/0.20)*100)); },
    sparkH(v){ return Math.min(100, Math.round(Math.abs(v)/0.05*100)); },

    abrirRec(id){
      this.selBacia=id;
      this.recStatus='pendente';
      this.recAssinaturaData=null;
      this.recJustificativa='';
      this.recusaOpen=false;
      this.ajustarOpen=false;
      this.recBaseEnso='Neutro';
      this.expandedDriver=null;
      this.go('recomendacao');
    },

    planosBacia:PLANOS_POR_BACIA,
    // recomendação do bacia selecionado
    get rec(){
      if(this.selBacia==='zona-mata') return this.recDrivers();
      const detalhado = this.planosBacia[this.selBacia];
      if(detalhado) return this.recDetalhada(detalhado);
      return this.recGeneric();
    },
    recDetalhada(p){
      const b = this.baciaSel;
      return {
        alavanca: p.alavanca,
        prob: p.prob,
        spreadMin: p.spreadMin,
        spreadMax: p.spreadMax,
        drivers: p.drivers,
        baciaNome: b.nome,
        uf: b.uf,
        plano: p.plano,
        metodologia: p.metodologia,
        semSinal: !b.sinalClaro,
      };
    },
    recDrivers(){
      // Zona da Mata — objeto completo; drivers recalculam se o pressuposto climático mudar
      const r = JSON.parse(JSON.stringify(RECOMENDACAO_ZONA_MATA));
      if(this.recBaseEnso!=='Neutro'){
        const sim = recalcular({ cambio:5.40, milho:0, enso:this.recBaseEnso, mercosulProb:30 });
        const cd = r.drivers.find(d=>d.sigla==='C');
        cd.valor = sim.shap['Climático'];
        r.prob = this.recBaseEnso==='La Niña' ? 76 : 61;
      }
      r.baciaNome='Zona da Mata'; r.uf='MG';
      return r;
    },
    recGeneric(){
      const b=this.baciaSel;
      const map={ C:'Climático', E:'Econômico', A:'Agropecuário', P:'Político' };
      const det={
        C:'Padrão de chuva e oferta regional projetada para a janela dos próximos 6–9 meses.',
        E:'Câmbio, milho futuro e custo de produção influenciando o preço do leite.',
        A:'Rebanho, qualidade do leite (CCS) e sazonalidade da região.',
        P:'Sinal regulatório/tributário observado — mantido em quarentena, não entra no cálculo da IA.',
      };
      const fonte={ C:'CHIRPS / NASA POWER', E:'BCB-SGS / B3 (milho)', A:'IBGE PPM', P:'MAPA / Diário Oficial' };
      const url={ C:'https://www.chc.ucsb.edu/data/chirps', E:'https://www3.bcb.gov.br/sgspub/', A:'https://www.ibge.gov.br/', P:'https://www.gov.br/agricultura/' };
      const drivers=['C','E','A','P'].map(k=>({
        pilar:map[k], sigla:k, valor:b.pilares[k],
        detalhe:det[k], fonte:fonte[k], url:url[k], quarentena:k==='P'
      }));
      const q2=b.forecast.q2;
      const fav = q2>=0.02;
      const alavanca = b.semaforo==='vermelho'
        ? 'Mantenha o volume de compra atual e não conceda aumento de bônus — a IA vê pressão de custo na região nos próximos meses.'
        : b.sinalClaro
          ? 'Direcione mais volume de compra para esta região e antecipe a revisão de contrato no próximo trimestre.'
          : 'Decida no relacionamento: a IA não tem confiança suficiente nesta região — use sua leitura de campo como guia principal.';
      return {
        alavanca,
        prob: b.sinalClaro ? (fav?68:58) : 50,
        spreadMin:+(q2-b.banda).toFixed(2),
        spreadMax:+(q2+b.banda).toFixed(2),
        drivers, baciaNome:b.nome, uf:b.uf,
        semSinal:!b.sinalClaro,
      };
    },

    aceitarRec(){
      this.recStatus='aceito';
      this.recAssinaturaData=HOJE;
      this.toast('Recomendação aceita e assinada por Anderson Toledo.');
    },
    confirmarRecusa(){
      if(!this.recJustificativa.trim()) return;
      this.recStatus='recusado';
      this.recusaOpen=false;
      this.toast('Recusa registrada com justificativa. A IA vai aprender com a sua discordância.');
    },
    ajustarRec(){ this.ajustarOpen=!this.ajustarOpen; },
    aplicarAjuste(v){
      this.recBaseEnso=v;
      this.recStatus='ajustado';
      this.$nextTick(()=>this.renderCharts());
    },

    // ---- what-if derived ----
    get wfRes(){
      const b = this.wfBaciaObj;
      return recalcular(this.wf, { q2:b.forecast.q2, pilares:b.pilares });
    },
    get wfLLM(){
      const a=Math.abs;
      const c=a((this.wf.cambio-5.40)*0.08),
            m=a((this.wf.milho/100)*0.10),
            e=a(this.wf.enso==='La Niña'?0.02:this.wf.enso==='El Niño'?0.015:0),
            me=a(((this.wf.mercosulProb-30)/100)*-0.03);
      const max=Math.max(c,m,e,me);
      if(max===0)  return 'Cenário neutro: nenhuma variável domina a previsão.';
      if(max===e && this.wf.enso==='La Niña') return 'La Niña reduz a oferta regional projetada e sustenta o preço do leite.';
      if(max===e && this.wf.enso==='El Niño') return 'El Niño tende a ampliar a oferta regional e pressiona o preço do leite para baixo.';
      if(max===me) return 'Maior probabilidade de cota Mercosul amplia a oferta de leite em pó importado e pressiona o preço para baixo.';
      if(max===m)  return 'Milho mais caro pressiona o custo de produção e sustenta o preço do leite.';
      return 'Dólar mais alto empurra o preço do leite para cima via custo do leite em pó importado.';
    },
    // ---- auditoria: filtros computados ----
    get audOpcoesRegiao(){
      const set = new Set(this.auditoria.log.map(l => l.bacia));
      return ['Todas as regiões', ...Array.from(set).sort()];
    },
    get logFiltrado(){
      return this.auditoria.log.filter(l => {
        if(this.audFiltro.regiao !== 'Todas as regiões' && l.bacia !== this.audFiltro.regiao) return false;
        return true;
      });
    },
    // métricas computadas em cima do log filtrado
    get audAcertoGeral(){
      const f = this.logFiltrado;
      if(!f.length) return null;
      return Math.round(100 * f.filter(l => l.ok).length / f.length);
    },
    get audAcertoHorizonte(){
      // calcula acerto por 1T/2T/3T no log filtrado · null quando não houver dados
      const f = this.logFiltrado;
      const buckets = { '1T':[], '2T':[], '3T':[] };
      f.forEach(l => { if(buckets[l.horizonte]) buckets[l.horizonte].push(l); });
      const pct = b => b.length ? Math.round(100 * b.filter(l => l.ok).length / b.length) : null;
      return { '1T':pct(buckets['1T']), '2T':pct(buckets['2T']), '3T':pct(buckets['3T']) };
    },
    get audAcertoPilar(){
      const f = this.logFiltrado;
      const pilares = ['Climático','Econômico','Agropecuário','Político'];
      const out = {};
      pilares.forEach(p => {
        if(p === 'Político'){ out[p] = null; return; }   // quarentena permanente
        const sub = f.filter(l => l.pilarDominante === p);
        out[p] = sub.length ? Math.round(100 * sub.filter(l => l.ok).length / sub.length) : null;
      });
      return out;
    },
    get audAcertoEmRecusa(){
      const recusas = this.logFiltrado.filter(l => l.decisao === 'Recusado');
      return { acertos: recusas.filter(l => l.recusaCorreta).length, total: recusas.length };
    },
    resetAudFiltro(){
      this.audFiltro = { regiao:'Todas as regiões' };
      this.audPage = 1;
    },
    get audFiltroAtivo(){ return this.audFiltro.regiao !== 'Todas as regiões'; },

    // ---- paginação do log ----
    get audTotalPages(){
      return Math.max(1, Math.ceil(this.logFiltrado.length / this.audPerPage));
    },
    get audPageSafe(){
      return Math.max(1, Math.min(this.audTotalPages, this.audPage));
    },
    get logPaginado(){
      const start = (this.audPageSafe - 1) * this.audPerPage;
      return this.logFiltrado.slice(start, start + this.audPerPage);
    },
    get audRangeLabel(){
      const total = this.logFiltrado.length;
      if(!total) return '0 de 0';
      const start = (this.audPageSafe - 1) * this.audPerPage + 1;
      const end = Math.min(this.audPageSafe * this.audPerPage, total);
      return start + '–' + end + ' de ' + total;
    },
    audGoPage(p){
      const total = this.audTotalPages;
      this.audPage = Math.max(1, Math.min(total, p));
    },
    horizonteLabel(h){
      return h==='1T' ? '3 meses' : h==='2T' ? '6 meses' : h==='3T' ? '9 meses' : h;
    },
    resumoRec(l){
      // sintetiza o que a IA recomendou: horizonte + pilar dominante
      return 'Sinal em ' + this.horizonteLabel(l.horizonte) + ' · pilar ' + l.pilarDominante;
    },

    resetWf(){
      this.wf={ cambio:5.40, milho:0, enso:'Neutro', mercosulProb:30 };
      this.toast('Cenário restaurado para a base.');
      this.$nextTick(()=>this.updWfChart());
    },

    // ---- produtores ----
    abrirControle(p){ this.ctrlProdutor=p; this.ctrlNota=''; this.ctrlPrazo=60; this.ctrlOpen=true; },
    confirmarControle(){
      const p=this.produtores.find(x=>x.id===this.ctrlProdutor.id);
      const d=new Date(2026,4,30); d.setDate(d.getDate()+this.ctrlPrazo);
      const ds=String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+d.getFullYear();
      p.sobControle=true; p.controleAte=ds; p.controleNota=this.ctrlNota;
      this.ctrlOpen=false;
      this.toast(p.nome+' marcado como sob controle até '+ds+'.');
    },
    catColor(c){ return c==='Alto' ? 'var(--sem-red)' : c==='Atenção' ? 'var(--sem-amber)' : 'var(--sem-verde)'; },

    // ---- produtor detalhe ----
    abrirDetalhe(p){
      this.detalheProdutor = p;
      this.detalheOpen = true;
      this.$nextTick(()=> this.buildDetalheChart());
    },
    fecharDetalhe(){
      this.destroy('detalheChart');
      this.detalheOpen = false;
      this.detalheProdutor = null;
    },
    buildDetalheChart(){
      const el = document.getElementById('detalheChart');
      if(!el || !this.detalheProdutor) return;
      this.destroy('detalheChart');
      const labels = ['-5m','-4m','-3m','-2m','-1m','agora'];
      this.charts.detalheChart = new Chart(el, {
        type:'line',
        data:{ labels, datasets:[
          {
            label:'Volume (L/dia)', yAxisID:'yVol',
            data:this.detalheProdutor.volumeSerie,
            borderColor:'#17503a', backgroundColor:'rgba(34,105,74,.10)',
            borderWidth:2.5, pointRadius:3, pointBackgroundColor:'#17503a',
            tension:.35, fill:true,
          },
          {
            label:'CCS (céls/mL)', yAxisID:'yCCS',
            data:this.detalheProdutor.ccsSerie,
            borderColor:'#b3700f', backgroundColor:'transparent',
            borderWidth:2.5, pointRadius:3, pointBackgroundColor:'#b3700f',
            tension:.35, borderDash:[4,4],
          },
        ]},
        options:{
          responsive:true, maintainAspectRatio:false, animation:{duration:500},
          interaction:{ mode:'index', intersect:false },
          plugins:{
            legend:{ display:true, position:'bottom', labels:{ boxWidth:10, boxHeight:10, font:{family:'Geist', size:11}, color:'#4a4d57' } },
            tooltip:{ callbacks:{
              label:(c)=> c.dataset.label + ': ' + c.parsed.y.toLocaleString('pt-BR')
            }}
          },
          scales:{
            yVol:{ type:'linear', position:'left', ticks:{ font:{family:'JetBrains Mono',size:10}, color:'#17503a', callback:(v)=> v.toLocaleString('pt-BR') }, grid:{color:'rgba(26,29,36,.06)'}, border:{display:false} },
            yCCS:{ type:'linear', position:'right', ticks:{ font:{family:'JetBrains Mono',size:10}, color:'#b3700f' }, grid:{display:false}, border:{display:false} },
            x:{ ticks:{ font:{family:'JetBrains Mono',size:11}, color:'#7a7e8a' }, grid:{display:false}, border:{display:false} },
          }
        }
      });
    },

    // ---- CRUD produtor ----
    novoFormProdutor(){
      return {
        id:null, nome:'', bacia: this.bacias[0]?.nome || '', proprietario:'', cpf:'',
        municipio:'', areaHa:'', vinculo:'cooperativa', categoria:'OK',
        rebanho:{ leiteiras:'', secas:'', raca:'Holandês × Gir (3/4)', regime:'Semiconfinado' },
        contrato:{ inicio:'', vencimento:'', precoBase:'', bonificacaoAtual:'' },
        volumeMedio:'',
      };
    },
    municipiosDaBacia(nomeBacia){
      const b = this.bacias.find(x => x.nome === nomeBacia);
      if(!b) return [];
      return this.baciasDetalhe[b.id]?.municipios || [];
    },
    abrirFormProdutor(mode, p){
      this.formProdutorMode = mode;
      this.formProdutorErrors = {};
      if(mode === 'edit' && p){
        // clone profundo pra editar sem efeitos colaterais até confirmar
        this.formProdutor = JSON.parse(JSON.stringify({
          id:p.id, nome:p.nome, bacia:p.bacia, proprietario:p.proprietario||'', cpf:p.cpf||'',
          municipio:p.municipio||'', areaHa:p.areaHa||'', vinculo:p.vinculo||'cooperativa',
          categoria:p.categoria,
          rebanho: p.rebanho || { leiteiras:'', secas:'', raca:'Holandês × Gir (3/4)', regime:'Semiconfinado' },
          contrato: p.contrato || { inicio:'', vencimento:'', precoBase:'', bonificacaoAtual:'' },
          volumeMedio: p.volumeMedio || '',
        }));
      } else {
        this.formProdutor = this.novoFormProdutor();
      }
      this.formProdutorOpen = true;
    },
    fecharFormProdutor(){ this.formProdutorOpen = false; this.formProdutorErrors = {}; },
    preencherExemploProdutor(){
      // mock coerente — Zona da Mata existe por padrão, Ubá está na lista de municípios da região
      this.formProdutor = {
        id:null,
        nome:'Fazenda Vista Alegre',
        proprietario:'Roberto Carlos Drummond',
        cpf:'***.534.290-71',
        bacia:'Zona da Mata',
        municipio:'Ubá',
        areaHa:67,
        vinculo:'cooperativa',
        categoria:'Atenção',
        rebanho:{ leiteiras:45, secas:9, raca:'Holandês × Gir (3/4)', regime:'Semiconfinado' },
        contrato:{
          inicio:'01/04/2026', vencimento:'31/03/2029',
          precoBase:2.80,
          bonificacaoAtual:'CCS<350: +R$ 0,06/L · CBT<60: +R$ 0,02/L',
        },
        volumeMedio:'',
      };
      this.formProdutorErrors = {};
      this.toast('Formulário preenchido com exemplo. Revise e clique em Cadastrar.');
    },
    validarFormProdutor(){
      const f = this.formProdutor; const e = {};
      if(!f.nome.trim())           e.nome = 'Obrigatório.';
      if(!f.proprietario.trim())   e.proprietario = 'Obrigatório.';
      if(!f.bacia)                 e.bacia = 'Selecione uma região.';
      if(!f.municipio)             e.municipio = 'Selecione um município.';
      if(!f.rebanho.leiteiras || +f.rebanho.leiteiras <= 0) e.leiteiras = 'Informe um número > 0.';
      if(!f.contrato.precoBase || +f.contrato.precoBase <= 0) e.precoBase = 'Informe o preço base.';
      this.formProdutorErrors = e;
      return Object.keys(e).length === 0;
    },
    salvarProdutor(){
      if(!this.validarFormProdutor()) return;
      const f = this.formProdutor;
      const volNum = f.volumeMedio ? +String(f.volumeMedio).replace(/\D/g,'') : (+f.rebanho.leiteiras * 22);
      const volStr = volNum.toLocaleString('pt-BR') + ' L/dia';
      if(this.formProdutorMode === 'edit'){
        const i = this.produtores.findIndex(p => p.id === f.id);
        if(i >= 0){
          Object.assign(this.produtores[i], {
            nome:f.nome, bacia:f.bacia, proprietario:f.proprietario, cpf:f.cpf,
            municipio:f.municipio, areaHa:+f.areaHa || 0, vinculo:f.vinculo, categoria:f.categoria,
            rebanho:{ ...f.rebanho, leiteiras:+f.rebanho.leiteiras, secas:+f.rebanho.secas||0 },
            contrato:{ ...f.contrato, precoBase:+f.contrato.precoBase },
            volumeMedio: volStr,
          });
          this.toast('Produtor "'+f.nome+'" atualizado.');
        }
      } else {
        const novoId = Math.max(0, ...this.produtores.map(p=>p.id)) + 1;
        this.produtores.push({
          id:novoId, nome:f.nome, bacia:f.bacia,
          categoria:f.categoria, tendencia:'estável', sobControle:false,
          riskScore: 20, confianca:'baixa', volumeMedio: volStr,
          proprietario:f.proprietario, cpf:f.cpf, municipio:f.municipio, areaHa:+f.areaHa||0, vinculo:f.vinculo,
          rebanho:{ ...f.rebanho, leiteiras:+f.rebanho.leiteiras, secas:+f.rebanho.secas||0 },
          contrato:{ ...f.contrato, precoBase:+f.contrato.precoBase, ultimaRevisaoBonificacao: HOJE },
          motivo:'Produtor recém-cadastrado. A IA precisa de 60 dias de série de captação pra calcular score de risco.',
          sinais:[],
          volumeSerie:Array(6).fill(volNum),
          ccsSerie:Array(6).fill(300),
          visitasTecnicas:[],
          acoesSugeridas:['Agendar primeira visita técnica de cadastro nos próximos 15 dias.'],
          ultimoContato: HOJE,
          fontes:['Cadastro manual'],
          novoCadastro:true,
        });
        this.toast('Produtor "'+f.nome+'" cadastrado. Entra em observação até 60 dias de série.');
      }
      this.fecharFormProdutor();
    },
    abrirDelProdutor(p){ this.delProdutorTarget = p; this.delProdutorOpen = true; },
    fecharDelProdutor(){ this.delProdutorOpen = false; this.delProdutorTarget = null; },
    confirmarDelProdutor(){
      const p = this.delProdutorTarget; if(!p) return;
      this.produtores = this.produtores.filter(x => x.id !== p.id);
      if(this.detalheProdutor && this.detalheProdutor.id === p.id) this.fecharDetalhe();
      this.fecharDelProdutor();
      this.toast('Produtor "'+p.nome+'" excluído.');
    },

    // ---- região: detalhe ----
    detalheRegiao(){
      if(!this.regiaoSel) return null;
      return this.baciasDetalhe[this.regiaoSel.id] || null;
    },
    // helpers seguros — usados em x-text para evitar throw durante teardown do template
    fmtPreco(v){ return (v==null) ? '—' : 'R$ '+v.toFixed(2).replace('.',','); },
    fmtPrecoSpread(){
      const d = this.detalheRegiao(); if(!d || !d.cepeaSerie) return '';
      const diff = d.precoMedio - d.cepeaSerie[d.cepeaSerie.length-1];
      return '+R$ '+diff.toFixed(2).replace('.',',');
    },
    iniciaisContato(){
      const d = this.detalheRegiao();
      if(!d || !d.contato || !d.contato.nome) return '';
      return d.contato.nome.split(' ').map(s=>s[0]).slice(0,2).join('');
    },
    abrirRegiao(b){
      this.regiaoSel = b;
      this.regiaoOpen = true;
      // dois nextTicks + RAF: garante que ambos os <template x-if> (regiaoSel e detalheRegiao)
      // terminaram de remontar antes de Chart.js procurar os <canvas>.
      this.$nextTick(()=> this.$nextTick(()=> requestAnimationFrame(()=> this.buildRegiaoCharts())));
    },
    fecharRegiao(){
      this.destroy('regiaoPrecoChart');
      this.destroy('regiaoQualidadeChart');
      this.regiaoOpen = false;
      this.regiaoSel = null;
    },
    buildRegiaoCharts(){
      const d = this.detalheRegiao(); if(!d) return;
      const labels = ['nov','dez','jan','fev','mar','abr','mai'];
      const elP = document.getElementById('regiaoPrecoChart');
      if(elP){
        this.destroy('regiaoPrecoChart');
        // safety: Chart.js v4 mantém registry global por canvas — se ainda houver alguma instância presa ao node, destrói.
        const stuckP = Chart.getChart(elP); if(stuckP) stuckP.destroy();
        this.charts.regiaoPrecoChart = new Chart(elP, {
          type:'line',
          data:{ labels, datasets:[
            { label:'Preço pago pela cooperativa (R$/L)', data:d.precoSerie,
              borderColor:'#17503a', backgroundColor:'rgba(34,105,74,.10)',
              borderWidth:2.5, pointRadius:3, pointBackgroundColor:'#17503a', tension:.35, fill:true },
            { label:'Preço de referência CEPEA (R$/L)', data:d.cepeaSerie,
              borderColor:'#316b8d', backgroundColor:'transparent',
              borderWidth:2, pointRadius:2.5, pointBackgroundColor:'#316b8d', tension:.35, borderDash:[5,4] },
          ]},
          options:{
            responsive:true, maintainAspectRatio:false, animation:{duration:500},
            interaction:{ mode:'index', intersect:false },
            plugins:{
              legend:{ display:true, position:'bottom', labels:{ boxWidth:10, boxHeight:10, font:{family:'Geist', size:11}, color:'#4a4d57' } },
              tooltip:{ callbacks:{ label:(c)=> c.dataset.label.split(' (')[0] + ': R$ ' + c.parsed.y.toFixed(2).replace('.',',') }}
            },
            scales:{
              y:{ ticks:{ font:{family:'JetBrains Mono',size:10}, color:'#7a7e8a', callback:(v)=>'R$ '+v.toFixed(2).replace('.',',') }, grid:{color:'rgba(26,29,36,.06)'}, border:{display:false} },
              x:{ ticks:{ font:{family:'JetBrains Mono',size:11}, color:'#7a7e8a' }, grid:{display:false}, border:{display:false} },
            }
          }
        });
      }
      const elQ = document.getElementById('regiaoQualidadeChart');
      if(elQ){
        this.destroy('regiaoQualidadeChart');
        const stuckQ = Chart.getChart(elQ); if(stuckQ) stuckQ.destroy();
        this.charts.regiaoQualidadeChart = new Chart(elQ, {
          type:'line',
          data:{ labels, datasets:[
            { label:'CCS médio (céls/mL)', yAxisID:'yCCS', data:d.ccsSerie,
              borderColor:'#b3700f', backgroundColor:'rgba(179,112,15,.10)',
              borderWidth:2.5, pointRadius:3, pointBackgroundColor:'#b3700f', tension:.35, fill:true },
            { label:'CBT médio (UFC/mL ×10³)', yAxisID:'yCBT', data:d.cbtSerie,
              borderColor:'#316b8d', backgroundColor:'transparent',
              borderWidth:2, pointRadius:2.5, pointBackgroundColor:'#316b8d', tension:.35, borderDash:[5,4] },
          ]},
          options:{
            responsive:true, maintainAspectRatio:false, animation:{duration:500},
            interaction:{ mode:'index', intersect:false },
            plugins:{
              legend:{ display:true, position:'bottom', labels:{ boxWidth:10, boxHeight:10, font:{family:'Geist', size:11}, color:'#4a4d57' } },
              tooltip:{ callbacks:{ label:(c)=> c.dataset.label + ': ' + c.parsed.y.toLocaleString('pt-BR') }}
            },
            scales:{
              yCCS:{ type:'linear', position:'left', ticks:{ font:{family:'JetBrains Mono',size:10}, color:'#b3700f' }, grid:{color:'rgba(26,29,36,.06)'}, border:{display:false} },
              yCBT:{ type:'linear', position:'right', ticks:{ font:{family:'JetBrains Mono',size:10}, color:'#316b8d' }, grid:{display:false}, border:{display:false} },
              x:{ ticks:{ font:{family:'JetBrains Mono',size:11}, color:'#7a7e8a' }, grid:{display:false}, border:{display:false} },
            }
          }
        });
      }
    },
    irRecomendacaoDaRegiao(){
      if(!this.regiaoSel) return;
      const id = this.regiaoSel.id;
      this.fecharRegiao();
      this.abrirRec(id);
    },

    // ---- nova região: IA importa planilha ----
    abrirNovaRegiao(){
      this.novaStep = 0;
      this.novaStepIdx = 0;
      this.novaLog = [];
      this.novaResultado = null;
      this.novaArquivo = null;
      this.novaRegiaoOpen = true;
    },
    fecharNovaRegiao(){
      this.novaRegiaoOpen = false;
    },
    simularImportacao(nomeArquivo){
      this.novaArquivo = nomeArquivo || this.importacaoDemo.arquivo;
      this.novaStep = 1;
      this.novaStepIdx = 0;
      this.novaLog = [];
      this.processarProximoStep();
    },
    processarProximoStep(){
      const steps = this.importacaoDemo.steps;
      if(this.novaStepIdx >= steps.length){
        // pipeline terminou: registra a região e abre direto o modal de detalhe completo
        setTimeout(()=> this.finalizarPipelineEAbrirDetalhe(), 500);
        return;
      }
      const s = steps[this.novaStepIdx];
      setTimeout(()=>{
        this.novaLog.push(s.t);
        this.novaStepIdx++;
        const body = document.getElementById('novaLogBody');
        if(body) body.scrollTop = body.scrollHeight;
        this.processarProximoStep();
      }, s.delay);
    },
    finalizarPipelineEAbrirDetalhe(){
      const payload = NOVA_REGIAO_PAYLOAD;
      const jaExiste = this.bacias.some(b => b.id === payload.bacia.id);
      if(!jaExiste){
        this.bacias.push(JSON.parse(JSON.stringify(payload.bacia)));
        this.baciasDetalhe[payload.bacia.id] = JSON.parse(JSON.stringify(payload.detalhe));
      }
      const novaBacia = this.bacias.find(b => b.id === payload.bacia.id);
      this.fecharNovaRegiao();
      this.toast('Região "'+payload.bacia.nome+' · '+payload.bacia.uf+'" cadastrada. Entra em modo observação até completar 6 meses de série.');
      // pequena pausa pro fade-out do modal de cadastro antes de abrir o detalhe
      setTimeout(()=> this.abrirRegiao(novaBacia), 220);
    },
    confirmarNovaRegiao(){
      // mantido para compatibilidade caso ainda exista o botão "Entendido" no preview
      this.finalizarPipelineEAbrirDetalhe();
    },

    // ---- chat methods ----
    toggleChat(){ this.chatOpen = !this.chatOpen; },
    askChat(idx){
      const item = this.chatSuggestions[idx];
      this.chatHistory.push({ role:'user', text:item.q });
      this.chatTyping = true;
      this.$nextTick(()=> this.scrollChatBottom());
      setTimeout(()=> {
        this.chatTyping = false;
        this.chatHistory.push({ role:'assistant', text:item.a });
        this.$nextTick(()=> this.scrollChatBottom());
      }, 700);
    },
    resetChat(){ this.chatHistory = []; },
    scrollChatBottom(){
      const el = this.$refs.chatBody;
      if(el) el.scrollTop = el.scrollHeight;
    },

    // ====================== CHARTS ======================
    charts:{},
    destroy(k){ if(this.charts[k]){ this.charts[k].destroy(); delete this.charts[k]; } },
    renderCharts(){
      if(this.tela==='recomendacao'){
        let ov=null;
        if(this.selBacia==='zona-mata' && this.recBaseEnso!=='Neutro'){
          const d=recalcular({cambio:5.40,milho:0,enso:this.recBaseEnso,mercosulProb:30}).delta;
          const b=this.bacia('zona-mata');
          ov={ central:[b.forecast.q1+d,b.forecast.q2+d,b.forecast.q3+d].map(v=>+v.toFixed(3)), banda:b.banda };
        }
        this.buildBandChart('recBand', this.selBacia, ov);
      }
      if(this.tela==='whatif')    { this.buildWfChart(); }
      if(this.tela==='auditoria') { this.buildHorizonChart(); }
      if(this.tela==='onepager')  { this.buildBandChart('opBand','zona-mata'); }
    },
    bandData(baciaId, override){
      const b=this.bacia(baciaId);
      let f=[b.forecast.q1,b.forecast.q2,b.forecast.q3]; let banda=b.banda;
      if(override){ f=override.central; banda=override.banda; }
      const upper=f.map(v=>+(v+banda).toFixed(3));
      const lower=f.map(v=>+(v-banda).toFixed(3));
      return { f, upper, lower };
    },
    buildBandChart(canvasId, baciaId, override){
      const el=document.getElementById(canvasId); if(!el) return;
      this.destroy(canvasId);
      const {f,upper,lower}=this.bandData(baciaId, override);
      this.charts[canvasId]=new Chart(el,{
        type:'line',
        data:{ labels:['Em 3 meses','Em 6 meses','Em 9 meses'], datasets:[
          { data:lower, borderColor:'transparent', pointRadius:0, fill:false },
          { data:upper, borderColor:'transparent', pointRadius:0, backgroundColor:'rgba(34,105,74,.14)', fill:'-1' },
          { data:f, borderColor:'#17503a', borderWidth:2.5, pointBackgroundColor:'#17503a', pointRadius:4, pointHoverRadius:6, tension:.35, fill:false },
        ]},
        options:this.bandOpts()
      });
    },
    get wfBaciaObj(){
      return this.bacia(this.wfBacia) || this.bacia('zona-mata');
    },
    trocarBaciaSimulador(id){
      if(this.wfBacia === id) return;
      const b = this.bacia(id);
      if(!b || b.novaRegiao) return;  // região em observação não tem previsão
      this.wfBacia = id;
      this.$nextTick(()=> this.buildWfChart());
    },
    buildWfChart(){
      const el=document.getElementById('wfBand'); if(!el) return;
      this.destroy('wfBand');
      const base=this.wfBaciaObj;
      const d=this.wfRes.delta;
      const central=[base.forecast.q1+d, base.forecast.q2+d, base.forecast.q3+d].map(v=>+v.toFixed(3));
      const banda=this.wfRes.extremo?0.09:0.03;
      const upper=central.map(v=>+(v+banda).toFixed(3));
      const lower=central.map(v=>+(v-banda).toFixed(3));
      this.charts.wfBand=new Chart(el,{
        type:'line',
        data:{ labels:['Em 3 meses','Em 6 meses','Em 9 meses'], datasets:[
          { data:lower, borderColor:'transparent', pointRadius:0 },
          { data:upper, borderColor:'transparent', pointRadius:0, backgroundColor:this.wfRes.extremo?'rgba(163,32,60,.12)':'rgba(34,105,74,.14)', fill:'-1' },
          { data:central, borderColor:this.wfRes.extremo?'#a3203c':'#17503a', borderWidth:2.5, pointBackgroundColor:this.wfRes.extremo?'#a3203c':'#17503a', pointRadius:4, tension:.35 },
        ]},
        options:this.bandOpts()
      });
    },
    updWfChart(){
      const c=this.charts.wfBand; if(!c){ this.buildWfChart(); return; }
      const base=this.wfBaciaObj; const d=this.wfRes.delta;
      const central=[base.forecast.q1+d, base.forecast.q2+d, base.forecast.q3+d].map(v=>+v.toFixed(3));
      const banda=this.wfRes.extremo?0.09:0.03;
      c.data.datasets[0].data=central.map(v=>+(v-banda).toFixed(3));
      c.data.datasets[1].data=central.map(v=>+(v+banda).toFixed(3));
      c.data.datasets[1].backgroundColor=this.wfRes.extremo?'rgba(163,32,60,.12)':'rgba(34,105,74,.14)';
      c.data.datasets[2].data=central;
      c.data.datasets[2].borderColor=this.wfRes.extremo?'#a3203c':'#17503a';
      c.data.datasets[2].pointBackgroundColor=this.wfRes.extremo?'#a3203c':'#17503a';
      c.update();
    },
    bandOpts(){
      return {
        responsive:true, maintainAspectRatio:false, animation:{duration:500},
        plugins:{
          legend:{display:false},
          tooltip:{ callbacks:{ label:(c)=>'R$ '+c.parsed.y.toFixed(2).replace('.',',')+'/litro' } }
        },
        scales:{
          y:{ ticks:{ font:{family:'JetBrains Mono',size:11}, color:'#7a7e8a', callback:(v)=>(v>0?'+':'')+v.toFixed(2).replace('.',',') }, grid:{color:'rgba(26,29,36,.06)'}, border:{display:false} },
          x:{ ticks:{ font:{family:'JetBrains Mono',size:11}, color:'#7a7e8a' }, grid:{display:false}, border:{display:false} },
        }
      };
    },
    buildHorizonChart(){
      const el=document.getElementById('horizonChart');
      // guarda: canvas precisa existir E ter contexto válido (durante toggles rápidos, getContext pode ser null)
      if(!el || typeof el.getContext !== 'function' || !el.getContext('2d')) return;
      this.destroy('horizonChart');
      const h=this.audAcertoHorizonte;
      const stuck = Chart.getChart(el); if(stuck) stuck.destroy();
      this.charts.horizonChart=new Chart(el,{
        type:'bar',
        data:{ labels:['Em 3 meses','Em 6 meses','Em 9 meses'], datasets:[
          {
            data:[h['1T']??0, h['2T']??0, h['3T']??0],
            backgroundColor:['#22694a','#2f8159','#b3700f'],
            borderRadius:8, barThickness:54,
          }
        ]},
        options:{
          responsive:true, maintainAspectRatio:false, animation:{duration:500},
          plugins:{ legend:{display:false}, tooltip:{ callbacks:{ label:(c)=> (c.parsed.y===0 ? 'sem dados no filtro' : c.parsed.y+'% de acerto') } } },
          scales:{
            y:{ min:0, max:100, ticks:{ font:{family:'JetBrains Mono',size:11}, color:'#7a7e8a', callback:(v)=>v+'%' }, grid:{color:'rgba(26,29,36,.06)'}, border:{display:false} },
            x:{ ticks:{ font:{family:'Geist',size:12}, color:'#4a4d57' }, grid:{display:false}, border:{display:false} }
          }
        }
      });
    },
    _audRebuildTimer:null,
    rebuildAudCharts(){
      if(this.tela!=='auditoria') return;
      // debounce: agrupa múltiplas chamadas em uma única reconstrução, evita race no destroy/create do Chart.js
      if(this._audRebuildTimer) clearTimeout(this._audRebuildTimer);
      this._audRebuildTimer = setTimeout(()=>{
        this._audRebuildTimer = null;
        this.buildHorizonChart();
      }, 60);
    },
  };
}
