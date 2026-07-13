import { useState, useEffect } from "react";

function Bitacora() {
  // Único estado para controlar el formulario
  const [formData, setFormData] = useState({
    nickname: "",
    comentario: "",
  });

  // Estado con todas las bitácoras registradas
const [bitacoras, setBitacoras] = useState(() => {
  const guardadas = localStorage.getItem("bitacoras");
  return guardadas ? JSON.parse(guardadas) : [];
});

  // Cada vez que cambian las bitácoras, las guarda automáticamente en LocalStorage
  useEffect(() => {
    localStorage.setItem("bitacoras", JSON.stringify(bitacoras));
  }, [bitacoras]);

  // Manejador genérico para los campos controlados
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Envío del formulario: valida, agrega con fecha actual y limpia
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: nickname y comentario no deben estar vacíos
    if (!formData.nickname.trim() || !formData.comentario.trim()) {
      return;
    }

    const nuevaBitacora = {
      fecha: new Date().toLocaleString(),
      nickname: formData.nickname.trim(),
      comentario: formData.comentario.trim(),
    };

    setBitacoras((prev) => [...prev, nuevaBitacora]);

    // Limpia el formulario
    setFormData({ nickname: "", comentario: "" });
  };

  return (
    <section className="section" id="bitacora">
      <div className="section-top">
        <div>
          <span className="section-label">COMUNIDAD</span>
          <h2>BITÁCORA DE VISITAS</h2>
        </div>
      </div>

      <div className="form-container">
        <form id="bitacoraForm" noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              placeholder="Ingresa tu nickname"
              value={formData.nickname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="comentario">Comentario</label>
            <input
              type="text"
              id="comentario"
              name="comentario"
              placeholder="Escribe tu comentario"
              value={formData.comentario}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">Registrar visita</button>
        </form>
      </div>

      {/* Lista de bitácoras registradas */}
      <div className="history-table-card" style={{ marginTop: "20px" }}>
        <div className="table-card">
          <table className="history-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nickname</th>
                <th>Comentario</th>
              </tr>
            </thead>
            <tbody>
              {bitacoras.length === 0 ? (
                <tr>
                  <td colSpan={3} style={{ textAlign: "center", color: "var(--text-muted)" }}>
                    Aún no hay bitácoras registradas.
                  </td>
                </tr>
              ) : (
                bitacoras.map((bitacora, index) => (
                  <tr key={index}>
                    <td>{bitacora.fecha}</td>
                    <td>{bitacora.nickname}</td>
                    <td>{bitacora.comentario}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Bitacora;
