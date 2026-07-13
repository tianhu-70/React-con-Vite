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

  // Índice del registro que se está editando (null cuando no hay edición)
  const [editando, setEditando] = useState(null);

  // Mensaje de éxito (se vacía automáticamente a los 3s)
  const [mensaje, setMensaje] = useState("");

  // Cada vez que cambian las bitácoras, las guarda automáticamente en LocalStorage
  useEffect(() => {
    localStorage.setItem("bitacoras", JSON.stringify(bitacoras));
  }, [bitacoras]);

  // Hace desaparecer el mensaje de éxito automáticamente después de 3 segundos
  useEffect(() => {
    if (!mensaje) return;
    const timer = setTimeout(() => setMensaje(""), 3000);
    return () => clearTimeout(timer);
  }, [mensaje]);

  // Manejador genérico para los campos controlados
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Envío del formulario: valida, crea o actualiza, y limpia
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: nickname y comentario no deben estar vacíos
    if (!formData.nickname.trim() || !formData.comentario.trim()) {
      return;
    }

    // Si hay edición: actualiza el registro conservando su fecha original
    if (editando !== null) {
      setBitacoras((prev) =>
        prev.map((b, i) =>
          i === editando
            ? {
                ...b,
                nickname: formData.nickname.trim(),
                comentario: formData.comentario.trim(),
              }
            : b
        )
      );
      setMensaje("Bitácora actualizada correctamente.");
      setEditando(null);
      setFormData({ nickname: "", comentario: "" });
      return;
    }

    // Si no hay edición: crea una nueva bitácora con fecha actual
    const nuevaBitacora = {
      fecha: new Date().toLocaleString(),
      nickname: formData.nickname.trim(),
      comentario: formData.comentario.trim(),
    };

    setBitacoras((prev) => [...prev, nuevaBitacora]);
    setMensaje("Bitácora registrada correctamente.");

    // Limpia el formulario
    setFormData({ nickname: "", comentario: "" });
  };

  // Carga una bitácora en el formulario para editarla
  const handleEditar = (index) => {
    const bitacora = bitacoras[index];
    setFormData({
      nickname: bitacora.nickname,
      comentario: bitacora.comentario,
    });
    setEditando(index);
  };

  // Cancela la edición y limpia el formulario
  const handleCancelar = () => {
    setEditando(null);
    setFormData({ nickname: "", comentario: "" });
  };

  // Elimina una bitácora por su índice (LocalStorage se sincroniza vía useEffect)
  const handleEliminar = (index) => {
    setBitacoras((prev) => prev.filter((_, i) => i !== index));
    setMensaje("Bitácora eliminada correctamente.");
    // Si se estaba editando el registro eliminado, se cancela la edición
    if (editando === index) {
      setEditando(null);
      setFormData({ nickname: "", comentario: "" });
    }
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
        {/* Mensaje de éxito */}
        {mensaje && (
          <p style={{ color: "var(--brand-color)", fontWeight: "bold", marginBottom: "15px" }}>
            {mensaje}
          </p>
        )}

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

          <button type="submit" className="submit-btn">
            {editando !== null ? "Guardar cambios" : "Registrar visita"}
          </button>
          {editando !== null && (
            <button
              type="button"
              className="submit-btn"
              style={{ marginTop: "10px", background: "var(--text-muted)" }}
              onClick={handleCancelar}
            >
              Cancelar
            </button>
          )}
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
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {bitacoras.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ textAlign: "center", color: "var(--text-muted)" }}>
                    Aún no hay bitácoras registradas.
                  </td>
                </tr>
              ) : (
                bitacoras.map((bitacora, index) => (
                  <tr key={index}>
                    <td>{bitacora.fecha}</td>
                    <td>{bitacora.nickname}</td>
                    <td>{bitacora.comentario}</td>
                    <td>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          type="button"
                          className="submit-btn"
                          style={{ padding: "6px 12px", width: "auto" }}
                          onClick={() => handleEditar(index)}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          className="submit-btn"
                          style={{ padding: "6px 12px", width: "auto", background: "#ef4444" }}
                          onClick={() => handleEliminar(index)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
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
