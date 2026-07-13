function Form() {
  return (
    <section className="section" id="suscripcion">
      <div className="section-top">
        <div>
          <span className="section-label">ÚNETE A LA COMUNIDAD</span>
          <h2>SUSCRÍBETE AL BOLETÍN</h2>
        </div>
      </div>

      <div className="form-container">
        <form id="subscribeForm" noValidate>
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" />
            <span className="error-msg" id="err-nombre">El nombre no puede estar vacío.</span>
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" />
            <span className="error-msg" id="err-email">Ingresa un formato de correo válido.</span>
          </div>

          <div className="form-group">
            <label htmlFor="edad">Edad</label>
            <input type="number" id="edad" name="edad" min="18" placeholder="Debes tener al menos 18 años" />
            <span className="error-msg" id="err-edad">Debes tener al menos 18 años de edad.</span>
          </div>

          <div className="form-group form-checkbox">
            <input type="checkbox" id="terminos" name="terminos" />
            <label htmlFor="terminos">Acepto los términos y condiciones de uso</label>
          </div>

          <button type="submit" id="submitBtn" className="submit-btn" disabled>Suscribirse al boletín</button>
        </form>
      </div>
    </section>
  )
}

export default Form