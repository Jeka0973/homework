function whileConfirm() {
  while (confirm(`Вы хотите продолжить выполнение?`)) {
    alert(`Вы захотели и продолжили))`)
  }
  alert(`Ну наконец-то конец!))`)
}

function arrayFill() {
  let arr = []
  let element
  while ((element = prompt(`Введите что-нибудь:`))) {
    arr.push(element)
    alert(`Текущий массив: ${arr} `)
  }
  alert(`Ввод окончен, результат: ${arr} `)
}

function arrayFillNoPush() {
  let arr = []
  let element
  let i = 0
  while ((element = prompt(`Введите что-нибудь:`))) {
    arr[i++] = element
    alert(`Текущий массив: ${arr} `)
  }
  alert(`Ввод окончен, результат: ${arr} `)
}

function infiniteProbably() {
  let numOfIteration = 0

  while (1) {
    if (Math.random() > 0.9) {
      break
    } else {
      numOfIteration++
    }
  }
  alert(`Количество итераций доТру)) составило: ${numOfIteration}`)
}

function emptyLoop() {
  while (prompt(`OK - break, Cancel - continue`) == null) {}
  alert(`Ну вот и все)`)
}

function progressionSum() {
  let [element, d, n] = prompt(
    `Введите первый элемент, шаг прогрессии и количество членов в виде A:D:N`
  )
    .split(':')
    .map(Number)
  let str = element
  let curr = element
  let summ = curr
  for (let i = 1; i < n; i++) {
    curr = curr + d
    summ += curr
    str += `,${curr}`
  }
  alert(
    `Результат прогрессии c шагом ${d} и количеством элементов ${n}: ${str}, сумма = ${str
      .split(',')
      .map(Number)
      .reduce((sum, curr) => sum + curr, 0)} или сумма вторым способом = ${summ}`
  )
}

function chessOneLine() {
  let LenghtsOfLine = prompt(`Введите длину ряда:`)
  let str = ''
  for (let i = 0; i < LenghtsOfLine; i++) {
    i % 2 ? (str += ' ') : (str += '#')
  }
  console.log(`Ряд из ${LenghtsOfLine} элементов: |${str.trim()}|`)
}

function numbers() {
  let result = ''
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      result += `${j}`
    }
    result += `\n`
  }
  console.log(result)
}

function chess() {
  let [row, col] = prompt(`Введите размерность доски в формате X:Y:`).split(':').map(Number)
  let result = ''
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (i % 2) {
        j % 2 ? (result += '.') : (result += '#')
      } else {
        j % 2 ? (result += '#') : (result += '.')
      }
    }
    result += `\n`
  }
  console.log(result)
}

function cubes() {
  let arrOfCubes = []
  let numOfElements = prompt(`Введите количество элементов массива: `)
  for (let i = 0; i < numOfElements; i++) {
    arrOfCubes.push(Math.pow(i, 3))
  }
  alert(`Результирующий массив из ${numOfElements} элементов: ${arrOfCubes}`)
}

function multiplyTable() {
  let arr = [[]]
  for (let i = 0; i < 9; i++) {
    arr[i] = [i + 1]
    for (let j = 0; j < 9; j++) {
      arr[i][j] = (i + 1) * (j + 1)
    }
  }
  console.log(arr)
}

function readArrayOfObjects() {
  let arrOfObjects = []
  while (confirm(`Хотите ввести объект в массив?`)) {
    let currentObj = {}
    let key, value
    let str
    while (
      (str = prompt(
        `Введите КЛЮЧ:ЗНАЧЕНИЕ текущего объекта ('Отмена' - завершение редактирования текущего объекта):`
      )) !== null
    ) {
      if (str) {
        ;[key, value] = str.split(':')
        currentObj[key] = value
      } else {
        alert(`Ввод пустого значения недопустим, повторите ввод!`)
      }
    }
    if (Object.keys(currentObj).length) {
      arrOfObjects.push(currentObj)
    }
  }
  console.log(arrOfObjects)
}

function rombik() {
  let size = prompt(`Введите размер (ширина=высоте) ромбика: `)
  let result = ''
  let center = (size - 1) / 2 + 1

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (i <= center) {
        j >= center - (i - 1) && j <= center + (i - 1) ? (result += '#') : (result += '.')
      } else {
        j >= center - (size - i) && j <= center + (size - i) ? (result += '#') : (result += '.')
      }
    }
    result += `\n`
  }
  console.log(result)
}

function multiplyTable() {
  //в файлах multiply_table.*
}

function highlightCell() {
  //в файлах highlight_cell.*
}

function highlightCross() {
  //в файлах highlight_cross.*
}
