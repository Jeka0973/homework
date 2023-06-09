class RGB {
  #r = 0
  #g = 0
  #b = 0
  #hex = 0
  #rgb = 'rgb(0,0,0)'

  get r() {
    return this.#r
  }

  get g() {
    return this.#g
  }

  get b() {
    return this.#b
  }

  #isValueRange(value) {
    if (!(value >= 0 && value < 256)) {
      throw new Error('значение должно быть в диапазоне 0 - 255')
    }
  }

  #isHexValueRange(value) {
    const hexReg = /^[0-9A-Fa-f]{2}$/ //регулярка проверки диапазона 00 - FF
    // console.log(hexReg.test(value))
    if (!hexReg.test(value)) {
      throw new Error('Неправильный ввод диапазона hex (вне 00-FF)')
    }
  }

  #decimalToHex(decimalNumber) {
    let hexString = ''
    let remOfDivision

    function hexSymbol(number) {
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
    while (decimalNumber != 0) {
      remOfDivision = decimalNumber % 16
      if (remOfDivision >= 10) {
        hexString = hexString + hexSymbol(remOfDivision)
      } else {
        hexString = hexString + remOfDivision
      }
      decimalNumber = (decimalNumber - remOfDivision) / 16
    }

    hexString = hexString.split('').reverse().join('')

    !hexString.length
      ? (hexString = '00')
      : hexString.length == 1
      ? (hexString = '0' + hexString)
      : (hexString = hexString)
    return hexString
  }

  #isMatchNull(str, regExpression) {
    // console.log(str.match(regExpression))
    if (!str.match(regExpression)) {
      throw new Error('значение регулярного выражения равно null (syntax error)')
    }
  }

  set r(newValue) {
    try {
      this.#isValueRange(newValue)
      this.#r = newValue
      this.#hex =
        '#' + this.#decimalToHex(this.r) + this.#decimalToHex(this.g) + this.#decimalToHex(this.b) //обновляем hex значение
    } catch (error) {
      console.log(`Произошла ошибка: ${error.message}`)
    }
  }

  set g(newValue) {
    try {
      this.#isValueRange(newValue)
      this.#g = newValue
      this.#hex =
        '#' + this.#decimalToHex(this.r) + this.#decimalToHex(this.g) + this.#decimalToHex(this.b) //обновляем hex значение
    } catch (error) {
      console.log(`Произошла ошибка: ${error.message}`)
    }
  }

  set b(newValue) {
    try {
      this.#isValueRange(newValue)
      this.#b = newValue
      this.#hex =
        '#' + this.#decimalToHex(this.r) + this.#decimalToHex(this.g) + this.#decimalToHex(this.b) //обновляем hex значение
    } catch (error) {
      console.log(`Произошла ошибка: ${error.message}`)
    }
  }

  get rgb() {
    return `rgb(${this.r},${this.g},${this.b})`
  }

  get hex() {
    return this.#hex
  }

  set hex(hexStr) {
    try {
      const hexReg = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/
      this.#isMatchNull(hexStr, hexReg)

      const [, hexR, hexG, hexB] = hexStr.match(hexReg) //забираем 1, 2, 3 элементы из массива match
      const hexValueArr = [hexR, hexG, hexB]

      hexValueArr.forEach(value => this.#isHexValueRange(value)) // проверяем каждое значение для диапазона 00-FF (похоже она не нужна, но пусть остается как пример)))

      this.#hex = hexStr.match(hexReg)[0] //в [0] -полная hex строка!

      //обновляем значения в каналах R, G, B
      ;[this.#r, this.#g, this.#b] = hexValueArr.map(value => parseInt(value, 16))
      this.#rgb = `rgb(${this.r},${this.g},${this.b})`

      // console.log(`Обновленные ${this.#rgb}`)
    } catch (error) {
      console.log(`Произошла ошибка: ${error.message}`)
    }
  }

  set rgb(rgbStr) {
    try {
      const rgbReg = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/
      this.#isMatchNull(rgbStr, rgbReg)
      this.#rgb = rgbStr.match(rgbReg)[0]

      //обновляем значения в каналах hex  R, G, B

      const [, rgbR, rgbG, rgbB] = rgbStr.match(rgbReg)
      const rgbValueArr = [rgbR, rgbG, rgbB]

      this.#hex = '#' + rgbValueArr.map(value => this.#decimalToHex(value)).join('')

      // console.log(`Обновленные hex = ${this.#hex}`)
    } catch {
      console.log(`Произошла ошибка: ${error.message}`)
    }
  }
}

//tect первого класса
const rgb = new RGB()
rgb.r = 15
rgb.g = 128
rgb.b = 192
console.log(rgb.hex) //#0F80C0
console.log(rgb.rgb) //rgb(15,128,192)

console.log('Вводим rgb.hex = #203040')
rgb.hex = '#203040'
console.log(rgb.rgb) //rgb(32, 48, 64)
console.log(rgb.hex) //'#203040'

console.log('Вводим rgb(100, 90, 50)')
rgb.rgb = 'rgb(100, 90, 50)'
console.log(rgb.rgb)
console.log(rgb.hex)
console.log(rgb.r, rgb.g, rgb.b) //100, 90, 50

rgb.hex = 'дичь' //SyntaxError
rgb.r = 1000 //RangeError

console.log(rgb.hex)
console.log(rgb.rgb)

class RGBA extends RGB {
  #a = 0
  #rgba = 0

  #isOpacityValueRange(value) {
    if (!(value >= 0 && value <= 1)) {
      throw new Error('значение должно быть в диапазоне 0 - 1')
    }
  }

  #decimalToHex(decimalNumber) {
    let hexString = ''
    let remOfDivision

    function hexSymbol(number) {
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
    while (decimalNumber != 0) {
      remOfDivision = decimalNumber % 16
      if (remOfDivision >= 10) {
        hexString = hexString + hexSymbol(remOfDivision)
      } else {
        hexString = hexString + remOfDivision
      }
      decimalNumber = (decimalNumber - remOfDivision) / 16
    }

    hexString = hexString.split('').reverse().join('')

    !hexString.length
      ? (hexString = '00')
      : hexString.length == 1
      ? (hexString = '0' + hexString)
      : (hexString = hexString)
    return hexString
  }

  #isValueRange(value) {
    if (!(value >= 0 && value < 256)) {
      throw new Error('значение должно быть в диапазоне 0 - 255')
    }
  }

  get a() {
    return this.#a
  }

  set a(newValue) {
    try {
      this.#isOpacityValueRange(newValue)
      this.#a = newValue.toFixed(2)
    } catch {
      console.log(`Произошла ошибка: ${error.message}`)
    }
  }

  set hex(hexStr) {
    try {
      if (hexStr.length == 7) {
        this.#a = 1
      } else if (hexStr.length == 9) {
        this.#a = (parseInt(hexStr.slice(7), 16) / 255).toFixed(2)
      } else {
        throw new Error('Неправильный ввод hex значения')
      }
      super.hex = hexStr.slice(0, 7)
    } catch {
      console.log(`Произошла ошибка: ${error.message}`)
    }
  }

  get hex() {
    return `#${this.#decimalToHex(super.r)}${this.#decimalToHex(super.g)}${this.#decimalToHex(
      super.b
    )}${this.#decimalToHex(Math.round(this.a * 255))}`
  }

  get rgba() {
    return `rgba(${super.r},${super.g},${super.b},${this.#a})`
  }

  set rgba(rgbaStr) {
    try {
      const rgbaReg = /rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), ([0-1](\.\d+)?)\)/

      // this.#isMatchNull(rgbaStr, rgbaReg)

      if (!rgbaStr.match(rgbaReg)) {
        throw new Error('значение регулярного выражения равно null (syntax error)')
      }

      const [, rgbaR, rgbaG, rgbaB, rgbaA] = rgbaStr.match(rgbaReg)

      this.#isOpacityValueRange(rgbaA) //проверяем 0 - 1 в a

      const rgbValueArr = [rgbaR, rgbaG, rgbaB]
      rgbValueArr.forEach(value => this.#isValueRange(value))

      this.hex =
        '#' +
        rgbValueArr.map(value => this.#decimalToHex(value)).join('') +
        this.#decimalToHex(rgbaA * 255)
      ;[this.r, this.g, this.b] = rgbValueArr.map(value => parseInt(value))
      this.#a = rgbaA

      this.#rgba = rgbaStr.match(rgbaReg)[0]

      // console.log(`Обновленные ${this.#rgb}`)
    } catch (error) {
      console.log(`Произошла ошибка: ${error.message}`)
    }
  }
}

//тест extended без color
const rgba = new RGBA()
rgba.hex = '#80808080'
console.log(rgba.a) //0.5
console.log(rgba.rgba) //rgba(128,128,128,0.5)
rgba.r = 192
rgba.a = 0.25
console.log(rgba.hex) //#C0808040
