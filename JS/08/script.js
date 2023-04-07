function comparsionIf() {
  var age = +prompt('Скільки вам років?', '')

  if (age < 1) {
    alert('Введен неверный возраст')
  } else {
    if (age < 18) {
      alert('школяр')
    } else {
      if (age > 18 && age < 30) {
        alert('молодь')
      } else {
        if (age > 30 && age < 45) {
          alert('зрілість')
        } else {
          if (age > 45 && age < 60) {
            alert('захід сонця')
          } else {
            if (age > 60) {
              alert('як пенсія?')
            } else {
              alert('чи кіборг, чи KERNESS')
            }
          }
        }
      }
    }
  }
}

function comparsionSizes() {
  let italySize = +prompt(
    `Введите итальянские размеры верхней одежды (38, 40, 42, 44, 46, 48, 50 , 52 или выше)`
  )
  let americanSizeStr = `В американской системе это размер: `

  switch (+italySize) {
    case 38:
      alert(`${americanSizeStr}  S`)
      break

    case 40:
      alert(`${americanSizeStr}  M`)
      break

    case 42:
    case 44:
      alert(`${americanSizeStr}  L`)
      break

    case 46:
    case 48:
      alert(`${americanSizeStr}  XL`)
      break

    case 50:
    case 52:
      alert(`${americanSizeStr}  XXL`)
      break

    default:
      alert(`Размер вне диапазона`)
  }
}

function switchIf() {
  let color = prompt('Введіть колір', '')
  if (color == 'red') {
    document.write("<div style='background-color: red;'>червоний</div>")
    document.write("<div style='background-color: black; color: white;'>чорний</div>")
  } else if (color == 'black') {
    document.write("<div style='background-color: black; color: white;'>чорний</div>")
  } else if (color == 'blue') {
    document.write("<div style='background-color: blue;'>синій</div>")
    document.write("<div style='background-color: green;'>зелений</div>")
  } else if (color == 'green') {
    document.write("<div style='background-color: green;'>зелений</div>")
  } else {
    document.write("<div style='background-color: gray;'>Я не зрозумів</div>")
  }
}

function noSwitchCase() {
  const noSwitch = (key, obj, defaultKey = 'default') => {
    if (key in obj) {
      return obj[key]()
    } else {
      return obj[defaultKey]()
    }
  }

  const exampleObj = {
    variant1: () => {
      return 'Вы выбрали вариант1!'
    },
    variant2() {
      return `Вы выбрали вариант2!`
    },
    variant3: function () {
      return `Вы выбрали вариант3!`
    },
    default() {
      return `Ваш выбор мне непонятен!`
    },
  }

  let str = noSwitch(prompt(`Введите variant1, variant2, variant3 или ерунду!):`), exampleObj)
  alert(str)
}

function closureCalc() {
  //index_calc.html
  //closure_calc.js
}
function closureCalc2() {
  //index_calc2.html
  //closure_calc2.js
}
function countriesCities() {
  //index_cities.html
  //cities.js
}
