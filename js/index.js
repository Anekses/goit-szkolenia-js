// const abba = 'Hello'

// // console.log(localStorage.getItem('color'))
// // console.log(localStorage.setItem('color', 'blue'))
// // console.log(localStorage.getItem('color'))

// // sessionStorage.setItem('color', 'red')
// // sessionStorage.getItem('color')

// const user = {
//     color: 'green',
//     tea: true,
//     numbers: [1, 2, 3, 5]
// }

// try {
//     localStorage.setItem("user", JSON.stringify(user))
//     JSON.parse(localStorage.getItem('user'))
// } catch (error) {
//     console.log({ error })
// }

// localStorage.setItem('color', 'blue')
// console.log(localStorage.getItem('color'))

// // localStorage.removeItem('color')
// // console.log(localStorage.getItem('color'))

// localStorage.clear()

// import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form')
const lsKey = 'messageInput';

form.elements.message.value = localStorage.getItem(lsKey) ?? ""

form.addEventListener('input', event => {
    localStorage.setItem(lsKey, event.target.value)
})

form.addEventListener('submit', event => {
    event.preventDefault()
    localStorage.removeItem(lsKey)
    // zamiast usuwac z LS, usun z lsKey, ale dodaj do tablicy
    form.reset()
})