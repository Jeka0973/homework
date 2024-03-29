function getGQL(url) {
  return async function gql(query, variables = {}) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({query, variables}),
    }
    //console.log(JSON.stringify({query, variables}))

    const response = await fetch(url, options)
    const data = await response.json()

    // if (data.errors) {
    //   throw new Error(data.errors[0].message)
    // }

    return Object.values(data)[0] //  gql был без лишних оберток, из data извлекается первое значение как бы не назывался ключ;
  }
}

let gqlFunc = getGQL('http://shop-roles.node.ed.asmer.org.ua/graphql')

// ********************* Запрос на список корневых категорий ******************

//Используем CategoryFind, однако в параметре query используем поиск по полю parent, которое должно быть равно null. (у корневых категорий нет родителя)

const rootCategories = {q: '[{"parent":null}]'}

const queryRootCategories = `
  query rootCategories($q: String){ 
    CategoryFind(query: $q){
        _id name 
    }
  }
  `

// *********************  Запрос для получения одной категории с товарами и картинками ******************
// Используем CategoryFindOne, передав _id. Попросите GraphQL прислать вам товары из этой категории, а так же подкатегории. Параметр: _id
//  "_id": "64031651d5e3301cba63a54c",
//  "name": "Food" -> пример категории с id
//let id = {id: '64031651d5e3301cba63a54c'} //передаем Food, как для примера

//let idCategory = {q: '[{"_id":"64031651d5e3301cba63a54c"}]'}

const queryCategoryWithGoods = `
  query oneCatWithGoods($q: String){
    CategoryFindOne(query: $q){
        _id name subCategories {
          _id name
        }
         goods {
          _id name price images {
            url
          }

        }
    }
  }
  `
// *********************  Запрос на получение товара с описанием и картинками ******************
// Аналогично предыдущему запросу, но используем GoodFindOne, так же по _id. Параметр: _id
//_id: '64063ab9d5e3301cba63a5a2', name: 'Угорь Унаги Жареный'

let idGood = {q: '[{"_id":"64063ab9d5e3301cba63a5a2"}]'} // -> потом передавать в idGood нужный id (64063ab9d5e3301cba63a5a2)

const queryGood = `
query goodWithDescription ($q: String) {
  GoodFindOne (query: $q) {
    _id name description price images {
      url
    }
  }
}
`

//запросы к бэкэнду на выборки данных
// gqlFunc(queryRootCategories, rootCategories).then(data => console.log(data))
// gqlFunc(queryCategoryWithGoods, idCategory).then(data => console.log(data))
// gqlFunc(queryGood, idGood).then(data => console.log(data))

//собственно сам редьюсер

function promiseReducer(state = {}, {type, promiseName, status, payload, error}) {
  if (type === 'PROMISE') {
    return {
      ...state,
      [promiseName]: {status, payload, error},
    }
  }
  return state
}

const actionPending = promiseName => ({type: 'PROMISE', promiseName, status: 'PENDING'})
const actionFulfilled = (promiseName, payload) => ({
  type: 'PROMISE',
  promiseName,
  status: 'FULFILLED',
  payload,
})
const actionRejected = (promiseName, error) => ({
  type: 'PROMISE',
  promiseName,
  status: 'REJECTED',
  error,
})

const actionPromise = (promiseName, promise) => async dispatch => {
  dispatch(actionPending()) //сигнализируем redux, что промис начался
  try {
    // const typePromise = typeof promise
    // console.log(`Type of promise is: ${typePromise}`)
    const payload = await promise //ожидаем промиса
    dispatch(actionFulfilled(promiseName, payload)) //сигнализируем redux, что промис успешно выполнен
    return payload //в месте запуска store.dispatch с этим thunk можно так же получить результат промиса
  } catch (error) {
    dispatch(actionRejected(promiseName, error)) //в случае ошибки - сигнализируем redux, что промис несложился
  }
}

function createStore(reducer) {
  let state = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
  let cbs = [] //массив подписчиков

  const getState = () => state //функция, возвращающая переменную из замыкания
  const subscribe = cb => (
    cbs.push(cb), //запоминаем подписчиков в массиве
    () => (cbs = cbs.filter(c => c !== cb))
  ) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка

  const dispatch = action => {
    if (typeof action === 'function') {
      //если action - не объект, а функция
      return action(dispatch, getState) //запускаем эту функцию и даем ей dispatch и getState для работы
    }
    const newState = reducer(state, action) //пробуем запустить редьюсер
    if (newState !== state) {
      //проверяем, смог ли редьюсер обработать action
      state = newState //если смог, то обновляем state
      for (let cb of cbs) cb() //и запускаем подписчиков
    }
  }

  return {
    getState, //добавление функции getState в результирующий объект
    dispatch,
    subscribe, //добавление subscribe в объект
  }
}

