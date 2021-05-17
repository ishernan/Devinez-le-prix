const prix  = document.querySelector('#prix');
const form  = document.querySelector('#formulaire');
const error = document.querySelector('small');

let nombreDepart = Math.floor((Math.random() * 99) + 1); 

prix.addEventListener('keyup', ()=> {
  if (isNaN(prix.value)) {
      error.classList.remove("d-none"); 
  } else {
     error.classList.add("d-none"); 
  }
 });

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  if (isNaN(prix.value) || prix.value == '') {
    prix.classList.add('nonNombre')
  } else {
    prix.classList.add('isNombre')
  }
})