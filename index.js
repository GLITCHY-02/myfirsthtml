let boton =  document.getElementById('boton');
let inPut = document.getElementById('input');
let label = document.getElementById('texto')
boton.addEventListener('click', (e)=>{
  e.preventDefault();
  label.innerHTML = label.innerHTML + " " + inPut.value
})
