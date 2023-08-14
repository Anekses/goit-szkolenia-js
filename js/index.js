// // this

// const person = {
//   username: 'Arkadiusz',
//   showName() {
//     // console.log(person.username) -> złe!
//     console.log(this.username)
//   },

//   books: ["LOTR 1", "LOTR 2"],
//   getBooks() {
//     console.log(this)
//     // return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName)
//   }
// }

// // person.showName()
// person.getBooks()
// // person.addBook('LOTR 3')
// // console.log(person.getBooks())

// // this.console.log('hello world')
// console.log(this)

// function calculate() {
//   console.log(this);
// }

// const person = {
//   username: 'Piotr',

//   showCalculate() {
//     console.log(this)
//     calculate()
//   }
// }

// person.showCalculate()
// calculate()



// function showThis() {
//   console.log(this);
// }

// let showThis = () => {
//   console.log(this);
// }


// const person = {
//   username: 'Piotr',

//   showObject() {
//     console.log(this)
//     showThis()
//   }
// }

// showThis()

// console.log('-----')

// person.showObject()

// console.log('-----')

// person.showAnotherThis = showThis;
// person.showAnotherThis()


// const customer = {
//   firstName: 'Piotr',
//   lastName: 'R',

//   getFullName() {
//     console.log(this)
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// // function getMessage(callback) {
// //   console.log(this)
// //   console.log(callback())
// // }

// const getMessage = (callback) => {
//   // console.log(this)
//   console.log(callback())
// }

// console.log(customer.getFullName())
// getMessage(customer.getFullName)

// const hotel = {
//   username: "Resort hotel",

//   showThis() {
//     const fooArrow = () => {
//       console.log("this in fooArrow: ", this);
//     };

//     function fooFunction () {
//       console.log("this in fooFunction: ", this);
//     };

//     fooArrow();
//     fooFunction();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();

function helloWorld(hello, secondOne) {
  console.log(`${hello}, ${this.username}, ${secondOne}`)
}

const person1 = {
  username: 'Mariusz'
}

const person2 = {
  username: 'Agata'
}

console.log('CALL')
helloWorld.call(person1, 'Witaj', 'w domu.')
helloWorld.call(person2, 'Witaj', 'w domu.')
helloWorld('Witaj', 'w domu.')

console.log('APPLY')
helloWorld.apply(person1, ['Witaj', 'w domu.'])
helloWorld.apply(person2, ['Witaj', 'w domu.'])
helloWorld('Witaj', 'w domu.')

console.log('BIND')

const person3 = {
  username: 'Marcin',
  firstName: 'Mariusz',
  lastName: 'Goit'
}

const heyMarcin = helloWorld.bind(person3)
const heyAgata = helloWorld.bind(person2)

heyAgata('Cześć', 'na zajeciach')
heyMarcin('Siema', 'na lekcji')


const customer = {
  firstName: 'Piotr',
  lastName: 'R',

  getFullName() {
    console.log(this)
    return `${this.firstName} ${this.lastName}`
  }
}

console.log('---------------------')

const getMessage = (callback) => {
  console.log(callback())
}

console.log(customer.getFullName())
getMessage(customer.getFullName.bind(customer))
getMessage(customer.getFullName.bind(person3))