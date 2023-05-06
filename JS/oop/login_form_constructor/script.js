function loginForm(parentId, open) {
  let parentElement = ''
  let inputPass = ''
  let inputLogin = ''
  let buttonLogin = ''
  let chkBoxPwdVisible = ''
  let isOpenPwd = false
  let pass = ''
  let login = ''

  this.initElements = function () {
    parentElement = document.getElementById(parentId)

    let labelInputLogin = document.createElement('label')
    labelInputLogin.htmlFor = 'loginInput'
    labelInputLogin.innerText = 'Login '
    inputLogin = document.createElement('input')
    inputLogin.id = 'loginInput'

    let labelInputPass = document.createElement('label')
    labelInputPass.htmlFor = 'pwdInput'
    labelInputPass.innerText = 'Password '
    inputPass = document.createElement('input')
    inputPass.id = 'pwdInput'

    chkBoxPwdVisible = document.createElement('input')
    chkBoxPwdVisible.id = 'chkBoxPwd'
    chkBoxPwdVisible.type = 'checkbox'
    chkBoxPwdVisible.checked = open
    let labelChkBox = document.createElement('label')
    labelChkBox.htmlFor = 'chkBoxPwd'
    labelChkBox.innerText = 'Pass visible '

    buttonLogin = document.createElement('button')
    buttonLogin.id = 'passLoginButton'
    buttonLogin.textContent = 'Login'
    buttonLogin.disabled = !(this.getLoginValue() && this.getPassValue())

    parentElement.appendChild(labelInputLogin)
    parentElement.appendChild(inputLogin)
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(labelInputPass)
    parentElement.appendChild(inputPass)
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(labelChkBox)
    parentElement.appendChild(chkBoxPwdVisible)
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(buttonLogin)
  }

  this.setPassOpen = function (open) {
    if (open) {
      inputPass.type = 'text'
      isOpenPwd = true
    } else {
      inputPass.type = 'password'
      isOpenPwd = false
    }
    return isOpenPwd
  }

  this.setPassValue = function (value) {
    inputPass.value = value
    pass = value
    return pass
  }

  this.setLoginValue = function (value) {
    inputLogin.value = value
    login = value
    return login
  }

  this.getLoginValue = function () {
    return login
  }

  this.getPassValue = function () {
    return pass
  }

  this.getPassOpen = function () {
    return isOpenPwd
  }

  this.onOpenChange = function (open) {
    console.log(`onOpenChange event: ${open}`)
  }

  this.onPwdChange = function (pwd) {
    this.setPassValue(inputPass.value)
    buttonLogin.disabled = !(this.getLoginValue() && this.getPassValue())

    console.log(`onPwdChange event: ${pwd}`)
  }

  this.onLoginChange = function (login) {
    this.setLoginValue(inputLogin.value)
    buttonLogin.disabled = !(this.getLoginValue() && this.getPassValue())
    console.log(`onLoginChange event: ${login}`)
  }

  this.initElements()
  this.setPassOpen(open)

  chkBoxPwdVisible.addEventListener(
    'change',
    function () {
      if (chkBoxPwdVisible.checked) {
        this.setPassOpen(true)
      } else {
        this.setPassOpen(false)
      }
      this.onOpenChange(chkBoxPwdVisible.checked)
    }.bind(this)
  )

  inputPass.addEventListener(
    'input',
    function () {
      this.onPwdChange(inputPass.value)
    }.bind(this)
  )

  inputLogin.addEventListener(
    'input',
    function () {
      this.onLoginChange(inputLogin.value)
    }.bind(this)
  )
}

let p = new loginForm('loginForm', false)
