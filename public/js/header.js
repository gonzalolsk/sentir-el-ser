const submenuFormaciones = document.querySelector(".submenu-formaciones");
const subUlFormaciones = document.querySelector(".sub-ul-formaciones")

const submenuAbout = document.querySelector(".submenu-about");
const subUlAbout = document.querySelector(".sub-ul-about")




submenuFormaciones.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('pase por aca');
    subUlFormaciones.classList.toggle('toggle');
})



submenuAbout.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('pase por aca');
    subUlAbout.classList.toggle('toggle');
})

