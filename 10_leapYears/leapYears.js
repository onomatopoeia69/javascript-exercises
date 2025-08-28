const leapYears = function(year) {

    if (isWhole(year / 4))
    {   
        if (isWhole(year / 100))
        {
            if (isWhole(year / 400))
            {
                return true; 
            }else{
                
                return false;
            }
            
        }else{
            
            return true;
        }
   
    } else{
        
        return false;
    }

};


function isWhole(number)
{
        
    if (typeof(number) == 'number' && Number.isInteger(number))
    {
        return true;
    }else{
        return false;
    }
    
}

// Do not edit below this line
module.exports = leapYears;
