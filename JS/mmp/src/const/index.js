export const API_URL = 'http://shop-roles.node.ed.asmer.org.ua'
export const API_URL_GRAPHQL = `${API_URL}/graphql`

// ********************* Запрос на список корневых категорий ******************

//Используем CategoryFind, однако в параметре query используем поиск по полю parent, которое должно быть равно null. (у корневых категорий нет родителя)

export const rootCategories = {q: '[{"parent":null}]'}

export const queryRootCategories = `
  query rootCategories($q: String){ 
    CategoryFind(query: $q) {
      _id
      name
      subCategories {
        _id
        name
      }
    }
  }
  `

//   Запрос для получения одной категории c с проверкой подкатегорий

// "q": "[{\"_id\": \"64174598d5e3301cba63a6a2\"}]"
//let idCategory = {q: '[{"_id":"64031651d5e3301cba63a54c"}]'}

export const querySubCategories = `
query subCategories($q: String) {
  CategoryFind(query: $q) {
    _id
    name
    subCategories {
      _id
      name
    }
  }
}
`

// *********************  Запрос для получения одной категории с товарами и картинками ******************
// Используем CategoryFindOne, передав _id. Попросите GraphQL прислать вам товары из этой категории, а так же подкатегории. Параметр: _id
//  "_id": "64031651d5e3301cba63a54c",
//  "name": "Food" -> пример категории с id
//let id = {id: '64031651d5e3301cba63a54c'} //передаем Food, как для примера

//let idCategory = {q: '[{"_id":"64031651d5e3301cba63a54c"}]'}

export const queryCategoryWithGoods = `
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

// let idGood = {q: '[{"_id":"64063ab9d5e3301cba63a5a2"}]'} // -> потом передавать в idGood нужный id (64063ab9d5e3301cba63a5a2)

export const queryGood = `
query goodWithDescription ($q: String) {
  GoodFindOne (query: $q) {
    _id name description price images {
      url
    }
  }
}
`
// *********************  Запрос на регистрацию пользователя  *****
export const registration = `
mutation reg($login: String, $password: String) {
       UserUpsert(user: { login: $login, password: $password }) {
         _id login createdAt
       }
     }`

//*********************  Запрос оформления заказа  *****

export const orderUpsert = `mutation order ($goods: [OrderGoodInput]) {
      OrderUpsert(order: { orderGoods: $goods }) {
        _id
        createdAt
        total
       }
    }
    `
//*********************  Запрос истории заказов  *****

export const orderFind = ` query orders ($q: String) {
  OrderFind (query: $q) {
    _id createdAt orderGoods{
       count good {
        name price
       }
    }
  }
}
`
