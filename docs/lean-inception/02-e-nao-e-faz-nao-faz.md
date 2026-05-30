# É / Não É · Faz / Não Faz — Vereda

> Etapa 2 do Lean Inception. Delimita escopo. Cada linha do "Não é / Não faz" tem origem rastreável na discovery — não é restrição arbitrária, é o que **morreu** quando o Anderson e a Patrícia testaram a ideia.

---

## É

- Plataforma de **apoio à decisão estratégica trimestral** de captação de leite cru.
- **Camada de IA explicável** sobre fontes públicas (CEPEA, BCB-SGS, INMET, NASA POWER, CHIRPS, CONAB, MAPA, Global Dairy Trade) + **dados internos obrigatórios na v1** (qualidade laboratorial por produtor — CCS/CBT/gordura/proteína; linha/rota de captação com ociosidade e R$/litro; contratos vigentes; capacidade fabril por unidade).
- **Sparring estruturado que aprende.** Recomendação + drivers + banda de confiança que o comprador aceita, ajusta ou recusa com justificativa — e a discordância **re-calibra o modelo no ciclo seguinte**. Diário de bordo passivo não é sparring (Anderson).
- **Governança auditável** — taxa de acerto histórica visível, owner do modelo declarado, **trilha de auditoria formal** de cada recomendação (snapshot do cenário, banda, drivers, decisão, justificativa, resultado realizado — reconstituível por auditoria interna ou board).
- **Integração** com o ciclo de S&OP e com SAP — entra como camada, não como ilha. Escopo de integração dimensionado (tabelas, frequência, owner de TI) — não "API simples".
- **One-pager exportável de defesa pro Comitê** — relatório trimestral concreto que a Patrícia leva pro CFO com hipótese de impacto em R$/litro, banda, drivers, taxa de acerto histórica e premissas explícitas. Artefato físico, não promessa.

## Não é

- **Previsor de "comprar hoje vs. amanhã".** ⤷ *Anderson:* "Vaca produz hoje, eu coleto hoje, ou estraga. Esse 'esperar' não existe."
- **Hedge financeiro de leite cru.** ⤷ *Patrícia:* "Não tem futuro líquido na B3. Quem promete hedge financeiro de leite cru no Brasil tá vendendo ilusão."
- **Substituto de contrato de longo prazo com cooperativa nem de cláusula de revisão CEPEA em contrato B2B.** ⤷ *Patrícia (2ª rodada):* indexação contratual é jurídico-comercial, não preditiva. Vereda subsidia a negociação, não substitui a cláusula.
- **Previsão de demanda de produto acabado.** ⤷ *Patrícia:* escopo é matéria-prima na entrada. Demanda de UHT/leite em pó/derivado é problema de Comercial e Marketing — se entrar aqui, escopo explode.
- **Caixa-preta de IA.** ⤷ *Patrícia:* "Não vou aprovar caixa-preta — preciso poder defender no Comitê e auditar."
- **Substituto do conhecimento de campo do comprador.** ⤷ *Anderson:* "Captação é relação de 10–20 anos com produtor. Modelo matemático não substitui isso." O Vereda **complementa o julgamento de campo com leitura sistematizada** — não disputa território.
- **CRM de produtor** nem ferramenta de gestão de relacionamento. ⤷ *Anderson:* "Relação com produtor é minha e do técnico de campo, não plataforma." Sem cadastro de visita, sem histórico de conversa, sem nada que cheire a CRM.
- **Sistema isolado.** ⤷ *Patrícia:* "Não vou aprovar mais um sistema isolado."
- **Robô de execução.** Nenhuma ação contratual é automática — sempre humano no loop.
- **Réplica de relatório de consultoria** (RaboResearch, Scot). Foco é prescrição contextual à casa, não panorama genérico — **mas dialoga com essas fontes** (Anderson: "Patrícia LÊ Rabobank — contradição sem explicação vira problema meu na reunião").
- **Ferramenta para o produtor rural** nem para o varejo. Foco é a indústria captadora.

---

## Faz

