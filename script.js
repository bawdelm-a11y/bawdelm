/* =========================================================
   AQUÍ EDITAS TU PORTFOLIO
   ========================================================= */

const sobreMi = "Soy Bawdel Alejandro, editor de video y creador digital. Me encanta convertir ideas en videos con ritmo, color y personalidad. Trabajo con reels, videos largos para YouTube, motion graphics y diseño de miniaturas.";

// id = lo que va después de "v=" en el link de YouTube (o después de /shorts/)
const reels = [
  { id: "AQUI_ID_1", titulo: "Reel 1", desc: "Descripción corta" },
  { id: "AQUI_ID_2", titulo: "Reel 2", desc: "Descripción corta" },
];

const videosLargos = [
  { id: "PcaRM7BYDYs&t=115s", titulo: "Proyecto creativo", desc: "Ejemplo de vídeo largo" },
  { id: "F7hQZL7saYs&t=89s", titulo: "Proyecto creativo", desc: "Otro ejemplo de vídeo largo" },
];

/* =========================================================
   NO TOQUES NADA DE AQUÍ PARA ABAJO
   ========================================================= */

document.getElementById("about-text").textContent = sobreMi;
document.getElementById("year").textContent = new Date().getFullYear();

const modal = document.getElementById("modal");
const player = document.getElementById("player");

function abrir(item, vertical) {
  player.className = "player" + (vertical ? " vertical" : "");
  player.innerHTML = item.archivo
    ? `<video src="${item.archivo}" controls autoplay playsinline></video>`
    : `<iframe src="https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0"
        allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  modal.classList.add("open");
}

function cerrar() {
  modal.classList.remove("open");
  player.innerHTML = "";
}

function pintar(lista, contenedorId, vertical) {
  const cont = document.getElementById(contenedorId);
  lista.forEach(item => {
    const card = document.createElement("div");
    card.className = "card reveal";
    const img = item.portada || `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
    card.innerHTML = `
      <img class="thumb" src="${img}" alt="${item.titulo}" loading="lazy">
      <div class="play"></div>
      <div class="info"><h3>${item.titulo}</h3><p>${item.desc || ""}</p></div>`;
    card.addEventListener("click", () => abrir(item, vertical));
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => card.style.transform = "");
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
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
