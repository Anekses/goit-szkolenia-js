// const value = 15;
// const isMonday = false;
// let result = 0;

// if (value >= 10 && isMonday) {
//     // console.log('is good enough')
//     result = 3
// } else {
//     result = 1;
// }

// console.log(result)

// let score = 42;
// let result = ''

// if (score >= 10 && score < 20) {
//     result = '2'
// } else if (score >= 20 && score < 30) {
//     result = '3'
// } else if (score >= 30 && score < 40) {
//     if (score > 35) {
//         result = '4.5'
//     } else {
//         result = '4'
//     }
// } else if (score >= 40) {
//     result = '5'
// } else {
//     result = '1'
// }

// if (score > 10 && 1 < 5 || (true || !false)) {
//     result++;
// }

// if (true) {
//     result += 5;
// }

// if (false) {

// } else {
//     result++;
// }

// console.log(result)

// let type;
// const age = 20;

// if (age >= 18) {
//     // var a = 5;
//     type = "adult"
// } else {
//     type = "child"
// }

// // console.log(a)

// const isMonday = true
// const isBoliwia = false
// const someValue = undefined;
// const defaultValue = 2;

// const isAdult = age >= 18 && isMonday || isBoliwia
// // const someProp = isMonday && 5;

// const resultValue = someValue || defaultValue

// const newType = isAdult ? "adult" : "child"

// const newType = isAdult ? "adult" : isMonday ? "still adult" : "child"

// let score = 42;
// let result = ''

// if (score >= 10 && score < 20) {
//     result = '2'
// } else if (score >= 20 && score < 30) {
//     result = '3'
// } else if (score >= 30 && score < 40) {
//     if (score > 35) {
//         result = '4.5'
//     } else {
//         result = '4'
//     }
// } else if (score >= 40) {
//     result = '5'
// } else {
//     result = '1'
// }

// let cost;
// const subscriptionType = 'abba';

// switch(subscriptionType) {
//     case "free":
//         cost = 0;
//         break;
//     case "pro":
//         cost = 100;
//         break;
//     case "premium":
//         cost = 500;
//         break;
//     default:
//         cost = 999
// }

// console.log(cost)


// const outerValue = 2;
// let globalScope;

// if (true) {
//     let blockScopeA = 4;

//     if (true) {
//         const blockScopeB = 3;
//         globalScope = 6;
//         console.log(blockScopeA)
//         // console.log({innerValue, outerValue, moreInnerValue})
//     }

//     console.log(blockScopeA)
//     // console.log({innerValue, outerValue, moreInnerValue})
// }

// if (true) {
//     // let innerValue = 14;
//     // const blockScopeC = "abba"
//     // console.log(blockScopeA)

//     const someProp = 5;
//     console.log(someProp)

//     const otherProp = 11;
//     console.log(someProp, otherProp)
// }

// // console.log(blockScopeA)
// // console.log({innerValue, outerValue, moreInnerValue})

// let lap = 5;
// let doWhileLap = 5;
// let shouldKeepGoing = false
// let shouldKeepGoingDoWhile = false

// while (shouldKeepGoing) {
//     console.log(lap)
    
//     if (lap === 3) {
//         shouldKeepGoing = false;
//     }

//     lap--
// }

// do {
//     console.log(doWhileLap)
    
//     if (doWhileLap === 3) {
//         shouldKeepGoingDoWhile = false;
//     }

//     doWhileLap--
// } while (shouldKeepGoingDoWhile)

// for (let lap = 5; lap !== 3; lap--) {
//     console.log(lap)
// }

const zoomParticipantNumber = 33;

for (let i = 1; i < 33; i += 2) {
    const a = 5;

    if (i === 13) {
        const b = 4;
        console.log('UPS')
        break; // i = 33
    }

    if (i % 3 !== 0) {
        continue;
    }

    console.log(`Hello only for odd numbers: ${i}`)
}