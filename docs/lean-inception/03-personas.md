# Personas — Vereda

> Etapa 3 do Lean Inception. Formato canvas. Comportamento, dores e citações tiradas das transcrições em `docs/discovery/`. Duas personas: usuário primário (opera a ferramenta) e sponsor/usuário secundário (aprova, usa pra defesa no Comitê).

---

## Persona 1 — Anderson Toledo (Usuário Primário)

### Identidade
- **48 anos · Gerente de Captação de Leite Cru**
- Laticínios Vale do Cedro (4 fábricas: MG, GO, PR)
- Base em Juiz de Fora-MG · 22 anos de setor · responde à Patrícia
- Formação: técnico agropecuário (Senar) → cooperativa Itambé → gerência há 9 anos

### Contexto
Decide diariamente o mix de captação por bacia, gere relação com ~40 produtores grandes e 3 cooperativas, opera ~1,8 milhão L/dia. Vive numa rotina de WhatsApp com produtor, conversa com presidente de cooperativa, e Excel pra acompanhar volume e qualidade. Tem o conhecimento de chão que ninguém mais tem na empresa.

### Comportamento
- Decide por relação + ciclo (águas/seca), não por preço-spot.
- Opera em ciclo trimestral pra contratação estratégica, mensal pro CEPEA, diário pra qualidade e logística.
- Usa WhatsApp como CRM informal: 30 conversas ativas com produtor por dia.
- Consome boletim INMET, agrônomo Embrapa Gado de Leite, CBOT pro milho — autodidata, mas só do que entrega valor concreto.
- Quando IA/consultoria erra, paga a conta pessoalmente em frente ao diretor.

### Necessidades / Motivações
- **Blindar a entressafra** sem queimar caixa com bonificação adiantada que não vinga.
- **Defender suas decisões** com argumento factual quando a Patrícia cobra no Comitê de S&OP.
- **Preservar relação de longo prazo** com produtor e cooperativa — esse é o ativo dele.
- **Antecipar movimentos** com tempo de jurídico fechar contrato (60+ dias).
- Ferramenta que **reduz trabalho**, não adiciona — não vai abrir mais um sistema toda manhã.

### Frustrações / Dores
- Sinal de cenário chega tarde demais — quando vê, a janela de contratação já fechou.
- Promessa de IA carrega cicatriz de 2021 (consultoria errou entressafra, ele queimou caixa).
- Conflito interno com industrial quando bonificação extra aperta CMV.
- Produtor não acredita em promessa sem boleto/contrato escrito — jurídico é lento.
- BI/dashboard que mostra o passado, mas não diz o que fazer.

### Citação representativa
> *"Rapaz, leite não é soja. Vaca produz hoje, eu coleto hoje, ou estraga. Esse 'esperar' não existe no meu mundo. O ativo mais valioso que eu tenho não é preço travado — é relação travada."*

### O que faz Anderson confiar numa ferramenta
- Quem assina embaixo da previsão e qual a margem de erro histórica dela.
- Recomendação que ele pode aceitar, ajustar OU **recusar com justificativa** — sem o sistema brigar com ele.
- Piloto em UMA bacia, 3 meses, sem espalhar antes de provar.
- Interface que cabe no fluxo dele (mobile? notificação no WhatsApp? não outro dashboard).

---

## Persona 2 — Patrícia Linhares (Sponsor Executivo · Usuário Secundário)

### Identidade
- **44 anos · Diretora de Suprimentos**
- Laticínios Vale do Cedro · reporta ao CEO
- Base em São Paulo · 17 anos de carreira (Nestlé → BRF → Vale do Cedro há 6 anos)
- Formação: Engenharia de Produção UFMG · MBA Insper

### Contexto
Preside o Comitê de S&OP mensal. Responde no Comitê Executivo por spread captado vs. CEPEA, variância de COGS, % cobertura de demanda e qualidade média. Defende investimentos pro CFO. Carrega a cicatriz do BI de captação de 2019 que morreu — qualquer projeto novo de IA é olhado com lupa por isso.

### Comportamento
- Decide em ciclos de 30 min, agenda apertada. Pede objetividade no primeiro minuto.
- Fala COGS / EBITDA / spread / payback / governance / owner.
- Consome CEPEA, RaboResearch, MilkPoint, Scot, Embrapa Gado de Leite.
- Stack: SAP S/4HANA + Power BI + planilha Excel onde decisão grande efetivamente mora.
- Não compra ideia bonita sem business case. Não se impressiona com IA pela IA.

### Necessidades / Motivações
- **Reduzir variância mensal de COGS** — em 2024 foi pega de calça curta na entressafra.
- **Munição pro CFO**: defesa estruturada de cada movimento de captação grande.
- **Governance auditável** — quem é dono do dado, taxa de acerto, o que fazer quando banda de confiança é larga.
- **Adoção real do time de campo** — não outro "BI de 2019" que vira piada interna.
- **Integração com SAP** e ciclo de S&OP — não mais um sistema isolado.

### Frustrações / Dores
- Leitura atual de mercado é tardia, planilha + feeling — erra ponto de virada com frequência.
- Sinal isolado de preço não vira ação — precisa cruzar com qualidade e logística.
- Iniciativa de IA sem plano de adoção morre na implantação.
- CFO bloqueia investimento sem business case com payback ≤ 12–18 meses.
- Caixa-preta não passa no Comitê — precisa explicar drivers.

### Citação representativa
> *"Probabilidade de eu acionar três movimentos de contratação só baseado numa recomendação de modelo, hoje? Baixa — talvez 20%. Não porque eu seja contra IA: é porque o custo de errar uma antecipação de entressafra é alto demais e a defesa pro CFO precisa ser blindada."*

### O que faz Patrícia comprar a ferramenta
- Business case com hipótese de impacto em R$ e payback declarado.
- Piloto contido, métrica de spread R$/litro definida ANTES de começar.
- Anderson como **co-dono** do piloto, não vítima dele.
- Drivers visíveis e taxa de acerto histórica expostos na UI — nada de caixa-preta.
- Integração planejada com SAP e ciclo S&OP desde o dia 1.

---

## Sobre as duas personas como par

A tensão entre os dois é o motor do produto:

| Eixo | Anderson | Patrícia |
|---|---|---|
| Foco | Operação, relação, dia-a-dia | Margem, governance, defesa institucional |
| Trauma | Consultoria errou cenário (2021) — *quem assina embaixo?* | BI morreu na adoção (2019) — *quem vai usar?* |
| Critério de confiança | Margem de erro histórica do sinal | Plano de adoção e ROI defensável |
| Horizonte | Trimestre + ciclo safra | Trimestre rolling 12 meses |
| O que NÃO aceita | Sistema que dá mais trabalho | Caixa-preta sem owner |

**Implicação pro produto:** a UI precisa servir aos dois com **mesma fonte de verdade** — Anderson olhando recomendação acionável com banda de confiança, Patrícia olhando painel de auditoria e histórico de acerto. Sem isso, um dos dois bloqueia.

Personas secundárias (não detalhadas agora, podem entrar se MVP crescer): analista de S&OP, CFO, jurídico (pra contrato escrito que Anderson cita).
