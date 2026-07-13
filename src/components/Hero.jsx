function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="section-label">PRÓXIMO TORNEO</span>
        <h2>MUNDIAL 2026</h2>
        <p className="hero-location">Estados Unidos · Canadá · México</p>
        <div className="hero-cards">
          <div className="hero-card">
            <span>Equipos</span>
            <strong>48</strong>
          </div>
          <div className="hero-card">
            <span>Partidos</span>
            <strong>104</strong>
          </div>
          <div className="hero-card">
            <span>Estadios</span>
            <strong>16</strong>
          </div>
          <div className="hero-card">
            <span>Grupos</span>
            <strong>12</strong>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-banner">
          <div className="hero-content">
            <span className="hero-tag">FIFA WORLD CUP</span>
            <h3>El torneo más grande del planeta vuelve en 2026</h3>
            <p>48 selecciones · 3 países anfitriones · 104 partidos</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero