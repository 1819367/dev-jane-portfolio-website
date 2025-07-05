const navToggle = document.querySelector('.nav__toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav__open')
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav__open')
  })
})

let button = document.querySelector('button')

button.addEventListener('click', function () {
  console.log(this)
})

button.addEventListener('click', e => {
  console.log(this)
  console.log(e.currentTarget)
})


