const sumAll = function(start, end) {

   let arr = [];
   
      let NewStart = start < end ? start : end;
      let NewEnd = end > start ? end : start;
      
      
     if (Number.isInteger(NewStart) && Number.isInteger(NewEnd) && NewStart > 0 && NewEnd > 0)
    {

    for (let index = NewStart; index <= NewEnd; index++) {
        arr.push(index);  
    }
    
    }else{
        
        return "ERROR";
        
    }

    return arr.reduce((accu, curr) => accu + curr , 0);

};

// Do not edit below this line
module.exports = sumAll;
