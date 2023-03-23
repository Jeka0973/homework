while (confirm('Просмотреть ДЗ?')) {
  let numberOfHomework = prompt(`Выберите номер ДЗ, а именно: 
"1" - confirms;           "2" -prompts;
"3" - itemAccess;         "4" - itemChange;
"5" - multiplyTable;      "6" - multiplyTableSlice;
"7" - indexOfWord;        "8" - reverse; 
"9" - reverse2;           "10" - copy;
"11" - deepCopy;          "12" - arrayEquals;
"13" - flat;              "14" - destructAndDefault;  
"15" - multiplyTableRest; "16" - forAlert; 
"17" - forSelectOption;   "18" - forTableHorizontal;
"19" - forTableVertical;  "20" - forTableLetters;
"21" - forMultiplyTable_WithoutForOf;  "22" - forMultiplyTable;
"23" - capitalize;        "24" - mapCapitalize;
"25" - filterLexics;      "26" - beepLexics;
"27" - reduceHTML;        "28" - forBracketHellCheck;
`)

  switch (+numberOfHomework) {
    case 1:
      confirms()
      break

    case 2:
      prompts()
      break

    case 3:
      itemAccess()
      break

    case 4:
      itemChange()
      break

    case 5:
      multiplyTable()
      break

    case 6:
      multiplyTableSlice()
      break

    case 7:
      indexOfWord()
      break

    case 8:
      reverse()
      break

    case 9:
      reverse2()
      break

    case 10:
      copy()
      break

    case 11:
      deepCopy()
      break

    case 12:
      arrayEquals()
      break

    case 13:
      flat()
      break

    case 14:
      destructAndDefault()
      break

    case 15:
      multiplyTableRest()
      break

    case 16:
      forAlert()
      break

    case 17:
      forSelectOption()
      break

    case 18:
      forTableHorizontal()
      break

    case 19:
      forTableVertical()
      break

    case 20:
      forTableLetters()
      break

    case 21:
      forMultiplyTable_WithoutForOf()
      break

    case 22:
      forMultiplyTable()
      break

    case 23:
      capitalize()
      break

    case 24:
      mapCapitalize()
      break

    case 25:
      filterLexics()
      break

    case 26:
      beepLexics()
      break

    case 27:
      reduceHTML()
      break

    case 28:
      forBracketHellCheck()
      break
  }
}

function confirms() {
  let answersArr = []
  for (let i = 1; i < 5; i++) {
    answersArr.push(confirm(`OK - true, Cancel - false`))
  }
  alert(`Весь массив arr = ${answersArr}`)
}

function prompts() {
  let answersArr = []
  for (let i = 0; i < 5; i++) {
    answersArr[i] = prompt(`Напишите что-то, например: ${i}`)
  }
  alert(`Весь массив arr = ${answersArr}`)
}

function itemAccess() {
  let arr = [2, 6, 4, 8, 10, 11, 13]
  let index = prompt(
    `Введите индекс массива (число от 0 до ${arr.length - 1}), либо напишите слово lenght`
  )

  index == 'lenght'
    ? alert(`Весь массив arr = ${arr} \nДлина массива lenght = ${arr.length}`)
    : index === null
    ? alert(`Вы нажали ОТМЕНА`)
    : index < 0 || index > arr.length - 1
    ? alert(`Ошибочный ввод диапазона`)
    : alert(`Весь массив arr = ${arr} \nЭлемент arr[${index}] = ${arr[index]}`)
}

function itemChange() {
  let arr = []
  let arrData = prompt(`Введите индекс массива со значением в виде ИНДЕКС:ЗНАЧЕНИЕ`)
  if (arrData) {
    let index = arrData.split(':')[0]
    let value = arrData.split(':')[1]
    arr[index] = value
    alert(`Вы ввели индекс:значение - ${index}:${value}
        значение массива arr = ${arr}`)
  } else {
    alert('Нажата ОТМЕНА')
  }
}

function multiplyTable() {
  let arrFiveXFive = []
  let strArr = ``
  for (let i = 0; i < 5; i++) {
    arrFiveXFive[i] = []
    for (let j = 0; j < 5; j++) {
      arrFiveXFive[i][j] = i * j
    }
    strArr += `[${arrFiveXFive[i].join(`, `)}] \n`
  }
  alert(`Весь массив arr = \n${strArr}`)
}

