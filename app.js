
// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  if(toggle && nav ){
    toggle.addEventListener('click' , ()=>{
      nav.classList.toggle('show-menu');
    })
  }
}

showMenu('nav-toggle','nav-menu');




// remove menu mobile

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}

navLink.forEach( 
  n => n.addEventListener('click',linkAction)
)


// Scroll Section active links


const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach( current => {
    const sectionHeight = current.offsetHeight;
    const sectionYop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    }else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  })
}

window.addEventListener('scroll',scrollActive);

//  change background color
function scrollHeader() {
  const nav = document.getElementById('header');

  if(this.scrollY >= 100) 
    nav.classList.add('scroll-header');
  else
    nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);



// show scrollTop
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  if(this.scrollY >= 560){
    scrollTop.classList.add('show-scroll');
  }else{
    scrollTop.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollTop);



//  dark theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}

const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';
}

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedTheme === 'bx-toggle-right' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener( 'click',() => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme',getCurrentTheme());
  localStorage.setItem('selected-icon',getCurrentIcon());
})



// Scroll reveal animation

const sr = ScrollReveal ({
  distance: '30px',
  duration: 1500,
  reset: true
});

sr.reveal(`.home__data , .home__img , .decoration__data , .accessory__content, .footer__content`,{
  origin: 'top',
  interval: 100
})

sr.reveal(`.share__img , .send__content`,{
  origin: 'left'
})

sr.reveal(`.share__data , .send__img`,{
  origin: 'right'
})