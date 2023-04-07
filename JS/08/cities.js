let objCountryCity = {}
let selectedCountry
fetch(
  'https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json'
)
  .then(res => res.json())
  .then(data => {
    objCountryCity = {...data}

    const getSelectParentElements = (obj, id) => {
      let selectElement = document.getElementById(id)
      for (key in obj) {
        let optionElement = document.createElement('option')
        optionElement.id = key
        optionElement.value = obj[key]
        optionElement.text = key
        selectElement.add(optionElement)
      }
    }
    getSelectParentElements(objCountryCity, 'countries')

    selectedOption()
  })

const selectedOption = () => {
  selectedCountry = document.getElementById('countries')
  let selectCities = document.getElementById('cities')
  selectCities.innerHTML = '' //очищаем предыдущий список
  for (city of selectedCountry.value.split(',')) {
    let optionElement = document.createElement('option')
    optionElement.text = city
    selectCities.add(optionElement)
  }
}
