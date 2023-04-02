function temperature() {
  const minCelsius = -273
  const celsiusToFahrenheit = tempInCelcius => tempInCelcius * 1.8 + 32
  let celsius
  ;(celsius = prompt('Введите температуру в градусах Цельсия: ', 0)) < minCelsius
    ? alert(`Введите температуру выше, чем  ${minCelsius} !`)
    : alert(`Температура в градусах Фаренгейта: ${celsiusToFahrenheit(celsius)} `)
}

function rgb() {
  const decimalToHex = decimalNumber => {
    let hexString = ''
    let remOfDivision
    const hexSymbol = number => {
      switch (number) {
        case 10:
          return 'A'
        case 11:
          return 'B'
        case 12:
          return 'C'
        case 13:
          return 'D'
        case 14:
          return 'E'
        case 15:
          return 'F'
        default:
      }
    }
    while (decimalNumber) {
      remOfDivision = decimalNumber % 16
      remOfDivision >= 10 ? (hexString += hexSymbol(remOfDivision)) : (hexString += remOfDivision)
      decimalNumber = (decimalNumber - remOfDivision) / 16
    }
    hexString.split('').reverse().join('')

    !hexString.length
      ? (hexString = '00')
      : hexString.length == 1
      ? (hexString = '0' + hexString)
      : (hexString = hexString)

    return hexString
  }

  let redColor = prompt('Введите RED color number :')
  let greenColor = prompt('Введите GREEN color number :')
  let blueColor = prompt('Введите BLUE color number :')
  let rgbHex = '#' + decimalToHex(redColor) + decimalToHex(greenColor) + decimalToHex(blueColor)

  alert('Шестнадцатиричное число: ' + rgbHex)
}

function flats() {
  const whereMyFlat = (floorsNum, flatsOnFloorNum, flatNum) => {
    // floorsNum //количество этажей
    // flatsOnFloorNum //кол-во квартир на площадке
    // flatNum //номер вводимой квартиры
    let houseEntranseNum //номер искомого подьезда
    let remOfDivision
    let flatNumLastEntrance //номер квартиры в найденном подьезде
    let floorOfLastEntrance //этаж искомой квартиры квартиры
    let result = {}

    remOfDivision = flatNum % (floorsNum * flatsOnFloorNum)
    if (remOfDivision == 0) {
      houseEntranseNum = flatNum / (floorsNum * flatsOnFloorNum)
      return (result = {
        entrance: houseEntranseNum,
        floor: floorsNum,
        flat: flatNum,
      })
    } else {
      houseEntranseNum = (flatNum - remOfDivision) / (floorsNum * flatsOnFloorNum) + 1
      flatNumLastEntrance = flatNum - (houseEntranseNum - 1) * (floorsNum * flatsOnFloorNum)
      remOfDivision = flatNumLastEntrance % flatsOnFloorNum
      floorOfLastEntrance = (flatNumLastEntrance - remOfDivision) / flatsOnFloorNum + 1
      return (result = {
        entrance: houseEntranseNum,
        floor: floorOfLastEntrance,
        flat: flatNum,
      })
    }
  }
  let result = whereMyFlat(
    prompt('Введите количество этажей ', 9),
    (flatsOnFloorNum = prompt('Введите кол-во квартир на площадке', 4)),
    prompt('Введите квартиру', 81)
  )
  alert(`Подьезд: ${result.entrance}  Этаж :  ${result.floor}  Квартира: ${result.flat}`)
}

function credentials() {
  const credentialsNew = () => {
    let surname = prompt('Введите фамилию: ', 'иваНОВ').trim()
    let name = prompt('Введите имя: ', 'иВаН').trim()
    let patronymic = prompt('Введите отчество: ', 'иваныч').trim()
    let result = {}

    surname = surname[0].toUpperCase() + surname.substring(1).toLowerCase()
    name = name[0].toUpperCase() + name.substring(1).toLowerCase()
    patronymic = patronymic[0].toUpperCase() + patronymic.substring(1).toLowerCase()
    let fio = surname + name + patronymic
    let fioArr = fio.split('')
    for (let i = 1; i < fioArr.length; i++) {
      if (fioArr[i] === fioArr[i].toUpperCase()) {
        fioArr.splice(i, 0, ' ')
        i++
      }
    }
    fio = fioArr.join('')
    // я сделал тут так, что ФИО склеивается вместе и нужно их разделить по признаку Большой буквы (без регулярных выражений)
    return (result = {
      name: name,
      surname: surname,
      fatherName: patronymic,
      fullName: fio,
    })
  }

  let resultStr = ''
  let result = credentialsNew()
  for (let key in result) {
    resultStr += `${key} - ${result[key]}; `
  }
  alert(resultStr)
}

