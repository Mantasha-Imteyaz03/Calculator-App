let btns = document.querySelector('.btns')
let btnArray = ['C','DE','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];

btnArray.map((btn)=>{
 const button = document.createElement('button')
 button.innerHTML = btn
  if(btn === '0'){
  button.classList.add('zero')
 }
 btns.appendChild(button)

})