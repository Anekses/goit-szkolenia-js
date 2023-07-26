// function sum(first, second) {
//     const result = first + second;
//     console.log(result)
//     return result
// }

// function helloWorld() {
//     console.log('Hello World')
// }

// function doSomething(first, second, callback) {
//     //do something important
//     callback()
// }

// doSomething(1, 2, function () {
//     console.log('123')
// })


// sum(1, 2)
// sum(5, 8)
// sum(13, 22)

// const second = 5;
// const first = 7;
// sum(second, first)

// const result = sum(4, 7)
// const result = sum('abba', false)
// console.log(result)

// helloWorld()
// helloWorld()
// const response = helloWorld()
// console.log(response)

// function someAwesomeFunction(one, two, three = 5) {


// function someAwesomeFunction(one, two, three) {
//     console.log({one, two, three})

//     // if (!loginValue || !passwordValue) {
//     //     return;
//     // }


//     return one * two * three

//     console.log('NOPE')
// }

// someAwesomeFunction()
// someAwesomeFunction(1)
// someAwesomeFunction(1, 2)
// const result = someAwesomeFunction(1, 2, 3)
// console.log(result)
// someAwesomeFunction(1, 2, 3, 4)


// console.log('some first')

// function divide(first, second) {
//     console.log('function')
//     return first / second
// }

// console.log('some second')
// console.log(divide(10, 2))
// console.log('some third')


// function count(countFrom = 0, countTo = 10, step = 1) {
//     for(let i = countFrom; i <= countTo; i += step) {
//         console.log(i)
//     }
// }

// count(4, 20, 2)

// function multiply() {
//     let total = 1;
//     const someArray = [1, 2, 3]

//     // const args = Array.from(arguments)
//     const args = [...arguments]

//     console.log(arguments);
//     console.log(someArray);
//     console.log(args)

//     for (const argument of arguments) {
//         total *= argument
//     }

//     return total;
// }

// console.log(multiply())
// console.log(multiply(2, 5))
// console.log(multiply(1, 2, 3, 4, 5))

// function check(operator, ...argumentsFromMyAwesomeFunction) {
//     console.log(operator)
//     console.log(argumentsFromMyAwesomeFunction)
// }

// check('add', 2, 3, 4)
// check('remove', 7, 2)


// function checkScore(points, minimumToPass) {
//     if (points > minimumToPass) {
//         console.log('Brawo, zdałaś/eś');
//     } else if (points === minimumToPass) {
//         console.log('Zapraszam na dopytkę')
//     } else {
//         console.log('Ups poprawka')
//     }
// }

// function checkScore(points, minimumToPass) {
//     let result;
//     if (!points || !minimumToPass) {
//         return result;
//     }

//     if (points > minimumToPass) {
//         console.log('Brawo, zdałaś/eś');
//         result = 5
//         return result;
//     }

//     if (points === minimumToPass) {
//         console.log('Zapraszam na dopytkę')
//         return 'abba'
//     }

//     console.log('Ups poprawka')
// }

// checkScore()
// checkScore(70, 50)
// checkScore(50, 50)
// checkScore(30, 50)

// sum(2, 4)
// sum1(2, 4)

// function sum(first, second) {
//     return first + second
// }

// // const sum1 = function(first, second) {
// //     return first + second;
// // }

// const sum2 = (first, second) => {
//     return first + second;
// }

// sum(2, 4)
// sum1(2, 4)

// const globalValue = 10;

// console.log(globalValue);// 10

// function foo() {
//   console.log(globalValue);// 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue);// 10

//   if (i === 2) {
//     console.log(globalValue);// 10
//   }
// }

// function foo() {
//     const a = 20;
//     console.log(a);// 20
  
//     for (let i = 0; i < 5; i++) {
//       console.log(a);// 20
  
//       if (i === 2) {
//         console.log(a);// 20
//       }
//     }
// }
  
//   // ❌ Błąd! Zmienna a nie jest dostępna w zakresie globalnym
// console.log(a);
  
// for (let i = 0; i < 3; i++) {
//   // ❌ Błąd! Zmienna a nie jest dostępna w tym zakresie
//     console.log(a);
// }

// function secondAdd() {

// }

// function add(first, second) {
//     console.log('begin add')
//     console.log('end add')
// }

// function multiplyThenAdd(first, second) {
//     console.log('begin multiplyThenAdd')
       
//     add(first, second)
//     secondAdd(first, second, 'abba')
//     // ->
//     //    console.log('begin add')
//     //    console.log('end add')
//     console.log('end multiplyThenAdd')
// }

// console.log('begin stack')
// multiplyThenAdd(2, 10)
// console.log('end stack')

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo();


// function foo() {
//   bar()
// }

// function bar() {
//   foo()
// }

// foo()

// while(true) {
//   foo()
// }