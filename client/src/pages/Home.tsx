import { useState } from "react";
import { ArrowDown, ArrowRight, Bomb, ChevronDown, Gamepad2, Instagram, Map, Menu, Smartphone, Sparkles, Trophy, X, Zap } from "lucide-react";

const maps = [
  { name: "Pelourinho", tag: "Ladeiras & cores", emoji: "🎨", copy: "Ruas estreitas, casarões coloridos e muita ginga para dominar o centro histórico." },
  { name: "Morro + Carro de Som", tag: "Som no talo", emoji: "🔊", copy: "Suba o morro, desvie do carro de som e transforme cada esquina em arena." },
  { name: "Feira de São Joaquim", tag: "Feira em chamas", emoji: "🌶️", copy: "Caixotes, dendê e surpresas escondidas no mapa mais imprevisível da Bahia." },
];

const characters = [
  { name: "Calor", icon: "🔥", copy: "Fogo em linha por até 6 casas." },
  { name: "Gelo", icon: "❄️", copy: "Lentidão e congelamento estratégico." },
  { name: "Ladrão", icon: "🧤", copy: "Rouba duas melhorias do rival." },
  { name: "Voador", icon: "🪽", copy: "Atravessa obstáculos e lança bombas." },
  { name: "Ninja", icon: "🥷", copy: "Shurikens e um quinto acerto decisivo." },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={() => scrollTo("top")}>
          <span className="brand-seal">AB</span>
          <span><strong>ACARAJÉ</strong><small>BOMBER · BAHIA</small></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => scrollTo("como-jogar")}>Como jogar</button>
          <button onClick={() => scrollTo("mapas")}>Mapas</button>
          <button onClick={() => scrollTo("personagens")}>Personagens</button>
          <button onClick={() => scrollTo("instalar")}>Instalar</button>
          <a className="nav-play" href="/game/">JOGAR AGORA <ArrowRight size={15} /></a>
        </nav>
        <button className="mobile-menu" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> SALVADOR APRESENTA <span className="line" /></div>
          <h1>Exploda.<br /><em>Dance.</em><br />Domine a rua.</h1>
          <p className="hero-lede">Um bomber de acarajé no coração do Pelourinho. Entre na arena, esconda sua bomba e mostre quem manda no axé.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/game/"><Gamepad2 size={18} /> Jogar agora <ArrowRight size={17} /></a>
            <button className="text-button" onClick={() => scrollTo("como-jogar")}>Descobrir o jogo <ArrowDown size={16} /></button>
          </div>
          <div className="hero-meta"><span><span className="meta-icon">👥</span> 2 jogadores</span><span><span className="meta-icon">⚡</span> Contra o bot</span><span><span className="meta-icon">📱</span> PWA mobile</span></div>
        </div>
        <div className="hero-art" aria-label="Ilustração do jogo">
          <div className="sun"></div><div className="confetti c1">✦</div><div className="confetti c2">✺</div><div className="confetti c3">•</div>
          <div className="building b1"><i></i><i></i><i></i><i></i></div><div className="building b2"><i></i><i></i><i></i></div><div className="building b3"><i></i><i></i><i></i><i></i></div>
          <div className="street"></div>
          <div className="hero-character"><div className="head">🥷</div><div className="body"></div><div className="legs"><i></i><i></i></div></div>
          <div className="bomb bomb-a">🥟</div><div className="bomb bomb-b">💥</div><div className="pepper">🌶️</div>
          <div className="art-caption"><span>PELOURINHO</span><strong>BAHIA</strong></div>
        </div>
      </section>

      <div className="ticker"><span>AXÉ NA ARENA</span><span>•</span><span>BOMBAS DE ACARAJÉ</span><span>•</span><span>PELOURINHO EM CHAMAS</span><span>•</span><span>JOGUE COM QUEM VOCÊ AMA</span><span>•</span><span>AXÉ NA ARENA</span></div>

      <section className="intro-section section" id="como-jogar">
        <div className="section-kicker">01 / A MISSÃO</div>
        <div className="intro-grid"><h2>Uma explosão<br /><em>de cultura.</em></h2><div><p className="big-copy">A rua é sua arena. Colete melhorias, plante suas bombas de acarajé e sobreviva ao caos com muito dendê.</p><p className="muted-copy">Inspirado nas cores, sabores e energia de Salvador, Acarajé Bomber é um jogo local para rir, competir e fazer aquela revanche.</p><a className="inline-link" href="/game/">Conheça o jogo <ArrowRight size={16} /></a></div></div>
        <div className="feature-row"><article><span className="feature-icon orange"><Bomb /></span><h3>Plante a treta</h3><p>Use o espaço ou Enter para soltar bombas e abrir caminho.</p></article><article><span className="feature-icon teal"><Zap /></span><h3>Fique mais rápido</h3><p>Pegue pimentas, dendê e melhorias escondidas nos caixotes.</p></article><article><span className="feature-icon purple"><Trophy /></span><h3>Vença no axé</h3><p>Escolha seu super e surpreenda o adversário no momento certo.</p></article></div>
      </section>

      <section className="maps-section section" id="mapas"><div className="section-kicker">02 / AS ARENAS</div><div className="section-heading"><h2>Três mapas.<br /><em>Uma só lenda.</em></h2><p>Escolha seu canto de Salvador e prepare a estratégia. Cada arena muda o ritmo da partida.</p></div><div className="map-grid">{maps.map((map, i) => <article className={`map-card map-${i}`} key={map.name}><div className="map-number">0{i + 1}</div><div className="map-emoji">{map.emoji}</div><div className="map-info"><span>{map.tag}</span><h3>{map.name}</h3><p>{map.copy}</p></div><a href="/game/" aria-label={`Jogar no mapa ${map.name}`}><ArrowRight /></a></article>)}</div></section>

      <section className="characters-section section" id="personagens"><div className="section-kicker">03 / SEU ESTILO</div><div className="section-heading"><h2>Escolha seu<br /><em>super.</em></h2><p>Até cinco cargas escondidas por rodada. Cada escolha muda a forma de jogar.</p></div><div className="character-list">{characters.map((char, i) => <div className="character-row" key={char.name}><span className="char-index">0{i + 1}</span><span className="char-icon">{char.icon}</span><h3>{char.name}</h3><p>{char.copy}</p><span className="char-arrow">↗</span></div>)}</div><a className="button button-dark" href="/game/">Personalizar no jogo <ArrowRight size={17} /></a></section>

      <section className="how-section section" id="instalar"><div className="how-art"><div className="phone"><div className="phone-notch"></div><div className="phone-screen"><span>ACARAJÉ<br /><b>BOMBER</b></span><div className="mini-map">🎨<i>💣</i>🥷</div><small>JOGAR</small></div></div><div className="how-spark">✦</div></div><div className="how-copy"><div className="section-kicker">04 / LEVE PRA RUA</div><h2>Jogue onde<br /><em>o axé estiver.</em></h2><p>O jogo funciona direto no navegador e pode ser instalado na tela inicial do celular, como um app.</p><div className="install-steps"><div><b>1</b><span>Abra o jogo no Chrome ou Safari.</span></div><div><b>2</b><span>Toque em “Adicionar à tela inicial”.</span></div><div><b>3</b><span>Chame a galera e comece a partida.</span></div></div><a className="button button-primary" href="/game/"><Smartphone size={18} /> Abrir o jogo <ArrowRight size={17} /></a></div></section>

      <section className="faq-section section"><div className="section-kicker">05 / DÚVIDAS RÁPIDAS</div><div className="faq-grid"><h2>Antes de<br /><em>soltar a bomba.</em></h2><div>{["Posso jogar no celular?", "Dá para jogar com duas pessoas?", "O que são os supers?", "A trilha sonora faz parte do jogo?"].map((q, i) => <div className={`faq ${faq === i ? "active" : ""}`} key={q}><button onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span>{faq === i ? <X size={18} /> : <ChevronDown size={18} />}</button>{faq === i && <p>{["Sim. Os controles virtuais aparecem automaticamente durante a partida e o jogo foi feito para telas pequenas.", "Sim. Escolha “2 jogadores” no menu e use WASD + Espaço para o J1 e setas + Enter para o J2.", "São habilidades especiais que você escolhe antes da partida: Calor, Gelo, Ladrão, Voador ou Ninja.", "Sim. A trilha original combina com cada mapa. Você também pode acessar o Bloquinho Série Gold pelo menu Música."][i]}</p>}</div>)}</div></div></section>

      <footer><div className="footer-brand"><span className="brand-seal">AB</span><strong>ACARAJÉ BOMBER</strong></div><p>Feito com dendê, pixel e muito axé em Salvador, Bahia.</p><div className="footer-links"><a href="/game/">Jogar</a><button onClick={() => scrollTo("como-jogar")}>Como jogar</button><button onClick={() => scrollTo("instalar")}>Instalar</button><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={16} /></a></div><small>© 2026 Acarajé Bomber · Axé!</small></footer>
    </main>
  );
}

export default Home;
