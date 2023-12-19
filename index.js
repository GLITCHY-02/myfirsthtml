let boton =  document.getElementById('boton');
let inPut = document.getElementById('input');
let label = document.getElementById('texto')
let isPress = false
boton.addEventListener('click', (e)=>{
  e.preventDefault();
  if(!isPress){
    label.innerHTML = label.innerHTML + " " + inPut.value
    isPress = true
  }
})
