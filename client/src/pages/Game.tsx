export default function Game() {
  const platform = window.location.pathname.includes("mobile") ? "mobile" : window.location.pathname.includes("/pc") ? "pc" : "auto";
  return (
    <div className="game-frame-shell">
      <iframe className="game-frame" title={`Acarajé Bomber — versão ${platform}`} src={`/game/index.html?v=41&platform=${platform}`} allow="autoplay; fullscreen; gamepad" />
    </div>
  );
}
