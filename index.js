const numero  = document.querySelector('#prix');
const form  = document.querySelector('#formulaire');
const error = document.querySelector('small');

let nombreDepart = Math.floor(Math.random() * 101); 
console.log(nombreDepart)
let coups = 0; //les essais
let nombreChoisi; //pas besoin que les variables aient une valeur

function verifier(nombre) {
  let information = document.createElement('div'); //pour creer un element HTML
  if (nombre < nombreDepart) {
    information.textContent = `#${coups} (${nombre}) C'est plus`;
    information.className = 'instruction plus';
    
  } else if (nombre < nombreDepart) {
    information.textContent = `#${coups} (${nombre}) C'est plus`;
    information.className = 'instruction moins';
  } else {
    information.textContent = "#" + coups + " ( " + nombre + " ) Félicitations vous avez trouvé le juste prix !";
    information.className = "instruction fini";
    number.disabled = true; //pour desactiver le form quand on trouve le numero 
  }
    document.querySelector('#instructions').prepend(information);
}

numero.addEventListener('keyup', ()=> {
  if (isNaN(numero.value)) {
      error.classList.remove("d-none"); 
  } else {
     error.classList.add("d-none"); 
  }
 });

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  if (isNaN(numero.value) || numero.value == '') {
    numero.classList.add('nonNombre')
  } else {
    coups ++;
    numero.classList.add('isNombre')
    nombreChoisi = numero.value; 
    numero.value =''; //pour reinicier le formulaire 
    verifier(nombreChoisi); //pour afficher les messages lors de chaque essai
  }
})