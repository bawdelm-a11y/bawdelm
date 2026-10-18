/* =========================================================
   AQUÍ EDITAS TU PORTFOLIO
   Puedes pegar el LINK COMPLETO de YouTube en "link".
   ========================================================= */

const sobreMi = "Soy Bawdel Alejandro, editor de video y creador digital. Convierto ideas en videos con ritmo, color y personalidad. Trabajo reels, videos largos para YouTube, motion graphics y diseño de miniaturas.";

const reels = [
  { link: "PEGA_AQUI_EL_LINK_1", titulo: "Reel 1", desc: "Descripción corta" },
  { link: "PEGA_AQUI_EL_LINK_2", titulo: "Reel 2", desc: "Descripción corta" },
];

const videosLargos = [
  { link: "PEGA_AQUI_EL_LINK_3", titulo: "Video 1", desc: "Descripción corta" },
  { link: "PEGA_AQUI_EL_LINK_4", titulo: "Video 2", desc: "Descripción corta" },
];

/* =========================================================
   NO TOQUES NADA DE AQUÍ PARA ABAJO
   ========================================================= */

function extraerId(texto = "") {
  const t = texto.trim();
  const m = t.match(/(?:v=|youtu\.be\/|shorts\/|embed\/|live\/)([A-Za-z0-9_-]{11})/);
  if (m) return m[1];
  return /^[A-Za-z0-9_-]{11}$/.test(t) ? t : "";
}

document.getElementById("about-text").textContent = sobreMi;
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("fecha").textContent =
  new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

const modal = document.getElementById("modal");
const player = document.getElementById("player");

function abrir(item, vertical) {
  player.className = "player" + (vertical ? " vertical" : "");
  player.innerHTML = item.archivo
    ? `<video src="${item.archivo}" controls autoplay playsinline></video>`
    : `<iframe src="https://www.youtube-nocookie.com/embed/${item._id}?autoplay=1&rel=0"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  modal.classList.add("open");
}

function cerrar() {
  modal.classList.remove("open");
  player.innerHTML = "";
}

function pintar(lista, contenedorId, vertical) {
  const cont = document.getElementById(contenedorId);
  lista.forEach(item => {
    item._id = extraerId(item.link || item.id);
    if (!item._id && !item.archivo) return;
    const card = document.createElement("div");
    card.className = "card reveal";
    const img = item.portada || `https://img.youtube.com/vi/${item._id}/hqdefault.jpg`;
    card.innerHTML = `
      <div class="media">
        <img class="thumb" src="${img}" alt="${item.titulo}" loading="lazy">
        <div class="play"></div>
      </div>
      <div class="info"><h3>${item.titulo}</h3><p>${item.desc || ""}</p></div>`;
    card.addEventListener("click", () => abrir(item, vertical));
    cont.appendChild(card);
  });
}

pintar(reels, "reels-grid", true);
pintar(videosLargos, "long-grid", false);

document.getElementById("close").addEventListener("click", cerrar);
modal.addEventListener("click", e => { if (e.target === modal) cerrar(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });

const obs = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
