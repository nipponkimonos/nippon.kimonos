# Nippon Kimonos e Faixas

Site estático (HTML, CSS e JavaScript puro) para vender kimonos e faixas, com botões de compra ligados a links de pagamento do Mercado Pago. Funciona direto no GitHub Pages, sem build e sem servidor.

## Estrutura

```
/
├── index.html     # Estrutura e textos da página
├── style.css      # Visual do site
├── produtos.js    # >>> SEUS PRODUTOS, PREÇOS E LINKS DO MERCADO PAGO <<<
├── script.js      # Lógica (filtros, cards, botões)
├── img/           # (opcional) suas fotos dos produtos
└── README.md
```

## 1. Criar os links de pagamento no Mercado Pago

1. Entre na sua conta do Mercado Pago.
2. Procure a opção **Link de pagamento** (na área de cobranças/vendas).
3. Crie um link para **cada tamanho ou cor** do produto, informando título (ex.: "Kimono Jiu-Jitsu Azul A2") e valor.
4. Copie o link gerado (normalmente começa com `https://mpago.la/...` ou `https://mpago.li/...`).

> Os menus do Mercado Pago mudam de tempos em tempos. Se não encontrar, procure por "Link de pagamento" na ajuda deles.

## 2. Colocar os links no site

Abra o `produtos.js` e substitua `COLE_O_LINK_AQUI` pelos seus links:

```js
opcoes: [
  { rotulo: "A1", link: "https://mpago.la/SEU_LINK_A1" },
  { rotulo: "A2", link: "https://mpago.la/SEU_LINK_A2" }
]
```

Enquanto um link estiver pendente, o botão "Comprar agora" abre o WhatsApp em vez de quebrar.

Também edite no topo do `produtos.js`: WhatsApp (com 55 + DDD), Instagram e e-mail.

## 3. Adicionar ou remover produtos

Copie um bloco de produto dentro de `PRODUTOS`, mude `id` (único), nome, preço e opções. Para usar foto, coloque a imagem na pasta `img/` e preencha:

```js
imagem: "img/kimono-azul.jpg",
```

Sem foto, o site mostra um desenho do kimono ou da faixa na cor escolhida.

## 4. Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `nippon-kimonos`).
2. Envie todos os arquivos para a raiz do repositório.
3. Vá em **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`, e salve.
5. Em alguns minutos o site fica em `https://SEU_USUARIO.github.io/nippon-kimonos/`.

Para usar domínio próprio, configure em **Settings → Pages → Custom domain**.

## Observações importantes

- Cada link do Mercado Pago tem o preço fixo definido nele. Se mudar o preço no site, mude também no link.
- Como o site é estático, o estoque não é controlado automaticamente. Pelo Mercado Pago você recebe a notificação de cada venda.
- Confira no seu Mercado Pago como coletar o endereço de entrega. Uma opção é pedir o envio dos dados pelo WhatsApp após o pagamento.
- Revise a política de trocas e o prazo de entrega na seção de dúvidas (`index.html`) para refletir sua realidade.
