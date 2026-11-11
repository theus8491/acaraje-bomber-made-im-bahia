# Acarajé Bomber Bahia — pacote completo

Esta pasta contém o mesmo jogo completo em três formas:

- `index.html`: entrada principal do PWA, responsiva para PC, tablet e celular.
- `acaraje-bomber-bahia-normal.html`: versão completa para PC/desktop; os controles mobile ficam ocultos em computador sem toque.
- `acaraje-bomber-bahia-mobile.html`: versão completa para celular; controles touch, d-pad deslizável e layouts retrato/paisagem.
- `manifest.webmanifest`: configuração do aplicativo instalável.
- `sw.js`: cache offline e atualização do PWA.
- `bomberman-bahia-icon.png`: ícone do aplicativo.

As três versões incluem os mesmos mapas, personagens, bombas, áudio, modos de jogo, PWA e Super Macumba. A diferença é apenas o nome de entrada; o jogo detecta automaticamente se está em PC ou dispositivo touch para mostrar os controles corretos.

## Publicação

Para usar como PWA, envie todos os arquivos para a mesma pasta de um site HTTPS e abra `index.html`. Para abrir diretamente uma versão, use `acaraje-bomber-bahia-normal.html` ou `acaraje-bomber-bahia-mobile.html`.

## Bots e dificuldade

No modo **Contra o Bot**, escolha de 1 a 4 bots e a dificuldade **Fácil**, **Normal** ou **Difícil**. Cada bot pode receber um super diferente na aba **⚡ Supers**.
