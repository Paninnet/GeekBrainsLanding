window.addEventListener("DOMContentLoaded", () =>{
  // Menu
  let menu = document.querySelector(".menu")

  let body = document.querySelector("body").addEventListener("click",() =>{
    document.querySelectorAll(".activee").forEach(item => {
      if (item.classList.contains("active")) {
        item.classList.remove('activee')
      }
      
    })
  })
  let norm_burger = document.querySelector(".norm_burger").addEventListener("click", (e) =>{
    menu.classList.toggle("activee")
    e.target.classList.toggle("activee")
    
  })

  let menu_x = document.querySelector('.menu_cross').addEventListener('click', () => {
    document.querySelectorAll('.activee').forEach(item => {
      item.classList.remove('activee')
    })

  })

})
// function clik() {
  

//   a.classList.toggle("activee")
//   b.classList.toggle("activee")
//   c.classList.toggle("activee")
//   // z.classList.toggle("lock")

// }
// function clike() {
//     let d= document.querySelector('.search_button')
//     d.classList.toggle("find")
// }

// function deletee() {
//   let a =document.querySelector('.products_cart_item')
//   a.remove(a);

// }
// function delet() {
//   let a =document.querySelector('.prod_2')
//   a.remove(a);
// }

// function delete_all() {
//   let a =document.querySelector('.products_cart')
//   a.remove(a);
// }

// function filterr() {
//   let a= document.querySelector('.main_filter')
//   a.classList.toggle("activee")
// }
