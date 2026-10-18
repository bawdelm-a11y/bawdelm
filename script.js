/* =========================================================
   AQUÍ EDITAS TU PORTFOLIO
   Pega el LINK COMPLETO de YouTube en "link".
   ========================================================= */

const sobreMi = "Bawdel Alejandro,Editor de video profesional | Premiere Pro y After Effects | Cámara, fotografía y audio (Audition). Responsable, organizado y disponible para proyectos.";

const reels = [
  // Aún sin reels. Cuando tengas, agrega líneas como:
  // { link: "LINK_DEL_SHORT", titulo: "Reel 1", desc: "Descripción corta" },
];

const videosLargos = [
  {
    link: "https://www.youtube.com/watch?v=PcaRM7BYDYs",
    titulo: "Video largo 01 · Formato horizontal",
    desc: "Edición con ritmo narrativo, cortes limpios y una historia pensada para mantener al espectador hasta el final."
  },
  {
    link: "https://www.youtube.com/watch?v=F7hQZL7saYs",
    titulo: "Video largo 02 · Formato horizontal",
    desc: "Montaje dinámico con corrección de color, diseño sonoro y gráficos que refuerzan cada idea."
  },
  {
    link: "https://www.youtube.com/watch?v=FEx-VjcRp4M",
    titulo: "Video largo 03 · Formato horizontal",
    desc: "Estructura de guion, transiciones suaves y detalles visuales que dan identidad y personalidad al video."
  },
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

const inclinaciones = [-1.4, 0.9, -0.6, 1.3, -1, 0.6];

function pintar(lista, contenedorId, vertical, mensajeVacio) {
  const cont = document.getElementById(contenedorId);
  let n = 0;
  lista.forEach(item => {
    item._id = extraerId(item.link || item.id);
    if (!item._id && !item.archivo) return;
    const card = document.createElement("div");
    card.className = "card reveal";
    card.style.setProperty("--r", inclinaciones[n % inclinaciones.length] + "deg");
    card.style.setProperty("--d", (n * 0.15) + "s");
    const img = item.portada || `https://img.youtube.com/vi/${item._id}/hqdefault.jpg`;
    card.innerHTML = `
      <div class="media">
        <img class="thumb" src="${img}" alt="${item.titulo}" loading="lazy">
        <div class="play"></div>
      </div>
      <div class="info"><h3>${item.titulo}</h3><p>${item.desc || ""}</p></div>`;
    card.addEventListener("click", () => abrir(item, vertical));
    cont.appendChild(card);
    n++;
  });
  if (n === 0) {
    cont.innerHTML = `<p class="empty reveal">${mensajeVacio}</p>`;
    cont.style.display = "block";
  }
}

pintar(reels, "reels-grid", true, "Próximamente: nuevos reels en camino.");
pintar(videosLargos, "long-grid", false, "Próximamente: nuevos videos largos.");

document.getElementById("close").addEventListener("click", cerrar);
modal.addEventListener("click", e => { if (e.target === modal) cerrar(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });

document.querySelectorAll(".title, .hint, .lead, .stamp, .links, footer")
  .forEach(el => el.classList.add("reveal"));

const obs = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("show"); obs.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

const barra = document.createElement("div");
barra.className = "progress";
document.body.prepend(barra);
const fondo = document.querySelector(".paper-bg");

function alScroll() {
  const y = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  barra.style.width = (total > 0 ? (y / total) * 100 : 0) + "%";
  fondo.style.backgroundPosition = "0 " + (-y * 0.12) + "px";
}
window.addEventListener("scroll", alScroll, { passive: true });
alScroll();
