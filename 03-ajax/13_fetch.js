;

((c, d) => {
  const respuestaFetch = d.querySelector('#fetch')
  let tpl = ''

  fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response.json())
    .then(albums => {
      c(albums)
      albums.forEach(el => (tpl += `<a href="${el.url}"><img src="${el.thumbnailUrl}"></a>`))
      respuestaFetch.innerHTML = tpl
    })
    .catch(err => c(err.message))
})(console.log, document);

((c, d) => {
  const respuestaFetch = d.querySelector('#fetch')
  let tpl = ''

  fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response.blob())
    .then(albums => {
      c(albums)
      albums.forEach(el => (tpl += `<a href="${el.url}"><img src="${el.thumbnailUrl}"></a>`))
      respuestaFetch.innerHTML = tpl
    })
    .catch(err => c(err.message))
})(console.log, document)
