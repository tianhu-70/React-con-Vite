import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="topbar">
      <div className="topbar-content">
        <div className="topbar-left">
          <div className="logo">
            <img src={logo} alt="Todo Mundiales" onError={(e) => { e.target.src = 'https://via.placeholder.com/56'; }} />
          </div>
          <div className="brand">
            <h1>TODO MUNDIALES</h1>
            <span>Portal de estadísticas FIFA</span>
          </div>
        </div>

        <div className="topbar-right">
          {/* Saludo dinámico */}
          <span id="greetingMessage" className="greeting-msg"></span>
          {/* Botón Tema */}
          <button id="themeToggle" className="theme-toggle">🌙 Oscuro</button>
          <input type="text" placeholder="Buscar selección, mundial, jugador..." />
        </div>
      </div>
    </header>
  );
}

export default Header;