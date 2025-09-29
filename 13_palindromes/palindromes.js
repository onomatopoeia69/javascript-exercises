const palindromes = function (string) {
    let str1 =  string.toLowerCase().replace(/[^a-zA-Z0-9]/g,"");
    let str2 = string.toLowerCase().replace(/[^a-zA-Z0-9]/g,"").split("").reverse().join("");
    
    return str1 == str2;
};

// Do not edit below this line
module.exports = palindromes;
