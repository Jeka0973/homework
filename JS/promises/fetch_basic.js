fetch('https://swapi.dev/api/people/2/')
  .then(res => res.json())
  .then(luke => {
    obj = {...luke}
    getTable(document.getElementById('forTable'), luke)
  })

function getTable(domElement, obj) {
  //const table = document.createElement('table')

  // console.log(Array.isArray(obj))

  if (Array.isArray(obj)) {
    const table = document.createElement('table')
    table.className = 'innerTable'
    console.log(Array.isArray(obj))

    for (let elem of obj) {
      const trData = document.createElement('tr')

      const td = document.createElement('td')
      td.className = 'innerTable'
      td.textContent = elem
      console.log(elem)
      trData.appendChild(td)
      table.appendChild(trData)
    }

    domElement.appendChild(table)
  } else if (typeof obj === 'object' && obj != null && !Array.isArray(obj)) {
    const table = document.createElement('table')
    const trHead = document.createElement('tr')
    //создаем заголовки из полей объекта

    for (key in obj) {
      const th = document.createElement('th')
      th.textContent = key
      th.className = 'tdHead'
      trHead.appendChild(th)
    }
    table.appendChild(trHead)

    const trData = document.createElement('tr')
    //значения
    for (key in obj) {
      const td = document.createElement('td')

      if (Array.isArray(obj[key])) {
        getTable(td, obj[key])
      } else {
        td.textContent = obj[key]
      }
      trData.appendChild(td)
    }

    table.appendChild(trData)

    domElement.appendChild(table)
  }
}
