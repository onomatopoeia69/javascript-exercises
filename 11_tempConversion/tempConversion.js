const convertToCelsius = function(fahr) {


    return +((fahr - 32 )*(5/9)).toFixed(1);
   

};

const convertToFahrenheit = function(cels) {


  
  return +(cels * (9/5) + 32).toFixed(1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