function multiplyTableSlice() {
  let arrFiveXFive = []
  let strArr = ``
  let arrWithoutZero = []
  let strArrWithoutZero = ``

  for (let i = 0; i < 5; i++) {
    arrFiveXFive[i] = []
    for (let j = 0; j < 5; j++) {
      arrFiveXFive[i][j] = i * j
    }
    strArr += `[${arrFiveXFive[i].join(`, `)}] \n`
  }

  arrFiveXFive = arrFiveXFive.slice(1)
  for (let k = 0; k < arrFiveXFive.length; k++) {
    arrWithoutZero[k] = []
    arrWithoutZero[k][0] = arrFiveXFive[k].slice(1)

    strArrWithoutZero += `[${arrWithoutZero[k].join(`, `)}] \n`
  }
  alert(`Весь массив arr = \n${strArr}
        Массив без нулей arrWithoutZero = \n${strArrWithoutZero}`)
}

function indexOfWord() {
  let words = prompt(`Введите предложение, например Lorem dolor sit amet dolor sit`)
  let arrOfWords = []
  let searchWord = prompt(`Введите слово для поиска, например sit`)
  let arrOfIndexes = []
  let findedIndex = 0

  if (words && searchWord) {
    arrOfWords = words.split(` `)
    if (arrOfWords.indexOf(searchWord, findedIndex) == -1) {
      alert(`Вхождений слова "${searchWord}" в предложении \n"${arrOfWords.join(` `)}" не найдено`)
    } else {
      while (arrOfWords.indexOf(searchWord, findedIndex) > -1) {
        findedIndex = arrOfWords.indexOf(searchWord, findedIndex)
        arrOfIndexes.push(findedIndex)
        findedIndex++
      }
      alert(
        `Вхождений слова "${searchWord}" в предложении \n"${arrOfWords.join(` `)}" \n найдено ${
          arrOfIndexes.length
        } раза на позиции(ях) (от нуля) ${arrOfIndexes.join(`;`)}`
      )
    }
  } else {
    alert(`Нажата ОТМЕНА или не введены все данные`)
  }
}

function reverse() {
  let words = prompt(`Введите предложение, например Lorem1 Lorem2 Lorem3 Lorem4 Lorem5`)
  let arrOfWords = []
  let arrOfReverseWords = []
  let lenght

  if (words) {
    arrOfWords = words.split(` `)
    alert(`Исходный массив: [${arrOfWords.join(` ; `)}]`)
    lenght = arrOfWords.length
    for (let i = 0; i < lenght; i++) {
      arrOfReverseWords.push(arrOfWords.pop())
    }
    alert(
      `Исходный массив: [${arrOfWords.join(
        ` ; `
      )}]\nРеверсивный (pop->push) массив: [${arrOfReverseWords.join(` ; `)}]`
    )
    return arrOfReverseWords
  } else {
    alert(`Нажата ОТМЕНА или не введены все данные`)
    return null
  }
}

function reverse2() {
  let arrOfWords = []
  let arrOfWordsUnshift = []
  let lenght

  function reverseArray() {
    let words = prompt(`Введите предложение, например Lorem1 Lorem2 Lorem3 Lorem4 Lorem5`)
    let arrOfWords = []
    let arrOfReverseWords = []
    let lenght

    if (words) {
      arrOfWords = words.split(` `)
      alert(`Исходный массив: [${arrOfWords.join(` ; `)}]`)
      lenght = arrOfWords.length
      for (let i = 0; i < lenght; i++) {
        arrOfReverseWords.push(arrOfWords.pop())
      }
      alert(
        `Исходный массив: [${arrOfWords.join(
          ` ; `
        )}]\nРеверсивный массив: [${arrOfReverseWords.join(` ; `)}]`
      )
      return arrOfReverseWords
    } else {
      alert(`Нажата ОТМЕНА или не введены все данные`)
    }
  }
  arrOfWords = reverseArray()

  if (arrOfWords) {
    lenght = arrOfWords.length
    for (let i = 0; i < lenght; i++) {
      arrOfWordsUnshift.unshift(arrOfWords.shift())
    }
    alert(`shift->unshift массив: [${arrOfWordsUnshift.join(` ; `)}]`)
  }
}

