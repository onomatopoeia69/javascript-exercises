const repeatString = function(word,count) {


     let arr = [];
    

      if( count < 0 )
    {
        
        return "ERROR";
        
    }
        
    for (let i=1; i <= count; i++)
    {
        
        arr.push(word);
    
    }
    
    return arr.join("");    
}
// Do not edit below this line
module.exports = repeatString;
