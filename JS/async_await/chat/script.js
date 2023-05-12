let myNick = 'Anon'
let arrOfObj = []
let nextMessageId = 0

async function jsonPost(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })

    if (response.ok) {
      const json = await response.json()
      return json
    } else {
      throw new Error('status is not 200')
    }
  } catch (error) {
    throw new Error('jsonPost failed')
  }
}

async function getMessages(msgId) {
  try {
    const data = await jsonPost('http://students.a-level.com.ua:10012', {
      func: 'getMessages',
      messageId: msgId,
    })
    return data.data
  } catch (error) {
    throw new Error('Failed to get messages')
  }
}

function getMessagesForDom(arr) {
  let message = ''
  //nextMessageId = arr.length
  for (const obj of arr) {
    let time = new Date(obj.timestamp)
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    hours < 10 ? (hours = '0' + hours.toString()) : hours
    minutes < 10 ? (minutes = '0' + minutes.toString()) : minutes
    seconds < 10 ? (seconds = '0' + seconds.toString()) : seconds

    message += `<div><span class = 'hms'> ${hours}:${minutes}:${seconds}  </span><span class = 'nick'>${obj.nick}: </span> <span class = 'msg'>${obj.message}</span></div>`
  }
  msgContainer.insertAdjacentHTML('beforeend', message)
  msgContainer.scrollTop = msgContainer.scrollHeight
}

async function sendMessage(nick, message) {
  try {
    const data = await jsonPost('http://students.a-level.com.ua:10012', {
      func: 'addMessage',
      nick: nick,
      message: message,
    })
  } catch (error) {
    throw new Error('Failed to send messages')
  }
}

async function getAllMessages() {
  try {
    const arr = await getMessages(0)
    getMessagesForDom(arr)
    nextMessageId = arr.length
  } catch (error) {
    throw new Error('Failed to get all messages')
  }
}

async function checkNewMsg() {
  try {
    setInterval(async function () {
      const arr = await getMessages(nextMessageId)
      getMessagesForDom(arr)
      nextMessageId += arr.length //если добавляется msg, вычитываем новое кол-во и смещаем nextMessageId в lastId
    }, 4000)
  } catch (error) {
    throw new Error('Failed to check new messages')
  }
}

async function checkNewMsgWithoutDelay() {
  //добавляем по нажатию кнопки отправки
  try {
    const arr = await getMessages(nextMessageId)
    getMessagesForDom(arr)
    nextMessageId++
  } catch (error) {
    throw new Error('Failed to get messages at the moment without time delay')
  }
}

getAllMessages() //грузим все запоминаем последний id
checkNewMsg() //грузим новые

//checkLoop() //периодически грузим все, не понимаю, зачем он нужен!!!((

sendMsgBtn.disabled = !sendMsgText.value
currNickName.innerText = myNick
nickName.value = myNick

sendMsgText.addEventListener('input', function () {
  sendMsgBtn.disabled = !sendMsgText.value
})

sendMsgBtn.addEventListener('click', function () {
  sendMessage(myNick, sendMsgText.value) //отсылаем
  checkNewMsgWithoutDelay() //сразу обновляем новые
  sendMsgText.value = ''
  sendMsgBtn.disabled = true
})

nickName.addEventListener('keydown', function () {
  if (event.key === 'Enter') {
    myNick = nickName.value
    currNickName.innerText = nickName.value
  }
})
