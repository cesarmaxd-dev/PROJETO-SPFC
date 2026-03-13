document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initPageTransitions();
  initReveal();
  renderMatches();
  renderSquad();
  initSquadFilters();
  renderShop();
  initShopFilters();
  renderGamesPage();
});

function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function initPageTransitions() {
  const loader = document.querySelector(".page-loader");
  const links = document.querySelectorAll('a[href$=".html"]');

  if (!loader) return;

  window.addEventListener("pageshow", () => {
    loader.classList.remove("is-active");
  });

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const url = this.getAttribute("href");
      if (!url || url.startsWith("#")) return;

      e.preventDefault();
      loader.classList.add("is-active");

      setTimeout(() => {
        window.location.href = url;
      }, 420);
    });
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((el) => observer.observe(el));
}

const matchesData = [
  {
    competition: "Brasileirão 2026",
    date: "12/03/2026",
    time: "20:00",
    home: "São Paulo",
    away: "Chapecoense",
    stadium: "Canindé",
    status: "Próximo jogo"
  },
  {
    competition: "Brasileirão 2026",
    date: "15/03/2026",
    time: "20:30",
    home: "Red Bull Bragantino",
    away: "São Paulo",
    stadium: "Cícero S. Marques",
    status: "Em breve"
  },
  {
    competition: "Brasileirão 2026",
    date: "18/03/2026",
    time: "20:00",
    home: "Atlético-MG",
    away: "São Paulo",
    stadium: "Arena MRV",
    status: "Agendado"
  },
  {
    competition: "Brasileirão 2026",
    date: "22/03/2026",
    time: "18:30",
    home: "São Paulo",
    away: "Cruzeiro",
    stadium: "MorumBIS",
    status: "Agendado"
  },
  {
    competition: "Brasileirão 2026",
    date: "26/03/2026",
    time: "21:00",
    home: "Fluminense",
    away: "São Paulo",
    stadium: "Maracanã",
    status: "Agendado"
  }
];

function renderMatches() {
  const container = document.getElementById("nextMatches");
  if (!container) return;

  const nextThree = matchesData.slice(0, 3);

  container.innerHTML = nextThree.map((match) => `
    <article class="match-card">
      <div class="match-top">
        <span class="match-badge">${match.competition}</span>
        <span class="match-date">${match.date}</span>
      </div>

      <div class="teams">
        <strong>${match.home}</strong>
        <strong>x ${match.away}</strong>
      </div>

      <div class="match-meta">
        <span><strong>Horário:</strong> ${match.time}</span>
        <span><strong>Estádio:</strong> ${match.stadium}</span>
      </div>
    </article>
  `).join("");
}

const squadData = [
  {
    number: 23,
    name: "Rafael",
    role: "Goleiro",
    age: 36,
    country: "Brasil",
    type: "Goleiro",
    image: "Imagens/jogadores/Rafael.webp"
  },
  {
    number: 1,
    name: "Carlos Coronel",
    role: "Goleiro",
    age: 29,
    country: "Paraguai",
    type: "Goleiro",
    image: "Imagens/jogadores/Carlos-Coronel.webp"
  },
  {
    number: 28,
    name: "Alan Franco",
    role: "Zagueiro",
    age: 29,
    country: "Argentina",
    type: "Defensor",
    image: "Imagens/jogadores/Alan-Franco.webp"
  },
  {
    number: 4,
    name: "Dória",
    role: "Zagueiro",
    age: 31,
    country: "Brasil",
    type: "Defensor",
    image: "Imagens/jogadores/Doria.webp"
  },
  {
    number: 5,
    name: "Arboleda",
    role: "Zagueiro",
    age: 34,
    country: "Equador",
    type: "Defensor",
    image: "Imagens/jogadores/Arboleda.webp"
  },
  {
    number: 18,
    name: "Wendell",
    role: "Lateral-esquerdo",
    age: 32,
    country: "Brasil",
    type: "Defensor",
    image: "Imagens/jogadores/Wendell.webp"
  },
  {
    number: 19,
    name: "Lucas Ramon",
    role: "Lateral-direito",
    age: 31,
    country: "Brasil",
    type: "Defensor",
    image: "Imagens/jogadores/Lucas-Ramon.webp"
  },
  {
    number: 21,
    name: "Cédric Soares",
    role: "Lateral-direito",
    age: 34,
    country: "Portugal",
    type: "Defensor",
    image: "Imagens/jogadores/Cedric-Soares.webp"
  },
  {
    number: 8,
    name: "Marcos Antônio",
    role: "Volante",
    age: 25,
    country: "Brasil",
    type: "Meio-campo",
    image: "Imagens/jogadores/Marcos-Antonio.webp"
  },
  {
    number: 10,
    name: "Danielzinho",
    role: "Meia",
    age: 31,
    country: "Brasil",
    type: "Meio-campo",
    image: "Imagens/jogadores/Danielzinho.webp"
  },
  {
    number: 46,
    name: "Pedro Ferreira",
    role: "Meia",
    age: 18,
    country: "Brasil",
    type: "Meio-campo",
    image: "Imagens/jogadores/Pedro-Ferreira.webp"
  },
  {
    number: 7,
    name: "Lucas",
    role: "Atacante",
    age: 33,
    country: "Brasil",
    type: "Atacante",
    image: "Imagens/jogadores/Lucas.webp"
  },
  {
    number: 17,
    name: "André Silva",
    role: "Centroavante",
    age: 28,
    country: "Brasil",
    type: "Atacante",
    image: "Imagens/jogadores/Andre-Silva.webp"
  },
  {
    number: 45,
    name: "Lucca",
    role: "Atacante",
    age: 17,
    country: "Brasil",
    type: "Atacante",
    image: "Imagens/jogadores/Lucca.webp"
  },
  {
    number: 49,
    name: "Ryan Francisco",
    role: "Atacante",
    age: 18,
    country: "Brasil",
    type: "Atacante",
    image: "Imagens/jogadores/Ryan-Francisco.webp"
  }
];

