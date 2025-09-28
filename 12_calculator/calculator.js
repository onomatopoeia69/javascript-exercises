const add = function(a,b) {
  return a + b; 
};

const subtract = function(a,b) {
	return a - b; 
};

const sum = function(num) {

    
  let add = Object.values(num).reduce((accumulator,currentValue) => {
            return accumulator + currentValue;
    },0);
    
    return +add;
  
};

const multiply = function(num) {
    
    let total = 1;
    
    for( index= 0; index < num.length; index++)
    {
        
        total *= num[index];
        
    }
    
    return total;
};

const power = function(a,b) {
	return a ** b 
};

const factorial = function(num) {
	  
    let total = 1;
    
    if(num === 0)
    {
        return total = 1;
    }
    
    for (index = 1; index <= num ; index++)
    {
        total *= index; 
    }

    return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
