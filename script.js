/* =========================================================
   AQUÍ EDITAS TU PORTFOLIO
   Pega el LINK COMPLETO de YouTube en "link".
   ========================================================= */

const sobreMi = "Bawdel Alejandro, Editor de video profesional | Premiere Pro y After Effects | Cámara, fotografía y audio (Audition). Responsable, organizado y disponible para proyectos.";

const reels = [
  { link: "https://www.youtube.com/shorts/N6PrpC4cDo8", titulo: "Reel 01", desc: "Estilo de edición corta para redes sociales" },
  { link: "https://www.youtube.com/shorts/wDQ1AXifwRw", titulo: "Reel 02", desc: "Estilo de edición para promocion de agencias" },
  { link: "https://www.youtube.com/shorts/iJp8xmSKNxE", titulo: "Reel 03", desc: "Estilo de edición con máscaras de capa" },
  { link: "https://www.youtube.com/shorts/m5bNUOPuQ8w", titulo: "Reel 04", desc: "Estilo de edición promocional para institución" },
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
   {
    link: "https://www.youtube.com/watch?v=XxKiRN1qnpc",
    titulo: "Video largo 04 · Formato horizontal",
    desc: "Vídeo estilo documental educativo, para entender el tema expuesto"
  },
];

/* =========================================================
   NO TOQUES NADA DE AQUÍ PARA ABAJO
   ========================================================= */

const esLite = document.documentElement.classList.contains("lite");

function extraerId(texto = "") {
  const t = texto.trim();
  const m = t.match(/(?:v=|youtu\.be\/|shorts\/|embed\/|live\/)([A-Za-z0-9_-]{11})/);
  if (m) return m[1];
  return /^[A-Za-z0-9_-]{11}$/.test(t) ? t : "";
}

function esc(s = "") {
  return String(s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
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
    ? `<video src="${esc(item.archivo)}" controls autoplay playsinline preload="metadata"></video>`
    : `<iframe title="${esc(item.titulo)}"
        src="https://www.youtube-nocookie.com/embed/${item._id}?autoplay=1&rel=0&playsinline=1"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  modal.classList.add("open");
  document.body.classList.add("bloqueado");
}

function cerrar() {
  modal.classList.remove("open");
  document.body.classList.remove("bloqueado");
  player.innerHTML = "";
}

const inclinaciones = [-1.4, 0.9, -0.6, 1.3, -1, 0.6];

function pintar(lista, contenedorId, vertical, mensajeVacio) {
  const cont = document.getElementById(contenedorId);
  const frag = document.createDocumentFragment();
  let n = 0;

  lista.forEach(item => {
    item._id = extraerId(item.link || item.id);
    if (!item._id && !item.archivo) return;

    const card = document.createElement("div");
    card.className = "card reveal";
    card.style.setProperty("--r", inclinaciones[n % inclinaciones.length] + "deg");
    card.style.setProperty("--d", (n * 0.12) + "s");

    const img = item.portada || `https://img.youtube.com/vi/${item._id}/hqdefault.jpg`;
    const w = vertical ? 360 : 480, h = vertical ? 480 : 360;
    card.innerHTML = `
      <div class="media">
        <img class="thumb" src="${esc(img)}" alt="${esc(item.titulo)}"
             width="${w}" height="${h}" loading="lazy" decoding="async">
        <div class="play"></div>
      </div>
      <div class="info"><h3>${esc(item.titulo)}</h3><p>${esc(item.desc || "")}</p></div>`;
    card.addEventListener("click", () => abrir(item, vertical));
    frag.appendChild(card);
    n++;
  });

  if (n === 0) {
    const p = document.createElement("p");
    p.className = "empty reveal";
    p.textContent = mensajeVacio;
    frag.appendChild(p);
    cont.style.display = "block";
  }
  cont.appendChild(frag);
}

pintar(reels, "reels-grid", true, "Próximamente: nuevos reels en camino.");
pintar(videosLargos, "long-grid", false, "Próximamente: nuevos videos largos.");

document.getElementById("close").addEventListener("click", cerrar);
modal.addEventListener("click", e => { if (e.target === modal) cerrar(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });

document.querySelectorAll(".title, .hint, .lead, .stamp, .links, footer")
  .forEach(el => el.classList.add("reveal"));

const elementos = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver(entradas => {
    entradas.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("show"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
  elementos.forEach(el => obs.observe(el));
} else {
  elementos.forEach(el => el.classList.add("show"));
}

if (!esLite) {
  const barra = document.createElement("div");
barra.className = "progress";
document.body.prepend(barra);

let esperando = false;
const alScroll = () => {
  if (esperando) return;
  esperando = true;
  requestAnimationFrame(() => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    barra.style.transform = "scaleX(" + (total > 0 ? window.scrollY / total : 0) + ")";
    esperando = false;
  });
};
window.addEventListener("scroll", alScroll, { passive: true });
alScroll();
}
