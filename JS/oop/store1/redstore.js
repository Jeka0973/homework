function reducer(state, {type, what, amount, money}) {
  //передаем state & action
  const types = `buyBeer buyChips buySigi`
  const arrOrTypes = types.split(' ')
  if (!state) {
    return {
      //делаем и заполняем
      beer: {
        amount: 20,
        price: 10,
      },
      chips: {
        amount: 80,
        price: 10,
      },
      sigi: {
        amount: 50,
        price: 20,
      },
      cash: 100,
    }
  }

  if (arrOrTypes.includes(type)) {
    let item = state[what].amount
    let price = state[what].price
    if (amount > item && item) {
      alert(`У нас недостаточно товара, есть только ${item}`)
      return state
    } else if (!item) {
      alert(`Товар временно отсутствует, приносим извинения`)
      return state
    } else if (amount * price > money) {
      alert(`У вас недостаточно денег`)
      return state
    } else {
      if (amount * price < money) {
        alert(
          `Касса: ${amount * price} uah, Вы дали: ${money} uah, Ваша сдача: ${
            money - amount * price
          } uah`
        )
        money = amount * price
      }
      console.log(price)
      return {
        ...state,
        [what]: {amount: item - amount, price: price},
        cash: state.cash + money,
      }
    }
  } else {
    return state
  }
}

//*****/
function createStore(reducer) {
  let state = reducer(undefined, {}) //инициализируем undefined -ом и пустым action
  let cbs = [] //инициализируем массивом подписчиков
  //const getState = () => state
  this.getState = function () {
    return state
  }

  this.subscribe = function (cb) {
    cbs.push(cb)
    return function () {
      cbs = cbs.filter(function (c) {
        return c !== cb
      })
    }
  }

  this.dispatch = function (action) {
    //передаем action диспетчеру
    const newState = reducer(state, action) //запускаем редьюсер, он знает про наш объект в хранилище, теперь готов по action что-то с ним сделать (обработать запрос)
    if (newState !== state) {
      //перевіряємо, чи зміг ред'юсер обробити action
      state = newState //теперь обновляем state на основе обработанных action.type
      for (let cb of cbs) cb()
    }
  }
}

//   getState, //здесь смотрим состояние
//   dispatch, //отправляет action (команду в хранилище сделать что-то)
//   subscribe, //оповещает подписчиков, если state хранилища изменен

//витрина + касса
const getKioskState = () => {
  let {beer, chips, sigi, cash} = store.getState()
  beerLeft.innerHTML = beer.amount
  beerPrice.innerHTML = beer.price
  chipsLeft.innerHTML = chips.amount
  chipsPrice.innerHTML = chips.price
  sigiLeft.innerHTML = sigi.amount
  sigiPrice.innerHTML = sigi.price
  cashLeft.innerHTML = cash

  titleCash.text = `Касса ${cash}`
}

const getSelectElements = (obj, id) => {
  let selectElement = document.getElementById(id)
  console.log(selectElement)
  for (key in obj) {
    let optionElement = document.createElement('option')
    if (key != 'cash') {
      //  костыль, неоднотипные элементы в объекте((
      optionElement.value = key
      optionElement.text = key
      selectElement.add(optionElement)
    }
  }
}

//обрабатываем кнопку КУПИТЬ
const buyItNow = () => {
  let operation

  goods.value === 'beer'
    ? (operation = 'buyBeer')
    : goods.value === 'chips'
    ? (operation = 'buyChips')
    : (operation = 'buySigi')

  store.dispatch({
    type: operation,
    what: goods.value,
    amount: +amountOfGoods.value,
    money: +money.value,
  })
}

const store = new createStore(reducer) //сделали store
getKioskState() // Открытие магазина!))

let unsubscribeKioskState = store.subscribe(getKioskState) //создаем подписчика и сразу делаем переменную - функцию для отписки, если понадобится

getSelectElements(store.getState(), 'goods') //отображаем товары с select

buyIt.onclick = buyItNow //покупаем (переделать на addEventListener)
