function createPersonClosure(obj) {
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
    return `${surname} ${name} ${fatherName}`
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

const person = {
  name: 'Васек',
  surname: 'Пупупкин',
  fatherName: 'Пупупкинович',
  age: 77,
  salary: 23450,
}

// Данные для CAR
let car
{
  let brand = 'BMW',
    model = 'X5',
    volume = 2.4
  car = {
    getBrand() {
      return brand
    },
    setBrand(newBrand) {
      if (newBrand && typeof newBrand === 'string') {
        brand = newBrand
      }
      return brand
    },

    getModel() {
      return model
    },
    setModel(newModel) {
      if (newModel && typeof newModel === 'string') {
        model = newModel
      }
      return model
    },

    getVolume() {
      return volume
    },
    setVolume(newVolume) {
      newVolume = +newVolume
      if (newVolume && newVolume > 0 && newVolume < 20) {
        volume = newVolume
      }
      return volume
    },

    getTax() {
      return volume * 100
    },
  }
}

//генерим DOM
function personForm(parent, person) {
  let arrOfkeyNames = getArrOfNames(person) //вырезаем имена полей из get
  let uniqueGets = getArrOfNamesWithoutSet(person) //если get > set пишем сюда уникальные поля (для readOnly инпутов)

  for (let i = 0; i < arrOfkeyNames.length; i++) {
    let parentElement = document.querySelector(parent)

    let div1 = document.createElement('div')
    parentElement.appendChild(div1)
    let label = document.createElement('label')
    label.textContent = arrOfkeyNames[i]
    div1.appendChild(label)

    let div2 = document.createElement('div')
    parentElement.appendChild(div2)
    let input = document.createElement('input')

    input.type = 'text'
    input.setAttribute('class', `itemInput  ${arrOfkeyNames[i]}`)
    //console.log(`${arrOfkeyNames[i]}`)

    input.value = person[`get${arrOfkeyNames[i]}`]() //НАДО ЗАПОМНИТЬ!!!

    console.log(uniqueGets)
    console.log(arrOfkeyNames[i])

    if (uniqueGets.includes(arrOfkeyNames[i])) {
      console.log(true)
      //проверяем, если get без set -> readOnly
      input.readOnly = true
    }

    div2.appendChild(input)

    input.addEventListener('keydown', function (event) {
      //окончание редактирования по Enter + обновление полей
      if (event.key === 'Enter') {
        person[`set${arrOfkeyNames[i]}`](event.target.value)
        const allItemInputs = document.getElementsByClassName('itemInput')
        for (let i = 0; i < allItemInputs.length; i++) {
          allItemInputs[i].value = person[`get${arrOfkeyNames[i]}`]()
        }
      }
    })
  }
}

//если get > set пишем сюда уникальные поля (для readOnly инпутов)
function getArrOfNamesWithoutSet(obj) {
  let arrOfGets = []
  let arrOfSets = []
  let arrResult = []

  for (let key in obj) {
    if (key.includes('get')) {
      arrOfGets.push(key.substring(3))
    } else if (key.includes('set')) {
      arrOfSets.push(key.substring(3))
    }
  }

  //кол-во get всегда >=set!!
  for (let elem of arrOfGets) {
    if (!arrOfSets.includes(elem)) {
      arrResult.push(elem)
    }
  }
  return arrResult
}

//получаем количество полей, вырезая getы из методов
function getArrOfNames(obj) {
  let arrOfNames = []

  for (let key in obj) {
    if (key.includes('get')) {
      arrOfNames.push(key.substring(3))
    }
  }
  return arrOfNames
}

let parent = '#personData'

// getArrOfNames(car) //для CAR
// getArrOfNamesWithoutSet(car) //для CAR
// personForm(parent, car) //для CAR

getArrOfNames(createPersonClosure(person)) //для фио
getArrOfNamesWithoutSet(person) //для фио
personForm(parent, createPersonClosure(person)) //для фио

//const selection = document.getElementById('selection')

selection.addEventListener('change', function (event) {
  personData.innerHTML = ''
  if (selection.value == 'person') {
    getArrOfNames(createPersonClosure(person))
    getArrOfNamesWithoutSet(person)
    personForm(parent, createPersonClosure(person))
  } else if (selection.value == 'car') {
    getArrOfNames(car)
    getArrOfNamesWithoutSet(car)
    personForm(parent, car)
  }
})
