import React, { useEffect, useState } from 'react'
import PlanetCard from './PlanetCard'
import './PlanetsSection.css'

const PLANETS_DATA = [
  { planet: "Mercury", distanceFromSun: 57.9, image: "https://anurella.github.io/images/planets/mercury.webp" },
  { planet: "Venus", distanceFromSun: 108.2, image: "https://anurella.github.io/images/planets/venus.webp" },
  { planet: "Earth", distanceFromSun: 149.6, image: "https://anurella.github.io/images/planets/earth.jpg" },
  { planet: "Mars", distanceFromSun: 227.9, image: "https://anurella.github.io/images/planets/mars.webp" },
  { planet: "Jupiter", distanceFromSun: 778.6, image: "https://anurella.github.io/images/planets/jupiter.webp" },
  { planet: "Saturn", distanceFromSun: 1433.5, image: "https://anurella.github.io/images/planets/saturn.webp" },
  { planet: "Uranus", distanceFromSun: 2872.5, image: "https://anurella.github.io/images/planets/uranus.webp" },
  { planet: "Neptune", distanceFromSun: 4495.1, image: "https://anurella.github.io/images/planets/neptune.webp" },
  { planet: "Pluto", distanceFromSun: 5906.4, image: "https://anurella.github.io/images/planets/pluto.webp" }
]

export default function PlanetsSection() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch from API — fall back to inline data if the endpoint isn't a real URL
    const fetchPlanets = async () => {
      try {
        const res = await fetch('https://anurella.github.io/planets.json')
        if (!res.ok) throw new Error('Network response not ok')
        const data = await res.json()
        setPlanets(data)
      } catch {
        // Use the inline data provided in requirements
        setPlanets(PLANETS_DATA)
      } finally {
        setLoading(false)
      }
    }
    fetchPlanets()
  }, [])

  return (
    <section id="planets-section" className="planets-section">
      <div className="container">
        <div className="planets-section__header">
          <h2 className="planets-section__title">
            Visualizing the Differences Between Planets
          </h2>
          <p className="planets-section__subtitle">
            Each planet in our solar system has unique physical characteristics. Visual
            comparisons help highlight how vastly different terrestrial planets are from
            gas giants and ice giants.
          </p>
        </div>

        {loading && (
          <div className="planets-loading">
            <div className="loading-spinner"></div>
            <p>Loading planet data…</p>
          </div>
        )}

        {error && <p className="planets-error">Failed to load planets: {error}</p>}

        {!loading && (
          <div className="planets-grid">
            {planets.map((p) => (
              <PlanetCard
                key={p.planet}
                planet={p.planet}
                distanceFromSun={p.distanceFromSun}
                image={p.image}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
