fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    //const div = document.getElementById('buttonResult')

    let objCurrencyRate = {...data.rates}

    const getSelectElements = (obj, id) => {
      let selectedElement = document.getElementById(id)
      for (let key in obj) {
        let optionElement = document.createElement('option')
        optionElement.id = key
        optionElement.value = obj[key]
        optionElement.text = key
        selectedElement.add(optionElement)
      }
      selectedElement.selectedIndex = 0
    }

    getSelectElements(objCurrencyRate, 'from')
    getSelectElements(objCurrencyRate, 'to')

    selectedOption()
  })

const selectedOption = () => {
  let selectedFrom = document.getElementById('from')
  let selectedTo = document.getElementById('to')
  let crossCource = selectedFrom.value / selectedTo.value

  let amount = document.getElementById('amount')
  let result = (amount.value / crossCource).toFixed(2)

  document.getElementById('rate').innerHTML = crossCource
  document.getElementById('result').innerHTML = result
}
selectedOption()
