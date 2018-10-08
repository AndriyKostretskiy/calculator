const display = document.querySelector('.display');
let result = display.value;
let memory;

document.querySelectorAll('.digits, .operators')
    .forEach(el => el.addEventListener('click', e => result += e.target.innerText));
    
document.querySelector('.equal')
        .addEventListener('click', () => (eval(result) === Infinity || eval(result) === -Infinity) ?
                                          result = 'Dividing by zero is impossible!' :
                                          result = eval(result));
        
document.querySelector('.delete-last-number')
    .addEventListener('click', () => result = result.substring(0, result.length - 1)); 
    
document.querySelector('.clear')
    .addEventListener('click', () => result = '');       
    
document.querySelector('.degree-two')
    .addEventListener('click', () => result = Math.pow(result, 2)); 
    
document.querySelector('.degree-three')
    .addEventListener('click', () => result = Math.pow(result, 3)); 
    
document.querySelector('.square')
    .addEventListener('click', () => result = Math.sqrt(result));   
    
document.querySelector('.plus-minus')
    .addEventListener('click', () => result = -result);    
    
document.querySelector('.memory-read')
    .addEventListener('click', () => result += memory); 
    
document.querySelector('.memory-save')
    .addEventListener('click', () => memory = result);
    
document.querySelector('.memory-clear')
    .addEventListener('click', () => memory = '');
    
document.querySelector('.piConstant')
    .addEventListener('click', () => result += Math.PI.toFixed(2));    