function copy() {
  let arrFiveXFive = []
  let copyArrFiveXFive = []

  for (let i = 0; i < 5; i++) {
    arrFiveXFive[i] = []
    for (let j = 0; j < 5; j++) {
      arrFiveXFive[i][j] = i * j
    }
  }
  copyArrFiveXFive = [...arrFiveXFive]
  arrFiveXFive.push('25')
  alert(`Исходный массив: ${arrFiveXFive.join(' ; ')} с добавлением   push('25') элемента
  При этом копия массива не изменилась, а в оригинале появился +1 элемент
  Скопированный массив: ${copyArrFiveXFive.join(' ; ')} 
  Такое произойдет только с элементами 1го уровня, при копировании вложенных элементов (в данном
  случае, массивов) будут передаваться их ссылки, а не значения. Изменение вложенных элементов
  приведет к изменению данных и в копии и в оригинале! `)
  arrFiveXFive[1].push('25')
  alert(`При добавлении во второй вложенный массив оригинала push('25') 
  изменяются и копия и оригинал!
  Исходный массив: ${arrFiveXFive.join(' ; ')}
  Копия: ${copyArrFiveXFive.join(' ; ')}`)
}

function deepCopy() {
  let arrFiveXFive = []
  let copyArrFiveXFive

  for (let i = 0; i < 5; i++) {
    arrFiveXFive[i] = []
    for (let j = 0; j < 5; j++) {
      arrFiveXFive[i][j] = i * j
    }
  }
  copyArrFiveXFive = JSON.parse(JSON.stringify(arrFiveXFive))
  copyArrFiveXFive[0].push(25)

  alert(`Теперь при push(25) в первый вложенный массив копии, оригинал не изменен!
  Исходный массив: ${arrFiveXFive.join(' ; ')}
  Копия: ${copyArrFiveXFive.join(' ; ')}`)
}

function arrayEquals() {
  let arr1 = [1, 2, 3, 4, 5]
  let arr2 = arr1

  if (arr2 === arr1) {
    alert(`arr2 и arr1 равны, как равные ссылки на один массив!!`)
  }
}

function flat() {
  let arrFiveXFive = []
  let copyArrFiveXFive = []

  for (let i = 0; i < 5; i++) {
    arrFiveXFive[i] = []
    for (let j = 0; j < 5; j++) {
      arrFiveXFive[i][j] = i * j
    }
  }

  for (let i = 0; i < arrFiveXFive.length; i++) {
    copyArrFiveXFive.push(...arrFiveXFive[i])
  }
  alert(`Массив без вложенных массивов:
  ${copyArrFiveXFive}, имеющий длину ${copyArrFiveXFive.length} `)
}

function destructAndDefault() {
  let userStr = prompt('Введите строку, например loremdolorsit')
  let arrSymb = []
  let resultArr = []
  let userFetchStr = prompt(
    'Введите три номера для выборки символов из строки через пробел, например 2 4 5'
  )
  let arrFetch = []

  if (userStr && userFetchStr) {
    arrSymb = userStr.split(``)
    arrFetch = userFetchStr.split(` `)

    for (let i = 0; i < arrFetch.length; i++) {
      resultArr.push(arrSymb[arrFetch[i] - 1])
    }
    let [a = '!', b = '!', c = '!'] = resultArr
    alert(
      `Результат выборки из строки ${arrSymb.join(``)} сиволов ${arrFetch.join(
        `,`
      )} : ${a}; ${b}; ${c}`
    )
  } else {
    alert(`Нажата ОТМЕНА или введены неверные данные`)
  }
}

function multiplyTableRest() {
  let arrFiveXFive = []
  let strArr = ``
  let arrWithoutZero = []
  let strArrWithoutZero = ``

  for (let i = 0; i < 5; i++) {
    arrFiveXFive[i] = []
    for (let j = 0; j < 5; j++) {
      arrFiveXFive[i][j] = i * j
    }
    strArr += `[${arrFiveXFive[i].join(`, `)}] \n`
  }

  for (let k = 1; k < arrFiveXFive.length; k++) {
    let [a, ...rest] = arrFiveXFive[k]
    //arrWithoutZero[k - 1] = rest  - можно не сохранять массив, все равно выводим строку для удобства просмотра в alert
    strArrWithoutZero += `[${rest.join(`, `)}] \n`
  }
  alert(`Весь массив arr = \n${strArr}
        Массив без нулей arrWithoutZero = \n${strArrWithoutZero}`)
}