function newLine() {
  const newLineNew = str => {
    let arr = str.split('/n')
    return arr.join('\n')
  }

  let result
  result = newLineNew(
    prompt(
      `Введите строку с символами переноса /n, например:  Lorem ipsum dolor/n sit amet consectetur adipisicing/n elit. Doloribus rem laborum voluptatibus`
    )
  )
  alert(result)
}

function promptOr() {
  const promptNew = ageDefault => prompt(`Введите возраст: `) || ageDefault

  let ageDef = prompt(`Введите возраст по-умолчанию: `, 20)
  alert(`Ваш возраст : ${promptNew(ageDef)}`)
}

function loginAndPassword() {
  const loginPasswordChecker = (login, password) =>
    prompt(`Введите логин: `, 'admin') == login && prompt(`Введите пароль: `, 'qwerty') == password
      ? true
      : false

  loginPasswordChecker(
    prompt(`Введите правильный логин:`, 'admin'),
    prompt(`Введите правильный пароль:`, 'qwerty')
  )
    ? alert(`Данные верны`)
    : alert(`Данные ошибочны`)

  // let login
  // ;(login = prompt(`Введите логин: `)) == `admin` && prompt(`Введите пароль: `) == `qwerty`
  //   ? alert(`Данные введены верно`)
  //   : login == `admin`
  //   ? alert(`Пароль неверный`)
  //   : alert(`Логин неверный`)
}

