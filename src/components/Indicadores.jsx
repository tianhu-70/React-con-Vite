import { useState, useEffect } from "react";
import axios from "axios";

// URL base de la API de indicadores económicos de Chile
const API_URL = "https://mindicador.cl/api";

// Indicadores que se mostrarán, en el orden solicitado
const INDICADORES = ["uf", "utm", "dolar", "euro"];

// Formatea un valor numérico como moneda en español (Chile)
const formatearValor = (valor) => {
  return new Intl.NumberFormat("es-CL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
};

// Formatea una fecha ISO a un texto legible en español
const formatearFecha = (iso) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

function Indicadores() {
  const [indicadores, setIndicadores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerIndicadores = async () => {
      setCargando(true);
      setError(null);
      try {
        const respuesta = await axios.get(API_URL);
        const datos = respuesta.data;

        // Conserva solo los indicadores solicitados, en el orden definido
        const lista = INDICADORES.map((key) => datos[key]).filter(Boolean);

        setIndicadores(lista);
      } catch (err) {
        setError(
          "Ocurrió un error al consultar los indicadores económicos. Inténtalo nuevamente más tarde."
        );
      } finally {
        setCargando(false);
      }
    };

    obtenerIndicadores();
  }, []);

  return (
    <section className="section" id="indicadores">
      <div className="section-top">
        <div>
          <span className="section-label">ECONOMÍA</span>
          <h2>INDICADORES ECONÓMICOS DE CHILE</h2>
        </div>
      </div>

      <div className="history-table-card">
        <div className="table-card">
          {/* Estado de carga */}
          {cargando && (
            <div style={{ padding: "20px", textAlign: "center", color: "var(--text-muted)" }}>
              Cargando indicadores económicos...
            </div>
          )}

          {/* Estado de error */}
          {!cargando && error && (
            <div style={{ padding: "20px", textAlign: "center", color: "#ef4444", fontWeight: "bold" }}>
              {error}
            </div>
          )}

          {/* Datos de los indicadores */}
          {!cargando && !error && indicadores.length > 0 && (
            <table className="history-table">
              <thead>
                <tr>
                  <th>Indicador</th>
                  <th>Valor</th>
                  <th>Unidad</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {indicadores.map((indicador, index) => (
                  <tr key={index}>
                    <td>{indicador.nombre}</td>
                    <td className="score-cell">{formatearValor(indicador.valor)}</td>
                    <td>{indicador.unidad_medida}</td>
                    <td>{formatearFecha(indicador.fecha)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}

export default Indicadores;
