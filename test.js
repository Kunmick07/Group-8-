const container = document.getElementById("container");

if (!container) {
  console.error('Container element with id "container" not found.');
} else {
  fetch("https://anurella.github.io/images/planets.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(planet => {
        const cardHtml = `
          <div class="card">
            <img src="${planet.image}" alt="${planet.planet}">
            <h2>${planet.planet}</h2>
            <p>Distance: ${planet.distanceFromSun} million km</p>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
      });
    })
    .catch(err => console.error('Failed to load planets:', err));
}