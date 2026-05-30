# Validação das Features — 3ª Rodada com as Personas

- **Data:** 2026-05-30
- **Personas:** Anderson Toledo (`.claude/agents/anderson-comprador.md`) e Patrícia Linhares (`.claude/agents/patricia-diretora.md`).
- **Documentos submetidos:** `docs/lean-inception/04-jornada-usuario.md` e `docs/lean-inception/05-brainstorm-features.md`.
- **Setup:** terceira reunião com o mesmo analista de produto. Eles receberam os dois documentos antes, e foram convidados a estressar **apenas as 9 CONDICIONAIS** (não a lista inteira) — perguntas direcionadas, formuladas em `05-brainstorm-features.md §4`. Sessões paralelas independentes.
- **Resultado:** ambos validam as features com **ajustes materiais de formato** (não rejeições). Convergência forte em três pontos transversais. Patrícia condicionou a pauta de Comitê de junho à entrega de uma **página de governance completa** na próxima rodada.

---

## Resposta do Anderson Toledo (Gerente de Captação)

### Leitura geral

Tô vendo o produto ficar mais maduro entre uma rodada e outra — mérito. Mas tem duas perguntas que cheiram a feature pra encher slide ("Itambé apertada", "Italac na rota"), e duas que estão no osso do meu dia (churn e anotação). Vou ser duro onde precisa.

### Pergunta 1 — Score numérico (0–100) vs. categoria no churn

Nem um nem outro do jeito proposto. Score 0–100 é **frieza demais** pra relação de 10–20 anos — ninguém vai me convencer que Seu Joaquim, 14 anos de entrega, é "73". Categoria pura é vaga demais — três caixinhas pra 380 produtores não me ajuda a priorizar quem eu ligo na segunda de manhã.

**O que funciona: categoria + motivo curto + tempo.** Tipo:
- *"Risco alto — não bate meta de volume há 2 meses + CCS subindo"*
- *"Atenção — caminhão atrasou 3 vezes em abril, ele reclamou"*

Eu abro de manhã, vejo lista de 8–12 nomes em "alto", leio a linha em 5 segundos, decido se ligo ou se mando o técnico passar. Pode ter o número por baixo pra ordenar — mas o que aparece pro meu olho é **nome + motivo**, não 73.

E **quero ver o histórico de risco do cara**. Se ele tá em "alto" há 4 meses e nunca saiu, um dos dois tá errado — sistema ou eu.

### Pergunta 2 — Projeção de pressão de oferta da cooperativa

Marginal, beirando inútil do jeito que foi descrita. **Eu já sei.** Presidente da Itambé eu conheço de 12 anos, e quando seca em Goiás eu sei antes do satélite porque o técnico de campo deles me liga reclamando. Não preciso de tela.

Agora — **tem um ângulo onde isso me serve**: quando vou defender pra Patrícia que tenho que pagar 4% acima do CEPEA pra segurar fornecedor, ela pergunta "por quê?", eu digo "porque a Itambé vai apertar", ela responde "como você sabe?". Hoje minha resposta é "fontes". Se o Vereda me dá tela com **dado público de chuva CHIRPS + projeção de produção + histórico das últimas 3 secas parecidas**, eu levo isso pra reunião e a conversa muda.

**Então: não é tela pra mim no dia a dia. É munição pra defender decisão pra cima.** Reposiciona assim. Se for pra eu olhar previsão da Itambé toda terça, joga fora.

### Pergunta 3 — Pauta de negociação — formato que não vira roteiro

"Roteiro" mata porque pressupõe que eu não sei o que falar. **Eu sei.** O que eu não tenho são números frescos na cabeça quando entro na sala.

**Formato que serve: "O que mudou desde a última conversa".** 3 a 5 bullets curtos, só fatos novos, **sem verbo de ação**:

- CEPEA caiu 2,8% no mês passado (era 1,1% no mês anterior)
- Sua entrega caiu 6% em abril, CCS subiu de 320 pra 480
- Chuva em Goiás 40% abaixo da média histórica pros próximos 30 dias
- Concorrente X subiu coleta na região (se for verdade — ver pergunta 4)

Eu olho 30 segundos antes da reunião e **conduzo a conversa do meu jeito**. Sistema não me diz "proponha bonificação de R$ 0,08" — se tentar, eu desligo a feature.

