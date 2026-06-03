fetch("data.json")
    .then(res => res.json())
    .then(data => {
        const lista = document.querySelector("#film-lista");
        data.forEach(film => {
            lista.innerHTML += `
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <span class="badge text-bg-primary mb-2">${film.categoria}</span>
              <h3 class="card-title">${film.titolo}</h3>
              <p class="card-text">${film.descrizione}</p>
            </div>
          </div>
        </div>
      `;
        });
    });