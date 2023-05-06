function Password(parentId, open) {
  let parentElement = ''
  let inputPass1 = ''
  let inputPass2 = ''
  let chkBoxPwdVisible = ''
  let isOpenPwd = false
  let passResult = ''
  let pass1 = ''
  let pass2 = ''

  //создаем все для инициализации
  this.initElements = function () {
    parentElement = document.getElementById(parentId)
    let labelInputPass1 = document.createElement('label')
    labelInputPass1.htmlFor = 'pwdInput1'
    labelInputPass1.innerText = 'Password '
    inputPass1 = document.createElement('input')
    inputPass1.id = 'pwdInput1'

    chkBoxPwdVisible = document.createElement('input')
    chkBoxPwdVisible.id = 'chkBoxPwd'
    chkBoxPwdVisible.type = 'checkbox'
    let labelChkBox = document.createElement('label')
    labelChkBox.htmlFor = 'chkBoxPwd'
    labelChkBox.innerText = 'Pass visible '
    chkBoxPwdVisible.checked = open

    let labelInputPass2 = document.createElement('label')
    labelInputPass2.htmlFor = 'pwdInput2'
    labelInputPass2.innerText = 'Password '
    labelInputPass2.id = 'labelInputPass2'
    inputPass2 = document.createElement('input')
    inputPass2.id = 'pwdInput2'
    inputPass2.type = 'password'

    parentElement.appendChild(labelInputPass1)
    parentElement.appendChild(inputPass1)
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(labelInputPass2)
    parentElement.appendChild(inputPass2)
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(labelChkBox)
    parentElement.appendChild(chkBoxPwdVisible)

    this.setPass2Visibility(open, 'labelInputPass2', 'pwdInput2')
  }

  //инициализируем первое поле (text/password)
  this.setOpen = function (open) {
    if (open) {
      inputPass1.type = 'text'
      isOpenPwd = true
    } else {
      inputPass1.type = 'password'
      isOpenPwd = false
    }
    return isOpenPwd
  }

  this.setPwd1Value = function (value) {
    pass1 = value
    return pass1
  }

  this.setPwd2Value = function (value) {
    //inputPass2.value = value
    pass2 = value
    return pass2
  }

  // сетим  результирующий пароль, сразу, если открытый (text) или при равных инпутах в password-ах
  this.setPassResultValue = function (pass1, pass2, open) {
    if (open) {
      passResult = pass1
      console.log(`Состояние open = ${open}`)
    } else {
      if (pass1 == pass2) {
        passResult = pass1
      } else {
        passResult = ''
      }
    }
    return passResult
  }

  //по чекбоксу hidden/visible второй password
  this.setPass2Visibility = function (open, labelId, inputId) {
    let label = document.getElementById(labelId)
    let input = document.getElementById(inputId)
    if (open) {
      label.style.visibility = 'hidden'
      input.style.visibility = 'hidden'
    } else {
      label.style.visibility = 'visible'
      input.style.visibility = 'visible'
    }
  }

  //красим бордеры инпутов при несовпадении
  this.setMatchWarning = function (pass, inputPwd1Id, inputPwd2Id, open) {
    let input1 = document.getElementById(inputPwd1Id)
    let input2 = document.getElementById(inputPwd2Id)
    if (pass == '' && open) {
      input1.style.border = '1px solid black'
      input2.style.border = '1px solid black'
    } else {
      if (pass == '' && input1.value != '' && input2.value != '' && !open) {
        input1.style.border = '1px solid red'
        input2.style.border = '1px solid red'
      } else if (pass != '' && !open) {
        input1.style.border = '1px solid black'
        input2.style.border = '1px solid black'
      }
    }
  }

  this.getPass1Value = function () {
    return pass1
  }

  this.getPass2Value = function () {
    return pass2
  }

  this.getPassResultValue = function () {
    return passResult
  }

  this.getOpen = function () {
    return isOpenPwd
  }

  this.onOpenChange = function (open) {
    this.setPass2Visibility(open, 'labelInputPass2', 'pwdInput2')
    //при переключении режима отображения  - reset
    inputPass1.value = ''
    inputPass2.value = ''
    passResult = ''
    this.setMatchWarning(passResult, 'pwdInput1', 'pwdInput2', open)
    console.log(`onOpenChange event: visible = ${open}`)
  }

  this.onChangePwd1 = function (pwd, open) {
    this.setPassResultValue(pwd, inputPass2.value, open)
    this.setMatchWarning(passResult, 'pwdInput1', 'pwdInput2', open)
    console.log(`onChangePwd1 event:  currPwd =${pwd}; passResult =${passResult} `)
  }

  this.onChangePwd2 = function (pwd, open) {
    this.setPassResultValue(inputPass1.value, pwd, open)
    this.setMatchWarning(passResult, 'pwdInput1', 'pwdInput2', open)
    console.log(`onChangePwd2 event: currPwd = ${pwd}; passResult =${passResult} `)
  }

  this.initElements()
  this.setOpen(open)

  chkBoxPwdVisible.addEventListener(
    'change',
    function () {
      if (chkBoxPwdVisible.checked) {
        this.setOpen(true)
      } else {
        this.setOpen(false)
      }
      this.onOpenChange(isOpenPwd)
    }.bind(this)
  )

  inputPass1.addEventListener(
    'input',
    function () {
      this.setPwd1Value(inputPass1.value)
      this.onChangePwd1(pass1, isOpenPwd)
    }.bind(this)
  )

  inputPass2.addEventListener(
    'input',
    function () {
      this.setPwd2Value(inputPass2.value)
      this.onChangePwd2(pass2, isOpenPwd)
    }.bind(this)
  )
}

