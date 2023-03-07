// ex1
let numberOne = prompt('Введите первое число', 0)
let numberTwo = prompt('Введите второе число число', 0)
let result
alert('Вы ввели числа: ' + numberOne + ', ' + numberTwo)
if (numberOne > numberTwo) {
  alert('Число ' + numberOne + ' > ' + numberTwo)
} else if (numberOne < numberTwo) {
  alert('Число ' + numberOne + ' < ' + numberTwo)
} else {
  alert('Числа ' + numberOne + ' = ' + numberTwo)
}
result = (+numberOne + +numberTwo) * numberTwo
alert(
  'Результат математического выражения ' +
    '(' +
    numberOne +
    ' +  ' +
    numberTwo +
    ') * ' +
    numberTwo +
    ' = ' +
    result
)
