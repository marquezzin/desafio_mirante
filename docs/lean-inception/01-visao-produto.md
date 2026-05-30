# Visão do Produto — Vereda

> Etapa 1 do Lean Inception. Ancorada no enquadramento do problema (estudo preliminar §2–3) e na discovery validada com as personas Anderson Toledo (comprador) e Patrícia Linhares (diretora).

---

## Declaração (formato Lean Inception)

**PARA** compradores e gestores de captação de leite cru de indústrias laticinistas de médio-grande porte,

**QUE** precisam posicionar a estratégia de captação dos próximos trimestres — mix por bacia, estrutura de bonificação por produtor, antecipação de negociação com cooperativa, substituição parcial de matéria-prima — num produto **perecível que não permite estocar nem "esperar o preço cair"**,

**O Vereda**

**É UMA** plataforma de IA explicável para estratégia de captação,

**QUE** cruza os 4 pilares (político, econômico, climático, agropecuário) com preço CEPEA, qualidade esperada por bacia e capacidade logística, traduzindo o cenário em **recomendações trimestrais auditáveis**, com banda de confiança, drivers visíveis e taxa de acerto histórica exposta.

**DIFERENTE DE** CEPEA passado em planilha e relatório estático de consultoria,

**O Vereda** **complementa o julgamento de campo do comprador com leitura sistematizada do cenário**, antecipa o ciclo safra/entressafra com rastreabilidade defensável no Comitê e coloca o comprador como **co-dono** da recomendação — não cliente passivo de uma caixa-preta.

---

## Decomposição da declaração

### Para quem (público-alvo)
- **Usuário primário:** Gerente / Comprador de Captação (perfil Anderson) — opera ciclo trimestral por bacia, conhece produtor pelo nome.
- **Usuário secundário / sponsor:** Diretor(a) de Suprimentos / S&OP (perfil Patrícia) — responde por spread captado vs. CEPEA, variância de COGS, governance.
- **Não é para:** trader de commodity, gestor financeiro de hedge, varejo, produtor rural.

### Dor (validada na discovery)
- Decisão de captação tomada por CEPEA passado + feeling, com **lag** que custa caro em entressafra severa (Patrícia: "em 2024 fomos pegos de calça curta no 2º semestre, custou variância de COGS").
- Sinal isolado de preço **não aciona** — comprador precisa de preço + qualidade da bacia + viabilidade logística juntos para mover algo.
- Memória institucional ruim de IA/BI ("BI de captação de 2019 morreu", "consultoria de 2021 errou cenário, queimei caixa") — qualquer ferramenta nova carrega esse passivo de confiança.

### Categoria
Plataforma de **apoio à decisão estratégica de captação** (procurement decision support). Não é forecast puro, não é hedge, não é ERP, não é dashboard.

### Benefício-chave
**Antecipar o posicionamento da captação** com explicabilidade defensável no Comitê — protegendo margem ao reduzir dependência de spot caro em pico de entressafra e ao fidelizar volume estratégico antes da janela apertar.

### Diferencial vs. alternativa atual
- vs. **planilha + CEPEA**: antecipa em vez de reagir.
- vs. **consultoria/relatório (RaboResearch, Scot)**: integra com o ciclo de S&OP da casa, recomendação acionável por bacia, não relatório genérico.
- vs. **BI tradicional (Power BI)**: drivers explicáveis por SHAP, simulador what-if, alertas de incerteza alta — saída prescritiva, não só descritiva.
- vs. **promessa de IA caixa-preta**: taxa de acerto histórica exposta, banda de confiança em toda recomendação, Anderson como co-dono.

---

## Alavancas reais de valor (descobertas na discovery, reescritas após 2ª rodada)

A Visão se sustenta nestas alavancas que **sobreviveram à entrevista**. A 2ª rodada (`docs/discovery/03-validacao-docs.md`) reposicionou três delas — Anderson recusou o papel de "recomendador de número" e devolveu o sistema ao papel de **leitor de sinal**.

1. **Sinal de pressão competitiva e risco de perda de produtor.** Anderson: "o ativo mais valioso não é preço travado, é relação travada." Vereda **NÃO** recomenda valor de bonificação — sinaliza, por bacia e por produtor estratégico, **risco de churn** (Italac/Piracanjuba/Embaré ofertando próximo) e **pressão competitiva** (movimento da concorrência na região). Anderson desenha a tabela de bonificação a partir desse sinal — é política comercial que passa por ele, Patrícia, jurídico e CFO.
2. **Subsídio à negociação com cooperativa.** Tirado "timing" — quem dita timing é a contraparte. O valor é **leitura antecipada de pressão da cooperativa** (ex.: Itambé vai entrar apertada de volume no Q3 por seca em Goiás), pra Anderson chegar na conversa com a faca certa. Cláusula de banda e compromisso de volume continuam como alavanca; o sistema entrega cenário, não roteiro de negociação.
3. **Sinal multi-área de substituição parcial de matéria-prima.** Leite em pó Mercosul (Argentina/Uruguai) para parte da linha UHT em pico de seca. Reposicionado: **não é alavanca exclusiva do comprador** — depende de câmbio, alíquota, posicionamento de marca e capacidade industrial. Vereda gera o sinal integrado (Político Mercosul + Econômico Global Dairy Trade + capacidade fabril) que **vai para a mesa de S&OP** com Industrial e Marketing. Decisão é colegiada.
4. **Sinal integrado, não isolado.** Toda recomendação cruza **preço + qualidade esperada (CCS/CBT/gordura/proteína por bacia, por produtor) + viabilidade logística (rota de captação, ociosidade, R$/litro de frete) + contratos vigentes + capacidade fabril da unidade**. Sem isso, Patrícia bloqueia e Anderson chama de "meio sistema".

