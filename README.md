# Vereda — trilha de decisão

**Desafio:** Designer de Soluções Digitais (AI-First) · setor de laticínios · captação de leite cru.

Este README não é o entregável. **O entregável é um link** — o protótipo em `prototipo/`, ainda em refatoração. Este documento é a **trilha de raciocínio** que sustenta esse link: como, partindo de dois arquivos, cheguei a uma solução com nome, escopo, motor e princípios. Foi a base de tudo e continua sendo. Se você só tem cinco minutos, leia as seções [2](#2-leitura-crítica-da-vaga), [3](#3-a-virada-da-perecibilidade) e [9](#9-a-auto-auditoria-do-método).

> **Por que existe um README, se o briefing pede só um link?** Porque a vaga avalia *concepção de solução*, não código. O link mostra o **o quê**. Esta trilha mostra o **porquê** — discovery, método, decisões, e onde meu próprio processo falhou. É munição de defesa, não marketing.

---

## 0. O ponto de partida

Recebi **dois arquivos**:

- [`docs/desafio.md`](docs/desafio.md) — o enunciado: indústria de laticínios sofre com a volatilidade do preço do leite cru; conceber uma IA que correlacione preditivamente 4 pilares (Político, Econômico, Climático, Agropecuário) para apoiar o comprador. Entregável: protótipo funcional em HTML/CSS/JS, com a "inteligência" simulada no front-end.
- [`docs/vaga.md`](docs/vaga.md) — a descrição da vaga: **Designer de Soluções Digitais (AI-First)**.

Tudo o que segue — personas, discovery, Lean Inception, arquitetura, protótipo — foi construído a partir desses dois documentos. Nenhum stakeholder real, nenhum dataset, nenhum brief adicional.

A síntese em uma frase: **o briefing pede um previsor de preço; o problema real é estratégia de captação sob incerteza — porque leite cru é perecível e não se "espera o preço cair".** O resto deste documento é como cheguei lá e o que fiz com isso.

---

## 1. Como ler este repositório

```
desafio_mirante/
├── README.md                       ← VOCÊ ESTÁ AQUI (a trilha)
├── ROADMAP.md                      Documento de continuidade: estado, fases, próximos passos
├── CLAUDE.md                       Orientação operacional para sessões de IA neste repo
├── docs/
│   ├── desafio.md                  Enunciado original
│   ├── vaga.md                     Descrição da vaga
│   ├── 00-estudo-preliminar.md     Estudo de domínio: a virada da perecibilidade (§2),
│   │                               fontes reais por pilar (§4), arquitetura de viabilidade (§5)
│   ├── discovery/                  3 rodadas de entrevista com personas adversariais
│   │   ├── 00-sintese.md           Premissas validadas/refutadas + 6 insights novos
│   │   ├── 01-entrevista-anderson.md
│   │   ├── 02-entrevista-patricia.md
│   │   ├── 03-validacao-docs.md    2ª rodada: personas criticando Visão + É/Não É
│   │   └── 04-validacao-features.md 3ª rodada: estresse das features candidatas
│   ├── lean-inception/             01 Visão · 02 É/Não É · 03 Personas · 04 Jornada ·
│   │                               05 Brainstorm · 06 Sequenciador · 07 Canvas MVP
│   └── brief-prototipo.md          Brief autocontido que originou a 1ª versão do protótipo
├── prototipo/                      O ENTREGÁVEL (HTML/Tailwind/Alpine/Chart.js) — em refatoração
└── .claude/agents/                 As duas personas-subagente usadas no discovery
    ├── anderson-comprador.md
    └── patricia-diretora.md
```

A ordem de leitura recomendada para entender a trilha: **este README → `docs/00-estudo-preliminar.md` → `docs/discovery/00-sintese.md` → `docs/lean-inception/07-canvas-mvp.md`**. O `ROADMAP.md` é o diário operacional do projeto.

---

## 2. Leitura crítica da vaga

A primeira decisão foi de enquadramento, e ela orienta todas as outras.

**A vaga não é de Data Science nem de ML.** É **Designer de Soluções Digitais (AI-First)**. O que ela avalia, lendo a descrição: liderar discovery, traduzir dor de negócio em solução, desenhar jornada e proposta de valor, definir KPIs/OKRs, conduzir validações, aplicar prompt engineering, garantir ética/transparência/mitigação de viés em IA, e fazer a ponte entre negócio e tecnologia. Os requisitos técnicos — *"noções de HTML e JavaScript"*, *"modelagem de dados"* — aparecem como instrumento, não como fim.

**Implicação que decide o entregável:** o protótipo precisa **comunicar o valor** de uma solução tangível, não rodar inferência real. Construir um SARIMAX ou um XGBoost de verdade seria ler o desafio como vaga técnica — e errar a vaga. O briefing concorda: a inteligência é **simulada no front-end**. Então a régua não é "o modelo acerta?", é "a solução está bem concebida, é defensável, e a IA por trás é *construível*?".

Daí o segundo entregável que me impus, além do protótipo: um **documento de arquitetura de viabilidade** mostrando que cada tela tem um motor real por trás. É o que separa "designer que promete o que soa bonito" de "arquiteto de solução".

> **O teste de autoridade técnica.** "Pego o avanço das chuvas via satélite" é promessa de designer. "O dado de chuva vem da NASA POWER ou do CHIRPS, é gratuito, grade ~5 km, atualização diária" é arquitetura. Mesma frase, autoridade oposta. Esse padrão — **fonte real, plausibilidade técnica, motor construível** — virou critério de toda decisão.

---

## 3. A virada da perecibilidade

Este é o insight central. Reescreveu o problema.

O briefing embute uma solução disfarçada de problema:

- **Dor real:** a volatilidade do preço do leite cru comprime a margem.
- **Causa assumida:** "os compradores ignoram fatores externos".
- **Solução já embutida:** "correlacionar preditivamente os 4 pilares" para apoiar a decisão de **compra**.

O estudo de domínio ([`docs/00-estudo-preliminar.md §2`](docs/00-estudo-preliminar.md)) quebra essa formulação. Commodity estocável — soja, milho — se compra e se guarda: "comprar agora vs. esperar o preço cair" faz sentido. **Leite cru não.** A vaca produz todo dia, o leite existe quer o laticínio compre ou não, precisa ser coletado e processado em 24–48 horas, e não captar queima a relação com o produtor. Um comprador de leite cru **não pode "esperar o preço cair"**.

Logo, a pergunta "compro hoje ou amanhã?" não cabe neste produto. O que o comprador efetivamente controla é **estratégia de captação ao longo do trimestre**:

- **Alocação de volume** entre bacias/cooperativas (preço, qualidade e logística variam entre MG, GO, SP, RS).
- **Estrutura de contrato** (spot vs. fórmula indexada ao CEPEA).
- **Bonificação por produtor estratégico** antes da entressafra, para fidelizar volume.
- **Substituição parcial de matéria-prima** (leite em pó Mercosul em pico de seca, liberando leite cru para SKU de maior margem).

**O valor da IA não é "botão de comprar hoje". É posicionar a estratégia de captação sob incerteza para os próximos trimestres, em torno do ciclo safra/entressafra.** Essa é a espinha do produto. Todo o resto se filtra por ela: o Vereda **não** é previsor de buy/wait, **não** é hedge financeiro, **não** é CRM de produtor.

---

## 4. Método AI-First: personas adversariais como sparring de discovery

A vaga pede discovery e validação com stakeholders. **Não tenho stakeholders reais.** A resposta a essa restrição é, ela mesma, a demonstração de prompt engineering que a vaga cobra.

Construí **duas personas-subagente adversariais**, ancoradas em fatos reais do setor, instruídas a **resistir por padrão**:

- [`@anderson-comprador`](.claude/agents/anderson-comprador.md) — **Anderson Toledo**, 48, Gerente de Captação na fictícia Laticínios Vale do Cedro. Perspectiva de chão: ciclo safra/entressafra, linha de captação por rota, relação de 10–20 anos com produtor, cicatriz da "consultoria de 2021 que errou o cenário". Português direto do interior de Minas, odeia anglicismo corporativo.
- [`@patricia-diretora`](.claude/agents/patricia-diretora.md) — **Patrícia Linhares**, 44, Diretora de Suprimentos. Perspectiva executiva: spread vs. CEPEA, variância de COGS, payback, governance, integração com SAP, cicatriz do "BI de captação de 2019 que morreu na praia".

Ambas foram prompted para **não comprar ideia sem prova** — quanto mais vaga a pergunta, mais ácida a resposta; concedem só com piloto pequeno e escopo contido (e a Patrícia exige métrica de sucesso definida *antes* de começar). Isso é **prompt engineering aplicado a discovery**: usar LLMs como sparring para estressar premissas, não para confirmá-las com viés.

**Teste de calibração.** Na primeira pergunta de cada entrevista, plantei a isca da premissa errada — "esperar o preço cair pra comprar". Ambas corrigiram na hora. Anderson, seco: *"Rapaz, leite não é soja. Vaca produz hoje, eu coleto hoje, ou estraga."* Patrícia, polida e firme: *"a gente não 'decide o timing' como quem opera no mercado financeiro."* Personas que resistem à isca → respostas seguintes têm **valor de sinal, não de sycophancy**. (Os limites desse teste viram tema na [seção 9](#9-a-auto-auditoria-do-método).)

**Engenharia das personas, não decoração.** Elas não saíram do acaso. Cada agente carrega um bloco de conhecimento setorial que sabe *de cor* (ciclo safra/entressafra, fórmula CEPEA mês a mês, logística por rota, custo de concentrado milho/farelo, os traumas específicos) e uma regra de ouro contra inventar número com precisão falsa. O resultado não é um validador de conveniência: ele **opina, propõe e discorda** quando a ideia é fraca, e concorda quando faz sentido. Os dois estressaram, em sequência, o enquadramento do problema, os artefatos do Lean Inception (Visão, É/Não É), a jornada do usuário e as ~50 features candidatas. Foi a peça de prompt engineering mais densa do projeto, e é o que dá lastro às decisões: **cada corte de escopo tem uma fala registrada por trás**, rastreável em `docs/discovery/`.

Esta é a fala de defesa de 30 segundos sobre método: *"Usei LLMs como sparring de discovery — duas personas adversariais ancoradas no setor, validei premissas em três rodadas, registrei tudo."*

---

## 5. As três rodadas de discovery — o que validou, o que morreu

Discovery de verdade mata hipótese. Estas mataram.

### Rodada 1 — exploratória ([`discovery/00-sintese.md`](docs/discovery/00-sintese.md))

Veredito sobre as premissas que eu havia declarado no estudo preliminar:

| Premissa declarada | Veredito |
|---|---|
| Comprador realoca volume entre regiões livremente | **Refutada no ciclo curto.** Lead time real de 60–90 dias a 6–12 meses; ~70% do mix já amarrado em cooperativa por relacionamento. A alavanca real está nos 30–35% de produtor direto + spot. |
| Existem contratos indexáveis (spot/fixo/fórmula CEPEA) | **Verdadeira só em parte.** ~60–90% é fórmula-CEPEA mês a mês; **forward de preço praticamente não existe** no Brasil. |
| Precificação mensal, pagamento no mês seguinte | **Confirmada.** |

E **seis insights que não estavam no estudo** reescreveram a Visão. Os principais:

1. **Forward de VOLUME, não de preço.** Anderson: *"o ativo mais valioso que eu tenho não é preço travado, é relação travada."* Trocou o sonho do hedge pela alavanca concreta de fidelização de volume com bonificação.
2. **Sinal isolado de preço não aciona.** Patrícia só move algo se o sinal vier com **qualidade esperada por bacia (CCS/CBT) + viabilidade logística**, e com pelo menos um trimestre de antecedência. Forecast só de preço a perde no primeiro dia.
3. **Substituição de matéria-prima como alavanca de entressafra** — importar pó da Argentina via Mercosul libera leite cru para produto de maior margem. Cruza Político + Econômico.
4. **Dois traumas diferentes do mesmo tipo de evento.** Anderson quer saber **quem assina embaixo da previsão** e a margem de erro histórica (cicatriz técnica). Patrícia quer **plano de adoção** com Anderson como **co-dono, não vítima** (cicatriz organizacional). A ferramenta tem que endereçar os dois.
5. **Probabilidade declarada de acionamento.** Patrícia: hoje, ~20%. Sobe para 60–70% **com piloto numa bacia, métrica de spread definida antes, drivers transparentes**. Rollout sem piloto é morto.
6. **Alavanca de margem fora de escopo** (pass-through CEPEA em contrato B2B de saída) — real, mas é problema do comercial, não do comprador. Registrada e descartada do MVP.

### Rodada 2 — validação dos artefatos ([`discovery/03-validacao-docs.md`](docs/discovery/03-validacao-docs.md))

As personas criticaram a Visão e o É/Não É. Aprovaram a espinha, mas **Anderson recusou o papel de "recomendador de número"** e devolveu o sistema ao papel de **leitor de sinal**: o Vereda *não* sugere valor de bonificação — sinaliza risco de churn e pressão competitiva, e **Anderson desenha a tabela**. Daqui também saíram: dados internos obrigatórios na v1 (qualidade laboratorial, rota de captação, contratos, capacidade fabril), o LLM político em quarentena, e o "co-dono" virando *accountability* operacional explícita (assinatura nominal).

### Rodada 3 — estresse das features ([`discovery/04-validacao-features.md`](docs/discovery/04-validacao-features.md))

Estressei as features candidatas uma a uma. Saíram ajustes de formato (score de churn vira **categoria + motivo + histórico**, não 0–100; "pauta de negociação" vira **"resumo pré-conversa"** sem verbo de ação) e um **bloqueador**: Patrícia condicionou a pauta de Comitê à entrega de uma **página de governance completa** (owner, métrica, log auditável, escalonamento). Virou conteúdo obrigatório da tela "Por que esta solução".

---

## 6. Lean Inception — do problema ao escopo

Com o problema reenquadrado e validado, apliquei o Lean Inception (Caroli) para fechar escopo. Os artefatos vivem em [`docs/lean-inception/`](docs/lean-inception/) e servem de munição de defesa — **não são entregues**. O que cada etapa produziu:

| Etapa | Artefato | O que cravou |
|---|---|---|
| Visão do Produto | [`01-visao-produto.md`](docs/lean-inception/01-visao-produto.md) | Nome **Vereda**; "plataforma de IA explicável para estratégia de captação"; as alavancas reais que sobreviveram à entrevista. |
| É / Não É · Faz / Não Faz | [`02-e-nao-e-faz-nao-faz.md`](docs/lean-inception/02-e-nao-e-faz-nao-faz.md) | Escopo. Cada linha do "Não é / Não faz" tem origem rastreável na discovery — é o que **morreu** quando as personas testaram a ideia. |
| Personas (canvas) | [`03-personas.md`](docs/lean-inception/03-personas.md) | Anderson = usuário primário; Patrícia = sponsor + secundária. |
| Jornada do usuário | [`04-jornada-usuario.md`](docs/lean-inception/04-jornada-usuario.md) | Anderson em 8 fases ancoradas no calendário Abr→Jun (pré-entressafra); Patrícia em 4 momentos (pré-S&OP, Comitê S&OP, defesa pro CFO, gatilho de escalonamento). |
| Brainstorm de features | [`05-brainstorm-features.md`](docs/lean-inception/05-brainstorm-features.md) | Divergência (~50 candidatas) → convergência, filtradas pelo princípio de corte. |
| Sequenciador de MVP | [`06-sequenciador-mvp.md`](docs/lean-inception/06-sequenciador-mvp.md) | Níveis CORE/DEMO/ARQ adaptados ao contexto real (link único, IA mockada, avaliador com 5–10 min). |
| Canvas MVP | [`07-canvas-mvp.md`](docs/lean-inception/07-canvas-mvp.md) | **Contrato de escopo final**: telas, stack, naming, hipótese de impacto, wireframes ASCII, definition of done. |

**O princípio de corte** (de `02`): uma feature só entra se passar simultaneamente em **(a)** endereça uma alavanca real do comprador (não buy/wait), **(b)** é defensável pela Patrícia no Comitê, e **(c)** não exige construir o que o SAP/Power BI já faz.

---

## 7. Princípios não-negociáveis

Estes filtram qualquer decisão futura. Revisar um significa abrir nova rodada de discovery.

1. **A virada da perecibilidade é a espinha.** Apoio à estratégia trimestral de captação — não previsor de buy/wait, não hedge financeiro.
2. **IA simulada no front, motor real e construível.** Regra do briefing: a inteligência é mockada. Mas toda tela mapeia para um motor que existe de verdade — modelo, técnica de explicação e fonte de dado pública conferidos *antes* de a tela existir. Prometer um sistema que não dá para construir é vender sonho, e some na primeira pergunta técnica do Comitê.
3. **Fontes de dado reais**, mesmo com mock no protótipo: CEPEA/ESALQ, BCB-SGS, INMET, NASA POWER, CHIRPS, CONAB, MAPA, Global Dairy Trade.
4. **Honestidade de incerteza é feature visível, não disclaimer.** Banda de confiança em todo forecast, drivers por pilar, taxa de acerto histórica exposta na UI, alerta explícito quando o sinal é fraco.
5. **Anderson é co-dono, não vítima.** A UI permite aceitar, ajustar pressuposto ou recusar com justificativa — e a discordância re-calibra o modelo no ciclo seguinte. Sem isso, Patrícia cita o "BI de 2019 que morreu" e mata o projeto.
6. **A entrega final é um link.** O Lean Inception não é entregue — vira resposta de defesa de 30 segundos se perguntarem "como você chegou aqui?".

---

## 8. Arquitetura de viabilidade — cada tela tem um motor real

A promessa do segundo entregável: o protótipo simula no front, mas **nada na tela é mágica**. Cada elemento mapeia para um motor de produção construível, com técnica e fonte de dado que existem. Esta é a seção onde a vaga AI-First é levada a sério — e onde o README tem espaço para a profundidade que a tela do avaliador não comporta.

### 8.1 Mapa tela → motor (base: [`docs/00-estudo-preliminar.md §5`](docs/00-estudo-preliminar.md), ampliado com o copiloto e o risco de produtor)

| Elemento na tela (simulado no front) | Motor real por trás (produção) |
|---|---|
| Recomendação de estratégia ("antecipar cláusula com a cooperativa") | Forecast + regra de decisão sobre a banda de confiança |
| Banda de confiança no gráfico | Intervalo de predição do modelo |
| Decomposição por pilar (+/–) | **SHAP** agregado por pilar, sobre a camada de gradient boosting |
| Simulador what-if (sliders) | Re-execução do modelo com input perturbado |
| Copiloto / "por que isso?" | Camada GenAI (LLM) sobre os outputs do modelo |
| Pilar político | NLP/LLM de extração de eventos sobre fontes oficiais |
| Risco de perda de produtor | Classificador competitivo (sinal de concorrência + tendência de qualidade e entrega) |

### 8.2 As fontes de dado

**Públicas, por pilar** (gratuitas, verificáveis, com cadência conhecida):

- **Econômico** — câmbio (BCB/PTAX), Selic/IPCA (BCB-SGS), **Indicador do Leite CEPEA/ESALQ**, milho e farelo (CEPEA + futuros B3), leite em pó internacional (**Global Dairy Trade**, leilões quinzenais).
- **Climático** — INMET (estações), precipitação por satélite (**NASA POWER / CHIRPS**, grade ~5 km, diária, gratuita), índice ENSO El Niño/La Niña (NOAA).
- **Agropecuário** — CONAB (oferta/produção), IBGE PPM (rebanho), custo de produção (Embrapa/CEPEA).
- **Político** — o mais difícil de quantificar: extração por LLM sobre Diário Oficial, MAPA e notícias (ICMS, Mercosul, Mais Leite Saudável).

**Internas (obrigatórias na v1, exigência da discovery — "sem isso é meio sistema", diz o Anderson):**

- **Qualidade laboratorial por produtor, por coleta** — CCS, CBT, gordura, proteína. Diferencia bacia boa de ruim e alimenta o desenho de bonificação.
- **Linha/rota de captação** — ociosidade por rota, R$/litro de frete, capacidade. Captação é logística antes de ser preço.
- **Contratos vigentes** — cláusulas, prazo, banda, volume. Aqui mora um ponto-chave: o sistema enxerga **os dois lados, cooperativa e produtor direto** (a alavanca real está nos ~30–35% de produtor direto + spot, não nos ~70% já amarrados em cooperativa).
- **Capacidade fabril por unidade** — restrição na recomendação de mix (não adianta recomendar +8% de captação se a planta está no limite de UHT).

### 8.3 O modelo: forecast explicável

Série temporal com variáveis exógenas defasadas: **SARIMAX** para a tendência-base sazonal (o ciclo safra/entressafra) e **gradient boosting (LightGBM)** para a camada não-linear (interações câmbio × milho × ENSO, sazonalidade de qualidade na seca). A explicabilidade vem de **SHAP sobre a camada de boosting** — onde a decomposição por feature é matematicamente limpa; a "decomposição por pilar" da tela é, literalmente, SHAP values agregados por pilar. A banda da tela é o **intervalo de predição** do modelo; o what-if é **re-execução** com input perturbado. Tela honesta, motor honesto.

### 8.4 A camada GenAI (o copiloto) e o pilar político

A IA generativa **não inventa o número** — ela opera *sobre* os outputs do modelo (forecast, banda, SHAP, drivers) para explicar em linguagem natural, narrar os fatores, rascunhar o resumo pré-conversa e conversar. Na tela, é rotulada na cara como **"explicação gerada por IA, sem revisão humana"**. Esse é o ponto que reposiciona o produto de "previsor" para "copiloto" (ver [seção 10](#10-a-reorientação--do-previsor-ao-copiloto)).

O **pilar Político** é o caso mais delicado e a melhor demonstração de honestidade de incerteza: um LLM varre fontes oficiais com pauta restrita (Mercosul, Conab, sanitário, tributário MG/GO/PR), extrai eventos e os exibe com fonte clicável — mas o sinal entra em **quarentena com peso zero** até virar fato consumado em Diário Oficial. Observado e clicável na tela, nunca driver silencioso da recomendação. Atende à exigência *literal* do briefing (os 4 pilares aparecem) sem deixar um LLM frágil mover a recomendação.

### 8.5 Risco de perda de produtor

Variável **competitiva**, não só produtiva — o pilar Agropecuário sozinho não cobre. Quando Italac/Piracanjuba/Embaré entram numa bacia ofertando R$ 0,05 a mais, o Anderson perde uma linha inteira em três meses. O motor cruza **sinal de concorrência** na região, **tendência de qualidade** (CCS subindo na seca) e **tendência de entrega/volume** por produtor, e classifica em **categoria (Alto/Atenção/OK) + motivo curto + histórico**. A decisão da 3ª rodada foi essa: o score numérico fica interno, só para ordenação — o Anderson recusou ver "73" na tela. Em resumo, avalia risco de churn **por qualidade e por entrega**: o sistema entrega o sinal, o Anderson desenha a bonificação.

### 8.6 Hipótese de impacto declarada

Cobrança da Patrícia, operacionalizada para o doc de arquitetura: numa bacia-piloto (Zona da Mata mineira), o Vereda captura entre **R$ 0,03 e R$ 0,08 por litro** de spread favorável vs. CEPEA, com **~65% de probabilidade**, no horizonte de **2 trimestres**. O ganho não vem de "prever o preço" — vem de **antecipar o posicionamento** (alocar volume antes do pico de entressafra, antecipar cláusula com a cooperativa, reduzir dependência de spot caro), e cada um move centavos no spread médio, não reais. É um número **ilustrativo e honesto**: ~1,5% a 3% de um preço que orbita R$ 2,40–2,70/litro. Número inflado (R$ 0,20+) seria a promessa que a própria Patrícia mataria citando a consultoria de 2021. A banda e a probabilidade declaradas na cara são feature, não ressalva.

---

## 9. A auto-auditoria do método

A parte mais importante desta trilha, e a menos confortável.

Depois de fechar o Lean Inception, **auditei meu próprio processo** — e encontrei dois vícios de método. Registrá-los aqui é o ponto: a vaga é AI-First, e usar IA com competência inclui conhecer os limites do método.

**Vício 1 — a validação só adicionava, nunca matava.** A terceira rodada com as personas fechou em "0 kills em 9 condicionais + 6 features novas". Um crítico que só *reformata* escopo (nunca corta) **não é adversarial** — ele ratcheta o escopo para cima (de ~50 para 39 features candidatas, consolidadas em 8 telas). Sinais claros de quase-kill foram "spinados" em manutenção: Anderson chegou a chamar um painel de "marginal, beirando inútil", e o item foi mantido como "munição" em vez de cortado.

**Vício 2 — validei o objetivo errado.** As personas (comprador, diretora) avaliam *"um laticínio compraria este produto?"*. Mas o entregável real é um **protótipo de candidatura, julgado por um avaliador AI-First em 5–10 minutos**. Esse avaliador — o usuário de verdade do artefato — nunca foi simulado. Validei o produto-no-mercado; não validei o artefato-na-mesa-do-recrutador.

E pontos frágeis menores que a varredura de coerência pegou: o pilar Político em quarentena vs. a exigência *literal* do briefing de 4 pilares; um over-claim técnico ("SHAP sobre ensemble SARIMAX" — SHAP só é limpo na camada de árvore/boosting); um número de impacto **circular** (exigido via persona, produzido via persona); e a duração do piloto oscilando entre 3 e 6 meses em docs diferentes.

**A lição de método.** O teste de calibração da [seção 4](#4-método-ai-first-personas-adversariais-como-sparring-de-discovery) — a isca do "esperar o preço cair" — só prova que as personas resistem a **erro factual de domínio**. Ele **não** prova que resistem a **escopo ruim**. Confundir os dois dá falsa confiança. As personas são LLMs que eu mesmo escrevi; sem mandato explícito de *matar*, elas tendem a colaborar.

**Como isso muda a prática** (e mudou este projeto): ao usar personas-subagente para validar, exigir **mandato de cortar**, não só de reformatar; testar **todas** as features, não só as condicionais; validar contra o **avaliador real** do artefato, não só contra a persona do domínio; e fazer **varredura de coerência cruzada** no fim — *grep* de números e termos que precisam bater entre documentos.

---

## 10. A reorientação — do "previsor" ao "copiloto"

A auditoria forçou uma virada de posicionamento, visível no protótipo atual (título: *"Vereda · Copiloto de IA para captação de leite cru"*).

- **GenAI como camada de interação protagonista.** O briefing fala em IA preditiva, mas a vaga é AI-First e valoriza prompt engineering e experiência. Então a IA generativa deixou de ser nota de rodapé e virou **o copiloto**: explica a recomendação em linguagem natural, narra os drivers, rascunha o resumo pré-conversa, conversa. Ela **não inventa o número** — o número vem do motor preditivo (SARIMAX + boosting + SHAP). Na tela, é rotulada na cara como **"explicação gerada por IA, sem revisão humana"**.
- **Os 4 pilares, literalmente na tela — incluindo o Político.** O briefing exige quatro pilares; entregar três seria descumprir. A solução honesta: o pilar Político **aparece**, mas em **quarentena com peso zero** até o evento virar fato consumado em Diário Oficial. Sinal observado, com rótulo de confiança e fonte clicável — não driver silencioso da recomendação. A tensão "exigência do briefing × fragilidade do sinal político" vira, ela mesma, uma demonstração de honestidade de incerteza.
- **Disciplina de escopo.** A auditoria expôs o ratchet. A refatoração reaperta o foco nas telas que carregam a virada (painel por bacia, recomendação com decomposição pelos 4 pilares, what-if interativo, risco de produtor, Transparência da IA com taxa de acerto, log e governance) e, na entrada, uma **landing-roadmap** que conta a linha de raciocínio antes de o avaliador entrar no produto.

---

## 11. Estado atual e o que vem

O **design final ainda não está pronto** — o protótipo está em **refatoração ativa**. Esta trilha foi a base de tudo e segue sendo a fonte da verdade conceitual enquanto a UI se acomoda.

**Stack do protótipo** (`prototipo/`): HTML estático, **Tailwind via CDN**, **Alpine.js** (reatividade sem build), **Chart.js** (gráficos). Sem backend — toda "inteligência" é função JS pura mapeando input → output, com dados mockados em `data.js`. É exatamente o que o briefing pede: a inteligência **simulada no front-end, reagindo a interações**.

**O que já está em pé:** a entrada é uma landing **"Como cheguei aqui"** — um *roadmap* de palco fixo que conta esta trilha em cenas (a virada, as personas adversariais, o motor real, o número de impacto, o resultado), navegável por scroll/setas, alternando destaque e detalhamento dos dois lados de uma linha do tempo, com um botão para pular direto ao sistema, presente até a última cena (some no CTA, onde o "Ver funcionando" já aparece). Dentro do produto: painel por bacia com forecast/banda/semáforo, recomendação com decomposição pelos 4 pilares (motor SHAP por trás), simulador what-if que recalcula ao vivo, **risco de perda de produtor** por produtor (categoria, motivo e sinais), prep de negociação com cooperativa, transparência da IA (taxa de acerto por horizonte e por pilar, log de decisões) e um copiloto conversacional (respostas mockadas no front, coerente com a regra de simular a IA).

Essa landing fecha, de propósito, o **Vício 2** da [seção 9](#9-a-auto-auditoria-do-método): é o artefato desenhado para o **avaliador AI-First** que a discovery nunca simulou — esta trilha, destilada para os 5 minutos dele, sem perder a autoridade técnica que vive aqui no README.

**O que falta:** fechar a refatoração de UI, **alinhar a tela de risco de produtor à decisão da 3ª rodada** (hoje ela ainda exibe o score 0–100 que o Anderson recusou; deve virar categoria + motivo), validar em navegador limpo contra a definition of done ([`07-canvas-mvp.md §8`](docs/lean-inception/07-canvas-mvp.md)), e hospedar (GitHub Pages) — o link que é o entregável.

**As três falas de defesa**, se houver entrevista oral:

1. **A virada** (30s): *"O briefing pede um previsor de preço, mas leite cru é perecível — não se estoca nem se espera o preço cair. O problema real é estratégia de captação trimestral sob incerteza."*
2. **O método** (30s): *"Usei LLMs como sparring de discovery — duas personas adversariais ancoradas no setor — e auditei o próprio método: descobri que persona-LLM resiste a erro de domínio, mas não a escopo ruim. Corrigi por isso."*
3. **A honestidade técnica** (30s): *"Cada tela tem um motor real construível. SARIMAX + boosting + SHAP para forecast explicável; GenAI como copiloto de interação; LLM político em quarentena até provar acurácia. Banda de confiança e taxa de acerto ficam expostas na UI."*

---

> Dúvida de método ou contexto? `ROADMAP.md` é o diário operacional; `docs/00-estudo-preliminar.md` é a espinha técnica; `docs/discovery/00-sintese.md` é o veredito da discovery. O resto é rastreável a partir daí.
