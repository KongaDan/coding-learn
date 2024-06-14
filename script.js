let icon = document.querySelector('.toggle-btn')
let dropdown = document.querySelector('.dropdown-menu')
icon.addEventListener('click',function(){
    dropdown.classList.toggle('none')
})

let cours = document.querySelector('.cours')
let dropdown_cours = document.querySelector('.dropdown-cours')

cours.addEventListener('click',function () {
    dropdown_cours.classList.toggle('none')
})

let cours_down =document.querySelector('#cours-down')
let link_drop = document.querySelector('.link-drop')
cours_down.addEventListener('click',function(){
    link_drop.classList.toggle('none')
})

// JavaScript pour ajouter une classe sticky à l'en-tête après avoir défilé de 20px
window.addEventListener('scroll', function() {
    let check_dropdown_cours = !dropdown_cours.classList.contains('none')
    let check_dropdown_menu = !dropdown.classList.contains('none')
  
    if (window.scrollY > 90 && check_dropdown_cours ) { 
      dropdown_cours.classList.add('none')
    }
    if (window.scrollY > 90 && check_dropdown_menu) { // Vérifie si le défilement est supérieur à 20px
        dropdown.classList.add('none')
      }
  });
  