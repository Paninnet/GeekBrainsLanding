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

  // Cart
  let allProducts = document.querySelectorAll('.products_cart_item')
  let allProductsLength = document.getElementsByClassName('products_cart_item')
  document.querySelector('.circle').querySelector('p').innerHTML = allProductsLength.length
  let clearButton = document.querySelector(".clear")
  clearButton.addEventListener ('click', (e) =>{
    allProducts .forEach (item =>{
      item.remove()
    })
    document.querySelector('.circle').querySelector('p').innerHTML = allProductsLength.length
    e.target.remove()
    document.querySelector('.cost').remove()
  })

  let delete_item = document.querySelectorAll('.delete_item').forEach (item =>{
    item.addEventListener('click' , () =>{
      item.parentNode.parentNode.remove()
      document.querySelector('.circle').querySelector('p').innerHTML = allProductsLength.length
      if (allProductsLength.length == 0){
        document.querySelector('.cost').remove()
        clearButton.remove()
      }
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
