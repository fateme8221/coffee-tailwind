const toggleThemeDescktop =document.querySelector('#toggle-theme')
const toggleThemeMobile =document.querySelector('#toggle-theme-mobile')
const menuBtnopen =document.querySelector('.nav-btn-open')
const menuBtnClose =document.querySelector('.nav-btn-close')
const nav =document.querySelector('.nav-mobile')
const overlay = document.querySelector('.overlay')
const toggleSubmenuMobBtn=document.querySelector('.toggle-submenu-mob')
const submenuMob =document.querySelector('.submenu-mob')
const cartBtnClose =document.querySelector('.cart-btn-close')
const cartBtnopen =document.querySelector('.cart-open-btn')
const cartMobile =document.querySelector('.cart-mobile')
let theme ='';
/* varible for overlay close */
let menuOrCart='';
let menuOrCartClass='';

overlay.addEventListener('click',()=>{close(menuOrCart,menuOrCartClass)})

function changeTheme(){
    theme = localStorage.getItem('theme')
    if(theme==='dark'){
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme','light')
    }
    else{
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme','dark')
    }

}
function close(nameElem,keyclass){
      nameElem.classList.remove(`${keyclass}-0`)
      nameElem.classList.add(`-${keyclass}-64`)
      overlay.classList.remove('overlay--show')
}

function open(elem,keyclass){
    elem.classList.add(`${keyclass}-0`)
    elem.classList.remove(`-${keyclass}-64`)
    overlay.classList.add('overlay--show')
    menuOrCart = elem
    menuOrCartClass = keyclass
    console.log(menuOrCartClass);
}

menuBtnopen.addEventListener('click',()=>{
    open(nav,'right')

})
cartBtnopen.addEventListener('click',()=>{
    open(cartMobile,'left')
})
menuBtnClose.addEventListener('click',()=>{
    close(nav,'right');
})
cartBtnClose.addEventListener('click',('click',()=>{
    close(cartMobile,'left');
}))

toggleSubmenuMobBtn.addEventListener('click',()=>{
    submenuMob.classList.toggle('submenu-mob--open')
})
toggleThemeDescktop.addEventListener('click',changeTheme)
toggleThemeMobile.addEventListener('click',changeTheme)

