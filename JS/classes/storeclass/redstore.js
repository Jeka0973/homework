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
class Store {
  #reducer
  #state
  #cbs = []

  constructor(reducer) {
    this.#state = reducer(undefined, {})
    this.#reducer = reducer
  }

  get state() {
    return this.#state
  }

  subscribe(cb) {
    this.#cbs.push(cb)
    return function () {
      this.#cbs = this.#cbs.filter(function (c) {
        return c !== cb
      })
    }
  }

  dispatch(action) {
    const newState = this.#reducer(this.#state, action) //запускаем редьюсер, он знает про наш объект в хранилище, теперь готов по action что-то с ним сделать (обработать запрос)
    if (newState !== this.#state) {
      //перевіряємо, чи зміг ред'юсер обробити action
      this.#state = newState //теперь обновляем state на основе обработанных action.type
      for (let cb of this.#cbs) cb()
    }
  }
}

//витрина + касса
const getKioskState = () => {
  let {beer, chips, sigi, cash} = store.state
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

const store = new Store(reducer) //сделали store
getKioskState() // Открытие магазина!))

let unsubscribeKioskState = store.subscribe(getKioskState) //создаем подписчика и сразу делаем переменную - функцию для отписки, если понадобится

getSelectElements(store.state, 'goods') //отображаем товары с select

buyIt.onclick = buyItNow //покупаем (переделать на addEventListener)
