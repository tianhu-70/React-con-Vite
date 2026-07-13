import { useState, useEffect } from "react";

// Coordenadas de Iquique, Chile
const LATITUDE = -20.21;
const LONGITUDE = -70.15;

// Traducción de los códigos WMO a descripciones legibles en español
const traducirWeatherCode = (codigo) => {
  const mapas = {
    0: "Despejado",
    1: "Mayormente despejado",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Niebla",
    48: "Niebla con escarcha",
    51: "Llovizna ligera",
    53: "Llovizna moderada",
    55: "Llovizna intensa",
    56: "Llovizna helada ligera",
    57: "Llovizna helada intensa",
    61: "Lluvia ligera",
    63: "Lluvia moderada",
    65: "Lluvia intensa",
    66: "Lluvia helada ligera",
    67: "Lluvia helada intensa",
    71: "Nieve ligera",
    73: "Nieve moderada",
    75: "Nieve intensa",
    77: "Gránulos de nieve",
    80: "Chubascos ligeros",
    81: "Chubascos moderados",
    82: "Chubascos violentos",
    85: "Chubascos de nieve ligeros",
    86: "Chubascos de nieve intensos",
    95: "Tormenta eléctrica",
    96: "Tormenta con granizo ligero",
    99: "Tormenta con granizo intenso",
  };
  return mapas[codigo] || "Condición desconocida";
};

function Clima() {
  const [clima, setClima] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerClima = async () => {
      setCargando(true);
      setError(null);
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=America/Santiago`;
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la información del clima.");
        }

        const datos = await respuesta.json();
        setClima(datos.current);
      } catch (err) {
        setError(
          "Ocurrió un error al consultar el clima. Inténtalo nuevamente más tarde."
        );
      } finally {
        setCargando(false);
      }
    };

    obtenerClima();
  }, []);

  return (
    <section className="section" id="clima">
      <div className="section-top">
        <div>
          <span className="section-label">INFORMACIÓN LOCAL</span>
          <h2>CLIMA ACTUAL EN IQUIQUE</h2>
        </div>
      </div>

      <div className="history-table-card">
        <div className="table-card">
          {/* Estado de carga */}
          {cargando && (
            <div style={{ padding: "20px", textAlign: "center", color: "var(--text-muted)" }}>
              Cargando información del clima...
            </div>
          )}

          {/* Estado de error */}
          {!cargando && error && (
            <div style={{ padding: "20px", textAlign: "center", color: "#ef4444", fontWeight: "bold" }}>
              {error}
            </div>
          )}

          {/* Datos del clima */}
          {!cargando && !error && clima && (
            <table className="history-table">
              <thead>
                <tr>
                  <th>Temperatura</th>
                  <th>Condición</th>
                  <th>Viento</th>
                  <th>Humedad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="score-cell">{clima.temperature_2m} °C</td>
                  <td>{traducirWeatherCode(clima.weather_code)}</td>
                  <td>{clima.wind_speed_10m} km/h</td>
                  <td>{clima.relative_humidity_2m} %</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}

export default Clima;
