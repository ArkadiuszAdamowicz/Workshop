const btn = document.querySelector('.burger-btn')
const menu = document.querySelector('.nav__menu')
const link = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')
const navColors = document.querySelector('.nav__desktop')
const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')


const showCookie = () => {
    const cookieEaten = localStorage.getItem('cookie')
    
    if (cookieEaten) {
        cookieBox.classList.add('hide-cookies')
    }
}

const handleCookieBox = () => {
    localStorage.setItem('cookie', 'true')
    cookieBox.classList.add('hide-cookies')
} 

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()

const moveMenu = () => {
	menu.classList.toggle('menu-move')
}

btn.addEventListener('click', moveMenu)

link.forEach(el => {
	el.addEventListener('click', moveMenu)
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

