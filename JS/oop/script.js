// *********** Person Constructor **************
{
  function Person(name, surname) {
    this.name = name
    this.surname = surname
    this.fatherName = ''
    this.getFullName = function () {
      if (!this.fatherName) {
        return `${this.name} ${this.surname}`
      } else {
        return `${this.name} ${this.fatherName} ${this.surname}`
      }
    }
  }

  const a = new Person('Вася', 'Пупкин')
  const b = new Person('Анна', 'Иванова')
  const c = new Person('Елизавета', 'Петрова')

  console.log(a.getFullName()) //Вася Пупкин
  a.fatherName = 'Иванович' //Вася Иванович Пупкин

  console.log(b.getFullName()) //Анна Иванова
}

// *********** Person Prototype **************
{
  function Person(name, surname) {
    this.name = name
    this.surname = surname
    this.fatherName = ''
  }

  Person.prototype.getFullName = function () {
    if (!this.fatherName) {
      return `${this.name} ${this.surname}`
    } else {
      return `${this.name} ${this.fatherName} ${this.surname}`
    }
  }

  const a = new Person('Вася', 'Пупкин')
  const b = new Person('Анна', 'Иванова')
  const c = new Person('Елизавета', 'Петрова')

  console.log(a.getFullName()) //Вася Пупкин
  a.fatherName = 'Иванович' //Вася Иванович Пупкин

  console.log(b.getFullName()) //Анна Иванова
}

// *********** Store **************

//в папке store1

//********* password **************

//в папке password

//********* loginForm constructor **************

//в папке login_form_constructor (просто логинформ пропустил, сразу сделал конструктор)

//********* password verify **************

//в папке password_verify