---

## Requisitos não-negociáveis (compliance com a discovery)

Sem esses, a ferramenta não passa nem no Anderson nem na Patrícia. A 2ª rodada acrescentou cinco requisitos (marcados ⟡) que vieram da Patrícia como condição de Comitê e do Anderson como condição de uso:

- **Explicabilidade com motor declarado.** ⟡ Drivers por pilar visíveis em toda recomendação. Motor real: **SHAP sobre ensemble de séries temporais (SARIMAX + gradient boosting) com pilar político em quarentena** (ver abaixo). Não é "SHAP enfeitando caixa-preta" — se houver componente de DL ou LLM no driver, sai do MVP.
- **Honestidade de incerteza:** banda de confiança em todo forecast; alerta explícito quando a incerteza está alta ("não confie nesta recomendação ainda, decida no relacionamento").
- **Taxa de acerto histórica exposta** na própria UI — não escondida em apêndice. Endereça diretamente o trauma de 2021.
- **Hipótese de impacto em R$/litro com banda e probabilidade.** ⟡ Declarada **antes** do piloto: "captura entre X e Y centavos por litro no spread vs. CEPEA, com probabilidade Z, no horizonte W". Sem isso, Patrícia não defende no Comitê.
- **Co-dono com accountability operacional explícita.** ⟡ "Co-dono" deixa de ser palavra. Definido em papel: Anderson **assina** a recomendação aceita (registro nominal); na variância, accountability é compartilhada Anderson + dono do modelo. Quem é o dono do modelo, o ritual de governance e o gatilho de escalonamento (se Anderson ignorar 3 recomendações seguidas) ficam declarados no MVP.
- **Sparring que aprende.** ⟡ Discordância do Anderson não é só anotada — vira input de re-calibração no ciclo seguinte. Diário de bordo não é sparring.
- **Tempo de reação interno endereçado.** ⟡ Vereda entra no calendário de S&OP/Comitê de Captação **com janela de antecedência suficiente pra aprovação e repasse comercial**. Recomendação perfeita que chega depois do ciclo de aprovação não captura ganho — Patrícia mata.
- **Integração com SAP / ciclo de S&OP dimensionada.** ⟡ Não basta citar — declarar tabelas SAP envolvidas, frequência, owner de TI do cliente e esforço honesto. "API simples" é red flag (Patrícia: trauma de 2019, integração comeu 70% do orçamento).
- **Trilha de auditoria formal**, não anotação. Para cada recomendação: snapshot do cenário, banda, drivers, decisão do Anderson, justificativa, resultado realizado. Reconstituível por auditoria interna ou board em safra passada.
- **Piloto contido em uma bacia, 3 meses, métrica de spread R$/litro definida ANTES** — Anderson sugere Zona da Mata mineira. Única forma de subir adoção de 20% para 60–70%.
- **LLM político em quarentena no MVP.** ⟡ Anderson e Patrícia convergiram no risco. Camada de leitura de Diário Oficial/MAPA entra como **sinal observado com pauta restrita** (Mercosul, Conab, sanitário, tributário MG/GO/PR) — **não como driver direto** da recomendação. Sai da quarentena só após provar acurácia em ciclo controlado.

---

## Dados e variáveis obrigatórios na v1 (não v2)

A 2ª rodada matou a tentação de empurrar dados internos para v2. Anderson foi explícito: "sem isso é meio sistema". Vão para o MVP:

**Fontes de dado internas (obrigatórias no MVP):**
- **Qualidade laboratorial por produtor, por coleta** — CCS, CBT, gordura, proteína. É o que diferencia bacia boa de bacia ruim e alimenta o desenho de bonificação que o Anderson faz manualmente.
- **Linha/rota de captação** — ociosidade por rota, R$/litro de frete, capacidade. Captação é logística antes de ser preço — sem isso, recomendação ignora restrição operacional.
- **Contratos vigentes** com cooperativas e produtores estratégicos — cláusulas ativas, prazo, banda, volume. Recomendação que ignora amarração contratual é inútil.
- **Capacidade fabril por unidade industrial** — não adianta recomendar +8% de captação em Itumbiara se a planta está no limite de UHT.

**Variáveis explícitas no modelo (não derivadas):**
- **Risco de perda de produtor para concorrente.** Italac, Piracanjuba, Embaré entram em bacia ofertando R$ 0,05 a mais — Anderson perde linha inteira em três meses. Pilar Agropecuário sozinho não cobre — é variável **competitiva**, não produtiva.
- **Sazonalidade de qualidade.** Na seca: CCS sobe (vaca estressada), gordura sobe (concentração), proteína cai. Afeta rendimento industrial e desenho de bonificação.
- **Capacidade fabril por SKU** como restrição na recomendação de mix.

**Fontes públicas (mantidas):** CEPEA, BCB-SGS, INMET, NASA POWER, CHIRPS, CONAB, MAPA, Global Dairy Trade.

---

## Alternativas de nome

Cravando **Vereda** por: (i) carga simbólica de caminho em terra incerta, (ii) referência mineira (Anderson não rejeita), (iii) sem anglicismo, (iv) curto. Alternativas para considerar:

- **Lume** — luz pontual, sugere "iluminar decisão".
- **Norte** — direção, posicionamento estratégico.
- **Ciclo** — direto, mas genérico.

Decisão pode esperar até o protótipo. Por enquanto, Vereda.
