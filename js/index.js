// console.log(document)

// const body = document.body
// console.log(body)

// const list = document.querySelector('.list')
// // const list = body.querySelector('.list')
// console.log(list)

// const first = list.firstElementChild
// console.log(first)

// const last = list.lastElementChild
// console.log(last)

// const children = list.children
// console.log(children[3])

// const items = document.querySelectorAll('.item')
// console.log(items)

// const image = document.querySelector('.image')
// console.log(image)
// console.log(image.alt)
// image.src = 'https://picsum.photos/id/13/640/480'

// const text = document.querySelector('.hello')
// console.log(text)
// console.log(text.innerHTML)
// console.log(text.textContent)

// text.textContent = '<h1>Ala ma kota, a kot ma Alę</h1>'
// // text.innerHTML = '<h1>Ala ma kota, a kot ma Alę</h1>'

// const container = document.querySelector('.container')
// console.log(container)
// console.log(container.innerHTML)

// const link = document.querySelector('.link')

// console.log(link.classList)

// const image = document.querySelector('.image')

// console.log(image.attributes)

// const head = document.createElement("h3")
// head.textContent = 'Hello from Torun'

// const hello = document.querySelector('.hello')
// // hello.append(head)
// // hello.prepend(head)
// hello.after(head)

// head.remove()
// hello.remove()

const head = '<h3>Hello from Torun!</h3>'

const hello = document.querySelector('.hello')
hello.insertAdjacentHTML('beforeend', head)

