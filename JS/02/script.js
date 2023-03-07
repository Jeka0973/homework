// assign: evaluation  *************************************
// var a = 5
// var b, c

// b = (a * 5) / 2

//Number: age    *******************************************
// let personAge
// let yearOfBirth
// const currentYear = 2023

// personAge = prompt('Введите возраст кого-либо: ', 0)
// yearOfBirth = currentYear - personAge
// alert('Год рождения: ' + yearOfBirth)

//Number: temperature  *************************************
// let celsius
// let fahrenheit
// const minCelsius = -273

// celsius = prompt('Введите температуру в градусах Цельсия: ', 0)

// if (celsius < minCelsius) {
//   alert('Введите температуру выше, чем ' + minCelsius + ' !')
// } else {
//   fahrenheit = celsius * 1.8 + 32
//   alert('Температура в градусах Фаренгейта: ' + fahrenheit)
// }

//Number: divide *******************************************
// let inputNumber1
// let inputNumber2

// inputNumber1 = prompt('Введите первое число: ', 1)
// inputNumber2 = prompt('Введите второе число: ', 1)

// inputNumber1 = Math.round(inputNumber1)
// inputNumber2 = Math.round(inputNumber2)

// if (inputNumber1 != 0 && inputNumber2 != 0) {
//   if (inputNumber1 % inputNumber2) {
//     alert('Числа ' + inputNumber1 + ' и ' + inputNumber2 + ' не делятся нацело!')
//   } else {
//     alert('Числа ' + inputNumber1 + ' и ' + inputNumber2 + ' делятся нацело!')
//   }
// } else {
//   alert('Введите значения от 1 и выше!!')
// }

//Number: RGB   *******************************************
// let redColor
// let greenColor
// let blueColor
// let hexString = ''
// let rgbHex = ''
// let remOfDivision

// redColor = prompt('Введите RED color number :')
// greenColor = prompt('Введите GREEN color number :')
// blueColor = prompt('Введите BLUE color number :')
// rgbHex = '#' + decimalToHex(redColor) + decimalToHex(greenColor) + decimalToHex(blueColor)

// alert('Шестнадцатиричное число: ' + rgbHex)

// function decimalToHex(decimalNumber) {
//   hexString = ''
//   function hexSymbol(number) {
//     switch (number) {
//       case 10:
//         return 'A'
//       case 11:
//         return 'B'
//       case 12:
//         return 'C'
//       case 13:
//         return 'D'
//       case 14:
//         return 'E'
//       case 15:
//         return 'F'
//       default:
//     }
//   }
//   while (decimalNumber != 0) {
//     remOfDivision = decimalNumber % 16
//     if (remOfDivision >= 10) {
//       hexString = hexString + hexSymbol(remOfDivision)
//     } else {
//       hexString = hexString + remOfDivision
//     }
//     decimalNumber = (decimalNumber - remOfDivision) / 16
//   }
//   return hexString.split('').reverse().join('')
// }

//Number: flats ****************************************

// let floorsNum //количество этажей
// let flatsOnFloorNum //кол-во квартир на площадке
// let flatNum //номер вводимой квартиры
// let houseEntranseNum //номер искомого подьезда
// let remOfDivision
// let flatNumLastEntrance //номер квартиры в найденном подьезде
// let floorOfLastEntrance //этаж искомой квартиры квартиры

// floorsNum = prompt('Введите количество этажей ')
// flatsOnFloorNum = prompt('Введите кол-во квартир на площадке')
// flatNum = prompt('Введите квартиру')

// remOfDivision = flatNum % (floorsNum * flatsOnFloorNum)
// if (remOfDivision == 0) {
//   houseEntranseNum = flatNum / (floorsNum * flatsOnFloorNum)
//   alert('Подьезд: ' + houseEntranseNum + ' Этаж последний:  ' + floorsNum + ' Квартира: ' + flatNum)
// } else {
//   houseEntranseNum = (flatNum - remOfDivision) / (floorsNum * flatsOnFloorNum) + 1

//   flatNumLastEntrance = flatNum - (houseEntranseNum - 1) * (floorsNum * flatsOnFloorNum)

//   remOfDivision = flatNumLastEntrance % flatsOnFloorNum
//   floorOfLastEntrance = (flatNumLastEntrance - remOfDivision) / flatsOnFloorNum + 1
//   alert('Подьезд: ' + houseEntranseNum + ' Этаж   ' + floorOfLastEntrance + ' Квартира: ' + flatNum)
// }

//Number: currency ****************************************

// let currencyType = []
// const rate = 1.25346576

// currencyType[0] = prompt('Введите количество базовой валюты: ', 1)
// currencyType[1] = (currencyType[0] * rate).toFixed(2)
// currencyType[2] = (currencyType[0] / rate).toFixed(2)

// alert(
//   'Базовая валюта: ' +
//     currencyType[0] +
//     ' Первая валюта: ' +
//     currencyType[1] +
//     ' Вторая валюта: ' +
//     currencyType[2] +
//     '. Коэфф. ' +
//     rate
// )