**Nome:** *"Resumo pré-conversa"* ou *"O que mudou"*. **Não chama de pauta, não chama de roteiro, não chama de "talking points" pelo amor de Deus.**

### Pergunta 4 — Movimento da concorrência — fonte real?

**Não tem fonte sistematizável confiável.** Volume de coleta de concorrente em rota específica ninguém divulga. O que existe na vida real:

- WhatsApp de técnico ("vi caminhão da Italac na fazenda do Seu Pedro")
- Produtor falando "recebi proposta da Embaré semana passada"
- Boato de feira agropecuária
- Movimento de preço regional (mas isso é tarde — já aconteceu)

Construir feature com "Italac aumentou 14%" com precisão decimal vai virar **piada interna na primeira vez que errar** — e vai errar.

**O que pode funcionar: crowdsourced interno.** Eu mesmo (ou o técnico) anota o boato no sistema, e o Vereda agrega. Se 4 técnicos em regiões diferentes anotaram "vi Italac mais ativa" no último mês, isso vira sinal — sem "14%" cravado, mas com *"movimentação reportada em 4 rotas, atenção"*. Eu confio porque sei quem reportou.

**Sem isso, não construa.** Vai queimar a credibilidade do produto inteiro na primeira métrica errada.

### Pergunta 5 — Anotação manual que rebaixa o churn

Boa, e é onde o produto fica meu de verdade. Mas cuidado com excesso de campo — eu não vou preencher formulário de 8 linhas.

**Formato que funciona:**

- Botão **"Marcar como sob controle"**
- Campo *"Por quê?"* (opcional, 1 linha — *"conversei dia 12/05, ele tá firme"*)
- **"Revisar em"** — 30 / 60 / 90 dias (default 60)

Depois do prazo, o sistema volta a alertar **se o sinal persistir**: *"Seu Joaquim foi marcado como sob controle em 12/05, mas o sinal continua. Quer revisar?"*

Isso resolve duas coisas: (1) silencio o ruído do dia a dia; (2) se eu errar a leitura — e eu erro às vezes — o sistema **me protege de mim mesmo**.

**Importante: a Patrícia NÃO vê minhas anotações cruas.** Ela vê que *"X produtores estão marcados sob controle pelo gerente"*, agregado. Se ela ler *"Seu Joaquim tá firme"* e o cara sair em julho, eu apanho. Não topo.

### O que falta na lista (Anderson)

**A1. Tela de "promessas que eu fiz e não cumpri" — compromissos abertos com produtor.**
Falo com 30 caras por dia, prometo coisa (*"vou ver o frete"*, *"vou subir bonificação se você passar dos 800L"*) e esqueço metade. **Isso é onde eu perco produtor de verdade, não em modelo de churn.** Se o Vereda me lembra *"você prometeu retorno pro Seu Joaquim em 15/04, faz 6 semanas"*, vale ouro.

**A2. Histórico de o que o Vereda previu vs. o que aconteceu, por produtor e por região.**
"Taxa de acerto histórica" como princípio é abstrato — concretiza em tela. Quero ver: *"nos últimos 12 meses, das vezes que o Vereda marcou churn alto pra produtor real, acertou em quantos %?"*. Se for 40%, uso com sal. Se for 80%, confio mais. Sem isso, fico chutando o nível de confiança.

**A3. "Quem na minha equipe falou com esse produtor por último, e quando."**
Antes de eu ligar pra alguém, quero saber se meu técnico já passou lá ontem — senão pareço perdido.

---

## Resposta da Patrícia Linhares (Diretora de Suprimentos)

### Leitura geral

Vocês estão entrando numa **zona perigosa**: as três perguntas são todas sobre **superfície de exposição institucional**. Não é mais "o motor funciona?" — é "quando o motor falar besteira ou contrariar terceiro publicado, quem leva o tiro?". Prefiro responder com escopo apertado do que aprovar generoso e me arrepender no Comitê de outubro.

### Pergunta 1 — Comparação automática com Rabobank / Scot

**(b) Vereda agnóstico está fora.** Se tenho que cruzar por fora, o one-pager não está fazendo o trabalho dele. E vai acontecer: o CFO lê o RaboResearch no fim de semana, chega na segunda perguntando *"por que vocês contrariaram o Rabo?"*, e eu não posso dizer "ah, é outro sistema".

**(a) é o caminho, com três condições inegociáveis:**

