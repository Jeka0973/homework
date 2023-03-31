function literals() {
  const cat = {
    color: 'red',
    breed: 'Angora',
    weight: '2kg',
  }
  const phone = {
    model: 'Xiaomi',
    memory: '64Gb',
    displaySize: '6',
  }
  const car = {
    model: 'Nissan',
    type: 'hatchback',
    color: 'green',
  }
}

function literalsExpand() {
  const cat = {
    color: 'red',
    breed: 'Angora',
    weight: '2kg',
  }
  const phone = {
    model: 'Xiaomi',
    memory: '64Gb',
    displaySize: '6',
  }
  cat[prompt(`Добавьте ключ к обьекту "cat":`)] = prompt(`Введите его значение`)
  cat[prompt(`Добавьте еще ключ к обьекту "cat":`)] = prompt(`Введите его значение`)

  phone[prompt(`Добавьте ключ к обьекту "phone":`)] = prompt(`Введите его значение`)
  phone[prompt(`Добавьте еще ключ к обьекту "phone":`)] = prompt(`Введите его значение`)
}

function literalsCopy() {
  let newKey = prompt(`Введите имя динамического ключа в "cat":`)
  let newValue = prompt(`Введите его значение:`)

  const cat = {
    color: 'red',
    breed: 'Angora',
    weight: '2kg',
    [newKey]: newValue,
  }

  const phone = {
    model: 'Xiaomi',
    memory: '64Gb',
    displaySize: '6',
  }

  const catCopy = {...cat}
  alert(`Исходный обьект: ${JSON.stringify(cat)}
      его ("...spread") копия: ${JSON.stringify(catCopy)};`)

  let phoneCopy = Object.assign(phone)

  alert(`Исходный обьект: ${JSON.stringify(phone)}
      его ("assign") копия: ${JSON.stringify(phoneCopy)};`)
}

function htmlTree() {
  let ioObj = {
    tagName: 'body',
    children: [
      {
        tagName: 'div',
        children: [
          {
            tagName: 'span',
            children: 'Enter a data please:',
          },
          {
            tagName: 'br/',
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'name',
            },
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'surname',
            },
          },
        ],
      },
      {
        tagName: 'div',
        children: [
          {
            tagName: 'button',
            attrs: {
              id: 'ok',
              children: 'OK',
            },
          },
          {
            tagName: 'button',
            attrs: {
              id: 'cancel',
              children: 'Cancel',
            },
          },
        ],
      },
    ],
  }

  let buttonText = ioObj.children[1].children[1].attrs.children
  let inputIdValue = ioObj.children[0].children[3]['attrs']['id']

  alert(`Значение второй кнопки: ${buttonText};
Значение id второго input: ${inputIdValue}`)
}

function parent() {
  let ioObj = {
    tagName: 'body',
    children: [
      {
        tagName: 'div',
        children: [
          {
            tagName: 'span',
            children: 'Enter a data please:',
          },
          {
            tagName: 'br/',
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'name',
            },
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'surname',
            },
          },
        ],
      },
      {
        tagName: 'div',
        children: [
          {
            tagName: 'button',
            attrs: {
              id: 'ok',
              children: 'OK',
            },
          },
          {
            tagName: 'button',
            attrs: {
              id: 'cancel',
              children: 'Cancel',
            },
          },
        ],
      },
    ],
  }

  ioObj.children[0].parent = ioObj
  ioObj.children[1].parent = ioObj

  ioObj.children[0].children[0].parent = ioObj.children[0]
  ioObj.children[0].children[1].parent = ioObj.children[0]
  ioObj.children[0].children[2].parent = ioObj.children[0]
  ioObj.children[0].children[3].parent = ioObj.children[0]

  ioObj.children[1].children[0].parent = ioObj.children[0]
  ioObj.children[1].children[1].parent = ioObj.children[0]

  ioObj.children[0].children[2].attrs.parent = ioObj.children[0].children[2]
  ioObj.children[0].children[3].attrs.parent = ioObj.children[0].children[2]
}