const getGoods = objGoods => {
  let goods = objGoods.getGoods.payload.CategoryFindOne

  const ulGoods = document.getElementById('goodsInCategory')
  ulGoods.innerHTML = ''

  //для отладки!! {
  console.log(`Category id: ${goods._id}`)
  console.log(`Category name: ${goods.name}`)
  console.log(`isSubCategory?: ${Array.isArray(goods.subCategories)}`)
  if (Array.isArray(goods.subCategories)) {
    console.log(`Category sub length: ${goods.subCategories.length}`)
    for (let subCat of goods.subCategories) {
      console.log(`subCat name: ${subCat.name} id: ${subCat._id}`)
    }
  }
  console.log(`isGoods?: ${Array.isArray(goods.goods)} `)
  if (Array.isArray(goods.goods) && goods.goods.length) {
    for (let good of goods.goods) {
      console.log(`good: ${good._id}; ${good.name}; ${good.price}`)
      console.log(`isImage?: ${Array.isArray(good.images)} `)
      if (Array.isArray(good.images)) {
        for (let image of good.images) {
          console.log(`Image url: ${image.url}`)
        }
      }
    }
  }
  // }  для отладки!!

  //рисуем путь
  let currentCategory = document.getElementById('currentCategory')

  currentCategory.innerHTML = goods.name

  //рисуем карточки
  let contentBody = document.getElementById('contentBody')
  contentBody.innerHTML = ''

  if (Array.isArray(goods.goods) && goods.goods.length) {
    for (let good of goods.goods) {
      let divCard = document.createElement('div')
      divCard.className = 'card'
      let divImg = document.createElement('div')

      if (Array.isArray(good.images) && good.images.length) {
        let img = document.createElement('img')
        img.className = 'goodPhoto'
        img.src = `http://shop-roles.node.ed.asmer.org.ua/${good.images[0].url}`
        console.log(
          `Full Path 2 img: http://shop-roles.node.ed.asmer.org.ua/${good.images[0].url} `
        )
        divImg.appendChild(img)
      }

      let divGood = document.createElement('div')
      let h2GoodName = document.createElement('h2')
      let divPrice = document.createElement('div')
      let pPrice = document.createElement('p')

      let divButton = document.createElement('div')
      let button = document.createElement('button')
      button.innerText = 'Купить'

      h2GoodName.id = good._id
      h2GoodName.innerHTML = good.name
      pPrice.innerHTML = good.price

      contentBody.appendChild(divCard)
      divCard.appendChild(divImg)
      divCard.appendChild(divGood)
      divGood.appendChild(h2GoodName)
      divCard.appendChild(divPrice)
      divPrice.appendChild(pPrice)
      divCard.appendChild(divButton)
      divButton.appendChild(button)
    }
    //создаем карточку с _id товара
  }
}

const getCategories = objCats => {
  let categories = objCats.getCategories.payload.CategoryFind
  const ulCats = document.getElementById('rootCats')

  for (let obj of categories) {
    let liElement = document.createElement('li')
    let aElement = document.createElement('a')
    aElement.id = obj._id
    aElement.href = `#/category/${obj._id}`
    aElement.innerHTML = obj.name

    liElement.appendChild(aElement)
    ulCats.appendChild(liElement)

    // if (obj.subCategories != null && obj.goods != null) {
    aElement.addEventListener('click', async function (event) {
      event.preventDefault()

      //console.log(obj.name)

      store.dispatch(
        actionPromise(
          'getGoods',
          await gqlFunc(queryCategoryWithGoods, {q: `[{"_id":"${aElement.id}"}]`})
        )
      )
      store.subscribe(() => getGoods(store.getState()))

      //console.log(idCategory)
      ulCats.innerHTML = ''

      //очищаем ul, потому как при повторном вызове срабатывает подписка unsubscribeRootCats
    })

    //обработчик по id после # в адресной строке
    window.onhashchange = async function () {
      const hash = window.location.hash.substr(1) //возвращает часть URL-адреса после  #
      if (hash) {
        store.dispatch(
          actionPromise(
            'getGoods',
            await gqlFunc(queryCategoryWithGoods, {q: `[{"_id":"${hash}"}]`})
          )
        )
        store.subscribe(() => getGoods(store.getState()))
        ulCats.innerHTML = ''
      }
    }
    //  }
  }
}

const store = createStore(promiseReducer)

store.dispatch(actionPromise('getCategories', gqlFunc(queryRootCategories, rootCategories)))
const unsubscribeRootCats = store.subscribe(() => getCategories(store.getState()))