1. **Citação literal e datada.** *"RaboResearch, relatório mensal de [mês], projeta tendência X para o trimestre. Vereda projeta Y."* Sem paráfrase. Se o analista mudar a tese semana seguinte, eu quero rastrear.
2. **Drivers do desvio explícitos e quantificados.** Não aceito *"o modelo considera fatores locais"*. Quero: *"Vereda projeta R$ 0,03/litro acima do Rabo porque (i) anomalia de chuva no Sul de Minas detectada via CHIRPS, peso 60% do desvio; (ii) cláusula de revisão da Cooperativa Centro vence em 45 dias, peso 25%; (iii) ruído residual 15%."* Se não der pra decompor o desvio em drivers nomeados, **não publica a comparação** — vira opinião contra opinião.
3. **Quando o Vereda não tem sinal forte, se cala** e diz *"convergente com Rabobank, sem desvio material"*. Comparação só aparece quando desvio > threshold (sugiro >R$ 0,02/litro ou >2%).

**Condição-mãe:** painel de governance precisa expor **taxa de acerto histórica em divergência, separada da taxa geral**. É a métrica que decide se a feature sobrevive ao ano 1 — se em 12 meses o Vereda bate o Rabo 7 em 10 quando diverge, eu tenho thesis defensável; se bate 3 em 10, vocês mataram o produto sozinhos.

**Veredito:** IN no MVP, com as três condições. Sem elas, v2.

### Pergunta 2 — Texto LLM no what-if

**Me ajuda mais do que atrapalha — se for usado no contexto certo.**

- **No what-if do Anderson (uso interno, exploração):** bem-vindo. Ele mexe slider, lê duas frases, calibra intuição, segue. Risco institucional zero.
- **No one-pager que vai pro Comitê:** muda tudo. Se aparece *"o LLM disse que dólar empurra leite via pó importado"*, CFO pergunta *"qual LLM, treinado com o quê, auditado por quem?"*. Vira flanco.

**Condições pra entrar no MVP (4 não-negociáveis):**

1. **Texto LLM só no simulador exploratório**, marcado visualmente como *"explicação assistida, não auditada"*.
2. **Nunca migra automaticamente pro one-pager institucional.** Se Anderson quiser incluir, copia, edita, **assina embaixo** — vira texto dele.
3. **A frase precisa derivar dos mesmos drivers numéricos que o what-if já calculou.** Não é LLM inventando narrativa — é LLM verbalizando o que o motor estatístico já disse. Se não conseguem amarrar a frase aos drivers (peso de cada variável no resultado), corta. Vira alucinação cosmética.
4. **Log de toda frase gerada, com input e drivers.** Auditável retroativo.

Sem esses 4, v2. Com eles, IN — mas como **ferramenta de produtividade do Anderson**, não como artefato de governance.

### Pergunta 3 — Gatilho de escalonamento

Antes de responder o "como", entenda meu desconforto: **não quero ser notificada toda vez que o Anderson discorda do sistema.** Discordância é saudável — é pra isso que ele está lá. O que preciso saber é quando há **padrão sistemático de descolamento** que sugere ou (a) o modelo está descalibrado, ou (b) ele está operando por viés/inércia e perdendo dinheiro pra empresa.

**Contagem:** "3 em sequência" é instrumento de pressão — vira microgerenciamento e queima o Anderson. **Quero percentual em janela móvel com filtro de materialidade.** Sugiro:

> *"Ignorou ou recusou mais de 50% das recomendações com impacto >R$ X no trimestre móvel."*

Combina volume com materialidade. Recomendação de R$ 0,005/litro ignorada não conta. R$ 0,03/litro ignorada três vezes num trimestre, conta.

**Ritual:**

1. **Nunca alerta automático pra mim sem passar pelo Anderson primeiro.** O sistema notifica **ele**: *"você está em 55% de recusa neste trimestre, quer revisar com a Patrícia ou ajustar pressuposto do modelo?"*. Ele tem **5 dias úteis** pra agir.
2. Se ele não age, **aí** sobe pra mim — não como alerta vermelho, como **pauta de 1:1 quinzenal** que já temos. *"Vamos olhar juntos os 4 casos onde você divergiu, entender se é o modelo ou se é leitura sua."*
3. **Nunca vai pro S&OP coletivo.** Expor em reunião com pares mata a relação. S&OP discute resultado de captação, não conformidade com sistema.

**O que evita virar instrumento de pressão:**

