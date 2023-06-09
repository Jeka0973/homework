class Password {
  #parentElement
  #inputBox
  #chkBoxPwdVisible
  #isOpenPwd
  #pass

  constructor(parentId, open) {
    this.parentId = parentId
    this.#isOpenPwd = open
    this.#parentElement = document.getElementById(this.parentId)
    let labelInputBox = document.createElement('label')
    labelInputBox.htmlFor = 'pwdInput'
    labelInputBox.innerText = 'Password '
    this.#inputBox = document.createElement('input')
    this.#inputBox.id = 'pwdInput'
    this.#inputBox.type = 'text'

    this.#chkBoxPwdVisible = document.createElement('input')
    this.#chkBoxPwdVisible.id = 'chkBoxPwd'
    this.#chkBoxPwdVisible.type = 'checkbox'
    let labelChkBox = document.createElement('label')
    labelChkBox.htmlFor = 'chkBoxPwd'
    labelChkBox.innerText = 'Pass visible '

    this.#parentElement.appendChild(labelInputBox)
    this.#parentElement.appendChild(this.#inputBox)
    this.#parentElement.appendChild(document.createElement('br'))
    this.#parentElement.appendChild(document.createElement('br'))
    this.#parentElement.appendChild(labelChkBox)
    this.#parentElement.appendChild(this.#chkBoxPwdVisible)

    this.#chkBoxPwdVisible.addEventListener(
      'change',
      function () {
        if (this.#chkBoxPwdVisible.checked) {
          this.setOpen(true)
        } else {
          this.setOpen(false)
        }
        // this.onOpenChange(chkBoxPwdVisible.checked)
      }.bind(this)
    )

    this.#inputBox.addEventListener(
      'input',
      function () {
        //this.onChange(inputBox.value)
      }.bind(this)
    )
  }

  setOpen(open) {
    if (open) {
      this.#inputBox.type = 'text'
      this.#isOpenPwd = true
    } else {
      this.#inputBox.type = 'password'
      this.#isOpenPwd = false
    }
  }

  value(value) {
    this.#inputBox.value = value
    this.#pass = value
  }

  open() {
    return this.#isOpenPwd
  }
}

let p = new Password('passBlock', true)
