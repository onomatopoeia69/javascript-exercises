const fibonacci = function(num) {

       
    let collect = 0;
    let store = [];
    
    if(num < 0 ){
        
        return "OOPS";
    }
    
    for (index = 0; index <= +num; index++)
    {
          
         if(store.length > 1)
         {
           collect = store[store.length-1] + store[store.length-2];
           store.push(collect);
         }else{
             collect += index;
            store.push(collect); 
         }
          
    }
    
    return  store[store.length-1];
    


};

// Do not edit below this line
module.exports = fibonacci;
