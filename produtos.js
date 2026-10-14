/* =====================================================
   NIPPON KIMONOS E FAIXAS - CONFIGURAÇÃO E PRODUTOS
   =====================================================
   É AQUI QUE VOCÊ EDITA TUDO:
   1) Seus contatos (CONFIG)
   2) Seus produtos e os links de pagamento do Mercado Pago

   Para cada tamanho/cor, cole o link de pagamento do
   Mercado Pago no campo "link". Exemplo:
   link: "https://mpago.la/1AbCdEf"
   ===================================================== */

const CONFIG = {
  // WhatsApp com código do país + DDD + número, só números (ex.: 5581999999999)
  whatsapp: "5581999999999",
  whatsappMensagem: "Olá! Vim pelo site da Nippon Kimonos e Faixas e gostaria de ajuda.",
  instagram: "https://instagram.com/SEU_PERFIL",
  email: "contato@seudominio.com.br",
  // Parcelas exibidas como informação no card (use 0 para ocultar)
  parcelasExibidas: 3
};

/* Marcador usado enquanto você ainda não colou o link real */
const LINK_PENDENTE = "COLE_O_LINK_AQUI";

/*
  Campos de cada produto:
  - id:         identificador único (sem espaços)
  - categoria:  "kimono" ou "faixa"
  - nome:       nome exibido
  - descricao:  texto curto
  - preco:      número (ex.: 289.90)
  - cor:        cor do desenho (usada quando não há foto)
  - imagem:     caminho da foto (ex.: "img/kimono-branco.jpg"). Deixe "" para usar o desenho.
  - tag:        etiqueta no canto do card (ex.: "Judô")
  - rotuloOpcao: texto do seletor ("Tamanho" ou "Cor")
  - opcoes:     lista de { rotulo, link } - um link do Mercado Pago para cada opção
*/

