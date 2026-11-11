# Acarajé Bomber — plano do site

## Direção

**Direções consideradas:** editorial tropical de rua (0,07); arcade neon retrô (0,06); cartaz de bloco afro contemporâneo (0,08). Foi escolhida a primeira: um editorial tropical de rua, com creme de papel, laranja dendê, teal e azul-noite.

**Movimento:** cartaz cultural de Salvador misturado a landing page editorial, com assimetria entre texto grande e uma ilustração de arena.

**Princípios:** contraste quente/frio; tipografia grande com itálico serifado como tempero; textura visual de rua sem fotografia; chamada para jogar sempre visível.

**Paleta:** creme cria respiro de papel; laranja é a assinatura própria do jogo; teal remete às fachadas e ao mar; azul-noite dá sensação de arena e legibilidade.

**Layout:** navegação enxuta, hero dividido entre manifesto e cena ilustrada; seções em faixas com ritmo vertical; os mapas viram cartas de arena e os supers viram uma lista de seleção.

**Interação:** CTA leva direto ao jogo original; menus da landing page fazem rolagem suave; FAQ abre uma resposta por vez; o jogo é mantido separado em `/game/` para preservar o PWA entregue.

**Tipografia/voz:** sans geométrica para interface e uma serifada em itálico para palavras de impacto. Voz curta, confiante e com referências leves ao axé, sem caricaturar Salvador.

## Implementação

- `client/src/pages/Home.tsx`: landing page oficial com missão, como jogar, mapas, supers, instalação e FAQ.
- `client/src/pages/Game.tsx`: moldura fullscreen que carrega o HTML original em `client/public/game/index.html`.
- `client/public/game/`: cópia do PWA enviado, incluindo manifest, service worker e ícone.
- `client/src/index.css`: sistema visual responsivo e controles de mobile.
- `client/public/manus-routes.json`: manifesto das rotas `/` e `/game/`.
- IA do bot: o código original foi preservado, com correção localizada para provar uma rota de fuga antes de plantar bomba, reservar a primeira casa da fuga e replanejar quando a próxima casa entra em perigo.
