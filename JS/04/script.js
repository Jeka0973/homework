while (confirm('Просмотреть ДЗ?')) {
  let numberOfHomework = prompt(`Выберите номер ДЗ, а именно: 
"1" - Number: odd 
"2" - String: lexics 
"3" - Boolean 
"4" - Boolean: if 
"5" - Comparison: sizes if 
"6" - Ternary 
"7" - Prompt: or 
"8" - Confirm: or this days 
"9" - Confirm: if this days 
"10" - Default: or 
"11" - Default: if 
"12" - Login and password 
"13" - Currency exchange 
"14" - Scissors 
"15" - black task  
`)

  switch (+numberOfHomework) {
    case 1:
      numberOdd()
      break

    case 2:
      stringLexics()
      break

    case 3:
      userBoolean()
      break

    case 4:
      userBooleanIf()
      break

    case 5:
      comparsionSizes()
      break

    case 6:
      ternary()
      break

    case 7:
      promptOr()
      break

    case 8:
      confirmOrThisDays()
      break

    case 9:
      confirmIfThisDays()
      break

    case 10:
      defaultOr()
      break

    case 11:
      defaultIf()
      break

    case 12:
      loginAndPassword()
      break

    case 13:
      currencyExchange()
      break

    case 14:
      scissors()
      break

    case 15:
      scissorsAdd()
      break
  }
}

function numberOdd() {
  //Number: odd
  let userNumber = prompt('Введите число :')
  if (!isNaN(userNumber)) {
    if (userNumber % 2 == 0) {
      alert(`Число ${userNumber} четное!`)
    } else {
      alert(`Число ${userNumber} нечетное!`)
    }
  } else {
    alert(`Число ${userNumber} не является числом! Ошибочный ввод.`)
  }
}

function stringLexics() {
  //String: lexics
  prompt(
    `Ищет вхождение в предложение других ("плохих") слов и подсчитывает количество вхождений каждого!`
  )
  let userStr = prompt(
    'Введите предложение: пример: козел мишка осел козел мишка осел кот бегемот осел'
  ) //'козел мишка осел козел мишка осел кот бегемот осел'
  let badWordsStr = prompt('Введите список "плохих" слов: пример: козел осел') //'козел осел'

  if (!(!!userStr.trim() && !!badWordsStr.trim())) {
    alert(`Заполните оба поля!`)
  } else {
    let badWordsStrArr = badWordsStr.split(' ')
    let userStrArr = userStr.split(' ')
    let resultArr = []
    let resultStr = ''
    let i, j, k

    for (k = 0; k < badWordsStrArr.length; k++) {
      let obj = {
        word: badWordsStrArr[k],
        includes: 0,
      }
      resultArr.push(obj)
    }

    for (i = 0; i < userStrArr.length; i++) {
      for (j = 0; j < badWordsStrArr.length; j++) {
        if (userStrArr[i] == badWordsStrArr[j]) {
          resultArr[j].includes++
        }
      }
    }
    for (i = 0; i < resultArr.length; i++) {
      resultStr += `Слово "${resultArr[i].word} " встречается ${resultArr[i].includes} раз(a) \n`
    }
    alert(`В строке " ${userStr} " \n ${resultStr}`)
  }
}

function userBoolean() {
  //Boolean
  let weather
  confirm('Сегодня солнечно и тепло?') ? (weather = 'good') : (weather = 'bad')
  alert(`The weather is ${weather}`)
}

function userBooleanIf() {
  //Boolean: if
  let weather
  confirm('Сегодня солнечно и тепло?') ? (weather = 'good') : (weather = 'bad')
  if (weather == 'good') {
    alert(`Пойду гулять сегодня, весна пришла!`)
  } else {
    alert(`Придется сидеть дома, снова делать ДЗ по JS)`)
  }
}

function comparsionSizes() {
  //Comparison: sizes
  let italySize = +prompt(
    `Введите итальянские размеры верхней одежды (38, 40, 42, 44, 46, 48, 50 , 52 или выше)`
  )
  let americanSizeStr = `В американской системе это размер: `

  italySize == 38
    ? alert(`${americanSizeStr}  S`)
    : italySize == 40
    ? alert(`${americanSizeStr}  M`)
    : italySize == 42 || italySize == 44
    ? alert(`${americanSizeStr}  L`)
    : italySize == 46 || italySize == 48
    ? alert(`${americanSizeStr}  XL`)
    : italySize == 50 || italySize == 52
    ? alert(`${americanSizeStr}  XXL`)
    : alert(`${americanSizeStr}  XXL+`)
}

function ternary() {
  //Ternary
  confirm(`Ваш пол мужской ?`) ? alert(`Вы мужчина`) : alert(`Вы женщина`)
}

function promptOr() {
  //Prompt: or
  let age = prompt(`Введите возраст: `)
  if (!age || null) {
    alert(`Неверный ввод или нажата отмена`)
  } else {
    alert(`Ваш возраст: ${age} лет`)
  }
}