- **Métrica bidirecional:** se Anderson **segue** recomendação e ela falha, sistema também registra no mesmo painel. Não pode ser KPI assimétrico.
- Anderson tem **botão "modelo está errado por razão X"** — justificativa vira insumo de recalibração, não evidência contra ele.
- Eu, como sponsor, **comunico isso na largada:** *"essa métrica existe pra cuidar do produto, não pra te vigiar. Se você está discordando muito, ou o produto não está bom, ou tem algo que eu preciso entender — em qualquer dos dois casos, eu quero saber."*

**Veredito:** IN no MVP — percentual + materialidade, fluxo Anderson-primeiro, escalada vira pauta de 1:1, nunca alerta vermelho.

### O que falta no escopo (Patrícia)

**P1. Painel de "taxa de acerto histórica em divergência" como feature de primeira classe.**
Métrica que defende o produto no Comitê do ano 2. Se está como CONDICIONAL ou OUT, **sobe pra IN**.

**P2. Log auditável de toda recomendação emitida, com snapshot dos inputs e versão do modelo.**
Não vi com clareza. Sem isso, no dia em que perdermos R$ 200k seguindo recomendação, não consigo reconstruir o porquê. **Pré-requisito de governance**, não nice-to-have.

**P3. Fluxo de recalibração quando Anderson marca "modelo errado por razão X" repetidamente no mesmo driver.**
Se rejeita 5 vezes apontando *"modelo não enxerga relação com Cooperativa Y"*, isso precisa virar **ticket pra time de dados**, não morrer no log. Senão a feature de discordância vira teatro.

### Você leva pro Comitê?

**Com as três condições da pergunta 1, o escopo apertado da 2, e o ritual da 3 — sim.** Mas com **uma página só de governance** — owner, métrica de acerto, log auditável, fluxo de escalonamento. É o que o CFO vai perguntar antes de aprovar orçamento.

Se vocês trouxerem essa página pronta na próxima, pauto pro **Comitê de junho**. Sem ela, julho.

---

## Síntese de mudanças (entrada pro patch do brainstorm e pro Canvas MVP)

### Convergências (atacaram a mesma coisa pelos dois ângulos — alto sinal)

| Item | Anderson | Patrícia | Decisão |
|---|---|---|---|
| **Taxa de acerto histórica granular exposta na UI** | Pediu A2 (por produtor / região) | Pediu P1 (em divergência com Rabo/Scot) | **Sobe pra IN como tela de primeira classe**: painel de acerto multifacetado (por horizonte, bacia, alavanca, pilar, divergência com terceiros, por produtor). Já era 6a + 6g — virar mais robusto. |
| **Log auditável formal com snapshot completo** | Implícito | Pediu P2 (snapshot dos inputs + versão do modelo) | **Reforça C1 e 6b.** Adicionar requisito explícito: versão do modelo + inputs no snapshot. |
| **Discordância vira ação concreta, não anotação** | Já tinha (3e na 2ª rodada) | Pediu P3 (ticket pra time de dados quando padrão se repete) | **Adiciona feature nova:** fluxo de recalibração formal — se Anderson rejeita N vezes apontando mesmo driver, vira ticket pra time de modelos. |

### Ajustes de formato (não rejeições — refinos materiais)