function changeOk() {
  let ioObj = {
    tagName: 'body',
    children: [
      {
        tagName: 'div',
        children: [
          {
            tagName: 'span',
            children: 'Enter a data please:',
          },
          {
            tagName: 'br/',
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'name',
            },
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'surname',
            },
          },
        ],
      },
      {
        tagName: 'div',
        children: [
          {
            tagName: 'button',
            attrs: {
              id: 'ok',
              children: 'OK',
            },
          },
          {
            tagName: 'button',
            attrs: {
              id: 'cancel',
              children: 'Cancel',
            },
          },
        ],
      },
    ],
  }

  ioObj.children[1].children[0].attrs[prompt(`Введите новый атрибут для кнопки ОК:`)] = prompt(
    `ВВедите значение нового атрибута:`
  )
}

function destructure() {
  let ioObj = {
    tagName: 'body',
    children: [
      {
        tagName: 'div',
        children: [
          {
            tagName: 'span',
            children: 'Enter a data please:',
          },
          {
            tagName: 'br/',
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'name',
            },
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'surname',
            },
          },
        ],
      },
      {
        tagName: 'div',
        children: [
          {
            tagName: 'button',
            attrs: {
              id: 'ok',
              children: 'OK',
            },
          },
          {
            tagName: 'button',
            attrs: {
              id: 'cancel',
              children: 'Cancel',
            },
          },
        ],
      },
    ],
  }

  const {
    children: [
      {
        children: [
          {children: spanText},
          {},
          {},
          {
            attrs: {id: idText},
          },
        ],
      },
      {
        children: [
          {},
          {
            attrs: {children: textSecButton},
          },
        ],
      },
    ],
  } = ioObj

  alert(`Значение текста <span>: ${spanText};
Значение Id во втором Input: ${idText};
Значение текста на второй кнопке: ${textSecButton}`)
}

function destructArray() {
  let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c']
  let [odd1, even1, odd2, even2, odd3, ...letters] = arr
  alert(`Исходный массив: ${arr.join(' ')}
  Переменные odd1 = ${odd1}; even1 = ${even1}; odd2 = ${odd2}; even2 = ${even2}; odd3 = ${odd3};
  Буквы: ${letters.join('')}`)
}

function destructString() {
  let arr = [1, 'abc']

  let [number, str] = arr
  let [ch1, ch2, ch3] = str

  alert(`Исходный массив: ${arr.join(' ')}
Переменные number = ${number}; ch1 = ${ch1}; ch2 = ${ch2}; ch3 = ${ch3};`)
}

function destruct2() {
  let obj = {name: 'Ivan', surname: 'Petrov', children: [{name: 'Maria'}, {name: 'Nikolay'}]}

  let {
    children: [{name: nameOne}, {name: nameTwo}],
  } = obj
  alert(`Имена: ${nameOne} ${nameTwo}`)
}

function destruct3() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 10]
  const {0: a, 1: b, length} = arr
  alert(`Из массива ${arr.join(' ')} 
  первый элемент a = ${a}, второй b = ${b}, длина length = ${length}`)
}

function copyDelete() {
  const phone = {
    model: 'Xiaomi',
    memory: '64Gb',
    displaySize: '6',
    typeOfScreen: 'AmoLED',
  }

  let except = {
    model: 'Xiaomi',
    displaySize: '6',
  }

  let copyObj = {}

  let strExcept = prompt(
    `Введите поля через запятую для исключения из копии обьекта
  (исходные поля: model,memory,displaySize,typeOfScreen)`,
    `model,displaySize,typeOfScreen`
  )
  let arrExcept = strExcept.trim().split(',')

  copyObj = {...phone}

  for (const element of arrExcept) {
    const {[element]: tempName, ...tempObj} = copyObj
    copyObj = {...tempObj}
  }
  console.log(copyObj)
}