let p = new Password('passBlock', true) //параллельно с html формой можно смотреть в console.log значения инпутов и passResult  - результирующий пароль, который присваивается сразу при видимом пароле или при невидимых только при совпадении

//***************** РЕВИЗИЯ GPT ))))*****************/

// Код представляет собой функцию Password, которая создает элементы HTML-страницы для ввода пароля. Функция имеет следующие методы:

// initElements: создает все необходимые элементы для отображения полей ввода и чекбокса для отображения пароля в открытом виде.
// setOpen: изменяет тип первого поля ввода на text или password в зависимости от значения аргумента open.

// setPwd1Value: устанавливает значение первого поля ввода.

// setPwd2Value: устанавливает значение второго поля ввода.

// setPassResultValue: устанавливает значение результирующего пароля на основе значений двух полей ввода. Если чекбокс для отображения пароля в открытом виде отмечен, то значение результирующего пароля будет равно значению первого поля ввода. В противном случае значение результирующего пароля будет равно значению первого поля ввода только в том случае, если оба поля ввода имеют одинаковые значения.

// setPass2Visibility: скрывает или отображает второе поле ввода пароля на основе значения чекбокса для отображения пароля в открытом виде.

// setMatchWarning: меняет цвет границ полей ввода в случае, если значения полей ввода не совпадают. Если значение результирующего пароля пустое и чекбокс для отображения пароля в открытом виде отмечен, то границы полей ввода остаются черными. Если значение результирующего пароля пустое и оба поля ввода заполнены, но чекбокс не отмечен, то границы полей ввода становятся красными. Если значение результирующего пароля не пустое, то границы полей ввода остаются черными.

// getPass1Value: возвращает значение первого поля ввода.

// getPass2Value: возвращает значение второго поля ввода.

// getPassResultValue: возвращает значение результирующего пароля.

// getOpen: возвращает значение чекбокса для отображения пароля в открытом виде.

// onOpenChange: вызывается при изменении значения чекбокса для отображения пароля в открытом виде. Изменяет видимость второго поля ввода и сбрасывает значения полей ввода и результирующего пароля. Также вызывает метод setMatchWarning для изменения цвета границ полей ввода.

// onChangePwd1: вызывается при изменении значения первого поля ввода. Обновляет значение результирующего пароля и вызывает метод setMatchWarning для изменения цвета границ полей ввода.