function forTable() {
  const arrXY = rowAndCol => {
    let [rowNum, colNum] = rowAndCol.split(`:`)
    let arr = []
    for (let i = 0; i < rowNum; i++) {
      arr[i] = []
      for (let j = 0; j < colNum; j++) {
        arr[i][j] = i * j
      }
    }
    return arr
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

  let arrayOfArrays = arrXY(prompt(`Введите кол-во строк и столбцов в формате X:Y`))
  let result = htmlString(arrayOfArrays)

  document.write(result)
}

function filterLexics() {
  const filterLexicsNew = (strForCheck, arrOfBadWords) => {
    let arrUserStr = strForCheck.split(` `)

    for (const badWord of arrOfBadWords) {
      arrUserStr = arrUserStr.filter(wordToCompare => wordToCompare != badWord)
    }
    let filteredStr
    return (filteredStr = `Было введено: ${strForCheck};\nCлова для фильтрации: ${arrOfBadWords};\nРезультат: ${arrUserStr.join(
      ` `
    )}`)
  }

  let userStr = prompt(
    'Введите предложение: ',
    'козел бляха осел козел муха мишка осел кот пляшка бегемот осел шабля'
  )

  let badWordsStr = prompt('Введите "плохие" слова: ', 'бляха муха пляшка шабля')

  alert(filterLexicsNew(userStr, badWordsStr.split(` `)))
}

function currencyTable() {
  fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
      const getCurrenciesArr = () => {
        let objCurrencyRate = {...data.rates}
        let arrCurrencyRateValues = [...Object.values(objCurrencyRate)]
        let arrCurrencyType = [...Object.keys(objCurrencyRate)]

        let arrCurrencies = [[]]
        arrCurrencies[0][0] = ''
        let hIndex = 1

        for (const elements of arrCurrencyType) {
          arrCurrencies[0][hIndex] = elements
          hIndex++
        }

        for (let i = 0; i < arrCurrencyRateValues.length; i++) {
          arrCurrencies[i + 1] = []

          for (let j = 0; j < arrCurrencyRateValues.length; j++) {
            if (!j) {
              arrCurrencies[i + 1][j] = arrCurrencyType[i]
            }
            arrCurrencies[i + 1][j + 1] = (
              arrCurrencyRateValues[j] / arrCurrencyRateValues[i]
            ).toFixed(3)
          }
        }
        return arrCurrencies
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

      let result = htmlString(getCurrenciesArr())
      document.write(result)
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

  const getFormStr = obj => {
    let htmlStr = `<form>`
    for (const key in obj) {
      getInputType(obj[key]) == 'checkbox'
        ? (htmlStr += `<label>${key}:<input type=${getInputType(obj[key])} ${
            obj[key] ? 'checked' : ''
          } /></label><br>`)
        : (htmlStr += `<label>${key}:<input type=${getInputType(obj[key])} value = ${
            obj[key]
          } /></label><br>`)
    }
    return (htmlStr += `</form>`)
  }

  document.write(getFormStr(car))
}

function arrayOfObjectsSort() {
  const persons = [
    {name: 'Іван', age: 17},
    {name: 'Яків', age: 12},
    {name: 'Марія', age: 35},
    {name: 'Олексій', age: 73},
  ]

  const sort = (arrOfObj, field, direction) => {
    if (direction || direction == undefined) {
      arrOfObj.sort((a, b) => {
        if (a[field] < b[field]) return -1
        if (a[field] > b[field]) return 1
        return 0
      })
    } else {
      arrOfObj.sort((a, b) => {
        if (a[field] > b[field]) return -1
        if (a[field] < b[field]) return 1
        return 0
      })
    }
    return arrOfObj
  }

  console.log({...sort(persons, 'age')})
  console.log({...sort(persons, 'name', false)})
}

//!!!!! в index.html + script_table.js реализация сортировки table с выпадающим списком!!!!
function table() {
  const persons = [
    {
      Name: 'chevrolet chevelle malibu',
      Cylinders: 8,
      Displacement: 307,
      Horsepower: 130,
      Weight_in_lbs: 3504,
      Origin: 'USA',
    },
    {
      Name: 'buick skylark 320',
      Miles_per_Gallon: 15,
      Cylinders: 8,
      Displacement: 350,
      Horsepower: 165,
      Weight_in_lbs: 3693,
      Acceleration: 11.5,
      Year: '1970-01-01',
      vaz: {
        Year: '1973-09-05',
        Origin: 'USSR',
        productionCity: 'Тольятти',
        Miles_per_Gallon: 25,
      },
    },
    {
      Miles_per_Gallon: 18,
      Cylinders: 8,
      Displacement: 318,
      Horsepower: 150,
      Weight_in_lbs: 3436,
      Year: '1970-01-01',
      Origin: 'USA',
    },
    {
      Name: 'amc rebel sst',
      Miles_per_Gallon: 16,
      Cylinders: 8,
      Displacement: 304,
      Horsepower: 150,
      Year: '1970-01-01',
      Origin: 'USA',
    },
  ]

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
        i++
        arrOfValues[i] = []
        getTableOfData(obj[key])
        continue
      }

      for (let j = 0; j < arrUniqueKey.length; j++) {
        obj[arrUniqueKey[j]] === undefined
          ? (arrOfValues[i][j] = '')
          : typeof obj[arrUniqueKey[j]] === 'object'
          ? (arrOfValues[i][j] = '{obj}')
          : (arrOfValues[i][j] = obj[arrUniqueKey[j]])
      }
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

  getObjectFromUniqueArr = (arrHeader, arrData) => {
    //получаем  массив объектов из таблицы данных по уникальным ключам
    const arrOfObj = []

    for (let i = 0; i < arrData.length; i++) {
      let obj = {}
      for (let j = 0; j < arrHeader.length; j++) {
        obj[arrHeader[j]] = arrData[i][j]
      }
      arrOfObj.push(obj)
    }
    arrOfObj.shift()

    return arrOfObj
  }

  const sort = (obj, field, direction) => {
    //сортируем массив по полю и возрастанию(true) либо убыванию
    if (direction || direction == undefined) {
      obj.sort((a, b) => {
        if (a[field] < b[field]) return -1
        if (a[field] > b[field]) return 1
        return 0
      })
    } else {
      obj.sort((a, b) => {
        if (a[field] > b[field]) return -1
        if (a[field] < b[field]) return 1
        return 0
      })
    }
    return obj
  }

  let arrUniqueKey = [] //для уникальных заголовков, заполняем getKeys. Из-за рекурсии arrUniqueKey - внешнее обьявление
  let arrOfValues = [[]] //результирующая таблица значений всех обьектов

  getKeys(persons) //вычитывает любую вложенность, записывает в массив arrUniqueKey  уникальные поля обьектов

  let i = 0 //внешние счетчик для getTableOfData(), выносится из-за рекурсии

  getTableOfData(persons) //заполнение результирующей таблицы значений arrOfValues полей входящего объекта , столбцы соответствуют arrUniqueKey

  let objFromTable = getObjectFromUniqueArr(arrUniqueKey, arrOfValues) //получаем одномерный массив обьектов для сортировки. Поля объектов соответствуют всем уникальным полям, собранным из первоначального входящего обьекта с дочерними элементами

  //*********** ниже задаем сортировку!!!! ***************/
  let sortedObj = {...sort(objFromTable, 'Miles_per_Gallon')} //делаем копию отсортированного обьекта
  //let sortedObj = {...sort(objFromTable, 'Horsepower', false)} //делаем копию отсортированного обьекта

  //****************************************//
  i = 0 //обнуляем, т.к. работаем со ссылкой arrOfValues "затираем" старые данные
  getTableOfData(sortedObj)
  arrOfValues.unshift(arrUniqueKey) //Добавление  хедера из arrUniqueKey
  document.write(htmlString(arrOfValues)) //построение HTML таблицы и ее вывод
}

function divide() {
  'смотреть index_divide.html'
}
