# É / Não É · Faz / Não Faz — Vereda

> Etapa 2 do Lean Inception. Delimita escopo. Cada linha do "Não é / Não faz" tem origem rastreável na discovery — não é restrição arbitrária, é o que **morreu** quando o Anderson e a Patrícia testaram a ideia.

---

## É

- Plataforma de **apoio à decisão estratégica trimestral** de captação de leite cru.
- **Camada de IA explicável** sobre fontes públicas (CEPEA, BCB-SGS, INMET, NASA POWER, CHIRPS, CONAB, MAPA) + dados internos da indústria (volume captado por bacia, qualidade, custo de frete, contratos vigentes).
- **Sparring estruturado** pro comprador — recomendação + drivers + banda de confiança que ele pode aceitar, ajustar ou recusar com justificativa.
- **Governança auditável** — taxa de acerto histórica visível, owner do modelo declarado, trilha de auditoria de cada recomendação.
- **Integração** com o ciclo de S&OP e com SAP — entra como camada, não como ilha.
- **Ferramenta de defesa pro Comitê** — material acionável que a Patrícia leva pro CFO com hipótese, banda e premissas explícitas.

## Não é

- **Previsor de "comprar hoje vs. amanhã".** ⤷ *Anderson:* "Vaca produz hoje, eu coleto hoje, ou estraga. Esse 'esperar' não existe."
- **Hedge financeiro de leite cru.** ⤷ *Patrícia:* "Não tem futuro líquido na B3. Quem promete hedge financeiro de leite cru no Brasil tá vendendo ilusão."
- **Caixa-preta de IA.** ⤷ *Patrícia:* "Não vou aprovar caixa-preta — preciso poder defender no Comitê e auditar."
- **Substituto do conhecimento de campo do comprador.** ⤷ *Anderson:* "Captação é relação de 10–20 anos com produtor. Modelo matemático não substitui isso."
- **Sistema isolado.** ⤷ *Patrícia:* "Não vou aprovar mais um sistema isolado."
- **Robô de execução.** Nenhuma ação contratual é automática — sempre humano no loop.
- **Réplica de relatório de consultoria** (RaboResearch, Scot). Foco é prescrição contextual à casa, não panorama genérico.
- **Ferramenta para o produtor rural** nem para o varejo. Foco é a indústria captadora.

---

## Faz

- **Forecast trimestral por bacia**, cruzando preço, qualidade esperada (CCS/CBT) e viabilidade logística — não sinal isolado de preço.
- **Recomendações acionáveis** sobre as alavancas reais do comprador:
  - Desenho de bonificação por produtor estratégico para fidelização pré-entressafra.
  - Timing e estrutura de negociação antecipada com cooperativas grandes.
  - Sinalização de janelas para substituição parcial de matéria-prima (leite em pó Mercosul) em pico de seca.
- **Decomposição por pilar** de cada recomendação — quanto cada variável (clima, milho, ENSO, política Mercosul, CEPEA defasado) empurrou o resultado (motor real: SHAP).
- **Simulador what-if** — sliders de cenário ("e se dólar +5%?", "e se La Niña confirmar?", "e se Mais Leite Saudável for renovado?") com re-execução do modelo.
- **Camada de sinal político via LLM** — varre Diário Oficial, MAPA, anúncios de programa setorial, e atribui score de impacto. Tela carrega a fonte clicável.
- **Alerta de incerteza alta** — quando a banda de confiança fica larga, a UI sinaliza explicitamente "modelo sem sinal claro, decida no relacionamento".
- **Memória da decisão** — comprador anota por que aceitou ou refutou cada recomendação; vira input para revisão e calibração futura.
- **Painel de auditoria** — taxa de acerto histórica por horizonte (1T, 2T, 3T), por bacia, por tipo de alavanca.

## Não faz

- **Não decide sozinho.** Toda recomendação espera aceitação humana.
- **Não negocia com produtor nem fecha contrato.** Sai com proposta de termos; quem negocia é o time de campo.
- **Não substitui ERP.** Não gera ordem de compra, não emite nota, não controla pagamento — esse trabalho continua no SAP.
- **Não opera B2B de saída** (cláusula de pass-through CEPEA pro varejo). Patrícia citou como alavanca de margem, mas está fora do problema do comprador — fica para roadmap futuro.
- **Não promete acerto de preço no dia/semana.** Horizonte mínimo útil é trimestral — abaixo disso a incerteza domina.
- **Não cobre commodity estocável** (soja, milho, café) — modelo e narrativa são específicos para o leite cru perecível.
- **Não funciona sem dado interno da indústria.** Pilares públicos sozinhos dão panorama, não prescrição — precisa da telemetria de captação do cliente.

---

## Princípio de corte

> Se uma feature não passa simultaneamente em **(a) endereça uma alavanca real do comprador (não buy/wait)**, **(b) é defensável pra Patrícia no Comitê**, e **(c) não exige construir o que o SAP/Power BI já faz** — fica fora do MVP.
