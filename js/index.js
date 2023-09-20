// setTimeout(() => console.log("A"), 2000)

// console.log("B")

// setTimeout(() => console.log("C"), 1500)

// console.log("D")

// console.log("A")

// setTimeout(() => console.log("B"), 0)

// console.log("C")

// setInterval (2000) -> 2000, 4000 ->
// clearInterval 5000

// for (let i = 3; i > 0; i--) {
//     const delay = i * 1000; // 3000, 2000, 1000
//     setTimeout(() => console.log(i), delay) // 3, 2, 1
// }

// setTimeout(() => {
//     console.log(3)
// }, 3000)

// setTimeout(() => {
//     console.log(2)
// }, 2000)

// setTimeout(() => {
//     console.log(1)
// }, 1000)

// const date = new Date() // aktualna data
// const date1 = new Date('2023-09-20')

// const date = new Date('2030-08-23')
// console.log(date.getMonth()) // [Monday, Tuesday, ...]

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve('Yey, it works')
//         } else {
//             reject('Not working, error')
//         }
//     }, 3000)
// })

// console.log('Promise prepared, wait for then!')

// const fullfiled = (value) => {
//     console.log('fulfilled!')
//     console.log(value)
//     // return new Promise()
// }

// const reject = (error) => {
//     console.log('error!')
//     console.log(error)
// }

// const finallyFunc = () => {
//     console.log('finally!')
// }

// promise
//     .then(fullfiled)
//     .then(() => console.log('then'))
//     .catch(reject)
//     .finally(finallyFunc)



// const promiseCalc = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5)
//     }, 1000)
// })

// promiseCalc
//     .then(value => {
//         console.log('start')
//         console.log(value)
//         return value * 2;
//     })
//     .then(value => {
//         console.log(value)
//         return value * 2;
//     })
//     .then(value => {
//         console.log(value)
//         return value * 2;
//     })
//     .then(value => {
//         console.log(value)
//     })
//     .catch(() => {})
//     .finally(() => {
//         console.log('the end')
//     })

// const fetchUserFromServer = (username) => {
//     return new Promise((resolve, reject) => {
//         console.log(`Fetching data for ${username}`)

//         setTimeout(() => {
//             const isSuccess = true;

//             if (isSuccess) {
//                 resolve('success value') -> Promise.resolve(...)
//             } else {
//                 reject('error')
//             }
//         }, 2000)
//     })
// }

// const onFetchSuccess = value => {
//     console.log(value);
// }

// const onFetchError = error => {
//     console.log(error)
// }

// fetchUserFromServer('Piotr')
//     .then(onFetchSuccess)
//     .then(() => console.log('i am here'))
//     .catch(onFetchError)
//     .finally(() => console.log('finally'))

// const makePromise = (text, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(text), delay)
//     })
// }

// const promiseA = makePromise('promiseA', 3000)
// const promiseB = makePromise('promiseB', 1000)

// promiseA.then((value) => console.log(value))
// promiseB.then((value) => console.log(value))

// console.log('----------------------')

// Promise.all([promiseA, promiseB])
//     .then((value) => {
//         console.log(value)
//     })

// Promise.race([promiseA, promiseB])
//     .then((value) => {
//         console.log(value)
//     })

new Promise(resolve => resolve('its good'))
    .then((value) => console.log(value))

Promise.resolve('success value')
    .then((value) => console.log(value))


// index.js
// index.css

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import './index.css';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };
  

flatpickr('#datetime-picker', options)