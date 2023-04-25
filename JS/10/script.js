function createPerson(name, surname) {
  let obj = {
    name: name,
    surname: surname,
    getFullName() {
      if (!this.fatherName) {
        return `${this.name} ${this.surname}`
      } else {
        return `${this.name} ${this.fatherName} ${this.surname}`
      }
    },
  }
  return obj
}
const a = createPerson('Вася', 'Пупкін')
const b = createPerson('Ганна', 'Іванова')
const c = createPerson('Єлизавета', 'Петрова')

console.log(a.getFullName()) //Вася Пупкін
a.fatherName = 'Іванович'
console.log(a.getFullName()) //Вася Іванович Пупкін

console.log(b.getFullName()) //Ганна Іванова

//******************/

function createPersonClosure(name, surname) {
  let age = 0 //default
  let fatherName = ' ' //default

  const capitalize = str => {
    let result = str[0].toUpperCase() + str.substring(1).toLowerCase()
    return result
  }

  const getName = () => name
  const getSurname = () => surname
  const getFatherName = () => fatherName
  const getAge = () => age
  const getFullName = () => `${surname} ${name} ${fatherName}`

  const setName = newName => {
    if (typeof newName === 'string' && newName.trim().length > 0) {
      name = capitalize(newName)
      return name
    }
  }

  const setSurname = newSurname => {
    if (typeof newSurname === 'string' && newSurname.trim().length > 0) {
      surname = capitalize(newSurname)
      return surname
    }
  }

  const setFatherName = newFatherName => {
    if (typeof newFatherName === 'string' && newFatherName.trim().length > 0) {
      fatherName = capitalize(newFatherName)
      return fatherName
    }
  }

  const setAge = newAge => {
    if (typeof newAge === 'number' && newAge > 0 && newAge < 100) {
      age = newAge
      return age
    }
  }

  const setFullName = strFullName => {
    let [strSurname, strName, strFatherName] = strFullName.split(' ') //.map(x => capitalize(x))
    if (
      typeof strSurname === 'string' &&
      strSurname.trim().length > 0 &&
      typeof strName === 'string' &&
      strName.trim().length > 0 &&
      typeof strFatherName == 'string' &&
      strFatherName.trim().length > 0
    ) {
      name = capitalize(strName)
      surname = capitalize(strSurname)
      fatherName = capitalize(strFatherName)
    }
  }

  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  }
}

//***************** */

const person = {
  name: 'Васек',
  surname: 'Пупупкин',
  fatherName: 'Пупупкинович',
  age: 77,
  salary: 23450,
}

function createPersonClosureDestruct(obj) {
  const {name: strName, surname: strSurname, fatherName: strFatherName, age: strAge} = obj

  let age = 0 //default
  let fatherName = ' ' //default
  let name = ' ' //default
  let surname = ' ' //default

  const capitalize = str => {
    let result = str[0].toUpperCase() + str.substring(1).toLowerCase()
    return result
  }

  const getName = () => name
  const getSurname = () => surname
  const getFatherName = () => fatherName
  const getAge = () => age
  const getFullName = () => `${surname} ${name} ${fatherName}`

  const setName = newName => {
    if (typeof newName === 'string' && newName.trim().length > 0) {
      name = capitalize(newName)
      return name
    }
  }

  const setSurname = newSurname => {
    if (typeof newSurname === 'string' && newSurname.trim().length > 0) {
      surname = capitalize(newSurname)
      return surname
    }
  }

  const setFatherName = newFatherName => {
    if (typeof newFatherName === 'string' && newFatherName.trim().length > 0) {
      fatherName = capitalize(newFatherName)
      return fatherName
    }
  }

  const setAge = newAge => {
    if (typeof newAge === 'number' && newAge > 0 && newAge < 100) {
      age = newAge
      return age
    }
  }

  const setFullName = strFullName => {
    let [strSurname, strName, strFatherName] = strFullName.split(' ') //.map(x => capitalize(x))
    if (
      typeof strSurname === 'string' &&
      strSurname.trim().length > 0 &&
      typeof strName === 'string' &&
      strName.trim().length > 0 &&
      typeof strFatherName == 'string' &&
      strFatherName.trim().length > 0
    ) {
      name = capitalize(strName)
      surname = capitalize(strSurname)
      fatherName = capitalize(strFatherName)
    }
  }

  setName(strName)
  setSurname(strSurname)
  setFatherName(strFatherName)
  setAge(strAge)

  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  }
}
//***************** */
{
  let isSorted = (...params) => {
    for (let i = 0; i < params.length - 1; i++) {
      if (typeof params[i] !== 'number' || params[i + 1] < params[i]) {
        return false
      }
    }
    return true
  }
}
//***************** */
{
  let isSorted = (...params) => {
    console.log(params)
    for (let i = 0; i < params.length - 1; i++) {
      if (typeof (params[i] && params[i + 1]) !== 'number' || params[i + 1] < params[i]) {
        return false
      }
    }
    return true
  }

  function arrayFill() {
    let arr = []
    let element
    while ((element = prompt(`Введите что-нибудь:`))) {
      ;+element ? arr.push(+element) : arr.push(element)
      alert(`Текущий массив: ${arr} `)
    }
    alert(`Ввод окончен, результат: ${arr}  `)

    isSorted(...arr)
      ? alert(`TRUE, каждый элемент больше предыдущего`)
      : alert(`FALSE, не каждый элемент больше предыдущего или присутствуют другие типы данных`)
  }
}
