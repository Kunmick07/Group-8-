import React from 'react'
import './PlanetaryTable.css'

const tableData = [
  { category: 'Terrestrial Planets', name: 'Mercury', mass: '0.330', diameter: '4,878', density: '5427', gravity: '3.7' },
  { category: '', name: 'Venus', mass: '4.870', diameter: '12,104', density: '5243', gravity: '8.9' },
  { category: '', name: 'Earth', mass: '5.970', diameter: '12,756', density: '5514', gravity: '9.8' },
  { category: '', name: 'Mars', mass: '0.642', diameter: '6,792', density: '3933', gravity: '3.7' },
  { category: 'Gas Giants', name: 'Jupiter', mass: '1898', diameter: '142,984', density: '1326', gravity: '23.1' },
  { category: '', name: 'Saturn', mass: '568', diameter: '120,536', density: '687', gravity: '9.0' },
  { category: 'Ice Giants', name: 'Uranus', mass: '86.8', diameter: '51,118', density: '1271', gravity: '8.7' },
  { category: '', name: 'Neptune', mass: '102', diameter: '49,528', density: '1638', gravity: '11.0' },
  { category: 'Dwarf Planets', name: 'Pluto', mass: '0.0146', diameter: '2,370', density: '2095', gravity: '0.7' },
]

export default function PlanetaryTable() {
  return (
    <section className="table-section">
      <div className="container">
        <div className="table-section__header">
          <h2 className="table-section__title">Planetary Facts at a Glance</h2>
          <p className="table-section__subtitle">
            Below is a comparative table of major planets in our solar system. The data
            highlights key physical properties used by astronomers and researchers worldwide.
          </p>
          <p className="table-section__source">
            Data about the planets of our solar system (Planetary facts taken from NASA)
          </p>
        </div>

        <div className="table-wrapper">
          <table className="planet-table">
            <thead>
              <tr>
                <th colSpan="2"></th>
                <th>Name</th>
                <th>Mass (10²⁴kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m³)</th>
                <th>Gravity (m/s²)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => {
                const categoryRows = tableData.filter(r => r.category === row.category && row.category !== '')
                const firstInCategory = categoryRows[0]?.name === row.name
                const rowSpan = categoryRows.length

                return (
                  <tr key={row.name} className={idx % 2 === 0 ? 'row-light' : 'row-dark'}>
                    {firstInCategory && row.category && (
                      <td rowSpan={rowSpan} className="category-cell">
                        {row.category}
                      </td>
                    )}
                    {!row.category && <td></td>}
                    <td></td>
                    <td className="name-cell">{row.name}</td>
                    <td>{row.mass}</td>
                    <td>{row.diameter}</td>
                    <td>{row.density}</td>
                    <td>{row.gravity}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
