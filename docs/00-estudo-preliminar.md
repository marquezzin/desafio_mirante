# Estudo preliminar — desafio de IA para captação de leite cru

> Levantamento de contexto sobre o setor de leite cru no Brasil e enquadramento do problema, conduzido antes do discovery com personas. Inclui fontes reais de dado por pilar (Econômico, Climático, Agropecuário, Político) e o esboço de arquitetura de viabilidade que sustenta o protótipo.
>
> Método: pesquisa apoiada por LLM (Claude) como assistente de levantamento bibliográfico e cruzamento de hipóteses. As escolhas de enquadramento — em especial a virada da perecibilidade — foram validadas posteriormente em duas rodadas de discovery com personas adversariais ancoradas no setor (vide `discovery/`).

---

## 1. O problema

Um grande player de laticínios enfrenta dificuldade na compra de leite cru. A volatilidade de preço comprime a margem. Hoje os compradores decidem com base em histórico de preço, sem incorporar de forma sistematizada fatores externos. O briefing pede uma solução de IA que correlacione preditivamente quatro pilares: **Político, Econômico, Climático, Agropecuário**.

O entregável é um protótipo funcional em **HTML/CSS/JS** simulando a experiência do comprador, com a "inteligência" simulada no front-end, acompanhado de um documento de arquitetura de viabilidade que demonstra que cada tela tem um motor real construível por trás.

---

## 2. A virada — leite cru é perecível, e isso muda o problema

O briefing embute uma solução disfarçada de problema:

- **Dor real:** volatilidade do preço do leite cru comprime a margem.
- **Causa assumida:** "compradores ignoram fatores externos."
- **Solução já embutida:** "correlacionar preditivamente os 4 pilares" para apoiar decisão de compra.

A análise do domínio revela um problema com essa formulação:

Commodity estocável (soja, milho) se compra e se guarda — "comprar agora vs. esperar" faz sentido. **Leite cru não.** A vaca produz todo dia, o leite existe quer o laticínio compre ou não, precisa ser coletado e processado em 24–48 horas, e não captar queima a relação com o produtor. Um comprador de leite cru **não pode "esperar o preço cair".**

Logo, a pergunta "compro hoje ou amanhã?" não cabe nesse produto. O que o comprador efetivamente controla:

- **Alocação de volume:** quanto captar de qual região/cooperativa no ciclo (preço varia entre MG, GO, RS, SP, com trade-off logístico).
- **Estrutura de contrato:** spot vs. preço fixo vs. fórmula indexada ao CEPEA.
- **Timing de negociação/renovação:** leite costuma ser precificado mensalmente, pago no mês seguinte.
- **Compromissos forward:** travar volume antes da **entressafra** (preço dispara) vs. a **safra das águas** (sobra leite, preço cai).

**Implicação:** o valor da IA não é "botão de comprar hoje". É **posicionar a estratégia de captação (procurement) sob incerteza para os próximos meses**, sobretudo em torno do ciclo safra/entressafra. A IA informa decisão de **contratação e alocação**, não spot diário.

---

## 3. Reenquadramento do problema

> Compradores de leite cru de um grande laticínio precisam decidir **quanto captar, de quem/onde, e sob qual estrutura de contrato**, num produto perecível que não permite estocagem nem "esperar o preço melhorar". Hoje essas decisões são tomadas de forma intuitiva, inconsistente entre compradores e ancoradas em preço passado — sem um framework comum que antecipe o ciclo safra/entressafra e os fatores político-econômico-climático-agropecuários que moldam o custo dos próximos meses. O resultado é margem comprimida e imprevisível.
>
> **Oportunidade:** uma ferramenta de IA que apoie o comprador a posicionar sua **estratégia de captação** (alocação, contratação, forward) com antecedência, traduzindo os 4 pilares em recomendações acionáveis e explicáveis.

---

## 4. Os 4 pilares e suas fontes reais de dado