| Feature original | Ajuste |
|---|---|
| **3a — Score 0–100 ou categoria** | Vira **categoria (Alto/Atenção/OK) + motivo curto + histórico de risco do produtor**. Score numérico é interno (ordenação); UI mostra nome + motivo de 1 linha. |
| **3e — Anotação manual rebaixa score** | Formaliza como **botão "Sob controle"** + textarea opcional 1 linha + **prazo (30/60/90 dias, default 60)**. Sistema volta a cutucar se sinal persistir após prazo. Patrícia **só vê agregado**, nunca anotações cruas. |
| **3f — Alerta de movimento da concorrência** | **Reformulado como crowdsourced interno**: técnicos/Anderson anotam observação de campo; sistema agrega e sinaliza quando N reports convergem na mesma região. Sem capturar dado externo de volume de coleta de concorrente (não existe fonte confiável). |
| **5a — Projeção de pressão da cooperativa** | **Reposicionada como "munição pra defender decisão pra cima"**, não tela de monitoramento diário. Vira componente da defesa institucional, com CHIRPS + projeção de produção + histórico das últimas 3 secas parecidas. Anderson abre quando precisa argumentar pra Patrícia, não toda terça. |
| **5e — Pauta de negociação sugerida** | **Renomeada "Resumo pré-conversa" ou "O que mudou"**. Formato: 3–5 bullets de fatos novos, **sem verbo de ação**, sem proposta de número. Anderson conduz; sistema só lista o que mudou desde a última conversa. |
| **7i — Comparação com Rabobank/Scot** | **IN com 3 condições da Patrícia**: citação literal datada + drivers do desvio quantificados (decomponíveis) + só aparece quando desvio > threshold (R$ 0,02 ou 2%). Quando não há sinal forte, sistema declara *"convergente, sem desvio material"*. |
| **4f — Texto LLM no what-if** | **IN com 4 condições da Patrícia**: só no simulador exploratório, marcado *"explicação assistida, não auditada"*; nunca migra automaticamente pro one-pager; deriva dos drivers numéricos do modelo (não inventa); log de toda frase + input + drivers. |
| **C3 — Gatilho de escalonamento** | **IN como percentual em janela móvel + materialidade** (>50% de recusa em recomendações com impacto >R$ X no trimestre móvel). Ritual: alerta pro Anderson primeiro (5 dias úteis), depois pauta de 1:1 (nunca S&OP coletivo, nunca alerta vermelho). **Métrica bidirecional**: rastreia também quando seguir recomendação dá errado. |

### Features novas adicionadas pelos dois

| Origem | Feature | Status |
|---|---|---|
| Anderson A1 | **Tela de "compromissos abertos com produtor"** — lembrete do que Anderson prometeu e ainda não voltou (data + produtor + promessa). | 🟡 **CONDICIONAL — tensão com 'não é CRM'.** Anderson disse na 2ª rodada que não quer CRM (cadastro de visita, histórico de conversa). Compromisso aberto é operacional do **dele** (lembrete pessoal), não cadastro relacional. Defensável, mas precisa modelar UI cuidadosamente pra não escorregar. Decidir no Canvas MVP. |
| Anderson A2 | **Taxa de acerto granular por produtor / por região** | 🟢 **IN — converge com P1 da Patrícia.** Vira componente do painel de auditoria expandido. |
| Anderson A3 | **"Quem da equipe falou com esse produtor por último, e quando"** | 🟡 **CONDICIONAL — mesma tensão de A1.** Registro de interação interna da equipe (técnico/motorista/Anderson). Defensável como operacional, mas cheira a CRM. Decidir no Canvas MVP. |
| Patrícia P1 | **Painel de acerto em divergência** (Vereda vs. Rabobank/Scot) como métrica própria | 🟢 **IN — métrica de governance crítica.** Sobe pra primeira classe. |
| Patrícia P2 | **Snapshot com versão do modelo + inputs** no log auditável | 🟢 **IN — reforça C1.** Requisito adicional explícito. |
| Patrícia P3 | **Fluxo de recalibração formal**: rejeição repetida no mesmo driver vira ticket pra time de modelos | 🟢 **IN — operacionaliza "sparring que aprende".** |

### Bloqueador pra Comitê de junho (Patrícia)

A pauta de Comitê de junho está **condicionada** à entrega de **uma página só de governance** com:

- Owner do modelo declarado (papel + e-mail)
- Métrica de acerto (geral + em divergência)
- Log auditável (com snapshot de inputs + versão do modelo)
- Fluxo de escalonamento documentado (incluindo o ritual percentual + materialidade)

**Sem essa página, pauta vai pra julho.** No nosso contexto (desafio com entregável em link único), isso vira **conteúdo obrigatório do "Por que esta solução"** (Tela 8) — não é página separada, mas precisa cobrir os 4 itens com profundidade suficiente.

---

## Próximo passo

1. **Patch cirúrgico em `docs/lean-inception/05-brainstorm-features.md`** — aplicar os ajustes de formato e adicionar as features novas com status.
2. **Atualizar `04-jornada-usuario.md` §3** — mover tela de cooperativa pra "componente da defesa institucional" (não tela de monitoramento diário) e ajustar nomes ("Resumo pré-conversa", categoria + motivo).
3. **Sequenciador de MVP** com a lista convergida pós-3ª rodada.
4. **Canvas MVP** garantindo que a **página de governance** (P1 da Patrícia) fica embarcada no doc "Por que esta solução" — bloqueador do ano-1.
