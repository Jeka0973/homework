fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    const div = document.getElementById('buttonResult')

    let objCurrencyRate = {...data.rates}

    for (let key in objCurrencyRate) {
      const button = document.createElement('button')
      button.id = key
      button.value = objCurrencyRate[key]
      button.innerHTML = key
      button.onclick = () => {
        const sum = prompt(`Введите сумму для обмена ${key} на USD`)
        const result = +sum / objCurrencyRate[key]
        alert(`Вы ввели ${sum}${key}, получите ${result.toFixed(2)}USD`)
      }
      div.appendChild(button)
    }
  })
