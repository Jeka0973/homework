//********** SWAPI Links ***************
{
  async function swapiLinks(url) {
    const resolve = await fetch(url)
    const obj = await resolve.json() //разрешаем ссылку в объект
    console.log(obj)
    const links = []

    for (let key in obj) {
      //перебираем объект, где находим ссылки кидаем их в массив промисов
      if (obj[key].includes('https')) {
        links.push(obj[key])
      } else if (Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
          if (obj[key][i].includes('https')) {
            links.push(obj[key][i])
          }
        }
      }
    }
    console.log(links)

    const objects = await Promise.all(
      links.map(async function (url) {
        //для каждого элемента массива запускаем fetch разрешение в объект и ждем пока все разрешатся Promise.all
        const resolve = await fetch(url)
        return resolve.json()
      })
    )
      .then(objects => {
        console.log('Все промисы зарезолвлены, начинаем заполнять объект!')
        console.log(objects)
        //добавляем объекты вместо ссылок только при успешном резолве всех промисов
        for (let key in obj) {
          // снова идем по массиву первоначального объекта и когда встречаем https вынимаем shift-ом в порядке очереди записи в массив промисов уже разрешенные объекты и просто присваиваем полю значение вместо ссылки, которая там раньше была))
          if (obj[key].includes('https')) {
            obj[key] = objects.shift()
          } else if (Array.isArray(obj[key])) {
            for (let i = 0; i < obj[key].length; i++) {
              if (obj[key][i].includes('https')) {
                obj[key][i] = objects.shift()
              }
            }
          }
        }
      })
      .catch(error => {
        console.log(error)
        console.log('Что-то дало сбой резолва!')
      })

    console.log(obj)
    return obj
  }

  swapiLinks('https://swapi.dev/api/people/20/').then(yodaWithLinks =>
    console.log(JSON.stringify(yodaWithLinks, null, 4))
  )
}

//********** domEventPromise ***************
{
  //в файле index.html
}
