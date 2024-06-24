
document.addEventListener("DOMContentLoaded", function(){

const menucito=document.querySelector(".menucito")
const menu=document.querySelector(".menu")
const enlaces=document.querySelectorAll("a")

menucito.addEventListener("click",()=>{

menu.classList.toggle("mostrar_menu")

})


enlaces.forEach((enlace)=>{
enlace.addEventListener("click",()=>{
    menu.classList.remove("mostrar_menu")
    
})


})









})




