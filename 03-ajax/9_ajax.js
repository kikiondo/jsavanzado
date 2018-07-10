; 

((c, d, ajax) => {
  const READY_STATE_COMPLETE = 4
  const OK = 200
  const NOT_FOUND = 404
  const preload = d.querySelector('#preload')
  const country = d.querySelector('#country')
  const menu = d.querySelector('.menu')

  function contryInfo () {
    preload.innerHTML = '<i class="fa fa-refresh fa-spin fa-5x"></i>'

    if (ajax.readyState === READY_STATE_COMPLETE && ajax.status === OK) {
      c(ajax)
      preload.innerHTML = ''
      country.innerHTML = ajax.response
    } else if (ajax.status === NOT_FOUND) {
      preload.innerHTML = ''
      country.innerHTML = `<b>El servidor No responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
    }
  }

  function ajaxRequest (e) {
    e.preventDefault()
    c(e)
    if (e.target.localName === 'a') {
      ajax.open('GET', e.target.href, true)
      ajax.addEventListener('readystatechange', contryInfo)
      ajax.setRequestHeader('content-type', 'text/html')
      ajax.send()
    }
  }

  menu.addEventListener('click', ajaxRequest)
})(console.log, document, new XMLHttpRequest)

// Localname es el tipo de etiqueta y nodeNme es la etiqueta en mayuscula