function currensyRealRate() {
  fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
      let currensyFromConvert = prompt(
        `Введите валюту для конвертации (например UAH, KZT, CAD, PLN...): `,
        `UAH`
      )
        .trim()
        .toUpperCase()
      let currensyToConvert = prompt(
        `Введите валюту, в какую хотите конвертировать (например UAH, KZT, CAD, PLN...): `,
        `KZT`
      )
        .trim()
        .toUpperCase()

      let amountCurrensyFromConvert = prompt(
        `Введите количество валюты для конвертации в формате xx или xx.xx :)`
      )

      let toUsd = amountCurrensyFromConvert / data.rates[currensyFromConvert]
      let result = (toUsd * data.rates[currensyToConvert]).toFixed(2)

      alert(`Вы решили поменять ${amountCurrensyFromConvert}${currensyFromConvert} на ${currensyToConvert}
      и получите двойную конвертацию
      ${currensyFromConvert}->USD (курс ${data.rates[currensyFromConvert]}),
      потом 
      USD ->${currensyToConvert} (курс ${data.rates[currensyToConvert]}),
      что в итоге составит: ${result}${currensyToConvert}`)
    })
}

function currencyDropDown() {
  fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
      let arrCurrencyType = [...Object.keys(data.rates)]
      let str = '<select>'
      for (const currency of arrCurrencyType) {
        str += `<option value="${currency}">${currency}</option>`
      }
      str += '</select>'
      document.write(str)
    })
}

function currencyTable() {
  fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
      let objCurrencyRate = {...data.rates}
      let arrCurrencyRateValues = [...Object.values(objCurrencyRate)]
      let arrCurrencyType = [...Object.keys(objCurrencyRate)]

      let htmlStr = `<style>
  table {
    border-collapse: collapse;
    border: 1px solid black;
    table-layout:fixed;
    text-align: center; 
  }
  th, .tdGray {
    background-color: silver;
    font-weight: bold;
  }
  td,th {width: 25px;} 
</style>
<table border="1" cellpadding="5">`

      htmlStr += `<tr><th></th>`
      for (const elements of arrCurrencyType) {
        htmlStr += `<th>${elements}</th>`
      }
      for (let i = 0; i < arrCurrencyRateValues.length; i++) {
        htmlStr += `<tr>`
        for (let j = 0; j < arrCurrencyRateValues.length; j++) {
          if (!j) {
            htmlStr += ` <td class = "tdGray" >${arrCurrencyType[i]}</td>`
          }
          htmlStr += `<td>${(arrCurrencyRateValues[j] / arrCurrencyRateValues[i]).toFixed(3)}</td>`
        }
      }
      htmlStr += `</table>`
      document.write(htmlStr)
    })
}