function renderSquad(filter = "all") {
  const grid = document.getElementById("squadGrid");
  if (!grid) return;

  const filtered = filter === "all"
    ? squadData
    : squadData.filter((player) => player.type === filter);

  grid.innerHTML = filtered.map((player) => `
    <article class="player-card">
      <div class="player-photo">
        <img src="${player.image}" alt="${player.name}">
        <span class="player-number">${player.number}</span>
      </div>

      <div class="player-body">
        <span class="player-tag">${player.type}</span>
        <h3>${player.name}</h3>
        <p class="player-role">${player.role}</p>

        <div class="player-meta">
          <span><strong>Idade:</strong> ${player.age}</span>
          <span><strong>País:</strong> ${player.country}</span>
          <span><strong>Camisa:</strong> ${player.number}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function initSquadFilters() {
  const buttons = document.querySelectorAll(".filter-btn[data-filter]");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderSquad(button.dataset.filter);
    });
  });
}

const productsData = [
  {
    name: "Camisa SPFC 2026/27",
    category: "Camisa Oficial",
    price: "R$ 329,90",
    badge: "Lançamento",
    image: "Imagens/Camisa2627SPFC.webp",
    description: "Camisa titular oficial do São Paulo."
  },
  {
    name: "Camisa II SPFC 2026/27",
    category: "Camisa Oficial",
    price: "R$ 319,90",
    badge: "Visitante",
    image: "Imagens/Camisa2 26  27.webp",
    description: "Camisa visitante do São Paulo."
  },
  {
    name: "Retrô Masculina 1976 SPFC",
    category: "Retrô",
    price: "R$ 279,90",
    badge: "Clássica",
    image: "Imagens/Retro Masculina 1976 SPFC.webp",
    description: "Modelo retrô inspirado na história do clube."
  }
];

function renderShop(filter = "all") {
  const grid = document.getElementById("shopGrid");
  if (!grid) return;

  const filtered = filter === "all"
    ? productsData
    : productsData.filter((product) => product.category === filter);

  grid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <div class="product-thumb">
        <span class="product-badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>

        <div class="product-footer">
          <div class="product-price">
            <strong>${product.price}</strong>
          </div>

          <button class="btn-buy">Comprar</button>
        </div>
      </div>
    </article>
  `).join("");
}

function initShopFilters() {
  const buttons = document.querySelectorAll(".shop-filter-btn");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderShop(button.dataset.shop);
    });
  });
}

function renderGamesPage() {
  const container = document.getElementById("gamesTimeline");
  if (!container) return;

  container.innerHTML = matchesData.map((match) => `
    <article class="game-row">
      <div class="game-date">
        <strong>${match.date}</strong>
        <span>${match.time}</span>
      </div>

      <div class="game-center">
        <span class="game-league">${match.competition}</span>
        <div class="game-match">${match.home} x ${match.away}</div>
        <div class="game-stadium"><strong>Estádio:</strong> ${match.stadium}</div>
      </div>

      <div class="game-status">
        <span class="status-pill upcoming">${match.status}</span>
        <span class="status-time">Horário local</span>
      </div>
    </article>
  `).join("");
}