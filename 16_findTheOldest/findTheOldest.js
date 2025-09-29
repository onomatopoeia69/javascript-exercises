const findTheOldest = function(people) {

   
       let oldList = Object.values(people).map((values) => {
            return  [
                    {
                        name: values.name,
                        age: (values.yearOfDeath ?? new Date().getFullYear()) - values.yearOfBirth , 
                    }
                ]
        }).flat().filter((values) => values.age > 0).sort((a,b) => b.age -a.age);
           
       
        return oldList[0];

};

// Do not edit below this line
module.exports = findTheOldest;
