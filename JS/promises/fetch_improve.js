//********* РЕКУРСИЯ - СИЛА!!!!! *************/

fetch('https://swapi.dev/api/people/2/')
  .then(res => res.json())
  .then(luke => {
    //obj = {...luke}
    getTable(document.getElementById('forTable'), luke)
  })

function getTable(domElement, obj) {
  const table = document.createElement('table')

  if (Array.isArray(obj)) {
    //если данные - массив
    table.className = 'innerTable'

    for (let elem of obj) {
      const trData = document.createElement('tr')
      const td = document.createElement('td')

      if (typeof elem === 'string' && elem.includes('https')) {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        td.style.color = `rgb(${red},${green},${blue})` //красим заголовки (наверное удобнее при множественности вложенных таблиц)

        const button = document.createElement('button')
        let url = elem.toString()
        button.innerText = url
        td.appendChild(button)
        let isTableOpen = false //Блокируем повторное открытие таблиц от нервных нажатий))
        button.onclick = function () {
          fetch(url)
            .then(res => res.json())
            .then(lukeWorld => {
              console.log(lukeWorld)
              if (!isTableOpen) {
                getTable(td, lukeWorld)
                isTableOpen = true
                button.disabled = true
              }
            })
        }
      } else {
        td.className = 'innerTable'
        td.textContent = elem
      }
      trData.appendChild(td)
      table.appendChild(trData)
    }

    domElement.appendChild(table)
  } else if (typeof obj === 'object' && obj != null && !Array.isArray(obj)) {
    //если данные - объект
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
        if (typeof obj[key] === 'string' && obj[key].includes('https')) {
          const red = Math.floor(Math.random() * 256)
          const green = Math.floor(Math.random() * 256)
          const blue = Math.floor(Math.random() * 256)
          td.style.color = `rgb(${red},${green},${blue})`
          const button = document.createElement('button')
          let url = obj[key].toString()
          button.innerText = url
          td.appendChild(button)
          let isTableOpen = false
          button.onclick = function () {
            fetch(url)
              .then(res => res.json())
              .then(lukeWorld => {
                console.log(lukeWorld)
                if (!isTableOpen) {
                  getTable(td, lukeWorld)
                  isTableOpen = true
                  button.disabled = true
                }
              })
          }
        } else {
          td.textContent = obj[key]
        }
      }
      trData.appendChild(td)
    }
    table.appendChild(trData)
    domElement.appendChild(table)
  }
}
