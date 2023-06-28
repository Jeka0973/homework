export const getFormatedDate = time => {
  let date = new Date(time)

  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  // Форматирование месяца, дня, часа, минуты и секунды, чтобы имели двузначное представление
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  let formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
  return formattedTime
}
//для authReducer
export function jwtDecode(token) {
  try {
    const arrTokenParts = token.split('.')
    if (arrTokenParts.length != 3) {
      return undefined
    }
    const decodedPart = atob(arrTokenParts[1])
    return JSON.parse(decodedPart)
  } catch (error) {
    return undefined
  }
}