function forAlert() {
  let names = ['John', 'Paul', 'George', 'Ringo']
  for (const name of names) {
    alert(`Привет, я - ${name}!`)
  }
}

function forSelectOption() {
  const currencies = ['USD', 'EUR', 'GBP', 'UAH']
  let str = '<select>'
  for (const currency of currencies) {
    str += `<option value="${currency}">${currency}</option>`
  }
  str += '</select>'
  document.write(str)
}

function forTableHorizontal() {
  const names = ['John', 'Paul', 'George', 'Ringo']
  let str = `<table border = "2"><tr>`
  for (const name of names) {
    str += `<td>${name}</td>`
  }
  str += '</tr></table>'
  document.write(str)
}

function forTableVertical() {
  const names = ['John', 'Paul', 'George', 'Ringo']
  let str = `<table border = "2">`
  for (const name of names) {
    str += `<tr><td>${name}</tr></td>`
  }
  str += '</tr></table>'
  document.write(str)
}

function forTableLetters() {
  const currencies = ['USD', 'EUR', 'GBP', 'UAH']
  let str = `<style>
  table {
    border-collapse: collapse;
    border: 1px solid black;
  }

  th {
    background-color: silver;
  }
</style>
<table border="1" cellpadding="5">
<tr>
    <th></th>
    <th></th>
    <th></th>
</tr>`
  for (const currency of currencies) {
    str += `<tr>`
    for (const letter of currency) {
      str += `<td>${letter}</td>`
    }
    str += `</tr>`
  }
  str += '</table>'
  document.write(str)
}

function forMultiplyTable_WithoutForOf() {
  let arrFiveXFive = []
  let rowColNumber = prompt(`Вариант без For...Of - генерация HTML на этапе заполнения массива.
  Следующее задание с For...Of! 
  Введите кол-во строк и столбцов в формате X:Y`)

  if (rowColNumber) {
    let [rowNum, colNum] = rowColNumber.split(`:`)
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

    for (let i = 0; i < rowNum; i++) {
      arrFiveXFive[i] = []
      htmlStr += `<tr>`
      for (let j = 0; j < colNum; j++) {
        arrFiveXFive[i][j] = i * j
        !i
          ? (htmlStr += `<th>${arrFiveXFive[i][j]}</th>`)
          : i % 2
          ? (htmlStr += `<td class = "tdRed">${arrFiveXFive[i][j]}</td>`)
          : (htmlStr += `<td class = "tdBlue">${arrFiveXFive[i][j]}</td>`)
      }
      htmlStr += `</tr>`
    }

    htmlStr += `</table>`
    document.write(htmlStr)
  } else {
    alert(`Нажата ОТМЕНА или введены пустые данные`)
  }
}

