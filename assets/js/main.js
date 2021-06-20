/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
        toggleMenu.classList.toggle('nav-toggle')  
})

// HIDDEN

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
    
    toggleMenu.classList.remove('nav-toggle')
})

 
/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove',move)
    function move(e){
        this.querySelectorAll('.move').forEach(layer=>{
            const speed  = layer.getAttribute('data-speed')
            const x = (window.innerWidth - e.pageX*speed)/120
            const y = (window.innerHeight - e.pageY*speed)/120

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }


/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity:0, delay:.2, duration:.3, y:10})
gsap.from('.nav__item, .nav__toggle', {opacity:0, delay:.4, duration:1, y:30, stagger:0.2})

// HOME
gsap.from('.home__title', {opacity:0, delay:1.4, duration:1, y:30})
gsap.from('.home__description', {opacity:0, delay:1.6, duration:1, y:30})
gsap.from('.home__button', {opacity:0, delay:1.8, duration:1, y:30})
gsap.from('.home__img', {opacity:0, delay:1.8, duration:1, y:30})