Levantamento de fontes públicas reais para cada pilar. O protótipo usa dados mockados, mas a arquitetura de produção se sustenta em fontes verificáveis:

- **Econômico:** câmbio (BCB/PTAX); Selic e IPCA (API BCB-SGS, gratuita); **Indicador do Leite CEPEA/ESALQ** (referência oficial do setor); milho e farelo de soja (CEPEA + futuros B3); leite em pó internacional (**Global Dairy Trade**, leilões quinzenais).
- **Climático:** INMET (estações + previsão); precipitação por satélite (**NASA POWER / CHIRPS**, grade ~5 km, diária, gratuita); índice ENSO El Niño/La Niña (NOAA).
- **Agropecuário:** CONAB (oferta/produção); IBGE PPM (rebanho); custo de produção (Embrapa/CEPEA).
- **Político:** o mais difícil de quantificar — e onde a camada GenAI agrega mais. LLM varrendo notícias, Diário Oficial e anúncios do MAPA, extraindo eventos (mudança de imposto/ICMS, política de importação Mercosul, programa Mais Leite Saudável) e atribuindo score de impacto.

---

## 5. Arquitetura de viabilidade

Esboço técnico que sustenta o protótipo: cada tela tem um motor real construível por trás.

**Ingestão:** APIs públicas dos 4 pilares (seção 4) → feature store.

**Inteligência:**
- Forecast de preço/custo: série temporal com variáveis exógenas — SARIMAX, Prophet ou gradient boosting (LightGBM) com features defasadas.
- Explicabilidade: **SHAP values** — alimentam a "decomposição por pilar" na tela (quanto cada variável empurrou a previsão). Tela honesta, motor honesto.
- Camada GenAI/LLM: extração de sinal político, explicação em linguagem natural ("por que essa recomendação?") e assistente conversacional.

**Serving:** API entregando forecast + contribuições SHAP ao front. Simulador de cenário ("dólar +5%") = re-execução do modelo com input perturbado (what-if real).

### Mapa tela → motor

| Tela (protótipo simula no front) | Motor real por trás (produção) |
|---|---|
| Recomendação de estratégia (ex.: "antecipar contratação 60d") | Forecast + regra de decisão sobre a banda de confiança |
| Banda de confiança no gráfico | Intervalo de predição do modelo |
| Decomposição por pilar (+/–) | SHAP values |
| Simulador de cenário (sliders) | What-if: modelo re-executado com input alterado |
| Assistente / "por que isso?" | LLM com prompt sobre os outputs do modelo |
| Pilar político | NLP/LLM de extração de eventos sobre fontes oficiais |

---

## 6. Hipóteses a validar com stakeholders

Como não há acesso a stakeholders reais do laticínio, as premissas foram declaradas explicitamente para validação posterior. Estas hipóteses entraram na 1ª rodada de discovery com as personas simuladas (vide `discovery/00-sintese.md` para o veredito):

- O comprador tem autonomia para alocar volume entre regiões/cooperativas.
- Existem contratos indexáveis (spot / fixo / fórmula CEPEA) disponíveis na operação.
- A precificação acontece em ciclo mensal com pagamento no mês seguinte.
- Sessão com a área de compras validaria: alavancas reais de decisão, horizonte de planejamento, e o que hoje trava a antecipação.

---

## 7. KPIs e ética/transparência

**KPIs candidatos:**
- % de proteção/estabilidade de margem.
- Redução do custo médio de aquisição vs. benchmark CEPEA.
- Tempo de decisão.
- % de volume sob contrato favorável.

**Ética, transparência e tratamento de incerteza** entram como **features visíveis** no produto, não como disclaimer:
- Banda de confiança visível em todo forecast (honestidade sobre incerteza).
- Fontes de cada dado expostas.
- "Por que essa recomendação?" clicável em cada output.
- Alerta explícito quando a incerteza é alta.
