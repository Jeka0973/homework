//************** promice race ***************/
{
  const p1 = fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(luke => console.log(luke))
    .then(res => console.log('Выполнился fetch'))

  function delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
    })
  }
  const p2 = delay(65).then(result => console.log('Выполнился delay'))

  //у меня пограничное время 65мс

  Promise.race([p1, p2])
}

//************** promisify confirm ***********/
{
  function confirmPromise(text) {
    const conf = new Promise((resolve, reject) => {
      confirm(text) ? resolve('Понимаю, но нужно еще курить их))') : reject('Ошибочка вышла')
    })

    return conf
  }

  // confirmPromise('Промисы это сложно?').then(
  //   result => console.log(result),
  //   error => console.log(error)
  // )

  //второй вариант

  confirmPromise('Промисы это сложно?')
    .then(result => console.log(result))
    .catch(error => console.log(error))
}
//************** promisify prompt ***********/
{
  function confirmPrompt(text) {
    const conf = new Promise((resolve, reject) => {
      const isName = prompt(text)
      if (isName === null || isName === '') {
        reject(`Ну зачем морозиться, нормально же общались`)
      } else {
        resolve(`Тебя зовут ${isName}`)
      }
    })

    return conf
  }

  confirmPrompt('Как тебя зовут?')
    .then(result => console.log(result))
    .catch(error => console.log(error))
}
