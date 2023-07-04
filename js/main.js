
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item){
    item.addEventListener('click',function(e){
      const currentItem = document.querySelector('.active');
      currentItem.classList.remove('active');
      e.target.classList.add('active');
    })
})

const button = document.querySelector(".button")
const nav =document.querySelector(".nav")

button.addEventListener("click",()=>{
  nav.classList.toggle("activo")
})


  


// Funcionalidad "Selector"
let menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach(function (item){
     item.addEventListener("click", function(e){
         const currentItem = document.querySelector(".active");
         currentItem.classList.remove("active");
        e.target.classList.add("active");
});
});