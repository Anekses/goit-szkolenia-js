// const title = 'Harry Potter'
// const author = 'J.K. Rowling'
// const isPublic = true
// const rating = 9.2

// const book = {
//   title: 'Harry Potter',
//   author: 'J.K. Rowling',
//   isPublic: true,
//   rating: 9.2,
//   genres: ['awesome', 'good to read'],
//   publishingInfo: {
//     year: 1994,
//     numberOfPages: 316,
//     isAwesome: true
//   }
//   // someObject: {
//   //   a: 1,
//   //   b: "2",
//   //   c: false,
//   //   d: {
//   //     e: 2,
//   //     f: 'abba'
//   //   }
//   // },
//   // "test something": '123',
//   // "_id": 123,
// }

// const user1 = {
//   name: 'Tomasz'
// }

// const user2 = {
//   name: 'Asia'
// }

// const user3 = {
//   name: 'Marcin'
// }

// const users = [user1, user2, user3]

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].name)
// }

// function createObject() {

// }

// const user4 = createObject()

// if (...) {

// }

// const myBook = {
//   title: 42132,
//   company: 'lego',
//   qrcode: "abba",
//   pages: [
//     {
//       id: 1, 
//       imageUrl: 'someUrl',
//       numberOfPartsRequired: [1, 2, 17]
//     }
//   ],
//   author: {
//     name: 'Johny'
//   }
// }

// const paramName = 'title'

// const someParam = myBook.title

// myBook.title = '84829'
// myBook.author.age = 25
// myBook.author = ''
// myBook[paramName] = 'abba'

// console.log(myBook.title) // 84.99%
// console.log(myBook["title"]) // 0.01%
// console.log(myBook[paramName]) // 15%

// console.log(myBook.author.name)

// const name = 'Wojciech'
// const lastName = 'Niemczyk'
// const age = 96

// const user = {
//   name, // -> name: name
//   age, // -> age: age
//   lastName,
//   // getFullName() {
//   //   return `${name} - ${lastName}, hello!`
//   // }
// }

// function getFullName(name, lastName) {
//   return `${name} - ${lastName}, hello!`
// }

// console.log(user)
// // console.log(user.getFullName())
// console.log(getFullName(user.name, user.lastName))

// const books = [1, 2, 3, 4]

// // bookShelfList.push({
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   users: ['Mariusz', 'Wojciech'],
  
//   getBooks() {
//     console.log(this.books)
//   },
  
//   addBook(bookName) {
//     this.books.push(bookName)
//   },
// }
// // )

// // bookShelf.books;
// bookShelf.getBooks()

// bookShelf.addBook('Harry Potter 1')
// bookShelf.addBook('Harry Potter 2')

// bookShelf.getBooks()

// const book = {
//   title: "Harry Potter 3",
//   author: 'J.K. Rowling',
//   genres: ['adventure', 'awesome'],
//   rating: 9.2,
//   isPublic: true,
// }

// const book2 = {
//   title: 'Harry Potter 4'
// }

// for (const key in book) {
//   if (book.hasOwnProperty(key)) {
//     console.log(key, book[key])
//   }
//   // console.log(book[key])
// }

// if (book2.hasOwnProperty('author')) {
//   console.log(book2.author)
// } else {
//   console.log(book.author)
// }

// const keys = Object.keys(book)
// const values = Object.values(book)
// const entires = Object.entries(book)

// // for (const key of keys) {
// //   console.log(key, book[key])
// // }

// console.log(keys)
// console.log(values)
// console.log(entires)

// const goods = {
//   apples: 6,
//   bread: 3,
//   cheese: 7
// }

// const valuesOfGoods = Object.values(goods);

// let total = 0;

// for (const value of valuesOfGoods) {
//   total += value;
// }

// console.log(total)

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "Sen śmiesznego człowieka",
    author: "Fiodor Dostojewski",
    rating: 7.75,
  },
];

// for (let i = 0; i < books.length; i++) {
//   const currentBook = books[i]
//   console.log(currentBook)
// }

// for (const book of books) {
//   console.log(book)
// }

// books.forEach((book) => {
//   console.log(book)
// })

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating
}

const avgRating = (totalRating / books.length).toFixed(1)
console.log(avgRating)

// Object.create()

const someObjectMyAwesome = {}