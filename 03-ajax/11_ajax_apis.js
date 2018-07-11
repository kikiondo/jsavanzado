;
((c, d, ajax, j) => {
  const starwars = d.querySelector('#starwars')
  const pagination = d.querySelector('#pagination')

  function loadCharacters (startList) {
    let starwarsInfo
    let starwarsTemplate = ``

    if (ajax.status >= 200 && ajax.status < 400) {
      starwarsInfo = j.parse(ajax.responseText)
      c(starwarsInfo)

      starwarsTemplate += `
          <h3>Personajes de Starwars encontrados: ${starwarsInfo.count}</h3>
          <ol start="${startList}">
        `
      starwarsInfo.results.map(people => { starwarsTemplate += `<li>${people.name}</li>` })

      starwarsTemplate += `
        </ol>
        <nav id="pagination">
            <a href="${starwarsInfo.previous}" id="previous">Atras</a>
            <a href="${starwarsInfo.next}" id="next">Siguiente</a>
        </nav> 
      `
    } else {
      starwarsTemplate = `<b> El servidor no responde ${ajax.statusText}</b>`
    }
    starwars.innerHTML = starwarsTemplate
  }

  d.addEventListener('DOMContentLoaded', e => {
    ajax.open('GET', 'https://swapi.co/api/people/', true)
    ajax.addEventListener('load', loadCharacters)
    ajax.send()
  })

  d.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.localName === 'a' && e.target.href.indexOf('null') === -1) {
      let startList = (e.target.search.slice(-1) - 1) * 10 + 1
      ajax.open('GET', e.target.href || 'https://swapi.co/api/people/', true) // si no hay nada
      ajax.addEventListener('load', () => loadCharacters(startList))
      ajax.send()
    }
  })
})(console.log, document, new XMLHttpRequest, JSON)

// Las listas reciben un parametro que se llema start|| obtener el ultimo caracter es con slice(-1)
