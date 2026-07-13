function ChampionsTable() {
  return (
    <section className="section" id="historial">

      <div className="section-top">
        <div>
          <span className="section-label">HISTORIA</span>
          <h2>TABLA DE CAMPEONES</h2>
          <p className="section-description">Todos los ganadores de la Copa del Mundo desde 1930</p>
        </div>
      </div>

      <div className="table-card history-table-card">
        <table className="history-table">
          <thead>
            <tr>
              <th>Año</th>
              <th>Sede</th>
              <th>Campeón</th>
              <th>Finalista</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className="td-year">1930</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/uy.png" alt="Uruguay" />Uruguay</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/uy.png" alt="Uruguay" />Uruguay</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/ar.png" alt="Argentina" />Argentina</div></td>
              <td className="score-cell">4–2</td>
            </tr>

            <tr>
              <td className="td-year">1934</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/it.png" alt="Italia" />Italia</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/it.png" alt="Italia" />Italia</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/cz.png" alt="Checoslovaquia" />Checoslovaquia</div></td>
              <td className="score-cell">2–1 <sup>pról.</sup></td>
            </tr>

            <tr>
              <td className="td-year">1938</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/fr.png" alt="Francia" />Francia</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/it.png" alt="Italia" />Italia</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/hu.png" alt="Hungría" />Hungría</div></td>
              <td className="score-cell">4–2</td>
            </tr>

            <tr className="history-break">
              <td colSpan="5">Pausa — Segunda Guerra Mundial (no se celebró en 1942 ni 1946)</td>
            </tr>

            <tr>
              <td className="td-year">1950</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/br.png" alt="Brasil" />Brasil</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/uy.png" alt="Uruguay" />Uruguay</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/br.png" alt="Brasil" />Brasil</div></td>
              <td className="score-cell"><sup>ronda final</sup></td>
            </tr>

            <tr>
              <td className="td-year">1954</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/ch.png" alt="Suiza" />Suiza</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/de.png" alt="Alemania Occ." />Alemania Occ.</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/hu.png" alt="Hungría" />Hungría</div></td>
              <td className="score-cell">3–2</td>
            </tr>

            <tr>
              <td className="td-year">1958</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/se.png" alt="Suecia" />Suecia</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/br.png" alt="Brasil" />Brasil</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/se.png" alt="Suecia" />Suecia</div></td>
              <td className="score-cell">5–2</td>
            </tr>

            <tr>
              <td className="td-year">1962</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/cl.png" alt="Chile" />Chile</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/br.png" alt="Brasil" />Brasil</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/cz.png" alt="Checoslovaquia" />Checoslovaquia</div></td>
              <td className="score-cell">3–1</td>
            </tr>

            <tr>
              <td className="td-year">1966</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/gb-eng.png" alt="Inglaterra" />Inglaterra</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/gb-eng.png" alt="Inglaterra" />Inglaterra</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/de.png" alt="Alemania Occ." />Alemania Occ.</div></td>
              <td className="score-cell">4–2 <sup>pról.</sup></td>
            </tr>

            <tr>
              <td className="td-year">1970</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/mx.png" alt="México" />México</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/br.png" alt="Brasil" />Brasil</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/it.png" alt="Italia" />Italia</div></td>
              <td className="score-cell">4–1</td>
            </tr>

            <tr>
              <td className="td-year">1974</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/de.png" alt="Alemania Occ." />Alemania Occ.</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/de.png" alt="Alemania Occ." />Alemania Occ.</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/nl.png" alt="Países Bajos" />Países Bajos</div></td>
              <td className="score-cell">2–1</td>
            </tr>

            <tr>
              <td className="td-year">1978</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/ar.png" alt="Argentina" />Argentina</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/ar.png" alt="Argentina" />Argentina</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/nl.png" alt="Países Bajos" />Países Bajos</div></td>
              <td className="score-cell">3–1 <sup>pról.</sup></td>
            </tr>

            <tr>
              <td className="td-year">1982</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/es.png" alt="España" />España</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/it.png" alt="Italia" />Italia</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/de.png" alt="Alemania Occ." />Alemania Occ.</div></td>
              <td className="score-cell">3–1</td>
            </tr>

            <tr>
              <td className="td-year">1986</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/mx.png" alt="México" />México</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/ar.png" alt="Argentina" />Argentina</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/de.png" alt="Alemania Occ." />Alemania Occ.</div></td>
              <td className="score-cell">3–2</td>
            </tr>

            <tr>
              <td className="td-year">1990</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/it.png" alt="Italia" />Italia</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/de.png" alt="Alemania Occ." />Alemania Occ.</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/ar.png" alt="Argentina" />Argentina</div></td>
              <td className="score-cell">1–0</td>
            </tr>

            <tr>
              <td className="td-year">1994</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/us.png" alt="EE. UU." />EE. UU.</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/br.png" alt="Brasil" />Brasil</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/it.png" alt="Italia" />Italia</div></td>
              <td className="score-cell">0–0 <sup>pen.</sup></td>
            </tr>

            <tr>
              <td className="td-year">1998</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/fr.png" alt="Francia" />Francia</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/fr.png" alt="Francia" />Francia</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/br.png" alt="Brasil" />Brasil</div></td>
              <td className="score-cell">3–0</td>
            </tr>

            <tr>
              <td className="td-year">2002</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/kr.png" alt="Corea / Japón" />Corea / Japón</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/br.png" alt="Brasil" />Brasil</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/de.png" alt="Alemania" />Alemania</div></td>
              <td className="score-cell">2–0</td>
            </tr>

            <tr>
              <td className="td-year">2006</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/de.png" alt="Alemania" />Alemania</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/it.png" alt="Italia" />Italia</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/fr.png" alt="Francia" />Francia</div></td>
              <td className="score-cell">1–1 <sup>pen.</sup></td>
            </tr>

            <tr>
              <td className="td-year">2010</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/za.png" alt="Sudáfrica" />Sudáfrica</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/es.png" alt="España" />España</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/nl.png" alt="Países Bajos" />Países Bajos</div></td>
              <td className="score-cell">1–0 <sup>pról.</sup></td>
            </tr>

            <tr>
              <td className="td-year">2014</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/br.png" alt="Brasil" />Brasil</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/de.png" alt="Alemania" />Alemania</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/ar.png" alt="Argentina" />Argentina</div></td>
              <td className="score-cell">1–0 <sup>pról.</sup></td>
            </tr>

            <tr>
              <td className="td-year">2018</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/ru.png" alt="Rusia" />Rusia</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/fr.png" alt="Francia" />Francia</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/hr.png" alt="Croacia" />Croacia</div></td>
              <td className="score-cell">4–2</td>
            </tr>

            <tr>
              <td className="td-year">2022</td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/qa.png" alt="Catar" />Catar</div></td>
              <td className="winner-cell"><div className="country-cell"><img src="https://flagcdn.com/w20/ar.png" alt="Argentina" />Argentina</div></td>
              <td><div className="country-cell"><img src="https://flagcdn.com/w20/fr.png" alt="Francia" />Francia</div></td>
              <td className="score-cell">3–3<sup>pen.</sup></td>
            </tr>

            <tr className="next-worldcup">
              <td className="td-year next-year">2026</td>
              <td>
                <div className="country-cell multi-host">
                  <img src="https://flagcdn.com/w20/us.png" alt="EE.UU." />
                  <img src="https://flagcdn.com/w20/ca.png" alt="Canadá" />
                  <img src="https://flagcdn.com/w20/mx.png" alt="México" />
                  EE.UU / CA / MX
                </div>
              </td>
              <td colSpan="2" className="tbd-cell">Por definir</td>
              <td className="tbd-cell">—</td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ChampionsTable