const windowWidth= window.innerWidth
const navToggle=document.getElementById('nav-toggle')
const navMenu=document.getElementById('nav-menu')
const navClose=document.getElementById('nav-close')
const navLink= document.querySelectorAll('.nav__link')
const header=document.getElementById('header')

// window.addEventListener('resize', ()=>{})


         // Mostrar/quitar menu
navToggle.addEventListener('click', ()=>{
    if(windowWidth >=1024){
        navMenu.classList.add('show-first-menu')
    }else if(windowWidth < 1024){
        navMenu.classList.add('show-second-menu')
    }
})

navClose.addEventListener('click', () => {
    if(windowWidth >=1024){
        navMenu.classList.remove('show-first-menu')
    }else if(windowWidth < 1024){
        navMenu.classList.remove('show-second-menu')
    }
})

// if(windowWidth >= 1024){

//     if(navToggle && navClose){
//         navToggle.addEventListener('click', () => {
//             navMenu.classList.add('show-first-menu')
//         })

//         navClose.addEventListener('click', () => {
//             navMenu.classList.remove('show-first-menu')
//         })
//     }

// } else if(windowWidth < 1024){

//     if(navToggle && navClose){
//         navToggle.addEventListener('click', () => {
//             navMenu.classList.add('show-second-menu')
//         })

//         navClose.addEventListener('click', () => {
//             navMenu.classList.remove('show-second-menu')
//         })
//     }
// }

const linksActions = () =>{
    navMenu.classList.remove('show-second-menu', 'show-first-menu')
}

navLink.forEach(n => n.addEventListener('click', linksActions))


        // Agregar blur al Header

const bgHeader= () =>{
    
    this.scrollY >=50 ? header.classList.add('bg-header') :header.classList.remove('bg-header')
}

window.addEventListener('scroll', bgHeader)



let swiper = new Swiper(".slider__container", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,

    breakpoints: {
        320: {
            slidesPerView:1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
        },

        768:{
            slidesPerView: 3,
            keyboard: {
                enabled: true,
                },
            
        }
    }
});

        // Scrool Up

const scrollUp= () =>{
    const scrollEl= document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollEl.classList.add('show-scroll') : scrollEl.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


        // Scroll Section Active Link

const sections= document.querySelectorAll('section[id]')

const scrollActive= ()=>{
    const scrollDown=window.scrollY
    
    sections.forEach(current => {

        const sectionHeight= current.offsetHeight
        const sectionTop= current.offsetTop - 58
        const sectionId= current.getAttribute('id')
        const sectionsClass= document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown> sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active__link')
        }else {
            sectionsClass.classList.remove('active__link')
        }
    })

}

window.addEventListener('scroll', scrollActive) 