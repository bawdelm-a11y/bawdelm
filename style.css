:root{
  --paper:#e8e2d3; --ink:#1b1a17; --muted:#5d584d; --red:#a3201a; --line:#1b1a17;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Libre Franklin',sans-serif;color:var(--ink);line-height:1.65;background:var(--paper);overflow-x:hidden}

.paper-bg{
  position:fixed;inset:0;z-index:-1;background-color:var(--paper);
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900'%3E%3Cfilter id='c'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.011 0.014' numOctaves='5' seed='8' result='n'/%3E%3CfeDiffuseLighting in='n' lighting-color='%23f4efe3' surfaceScale='2.4'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23c)'/%3E%3C/svg%3E");
  background-size:900px 900px;
}
.paper-bg::after{content:"";position:absolute;inset:0;
  background:radial-gradient(ellipse at center,transparent 55%,#6b5a3a33 100%);}

.masthead{max-width:1200px;margin:auto;padding:28px 6vw 0;text-align:center}
.mast-top{display:flex;justify-content:space-between;font-family:'Special Elite',monospace;font-size:.8rem;
  text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid var(--line);padding-bottom:8px}
.brand{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(2.6rem,9vw,6.5rem);line-height:1.05;
  letter-spacing:-1px;margin-top:18px}
.brand-sub{font-family:'Playfair Display',serif;font-style:italic;color:var(--muted);font-size:1.15rem;margin:6px 0 18px}
.nav{display:flex;justify-content:center;gap:clamp(14px,4vw,40px);flex-wrap:wrap;
  border-top:3px double var(--line);border-bottom:3px double var(--line);padding:12px 0}
.nav a{color:var(--ink);text-decoration:none;text-transform:uppercase;letter-spacing:2px;font-size:.8rem;font-weight:700;
  padding-bottom:2px;border-bottom:2px solid transparent;transition:.2s}
.nav a:hover{color:var(--red);border-color:var(--red)}

.section{max-width:1200px;margin:auto;padding:70px 6vw 10px}
.title{font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(2rem,5vw,3.2rem);
  border-bottom:4px solid var(--line);padding-bottom:6px;margin-bottom:10px;display:inline-block;width:100%;
  position:relative}
.title::after{content:"";position:absolute;left:0;bottom:-9px;width:100%;border-bottom:1px solid var(--line)}
.hint{font-family:'Special Elite',monospace;color:var(--muted);font-size:.9rem;margin:18px 0 28px}

.about-grid{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;margin-top:28px}
.lead{font-family:'Playfair Display',serif;font-size:clamp(1.15rem,2.2vw,1.5rem);line-height:1.7;column-gap:40px}
.lead::first-letter{float:left;font-size:4.2rem;line-height:.85;padding:6px 10px 0 0;font-weight:900;color:var(--red)}
.stamp{border:3px solid var(--red);color:var(--red);padding:16px 22px;text-align:center;transform:rotate(-6deg);
  font-family:'Special Elite',monospace;text-transform:uppercase;letter-spacing:2px;font-size:.75rem;
  display:flex;flex-direction:column;gap:2px;opacity:.85;box-shadow:inset 0 0 0 2px #a3201a33}
.stamp strong{font-size:1.5rem;letter-spacing:3px}

.grid{display:grid;gap:30px}
.reels-grid{grid-template-columns:repeat(auto-fill,minmax(210px,1fr))}
.long-grid{grid-template-columns:repeat(auto-fill,minmax(320px,1fr))}

.card{position:relative;cursor:pointer;background:#fbf7ec99;border:1px solid var(--line);padding:10px;
  box-shadow:5px 6px 0 #1b1a1722;transition:transform .3s,box-shadow .3s}
.card:nth-child(odd){transform:rotate(-.6deg)}
.card:nth-child(even){transform:rotate(.5deg)}
.card:hover{transform:rotate(0) translateY(-5px);box-shadow:9px 11px 0 #1b1a1730}
.media{position:relative;overflow:hidden;border:1px solid var(--line)}
.thumb{width:100%;display:block;object-fit:cover;filter:grayscale(1) contrast(1.1) sepia(.25);transition:.5s}
.reels-grid .thumb{aspect-ratio:9/16}
.long-grid .thumb{aspect-ratio:16/9}
.card:hover .thumb{filter:none;transform:scale(1.05)}
.play{position:absolute;top:50%;left:50%;width:62px;height:62px;border-radius:50%;background:var(--red);
  transform:translate(-50%,-50%) scale(.7);opacity:0;transition:.3s;display:grid;place-items:center}
.play::after{content:"";border-left:17px solid #f4efe3;border-block:11px solid transparent;margin-left:5px}
.card:hover .play{opacity:1;transform:translate(-50%,-50%) scale(1)}
.info{padding:12px 4px 4px;border-top:1px solid var(--line);margin-top:10px}
.info h3{font-family:'Playfair Display',serif;font-size:1.15rem;line-height:1.25}
.info p{font-size:.85rem;color:var(--muted);margin-top:4px}

.reveal{opacity:0;translate:0 40px;transition:opacity .7s,translate .7s,transform .3s,box-shadow .3s}
.reveal.show{opacity:1;translate:0 0}

.contact{text-align:center;padding-bottom:80px}
.contact .title{text-align:left}
.links{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.btn{display:inline-block;padding:12px 30px;border:2px solid var(--ink);color:var(--ink);text-decoration:none;
  text-transform:uppercase;letter-spacing:2px;font-size:.8rem;font-weight:700;background:#fbf7ec88;transition:.2s}
.btn:hover{background:var(--ink);color:var(--paper);box-shadow:4px 4px 0 var(--red)}

footer{text-align:center;padding:26px;border-top:3px double var(--line);max-width:1200px;margin:auto;
  font-family:'Special Elite',monospace;font-size:.8rem;color:var(--muted)}

.modal{position:fixed;inset:0;background:#0d0c0af2;display:none;justify-content:center;align-items:center;z-index:100;padding:20px}
.modal.open{display:flex}
.player{width:min(900px,100%);aspect-ratio:16/9}
.player.vertical{width:min(380px,90vw);aspect-ratio:9/16;max-height:88vh}
.player iframe,.player video{width:100%;height:100%;border:0}
.close{position:absolute;top:18px;right:24px;background:none;border:2px solid #f4efe3;color:#f4efe3;
  width:44px;height:44px;font-size:1.2rem;cursor:pointer}
.close:hover{background:var(--red);border-color:var(--red)}

@media(max-width:640px){
  .about-grid{grid-template-columns:1fr}
  .stamp{justify-self:center}
  .mast-top span:nth-child(2){display:none}
}