function confirmOrThisDays() {
  //Confirm: or this days (не понял я , куда тут || ставить(( )
  confirm(`Шопинг?`) ? alert(`Не пойму, что по - логике задачи требуется c ||`) : alert(`Ти-бяка`)
}

function confirmIfThisDays() {
  //Confirm: if this days (не понял я , куда тут || ставить по самой задаче(( )
  let shopping = confirm(`Шопинг?`)
  if (!shopping) {
    alert(`Ти-бяка`)
  }
}

function defaultOr() {
  //Default: or
  let name = prompt('Введите имя: ') || `Николай`
  let surname = prompt('Введите фамилию: ') || `Николайко`
  let patronymic = prompt('Введите отчество: ') || `Иванович`

  alert(`Вы ввели ${name} ${surname} ${patronymic}`)
}

function defaultIf() {
  //Default: if
  let name = prompt('Введите имя: ')
  let surname = prompt('Введите фамилию: ')
  let patronymic = prompt('Введите отчество: ')

  if (!name || null) {
    name = `Николай`
  }
  if (!surname || null) {
    surname = `Николайко`
  }
  if (!patronymic || null) {
    patronymic = `Иванович`
  }

  alert(`Вы ввели ${name} ${surname} ${patronymic}`)
}

function loginAndPassword() {
  //Login and password
  if (prompt(`Введите логин: `) == `admin`) {
    if (prompt(`Введите пароль: `) == `qwerty`) {
      alert(`Данные введены верно!`)
    } else {
      alert(`Пароль неверный!`)
    }
  } else {
    alert(`Логин неверный!`)
  }
}

function currencyExchange() {
  //Currency exchange
  let operation
  let rate
  let resultSumm
  let inputSumm
  let currencyType = prompt(
    `Введите тип валюты (usd или eur) для покупки за uah или обмена на uah:`
  )
    .trim()
    .toLowerCase()

  confirm(`Купить или продать ${currencyType}? (ОК - купить, ОТМЕНА - продать)`)
    ? (operation = `buy`)
    : (operation = `sale`)

  if (operation == `buy`) {
    currencyType == `usd` ? (rate = 38) : (rate = 40)
    inputSumm = prompt(`Введите сумму в uah для покупки ${currencyType}:`)
    resultSumm = (inputSumm / rate).toFixed(2)
    alert(
      `Вы внесли ${inputSumm}uah. По текущему курсу ${rate} вы получите ${resultSumm}${currencyType}`
    )
  } else {
    currencyType == `usd` ? (rate = 38.85) : (rate = 41.35)
    inputSumm = prompt(`Введите сумму в ${currencyType} для обмена на uah:`)
    resultSumm = (inputSumm * rate).toFixed(2)
    alert(
      `Вы внесли ${inputSumm}${currencyType}. По текущему курсу ${rate} вы получите ${resultSumm}uah`
    )
  }
}

function scissors() {
  // scissors
  let playerChoice = prompt(`Введите "камень" (1), "ножницы" (2) или "бумага" (3)`) - 1
  let playerChoiceArr = ['Камень', 'Ножницы', 'Бумага']
  let computerChoiceArr = playerChoiceArr
  let computerChoice

  if (Math.random() > 0 && Math.random() < 0.33) {
    computerChoice = 0
  } else if (Math.random() > 0.33 && Math.random() < 0.66) {
    computerChoice = 1
  } else {
    computerChoice = 2
  }
  if (computerChoice == playerChoice) {
    alert(
      `Ничья! компьютер: "${computerChoiceArr[computerChoice]}", пользователь: "${playerChoiceArr[playerChoice]}"`
    )
  } else if (playerChoice > computerChoice) {
    alert(
      `Компьютер выиграл! компьютер: "${computerChoiceArr[computerChoice]}", пользователь: "${playerChoiceArr[playerChoice]}"`
    )
  } else {
    alert(
      `Пользователь выиграл! пользователь: "${playerChoiceArr[playerChoice]}", компьютер: "${computerChoiceArr[computerChoice]}"`
    )
  }
}

function scissorsAdd() {
  //add
  let playerChoice = prompt(`Введите "камень" (1), "ножницы" (2) или "бумага" (3)`) - 1
  let playerChoiceArr = ['Камень', 'Ножницы', 'Бумага']
  let computerChoiceArr = playerChoiceArr
  let computerChoice

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
  }
  computerChoice = randomInteger(0, 2)

  computerChoice == playerChoice
    ? alert(
        `Ничья! компьютер: "${computerChoiceArr[computerChoice]}", пользователь: "${playerChoiceArr[playerChoice]}"`
      )
    : playerChoice > computerChoice
    ? alert(
        `Компьютер выиграл! компьютер: "${computerChoiceArr[computerChoice]}", пользователь: "${playerChoiceArr[playerChoice]}"`
      )
    : alert(
        `Пользователь выиграл! пользователь: "${playerChoiceArr[playerChoice]}", компьютер: "${computerChoiceArr[computerChoice]}"`
      )
}
