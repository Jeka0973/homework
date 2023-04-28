//****рекурсия html tree******/
{
  const table = {
    tagName: 'table',
    attrs: {
      border: '1',
    },
    children: [
      {
        tagName: 'tr',
        children: [
          {
            tagName: 'td',
            children: ['1x1'],
          },
          {
            tagName: 'td',
            children: ['1x2'],
          },
        ],
      },
      {
        tagName: 'tr',
        children: [
          {
            tagName: 'td',
            children: ['2x1'],
          },
          {
            tagName: 'td',
            children: ['2x2'],
          },
        ],
      },
    ],
  }

  let str = ''

  function htmlTree(obj) {
    for (let key in obj) {
      if (key == 'tagName') {
        str += `<${obj[key]}`
      } else if (key == 'attrs') {
        for (let attrs in obj[key]) {
          str += ` ${attrs} = '${obj[key][attrs]}'`
        }
      } else {
        str += `>`
      }
      if (key == 'children') {
        for (let child of obj[key]) {
          if (typeof child[0] === 'string') {
            str += `${child}`
          } else if (typeof child === 'object') {
            htmlTree(child)
          }
        }
      }
    }
  }

  htmlTree(table)
  console.log(str)
}
//****рекурсия Dom tree ******/
{
  const table = {
    tagName: 'table',
    attrs: {
      border: '1',
    },
    children: [
      {
        tagName: 'tr',
        children: [
          {
            tagName: 'td',
            children: ['1x1'],
          },
          {
            tagName: 'td',
            children: ['1x2'],
          },
        ],
      },
      {
        tagName: 'tr',
        children: [
          {
            tagName: 'td',
            children: ['2x1'],
          },
          {
            tagName: 'td',
            children: ['2x2'],
          },
        ],
      },
    ],
  }

  let str = ''

  function domTree(parent, obj) {
    let tagElem

    for (let key in obj) {
      if (key == 'tagName') {
        str += `<${obj[key]}` //str  - линейная строка HTML (удобно для теста, с прошлого задания)

        tagElem = document.createElement(`${obj[key]}`) //создаем первый найденный тег
        console.log(tagElem)
      } else if (key == 'attrs') {
        for (let attrs in obj[key]) {
          tagElem.setAttribute(`${attrs}`, `${obj[key][attrs]}`) //если у него есть атрибуты - присваиваем
          str += ` ${attrs} = '${obj[key][attrs]}'`
        }
      } else {
        parent.appendChild(tagElem) //после добавляем к текущему родителю

        str += `>`
      }
      if (key == 'children') {
        for (let child of obj[key]) {
          if (typeof child[0] === 'string') {
            tagElem.textContent = child //если есть дети - массив необъектов, а строк - записываем к тегу лист
            str += `${child}`
          } else if (typeof child === 'object') {
            domTree(tagElem, child) //меняем родителя на +1 вниз по-рекурсии!
          }
        }
      }
    }
  }

  domTree(document.body, table)
}

//****рекурсия Deep copy ******/
{
  const table = {
    tagName: 'table',
    attrs: {
      border: '1',
    },
    children: [
      {
        tagName: 'tr',
        children: [
          {
            tagName: 'td',
            children: ['1x1'],
          },
          {
            tagName: 'td',
            children: ['1x2'],
          },
        ],
      },
      {
        tagName: 'tr',
        children: [
          {
            tagName: 'td',
            children: ['2x1'],
          },
          {
            tagName: 'td',
            children: ['2x2'],
          },
        ],
      },
    ],
  }

  const arr = [
    1,
    'string',
    null,
    undefined,
    {a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true},
    true,
    false,
  ]
  const arr1 = [1, 'string', null, [1, 2, [1, 2, 3, 4], 4], undefined, true, false]

  function deepCopy(obj) {
    if (Array.isArray(obj)) {
      //Проверяем, если массив (потом объект)
      const arrCopy = []
      for (let i = 0; i < obj.length; i++) {
        if (Array.isArray(obj[i])) {
          //если натыкаемся на массив внутри - рекурсия
          console.log(`когда находим массив индекс=${i} знач=${obj[i]}`)
          arrCopy[i] = deepCopy(obj[i])
        } else {
          arrCopy[i] = obj[i]
        }
      }
      return arrCopy
    } else if (typeof obj === 'object' && obj != null) {
      //незабываем, что null - object!!
      const objCopy = {}
      for (let key in obj) {
        if (Array.isArray(key)) {
          //если натыкаемся на массив внутри - рекурсия
          objCopy[key] = deepCopy(obj[key])
        } else if (typeof obj[key] === 'object' && obj[key] != null) {
          //если натыкаемся на объект внутри - рекурсия
          objCopy[key] = deepCopy(obj[key])
        } else {
          objCopy[key] = obj[key] //просто наполняем
        }
      }
      return objCopy
    }
  }

  const copyArr = deepCopy(table)
  console.log(table)
  console.log(copyArr)
}

//****рекурсия My Stringify ******/

{
  const table = {
    tagName: 'table',
    attrs: {
      border: '1',
    },
    children: [
      {
        tagName: 'tr',
        children: [
          {
            tagName: 'td',
            children: ['1x1'],
          },
          {
            tagName: 'td',
            children: ['1x2'],
          },
        ],
      },
      {
        tagName: 'tr',
        children: [
          {
            tagName: 'td',
            children: ['2x1'],
          },
          {
            tagName: 'td',
            children: ['2x2'],
          },
        ],
      },
    ],
  }
  const arr = [1, 4, [6, [8, 8, 9]]]

  const obj1 = {a: 15, b: 10, c: [1, 2, 3, 4], k: {e: 15, f: 10}}

  function myStringifly(obj) {
    if (Array.isArray(obj)) {
      //если объект - массив
      strArr = '['
      for (let i = 0; i < obj.length; i++) {
        if (Array.isArray(obj[i])) {
          strArr += myStringifly(obj[i]) //если внутри массив - рекурсия
        } else if (typeof obj[i] === 'object' && obj[i] != null) {
          strArr += myStringifly(obj[i]) //если в массиве - объект рекурсия
        } else {
          typeof obj[i] === 'string' ? (strArr += `"${obj[i]}"`) : (strArr += `${obj[i]}`) //перебираем-пишем(с проверкой типа)
        }
        if (i < obj.length - 1) {
          strArr += ',' // тут добавляем запятые между элементами, пока не последний!!
        }
      }
      strArr += ']'
      return strArr
    } else if (typeof obj === 'object' && obj != null) {
      //если объект - объект (ниже смысл тот же)
      strObj = '{'
      let keys = Object.keys(obj)

      for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        if (Array.isArray(key)) {
          strObj += myStringifly(obj[key])
        } else if (typeof obj[key] === 'object' && obj[key] != null) {
          strObj += `"${key}": `

          strObj += myStringifly(obj[key])
        } else {
          typeof obj[key] === 'string'
            ? (strObj += `"${key}" : "${obj[key]}" `)
            : (strObj += `"${key}" : ${obj[key]} `)
        }

        if (i < keys.length - 1) {
          strObj += ','
        }
      }
      return (strObj += '}')
    }
  }
  console.log(table)
  console.log(myStringifly(table))
  console.log(JSON.parse(myStringifly(table)))
}
