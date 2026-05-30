# Visão do Produto — Vereda

> Etapa 1 do Lean Inception. Ancorada no enquadramento do problema (estudo preliminar §2–3) e na discovery validada com as personas Anderson Toledo (comprador) e Patrícia Linhares (diretora).

---

## Declaração (formato Lean Inception)

**PARA** compradores e gestores de captação de leite cru de indústrias laticinistas de médio-grande porte,

**QUE** precisam posicionar a estratégia de captação dos próximos trimestres — mix por bacia, estrutura de bonificação por produtor, antecipação de negociação com cooperativa, substituição parcial de matéria-prima — num produto **perecível que não permite estocar nem "esperar o preço cair"**,

**O Vereda**

**É UMA** plataforma de IA explicável para estratégia de captação,

**QUE** cruza os 4 pilares (político, econômico, climático, agropecuário) com preço CEPEA, qualidade esperada por bacia e capacidade logística, traduzindo o cenário em **recomendações trimestrais auditáveis**, com banda de confiança, drivers visíveis e taxa de acerto histórica exposta.

**DIFERENTE DE** decidir por intuição sobre CEPEA passado, planilhas e relatórios estáticos de consultoria,

**O Vereda** **antecipa o ciclo safra/entressafra com rastreabilidade defensável no Comitê** e coloca o comprador como **co-dono** da recomendação — não cliente passivo de uma caixa-preta.

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

## Alavancas reais de valor (descobertas na discovery)

A Visão se sustenta nestas alavancas que **sobreviveram à entrevista**:

1. **Bonificação por produtor para fidelização pré-entressafra.** Anderson: "o ativo mais valioso não é preço travado, é relação travada." Vereda sugere desenho de bonificação por produtor estratégico antes da janela seca.
2. **Antecipação de negociação com cooperativa.** Cláusulas de banda de preço e compromisso de volume nas grandes (Itambé, Castrolanda, CCPR) — janela ideal 1 trimestre antes do pico.
3. **Sinalização de substituição parcial de matéria-prima.** Leite em pó Mercosul (Argentina/Uruguai) para parte da linha UHT em pico de seca, liberando leite cru para SKUs de margem maior. Cruza pilar Político (Mercosul) + Econômico (preço internacional via Global Dairy Trade).
4. **Sinal integrado, não isolado.** Toda recomendação cruza **preço + qualidade esperada (CCS/CBT por bacia) + viabilidade logística**. Sem isso, Patrícia bloqueia.

---

## Requisitos não-negociáveis (compliance com a discovery)

Sem esses, a ferramenta não passa nem no Anderson nem na Patrícia:

- **Explicabilidade:** drivers por pilar visíveis em toda recomendação (motor real: SHAP).
- **Honestidade de incerteza:** banda de confiança em todo forecast; alerta explícito quando a incerteza está alta ("não confie nesta recomendação ainda").
- **Taxa de acerto histórica exposta** na própria UI — não escondida em apêndice. Endereça diretamente o trauma de 2021.
- **Anderson como co-dono.** UI permite anotar discordância, ajustar pressuposto, marcar "vou fazer diferente porque…". Vira aprendizado do modelo, não atrito.
- **Integração com SAP / ciclo de S&OP.** Não pode ser sistema isolado — Patrícia veta.
- **Piloto contido por bacia, 3–6 meses, métrica de spread R$/litro definida ANTES** — única forma de subir adoção de 20% para 60–70%.

---

## Alternativas de nome

Cravando **Vereda** por: (i) carga simbólica de caminho em terra incerta, (ii) referência mineira (Anderson não rejeita), (iii) sem anglicismo, (iv) curto. Alternativas para considerar:

- **Lume** — luz pontual, sugere "iluminar decisão".
- **Norte** — direção, posicionamento estratégico.
- **Ciclo** — direto, mas genérico.

Decisão pode esperar até o protótipo. Por enquanto, Vereda.
