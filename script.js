/* =====================================================
   NIPPON KIMONOS E FAIXAS - COMPORTAMENTO DO SITE
   (normalmente você NÃO precisa editar este arquivo)
   ===================================================== */

(function () {
  'use strict';

  const grade = document.getElementById('grade');
  const filtros = document.getElementById('filtros');
  const formatarPreco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  /* ---------- Desenhos (SVG) quando não há foto ---------- */
  function desenhoKimono(cor) {
    const contorno = '#2a2522';
    const linha = cor.toLowerCase() === '#1a1a1a' ? '#555' : contorno;
    return `
      <svg viewBox="0 0 200 200" role="img" aria-label="Kimono">
        <path d="M70 22 L100 42 L130 22 L186 56 L172 112 L150 100 L150 186 L50 186 L50 100 L28 112 L14 56 Z"
              fill="${cor}" stroke="${linha}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M70 22 L116 118 M130 22 L88 118" fill="none" stroke="${linha}" stroke-width="3" stroke-linecap="round"/>
        <path d="M100 42 L100 118" fill="none" stroke="${linha}" stroke-width="2" opacity=".35"/>
        <rect x="50" y="112" width="100" height="11" fill="#111" stroke="#000" stroke-width="1.5"/>
      </svg>`;
  }

  function desenhoFaixa(cor) {
    const contorno = '#2a2522';
    return `
      <svg viewBox="0 0 200 200" role="img" aria-label="Faixa">
        <path d="M96 100 L58 160 L78 166 L108 112 Z" fill="${cor}" stroke="${contorno}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M104 100 L142 160 L122 166 L92 112 Z" fill="${cor}" stroke="${contorno}" stroke-width="3" stroke-linejoin="round"/>
        <rect x="8" y="84" width="184" height="22" rx="4" fill="${cor}" stroke="${contorno}" stroke-width="3"/>
        <rect x="82" y="78" width="36" height="34" rx="8" fill="${cor}" stroke="${contorno}" stroke-width="3"/>
      </svg>`;
  }

  /* ---------- Helpers ---------- */
  function escapar(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
  }

  function linkValido(link) {
    return typeof link === 'string' && /^https?:\/\//i.test(link.trim());
  }

  /* ---------- Cards ---------- */
  function criarCard(produto) {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.categoria = produto.categoria;

    const opcaoInicial = produto.opcoes[0] || {};
    const corInicial = opcaoInicial.cor || produto.cor;

    const imagemHtml = produto.imagem
      ? `<img src="${escapar(produto.imagem)}" alt="${escapar(produto.nome)}" loading="lazy">`
      : (produto.categoria === 'faixa' ? desenhoFaixa(corInicial) : desenhoKimono(corInicial));

    const opcoesHtml = produto.opcoes
      .map((op, i) => `<option value="${i}">${escapar(op.rotulo)}</option>`)
      .join('');

    const parcela = CONFIG.parcelasExibidas > 1
      ? `<p class="card__parcela">ou até ${CONFIG.parcelasExibidas}x de ${formatarPreco.format(produto.preco / CONFIG.parcelasExibidas)} (condições no Mercado Pago)</p>`
      : '';

    card.innerHTML = `
      <div class="card__imagem">
        <span class="card__tag">${escapar(produto.tag || '')}</span>
        ${imagemHtml}
      </div>
      <div class="card__corpo">
        <h3 class="card__nome">${escapar(produto.nome)}</h3>
        <p class="card__desc">${escapar(produto.descricao)}</p>
        <p class="card__preco">${formatarPreco.format(produto.preco)}</p>
        ${parcela}
        <div class="card__campo">
          <label for="op-${produto.id}">${escapar(produto.rotuloOpcao || 'Opção')}</label>
          <select id="op-${produto.id}">${opcoesHtml}</select>
        </div>
        <button class="btn btn--primario" type="button">Comprar agora</button>
      </div>`;

    const select = card.querySelector('select');
    const botao = card.querySelector('button');
    const areaImagem = card.querySelector('.card__imagem');

    /* Troca a cor do desenho quando a opção tem cor própria */
    select.addEventListener('change', () => {
      const op = produto.opcoes[Number(select.value)];
      if (!produto.imagem && op && op.cor) {
        const novo = produto.categoria === 'faixa' ? desenhoFaixa(op.cor) : desenhoKimono(op.cor);
        const svg = areaImagem.querySelector('svg');
        if (svg) svg.outerHTML = novo;
      }
    });

    /* Botão de compra: abre o link do Mercado Pago */
    botao.addEventListener('click', () => {
      const op = produto.opcoes[Number(select.value)];
      if (!op || !linkValido(op.link)) {
        alert('Este produto ainda não está disponível para compra online. Fale com a gente pelo WhatsApp!');
        window.open(montarLinkWhatsapp(`Olá! Tenho interesse em: ${produto.nome} (${op ? op.rotulo : ''}).`), '_blank', 'noopener');
        return;
      }
      window.open(op.link.trim(), '_blank', 'noopener');
    });

    return card;
  }

  function renderizar(filtro) {
    grade.innerHTML = '';
    const lista = PRODUTOS.filter(p => filtro === 'todos' || p.categoria === filtro);

    if (!lista.length) {
      grade.innerHTML = '<p class="vazio">Nenhum produto nesta categoria no momento.</p>';
      return;
    }
    lista.forEach(p => grade.appendChild(criarCard(p)));
  }

  filtros.addEventListener('click', (e) => {
    const botao = e.target.closest('.filtro');
    if (!botao) return;
    filtros.querySelectorAll('.filtro').forEach(b => {
      b.classList.remove('ativo');
      b.setAttribute('aria-selected', 'false');
    });
    botao.classList.add('ativo');
    botao.setAttribute('aria-selected', 'true');
    renderizar(botao.dataset.filtro);
  });

  /* ---------- Contatos ---------- */
  function montarLinkWhatsapp(mensagem) {
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem || CONFIG.whatsappMensagem)}`;
  }

  function configurarContatos() {
    const wpp = montarLinkWhatsapp();
    document.getElementById('linkWhatsapp').href = wpp;
    document.getElementById('whatsFlutuante').href = wpp;
    document.getElementById('linkInstagram').href = CONFIG.instagram;
    document.getElementById('linkEmail').href = `mailto:${CONFIG.email}`;
  }

  /* ---------- Menu mobile ---------- */
  function configurarMenu() {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    btn.addEventListener('click', () => {
      const aberto = menu.classList.toggle('aberto');
      btn.setAttribute('aria-expanded', String(aberto));
    });

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('aberto');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Início ---------- */
  document.getElementById('ano').textContent = new Date().getFullYear();
  configurarContatos();
  configurarMenu();
  renderizar('todos');
})();
