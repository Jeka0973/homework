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
      productionCity: 'Tolyatti',
      Miles_per_Gallon: 25,
      zaz: {
        Name: 'zaz1',
        Miles_per_Gallon: 5,
        Cylinders: 3,
        other: 25,
        productionCity: 'Zaporpzhie',
      },
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

const getSelectElements = arrValue => {
  let selectedElement = document.getElementById('selectList')
  for (let i = 0; i < arrValue.length; i++) {
    let optionElement = document.createElement('option')
    optionElement.value = arrValue[i]
    optionElement.text = arrValue[i]
    selectedElement.add(optionElement)
  }
}
let sortedObj //для отсортированного обьекта
let arrUniqueKey = [] //для уникальных заголовков, заполняем getKeys. Из-за рекурсии arrUniqueKey - внешнее обьявление
let arrOfValues = [[]] //результирующая массив-таблица значений всех обьектов без заголовка

getKeys(persons) //вычитывает любую вложенность, записывает в массив arrUniqueKey  уникальные поля обьектов (лажа есть, при добавлении не обьекта, а массива объектов дописывает пустую строку. На сортировку не влияет)

getSelectElements(arrUniqueKey) //заполняем выпадающий список

let i = 0 //внешние счетчик для getTableOfData(), выносится из-за рекурсии

getTableOfData(persons) //заполнение результирующей таблицы значений arrOfValues полей входящего объекта в порядке столбцов, столбцы соответствуют уникальным arrUniqueKey

let objFromTable = getObjectFromUniqueArr(arrUniqueKey, arrOfValues) //получаем одномерный массив обьектов для сортировки. Поля объектов соответствуют всем уникальным полям, собранным из первоначального входящего обьекта с дочерними элементами

//*********** ниже задаем сортировку!!!! ***************/
const selectedOption = () => {
  let selectedElement = document.getElementById('selectList')

  sortedObj = {...sort(objFromTable, selectedElement.value)} //делаем копию отсортированного обьекта
  //let sortedObj = {...sort(objFromTable, 'Horsepower', false)} //делаем копию отсортированного обьекта

  //****************************************//
  i = 0
  //arrOfValues.length = 0
  //обнуляем, т.к. работаем со ссылкой arrOfValues "затираем" старые данные
  getTableOfData(sortedObj)
  arrOfValues.shift() //тут странная кобминация, если не поставить, arrOfValues
  //при каждом селекте +1
  arrOfValues.unshift(arrUniqueKey) //Добавление  хедера из arrUniqueKey
  tableResult.innerHTML = htmlString(arrOfValues)
}
