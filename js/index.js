// const first = document.querySelector('.first')
// const second = document.querySelector('.second')

// first.addEventListener("click", event => {
//   console.log(event.currentTarget)
// })

// second.addEventListener('click', event => {
//   console.log(event.target)
// })

document.addEventListener(
  "scroll", 
  _.throttle(() => {
    console.log("scrolled - throttle")
  }, 300)
)

document.addEventListener(
  "scroll",
  _.debounce(
    () => {
      console.log("scrolled - debounce")
    }, 
    300,
    {
      leading: true,
      trailing: true,
    }
  )
)