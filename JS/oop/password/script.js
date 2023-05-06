function Password(parentId, open) {
  let parentElement = ''
  let inputBox = ''
  let chkBoxPwdVisible = ''
  let isOpenPwd = false
  let pass = ''

  this.initElements = function () {
    parentElement = document.getElementById(parentId)
    let labelInputBox = document.createElement('label')
    labelInputBox.htmlFor = 'pwdInput'
    labelInputBox.innerText = 'Password '
    inputBox = document.createElement('input')
    inputBox.id = 'pwdInput'

    chkBoxPwdVisible = document.createElement('input')
    chkBoxPwdVisible.id = 'chkBoxPwd'
    chkBoxPwdVisible.type = 'checkbox'
    let labelChkBox = document.createElement('label')
    labelChkBox.htmlFor = 'chkBoxPwd'
    labelChkBox.innerText = 'Pass visible '

    parentElement.appendChild(labelInputBox)
    parentElement.appendChild(inputBox)
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(document.createElement('br'))
    parentElement.appendChild(labelChkBox)
    parentElement.appendChild(chkBoxPwdVisible)
  }

  this.setOpen = function (open) {
    if (open) {
      inputBox.type = 'text'
      isOpenPwd = true
    } else {
      inputBox.type = 'password'
      isOpenPwd = false
    }
    return isOpenPwd
  }

  this.setValue = function (value) {
    inputBox.value = value
    pass = value
    return pass
  }

  this.getValue = function () {
    return pass
  }

  this.getOpen = function () {
    return isOpenPwd
  }

  this.onOpenChange = function (open) {
    console.log(`onOpenChange event: ${open}`)
  }

  this.onChange = function (pwd) {
    console.log(`onChange event: ${pwd}`)
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
      this.onOpenChange(chkBoxPwdVisible.checked)
    }.bind(this)
  )

  inputBox.addEventListener(
    'input',
    function () {
      this.onChange(inputBox.value)
    }.bind(this)
  )
}

let p = new Password('passBlock', true)