function form() {
  const getInputType = valueToCheck => {
    let isType
    typeof valueToCheck == 'number'
      ? (isType = 'number')
      : typeof valueToCheck == 'string'
      ? (isType = 'text')
      : (isType = 'checkbox')
    return isType
  }
  const car = {
    Name: 'chevrolet chevelle malibu',
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Origin: 'USA',
    in_production: true,
  }

  let htmlStr = `<form>`
  for (const key in car) {
    getInputType(car[key]) == 'checkbox'
      ? (htmlStr += `<label>${key}:<input type=${getInputType(car[key])} ${
          car[key] ? 'checked' : ''
        } /></label><br>`)
      : (htmlStr += `<label>${key}:<input type=${getInputType(car[key])} value = ${
          car[key]
        } /></label><br>`)
  }
  htmlStr += `</form>`
  document.write(htmlStr)
}
function table() {
  // const persons = [
  //   {
  //     name: 'Марія',
  //     fatherName: 'Іванівна',
  //     surname: 'Іванова',
  //     sex: 'female',
  //   },
  //   {
  //     name: 'Миколай',
  //     fatherName: 'Іванович',
  //     surname: 'Іванов',
  //     age: 15,
  //     notmarried: {
  //       name1: 'Вася',
  //       fatherName1: 'Іванович',
  //       surname1: 'Іванов',
  //       married: true,
  //     },
  //   },
  //   {
  //     name: 'Петро',
  //     fatherName: 'Іванович',
  //     surname: 'Іванов',
  //     married: true,
  //   },
  // ]

  const persons = {
    tagName: 'body',
    children: [
      {
        tagName: 'div',
        children: [
          {
            tagName: 'span',
            children: 'Enter a data please:',
          },
          {
            tagName: 'br/',
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'name',
            },
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'surname',
            },
          },
        ],
      },
      {
        tagName: 'div',
        children: [
          {
            tagName: 'button',
            attrs: {
              id: 'ok',
              children: 'OK',
            },
          },
          {
            tagName: 'button',
            attrs: {
              id: 'cancel',
              children: 'Cancel',
            },
          },
        ],
      },
    ],
  }

  // const persons = [
  //   {
  //     Name: 'chevrolet chevelle malibu',
  //     Cylinders: 8,
  //     Displacement: 307,
  //     Horsepower: 130,
  //     Weight_in_lbs: 3504,
  //     Origin: 'USA',
  //   },
  //   {
  //     Name: 'buick skylark 320',
  //     Miles_per_Gallon: 15,
  //     Cylinders: 8,
  //     Displacement: 350,
  //     Horsepower: 165,
  //     Weight_in_lbs: 3693,
  //     Acceleration: 11.5,
  //     Year: '1970-01-01',
  //     vaz: {
  //       Year: '1973-09-05',
  //       Origin: 'USSR',
  //       productionCity: 'Тольятти',
  //     },
  //   },
  //   {
  //     Miles_per_Gallon: 18,
  //     Cylinders: 8,
  //     Displacement: 318,
  //     Horsepower: 150,
  //     Weight_in_lbs: 3436,
  //     Year: '1970-01-01',
  //     Origin: 'USA',
  //   },
  //   {
  //     Name: 'amc rebel sst',
  //     Miles_per_Gallon: 16,
  //     Cylinders: 8,
  //     Displacement: 304,
  //     Horsepower: 150,
  //     Year: '1970-01-01',
  //     Origin: 'USA',
  //   },
  // ]

  const getKeys = obj => {
    let arr = Object.keys(obj)
    for (key of arr) {
      if (typeof obj[key] == 'object') {
        getKeys(obj[key])
        continue
      }
      if (!arrUniqueKey.includes(key)) {
        arrUniqueKey.push(key)
      }
    }
  }

  const getTableOfData = obj => {
    let arr = Object.keys(obj)
    for (key of arr) {
      if (typeof obj[key] == 'object') {
        getTableOfData(obj[key])
        continue
      }
      arrOfValues[i] = []
      for (j = 0; j < arrUniqueKey.length; j++) {
        obj[arrUniqueKey[j]] === undefined
          ? (arrOfValues[i][j] = '')
          : typeof obj[arrUniqueKey[j]] === 'object'
          ? (arrOfValues[i][j] = '{obj}')
          : (arrOfValues[i][j] = obj[arrUniqueKey[j]])
      }
      i++
    }
  }

  const htmlString = array => {
    let htmlStr = `<style>
      table {
        border-collapse: collapse;
        border: 1px solid black;
        table-layout:fixed;
        text-align: center; 
      }
      th {
        background-color: silver;
      }
      td,th {width: 20px;} 
      .tdRed { color:red; }
      .tdBlue { color:blue; }
    </style>
    <table border="1" cellpadding="5">`

    let currentRow = 0
    for (const row of array) {
      htmlStr += `<tr>`
      for (const elements of row) {
        !currentRow
          ? (htmlStr += `<th>${elements}</th>`)
          : currentRow % 2
          ? (htmlStr += `<td class = "tdRed">${elements}</td>`)
          : (htmlStr += `<td class = "tdBlue">${elements}</td>`)
      }
      currentRow++
      htmlStr += `</tr>`
    }
    htmlStr += `</table>`
    return htmlStr
  }

  let arrUniqueKey = [] //для уникальных заголовков
  let arrOfValues = [[]] //результирующая + header

  getKeys(persons) //вычитывает любую вложенность, записывает в массив уникальные поля внутри обьектов

  let i = 1 //внешние счетчики  выносятся из-за рекурсии
  let j = 0 //внешние счетчики

  arrOfValues = [[...arrUniqueKey]] //Инициализация таблицы хедером

  getTableOfData(persons) //заполнение результирующей таблицы arrOfValues

  let result = htmlString(arrOfValues) //построение HTML таблицы

  document.write(result)
}