function forMultiplyTable() {
  let arrFiveXFive = []
  let rowColNumber = prompt(`Введите кол-во строк и столбцов в формате X:Y`)

  if (rowColNumber) {
    let [rowNum, colNum] = rowColNumber.split(`:`)
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

    for (let i = 0; i < rowNum; i++) {
      arrFiveXFive[i] = []
      for (let j = 0; j < colNum; j++) {
        arrFiveXFive[i][j] = i * j
      }
    }

    let currentRow = 0
    for (const row of arrFiveXFive) {
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
    document.write(htmlStr)
  } else {
    alert(`Нажата ОТМЕНА или введены пустые данные`)
  }
}

function capitalize() {
  const capitalize = str => {
    let result = str[0].toUpperCase() + str.substring(1).toLowerCase()
    return result
  }

  let strOfLetters = prompt(`Введите слово разными бУкВамИ, например: cANBerRa`)

  strOfLetters
    ? alert(`Введеное слово преобразовано: ${strOfLetters} -> ${capitalize(strOfLetters)}`)
    : alert(`Нажата ОТМЕНА или введены пустые данные`)
}

function mapCapitalize() {
  const capitalize = str => {
    let result = str[0].toUpperCase() + str.substring(1).toLowerCase()
    return result
  }

  let strOfWords = prompt(
    `Введите строку из слов, разделенными пробелами рАзнымИ бУкВамИ, например: cANBerRa LorEM alert ОТМЕНА`
  )

  strOfWords
    ? alert(
        `Введеная строка преобразована: ${strOfWords} -> ${strOfWords
          .split(' ')
          .map(capitalize)
          .join(' ')}`
      )
    : alert(`Нажата ОТМЕНА или введены пустые данные`)
}

function filterLexics() {
  let userStr = prompt(
    'Введите предложение: пример: козел мишка осел козел мишка осел кот бегемот осел'
  )
  let badWordsStr = prompt('Введите "плохие" слова: пример: осел козел')

  if (userStr && badWordsStr) {
    let arrUserStr = userStr.split(` `)
    let arrbadWordStr = badWordsStr.split(` `)

    for (const badWord of arrbadWordStr) {
      arrUserStr = arrUserStr.filter(wordToCompare => wordToCompare != badWord)
    }
    alert(
      `Было введено: ${userStr};\nCлова для фильтрации: ${badWordsStr};\nРезультат: ${arrUserStr.join(
        ` `
      )}`
    )
  } else {
    alert(`Нажата ОТМЕНА или введены пустые данные`)
  }
}

function beepLexics() {
  let userStr = prompt(
    'Введите предложение: пример: козел мишка осел козел мишка осел кот бегемот осел'
  )
  let badWordsStr = prompt('Введите "плохие" слова: пример: осел козел')

  if (userStr && badWordsStr) {
    let arrUserStr = userStr.split(` `)
    let arrbadWordStr = badWordsStr.split(` `)

    for (const badWord of arrbadWordStr) {
      arrUserStr = arrUserStr.map(function (element) {
        element == badWord ? (element = 'BEEP') : element
        return element
      })
    }
    alert(
      `Было введено: ${userStr};\nCлова для замены: ${badWordsStr};\nРезультат: ${arrUserStr.join(
        ` `
      )}`
    )
  } else {
    alert(`Нажата ОТМЕНА или введены пустые данные`)
  }
}

function reduceHTML() {
  const currencies = ['USD', 'EUR', 'GBP', 'UAH']
  let str = ``
  str += currencies.reduce(function (resultStr, currency) {
    resultStr += `<option value="${currency}">${currency}</option>`
    return resultStr
  }, `<select>`)
  str += '</select>'
  document.write(str)
}

function forBracketHellCheck() {
  let str = prompt(`Введите последовательность скобок, например : (()))Lorem[]q]]qwerty{{(()}}`)

  let arrStr = str.replace(/\s+/g, '').split(``)

  let strSquareBrackets = pairsCompare('[', ']', arrStr)
  let strFigureBrackets = pairsCompare('{', '}', arrStr)
  let strRoundBrackets = pairsCompare('(', ')', arrStr)

  alert(`Результат по строке ${arrStr.join(` `)}:
  ${strSquareBrackets}
  ${strFigureBrackets}
  ${strRoundBrackets}`)

  function pairsCompare(openChar, closeChar, arrayOfCharacters) {
    let arrayPairs = []
    let err = ''
    let noErr = 'НЕТ'
    let i
    let resultStr

    for (i = 0; i < arrayOfCharacters.length; i++) {
      if (arrayOfCharacters[i] == openChar) {
        let obj = {
          index: i,
          value: arrayOfCharacters[i],
        }
        arrayPairs.push(obj)
      } else if (
        arrayOfCharacters[i] == closeChar &&
        arrayPairs.length &&
        arrayPairs[arrayPairs.length - 1].value == openChar
      ) {
        arrayPairs.pop()
      } else if (arrayOfCharacters[i] == closeChar) {
        let obj = {
          index: i,
          value: arrayOfCharacters[i],
        }
        arrayPairs.push(obj)
      }
    }
    for (let k = 0; k < arrayPairs.length; k++) {
      err += ` СКОБКА ПО ИНДЕКСУ ${arrayPairs[k].index}; \n`
    }
    resultStr = `Для пары ${openChar} : ${closeChar} ошибки : ${err || noErr}`
    return resultStr
  }
}
