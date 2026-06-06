import React from 'react'
import './PlanetCard.css'

export default function PlanetCard({ planet, distanceFromSun, image }) {
  return (
    <figure className="planet-card">
      <div className="planet-card__img-wrap">
        <img
          src={image}
          alt={`${planet} planet`}
          className="planet-card__img"
          loading="lazy"
        />
      </div>
      <figcaption className="planet-card__caption">
        <span className="planet-card__name">{planet}</span>
        <span className="planet-card__distance">
          Distance from Sun: {distanceFromSun.toLocaleString()} million km
        </span>
      </figcaption>
    </figure>
  )
}
