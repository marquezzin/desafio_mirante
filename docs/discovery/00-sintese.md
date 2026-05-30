# Síntese de Discovery — Premissas e Insights

> Cruzamento das entrevistas com Anderson (operacional) e Patrícia (executiva), feitas em paralelo independente. As duas transcrições integrais estão em `01-entrevista-anderson.md` e `02-entrevista-patricia.md`. Esta síntese alimenta a Visão do Produto e o É/Não É/Faz/Não Faz.

---

## Calibração das personas

Ambas resistiram à isca da premissa errada na pergunta 1 ("esperar o preço cair pra comprar"). Anderson corrigiu seco ("Rapaz, leite não é soja"), Patrícia corrigiu polida mas igualmente firme ("a gente não 'decide o timing' como quem opera no mercado financeiro"). Agentes calibrados — respostas seguintes têm valor de sinal, não de validação por sycophancy.

---

## Premissas do estudo preliminar §6 — veredito

| Premissa | Veredito | Origem |
|---|---|---|
| Comprador tem autonomia para realocar volume entre regiões/cooperativas | **Refutada em ciclo curto.** Lead time real: 60–90 dias (Patrícia, na faixa móvel) a 6–12 meses (Anderson, no estrutural). 70% do mix já amarrado em cooperativa por relacionamento. Alavanca real está nos 30–35% (produtor direto + spot). | Anderson Q2; Patrícia Q2 |
| Existem contratos indexáveis (spot/fixo/fórmula CEPEA) | **Verdadeira só em parte.** ~60–90% é fórmula-CEPEA mês a mês. Forward de PREÇO praticamente não existe no Brasil. | Anderson Q3; Patrícia Q3 |
| Precificação mensal, pagamento mês seguinte | **Confirmada.** | Anderson Q3 |

---

## Insights novos (não estavam no estudo preliminar)

### 1. Forward de VOLUME, não de preço
> *Anderson Q3:* "O que existe de 'forward' de verdade é compromisso de VOLUME. Isso é o ativo mais valioso que eu tenho — não é preço travado, é relação travada."

**Implicação:** ferramenta que sugere desenho de bonificação por produtor estratégico antes da entressafra é alavanca real. Trocou o sonho "hedge financeiro" pela alavanca concreta "fidelização de volume com bonificação".

### 2. Sinal isolado de preço não aciona
> *Patrícia Q2:* "Um sinal de mercado dizendo 'MG vai ficar mais cara' só vira ação se chegar com pelo menos um trimestre de antecedência e vier com leitura de qualidade junto, não só preço. Sinal isolado de preço, sem qualidade e sem logística, eu não aciono."

**Implicação:** UI/modelo precisa cruzar **preço + qualidade esperada (CCS/CBT) por bacia + viabilidade logística**. Forecast só de preço perde a Patrícia no primeiro dia.

### 3. Substituição de matéria-prima como alavanca de entressafra
> *Anderson Q4:* "Substituir parte de UHT por leite em pó importado da Argentina via Mercosul em agosto, o que libera leite cru pra produto de maior margem."

**Implicação:** alavanca real que cruza pilares Político (Mercosul) + Econômico (Global Dairy Trade) e abre uma feature defensável: sinalizar janelas em que importar pó da Argentina libera leite cru pra SKU de margem maior.

### 4. Dois traumas DIFERENTES do mesmo evento amplo
- **Anderson (cicatriz técnico-financeira):** consultoria de 2021 errou cenário de entressafra, ele mobilizou time, gastou bonificação, perdeu caixa, tomou bronca. Quer saber **quem assina embaixo da previsão** e **margem de erro histórica**.
- **Patrícia (cicatriz organizacional):** BI de captação de 2019 morreu porque ninguém usou. Quer **plano de adoção** com Anderson como **co-dono, não vítima**.

**Implicação:** ferramenta tem que endereçar AMBOS os traumas. Não basta ter taxa de acerto exposta (resolve Anderson) — precisa de UX que coloca o comprador como co-piloto que anota discordância e ajusta pressuposto (resolve Patrícia).

### 5. Probabilidade declarada de acionamento
> *Patrícia Q4:* "Probabilidade de eu acionar três movimentos de contratação só baseado numa recomendação de modelo, hoje? Baixa — talvez 20%."

Sobe pra **60–70%** com: piloto numa bacia, 3–6 meses, métrica de spread R$/litro definida ANTES de começar, drivers transparentes, Anderson como co-dono.

**Implicação:** rollout sem piloto é morto. Visão do Produto e arquitetura precisam embutir "começar pequeno" como requisito, não opção.

### 6. Alavanca de margem fora de escopo (registrar e descartar do MVP)
> *Patrícia Q3:* "A alavanca mais realista não é criar hedge no leite cru, é trabalhar o lado de baixo — contratos B2B de saída com cláusula de pass-through CEPEA pra travar margem."

**Implicação:** alavanca real, mas é problema do comercial, não do comprador. Fica registrada como roadmap futuro; fora do MVP.

---

## O que mudou na Visão do Produto

**Sai de cena:**
- "Recomenda comprar hoje vs. amanhã" (perecibilidade).
- "Realocação mensal entre regiões" (lead time 60+ dias).
- "Hedge financeiro de leite cru" (não tem mercado).

**Entra em cena:**
- Posicionamento **trimestral** da estratégia de captação.
- Alavancas concretas: desenho de bonificação pré-entressafra, antecipação de cláusulas com cooperativa, sinalização de substituição parcial de matéria-prima.
- Sinal **integrado** (preço + qualidade + logística), nunca isolado.
- Requisitos não-negociáveis de explicabilidade: taxa de acerto histórica exposta, banda de confiança visível, drivers SHAP por pilar, anotação de discordância pelo comprador.

---

## Próxima rodada de discovery (depois de proposta concreta)

O diálogo mediado entre Anderson e Patrícia foi adiado — eles divergiram pouco nas premissas, divergiram nos traumas. O valor de colocá-los frente a frente aumenta quando houver **proposta concreta** (telas, recomendação modelo) — aí o atrito entre "Anderson resistindo ao detalhe operacional" e "Patrícia cobrando defensibilidade" vira sinal útil pra refinar features.