- **Forecast trimestral por bacia**, cruzando preço, qualidade esperada (CCS/CBT/gordura/proteína por produtor) e viabilidade logística (rota de captação, ociosidade, R$/litro de frete) — sinal **integrado**, não isolado.
- **Leitura de linha/rota de captação** — ociosidade por rota, R$/litro de frete, capacidade. Recomendação que ignora restrição logística é descartada de saída (Anderson: "captação é logística antes de ser preço").
- **Integração com laboratório de qualidade** — leitura de CCS, CBT, gordura e proteína por produtor, por coleta. É o que alimenta o desenho manual de bonificação que o Anderson faz e a sazonalidade de qualidade na seca.
- **Sinalização de pressão competitiva e risco de perda de produtor.** Por bacia e por produtor estratégico: Italac/Piracanjuba/Embaré ofertando próximo, movimento da concorrência, projeção de churn. Vereda **NÃO** sugere valor de bonificação — Anderson desenha a tabela a partir do sinal.
- **Subsídio à negociação com cooperativa.** Leitura antecipada de pressão da contraparte (ex.: cooperativa X com déficit projetado de volume no Q3) — Anderson chega na conversa com a faca certa. **Não recomenda timing** (quem dita é a outra ponta) nem roteiro de negociação.
- **Sinal multi-área de substituição parcial** (leite em pó Mercosul em pico de seca). Cruza Político (Mercosul), Econômico (Global Dairy Trade, câmbio), capacidade fabril e posicionamento de marca. Sai pra **mesa de S&OP com Industrial e Marketing** — não é alavanca exclusiva do comprador.
- **Decomposição por pilar** de cada recomendação — quanto cada variável (clima, milho, ENSO, política Mercosul, CEPEA defasado, risco competitivo) empurrou o resultado. **Motor real: SHAP sobre ensemble SARIMAX + gradient boosting**. Se houver DL ou LLM no driver, sai do MVP — explicabilidade do SHAP fica frouxa.
- **Simulador what-if com até 4 sliders** — câmbio (BRL/USD), milho (preço grão futuro), ENSO (categórico La Niña / neutro / El Niño), Mercosul (probabilidade de alíquota ou cota). Mais que isso vira videogame em reunião de diretor.
- **Camada de sinal político via LLM em quarentena** — varre Diário Oficial, MAPA, anúncios de programa setorial com **pauta restrita** (Mercosul, política Conab, sanitário, tributário MG/GO/PR). Entra como **sinal observado** com fonte clicável e leitura humana — **não como driver direto da recomendação** até provar acurácia em ciclo controlado.
- **Alerta de incerteza alta** — quando a banda de confiança fica larga, a UI sinaliza explicitamente "modelo sem sinal claro, decida no relacionamento".
- **Memória da decisão como trilha auditável formal.** Para cada recomendação: snapshot do cenário, banda, drivers, decisão do Anderson, justificativa, resultado realizado. Reconstituível por auditoria interna ou board em safra passada — não é anotação de bordo.
- **Painel de auditoria** — taxa de acerto histórica por horizonte (1T, 2T, 3T), por bacia, por tipo de alavanca.
- **One-pager exportável de defesa pro Comitê** — relatório trimestral com hipótese de impacto em R$/litro, banda, drivers, taxa de acerto e premissas. Patrícia leva pro CFO.

## Não faz

- **Não decide sozinho.** Toda recomendação espera aceitação humana.
- **Não negocia com produtor nem fecha contrato.**
- **Não conversa direto com produtor por canal nenhum.** Sem WhatsApp automatizado, sem SMS, sem e-mail, sem notificação. ⤷ *Anderson:* "Se aparecer mensagem da 'plataforma' no celular do seu Joaquim em Patos, eu perco produtor." Relação com produtor é do comprador e do técnico de campo.
- **Não substitui o ciclo S&OP nem o Comitê de Captação mensal.** ⤷ *Patrícia:* é insumo qualificado pra deliberação humana — não substitui a deliberação.
- **Não substitui ERP.** Não gera ordem de compra, não emite nota, não controla pagamento — esse trabalho continua no SAP.
- **Não opera B2B de saída** (cláusula de pass-through CEPEA pro varejo). Patrícia citou como alavanca de margem, mas está fora do problema do comprador — fica para roadmap futuro.
- **Não promete acerto de preço no dia/semana.** Horizonte mínimo útil é trimestral — abaixo disso a incerteza domina.
- **Não cobre commodity estocável** (soja, milho, café) — modelo e narrativa são específicos para o leite cru perecível.
- **Não funciona sem dado interno da indústria.** Pilares públicos sozinhos dão panorama, não prescrição — precisa da telemetria de captação do cliente. **Implica plano de contingência** se SAP cair ou integração quebrar — não só disclaimer.

---

## Princípio de corte

> Se uma feature não passa simultaneamente em **(a) endereça uma alavanca real do comprador (não buy/wait)**, **(b) é defensável pra Patrícia no Comitê**, e **(c) não exige construir o que o SAP/Power BI já faz** — fica fora do MVP.