const PRODUTOS = [
  /* ---------------- KIMONOS ---------------- */
  {
    id: "kimono-judo-branco",
    categoria: "kimono",
    nome: "Kimono de Judô Branco",
    descricao: "Tecido reforçado, ideal para treinos e competições. Calça e jaqueta inclusas.",
    preco: 289.90,
    cor: "#ffffff",
    imagem: "",
    tag: "Judô",
    rotuloOpcao: "Tamanho",
    opcoes: [
      { rotulo: "A0", link: LINK_PENDENTE },
      { rotulo: "A1", link: LINK_PENDENTE },
      { rotulo: "A2", link: LINK_PENDENTE },
      { rotulo: "A3", link: LINK_PENDENTE },
      { rotulo: "A4", link: LINK_PENDENTE }
    ]
  },
  {
    id: "kimono-jiujitsu-azul",
    categoria: "kimono",
    nome: "Kimono de Jiu-Jitsu Azul",
    descricao: "Trançado resistente, costuras reforçadas e ótimo caimento para o treino diário.",
    preco: 329.90,
    cor: "#1f4e9c",
    imagem: "",
    tag: "Jiu-Jitsu",
    rotuloOpcao: "Tamanho",
    opcoes: [
      { rotulo: "A0", link: LINK_PENDENTE },
      { rotulo: "A1", link: LINK_PENDENTE },
      { rotulo: "A2", link: LINK_PENDENTE },
      { rotulo: "A3", link: LINK_PENDENTE },
      { rotulo: "A4", link: LINK_PENDENTE }
    ]
  },
  {
    id: "kimono-jiujitsu-preto",
    categoria: "kimono",
    nome: "Kimono de Jiu-Jitsu Preto",
    descricao: "Clássico e discreto, com tecido durável e acabamento firme.",
    preco: 329.90,
    cor: "#1a1a1a",
    imagem: "",
    tag: "Jiu-Jitsu",
    rotuloOpcao: "Tamanho",
    opcoes: [
      { rotulo: "A0", link: LINK_PENDENTE },
      { rotulo: "A1", link: LINK_PENDENTE },
      { rotulo: "A2", link: LINK_PENDENTE },
      { rotulo: "A3", link: LINK_PENDENTE },
      { rotulo: "A4", link: LINK_PENDENTE }
    ]
  },
  {
    id: "kimono-karate-branco",
    categoria: "kimono",
    nome: "Kimono de Karatê Branco",
    descricao: "Leve e macio, com boa liberdade de movimento para kata e kumite.",
    preco: 219.90,
    cor: "#ffffff",
    imagem: "",
    tag: "Karatê",
    rotuloOpcao: "Tamanho",
    opcoes: [
      { rotulo: "A0", link: LINK_PENDENTE },
      { rotulo: "A1", link: LINK_PENDENTE },
      { rotulo: "A2", link: LINK_PENDENTE },
      { rotulo: "A3", link: LINK_PENDENTE }
    ]
  },
  {
    id: "kimono-infantil-branco",
    categoria: "kimono",
    nome: "Kimono Infantil Branco",
    descricao: "Confortável e resistente, perfeito para quem está começando.",
    preco: 149.90,
    cor: "#ffffff",
    imagem: "",
    tag: "Infantil",
    rotuloOpcao: "Tamanho",
    opcoes: [
      { rotulo: "M0", link: LINK_PENDENTE },
      { rotulo: "M1", link: LINK_PENDENTE },
      { rotulo: "M2", link: LINK_PENDENTE },
      { rotulo: "M3", link: LINK_PENDENTE },
      { rotulo: "M4", link: LINK_PENDENTE }
    ]
  },

  /* ---------------- FAIXAS ---------------- */
  {
    id: "faixa-adulto",
    categoria: "faixa",
    nome: "Faixa Adulto",
    descricao: "Faixa de algodão com costuras firmes. Escolha a cor da sua graduação.",
    preco: 49.90,
    cor: "#ffffff",
    imagem: "",
    tag: "Adulto",
    rotuloOpcao: "Cor",
    opcoes: [
      { rotulo: "Branca",  link: LINK_PENDENTE, cor: "#ffffff" },
      { rotulo: "Azul",    link: LINK_PENDENTE, cor: "#1f4e9c" },
      { rotulo: "Roxa",    link: LINK_PENDENTE, cor: "#6b2d9c" },
      { rotulo: "Marrom",  link: LINK_PENDENTE, cor: "#6b4226" },
      { rotulo: "Preta",   link: LINK_PENDENTE, cor: "#111111" }
    ]
  },
  {
    id: "faixa-judo-colorida",
    categoria: "faixa",
    nome: "Faixa de Judô",
    descricao: "Faixas nas cores tradicionais do judô, para todas as graduações.",
    preco: 44.90,
    cor: "#f2c200",
    imagem: "",
    tag: "Judô",
    rotuloOpcao: "Cor",
    opcoes: [
      { rotulo: "Amarela", link: LINK_PENDENTE, cor: "#f2c200" },
      { rotulo: "Laranja", link: LINK_PENDENTE, cor: "#f28c00" },
      { rotulo: "Verde",   link: LINK_PENDENTE, cor: "#2e8b3d" },
      { rotulo: "Azul",    link: LINK_PENDENTE, cor: "#1f4e9c" },
      { rotulo: "Marrom",  link: LINK_PENDENTE, cor: "#6b4226" },
      { rotulo: "Preta",   link: LINK_PENDENTE, cor: "#111111" }
    ]
  },
  {
    id: "faixa-infantil",
    categoria: "faixa",
    nome: "Faixa Infantil",
    descricao: "Tamanho ideal para crianças, com cores e acabamento resistentes.",
    preco: 34.90,
    cor: "#f28c00",
    imagem: "",
    tag: "Infantil",
    rotuloOpcao: "Cor",
    opcoes: [
      { rotulo: "Branca",  link: LINK_PENDENTE, cor: "#ffffff" },
      { rotulo: "Amarela", link: LINK_PENDENTE, cor: "#f2c200" },
      { rotulo: "Laranja", link: LINK_PENDENTE, cor: "#f28c00" },
      { rotulo: "Verde",   link: LINK_PENDENTE, cor: "#2e8b3d" }
    ]
  }
];
