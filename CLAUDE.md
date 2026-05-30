# Contexto para sessões do Claude Code

Este arquivo é carregado automaticamente em toda sessão do Claude Code neste repo. Serve para orientação operacional. Os artefatos de produto vivem em `docs/`.

---

## Onde começar

1. **`ROADMAP.md`** — fonte da verdade sobre estado do projeto, fases, próximos passos e como conversar com as personas. Leia primeiro.
2. **`docs/00-estudo-preliminar.md`** — estudo de domínio: a virada da perecibilidade, fontes reais de dado por pilar, esboço de arquitetura de viabilidade.
3. **`docs/discovery/`** — duas rodadas de discovery com personas adversariais. A síntese (`00-sintese.md`) consolida premissas validadas/refutadas.
4. **`docs/lean-inception/`** — artefatos do Lean Inception (visão, escopo, personas canvas).

Estado atualizado das fases está sempre em `ROADMAP.md §4`.

---

## Leitura da vaga

Designer de Soluções Digitais (AI-First) — `docs/vaga.md`. Não é vaga de DS/ML. Avalia concepção de produto, jornada, prompt engineering, ética/transparência em IA e ponte negócio↔tecnologia. HTML/JS aparece como "noções".

A implicação que orienta todas as decisões: o entregável precisa **comunicar valor** de uma solução tangível, não rodar inferência real. Construir SARIMAX/XGBoost de verdade seria ler o desafio como vaga técnica.

---

## Regras do entregável (do briefing — não negociáveis)

1. **Protótipo em HTML/CSS/JS.** Não Figma, não slides. A "inteligência" é **simulada no front-end** com mocks em JSON e funções JS que fingem o output de modelo.
2. **Documento de arquitetura de viabilidade** (1 página ou aba do protótipo) demonstrando que cada tela tem motor real construível por trás. Mapa tela→motor em `docs/00-estudo-preliminar.md §5`.
3. **Entrega final = 1 link.** O Lean Inception inteiro não é entregue — vive no repo como munição de defesa oral.

---

## Posicionamento da solução

A diferença entre designer e arquiteto de soluções aparece na especificidade técnica. "Pego o avanço das chuvas via satélite" sem citar fonte é promessa de designer. Especificar que dado de chuva por satélite vem de NASA POWER ou CHIRPS, é gratuito, grade ~5 km, atualização diária — isso é arquitetura. Mesma frase, autoridade técnica oposta. Manter esse padrão em toda decisão: **fonte real, plausibilidade técnica, motor construível**.

---

## Princípios não-negociáveis

Detalhados em `ROADMAP.md §3`. Resumo:

1. **A virada da perecibilidade é a espinha do produto.** Vereda apoia estratégia trimestral de captação (alocação, bonificação pré-entressafra, antecipação de cláusula). NÃO é previsor de buy/wait, NÃO é hedge financeiro.
2. **IA simulada no front, motor real documentado.** Toda tela precisa ter motor plausível especificado.
3. **Citar fontes reais de dado** mesmo com mock no protótipo. Lista em `docs/00-estudo-preliminar.md §4`.
4. **Honestidade de incerteza é feature visível**, não disclaimer (banda de confiança, drivers SHAP, taxa de acerto histórica exposta).
5. **Anderson é co-dono, não vítima.** UI permite anotar discordância, ajustar pressuposto, recusar com justificativa.
6. **Entrega final = 1 link.** Lean Inception não é entregue.

---

## Personas como sparring de discovery

Dois subagents disponíveis no Claude Code deste repo (`.claude/agents/`):

- `@anderson-comprador` — Gerente de Captação (perspectiva operacional/chão).
- `@patricia-diretora` — Diretora de Suprimentos (perspectiva executiva).

Foram instruídos para resistir por padrão. Não compram ideia sem prova. Quanto mais vaga a pergunta, mais ácida a resposta. Use para estressar premissas — não para confirmar com viés.

Detalhes de método e teste de calibração em `ROADMAP.md §7`.

---

## Próximo passo

Sempre em `ROADMAP.md §4` (a tarefa marcada como `⏳`). No momento desta nota, o **Lean Inception está fechado** (Fase 3 concluída) — o contrato de escopo final vive em `docs/lean-inception/07-canvas-mvp.md`. O próximo passo é a **Fase 4 (Construção)**: Sessão 1 — setup do protótipo (`prototipo/`, Tailwind + Alpine.js + Chart.js via CDN, navegação SPA leve), seguida da Sessão 2 — mock de dados (`data/*.json` coerentes). Wireframes ASCII das 5 telas CORE em `07-canvas-mvp.md §7`; checklist de features no §6; definition of done no §8.
