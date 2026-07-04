let btns = document.querySelector('.btns')
const btnArray = ['C','DE','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];

let input = document.querySelector('.calculator input')

btnArray.forEach((btn)=>{
 const button = document.createElement('button')
 button.textContent = btn
  if(btn === '0'){
  button.classList.add('zero')
 }
 btns.appendChild(button)

 button.addEventListener('click',()=>{
  input.focus()
  if(btn === 'C' || btn === 'c'){
  input.value = ''
 }else if(btn==='DE'){
  let len = input.value.length;
  let newValue = input.value.slice(0,len-1)
  input.value = newValue
  }else if(btn === '='){
   try {
    input.value =  eval(input.value)
   } 
   catch (error) {
    console.log(error);
   }
  }
 else{
input.value += btn
 }
 })
})

