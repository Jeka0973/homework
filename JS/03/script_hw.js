//* String: greeting  *
// let userName = prompt('Введите имя: ')
// alert(`Добрый день, ${userName}!`)

//* String: gopni4ek *
// let str = prompt('Введите строку с запятыми ')
// let strArr = str.split(',')
// alert(strArr.join(', блин,'))

//* String: capitalize *
// let str = prompt('Введите слово с большими и маленькими буквами ')
// alert(str[0].toUpperCase() + str.substring(1).toLowerCase())

//* String: word count *
// let numberOfWords = prompt('Введите строку, разделив слова пробелами').split(' ').length
// alert(`Количество слов: ${numberOfWords} `)

//* String: credentials *
// let surname = prompt('Введите фамилию: ').trim()
// let name = prompt('Введите имя: ').trim()
// let patronymic = prompt('Введите отчество: ').trim()

// surname = surname[0].toUpperCase() + surname.substring(1).toLowerCase()
// name = name[0].toUpperCase() + name.substring(1).toLowerCase()
// patronymic = patronymic[0].toUpperCase() + patronymic.substring(1).toLowerCase()
// let fio = surname + name + patronymic
// let fioArr = fio.split('')
// for (let i = 1; i < fioArr.length; i++) {
//   if (fioArr[i] === fioArr[i].toUpperCase()) {
//     fioArr.splice(i, 0, ' ')
//     i++
//   }
// }
// fio = fioArr.join('')
// alert(fio)
// я сделал тут так, что ФИО склеивается вместе и нужно их разделить по признаку Большой буквы (без регулярных выражений)

//* String: beer *
// let str = 'Було жарко. Василь пив пиво вприкуску з креветками'
// let result
// result = str.split(' ')
// result.splice(4, 1, 'чай')
// console.log(result.join(' ')) //"Було жарко. Василь пив чай уприкуску з креветками"

//* String: no tag *
// let str = 'якийсь текст, в якому є один тег <br /> і всяке інше'
// let indexBegin = str.indexOf('<')
// let indexEnd = str.indexOf('>')
// let result = str.slice(0, indexBegin - 1) + str.slice(indexEnd + 1)
// console.log(result)
// якийсь текст, в якому є один тег і всяке інше

// * String: big tag *
// let str = 'якийсь текст у якому є один тег <br /> і всяке інше'
// let indexBegin = str.indexOf('<')
// let indexEnd = str.indexOf('>')
// let result =
//   str.slice(0, indexBegin+1) +
//   str.slice(indexBegin+1, indexBegin + 3).toUpperCase() +
//   str.slice(indexEnd - 2)
// console.log(result)
//якийсь текст, в якому є один тег <BR /> і всяке інше

// * String: new line *????
// let str =
//   'Lorem ipsum dolor sit\n amet consectetur adipisicing\n elit. Doloribus rem\n laborum voluptatibus'
//  let arr = str.split('\n')
//  alert (arr.join('\n'))

// * String: youtube * Пример в файле index.html

