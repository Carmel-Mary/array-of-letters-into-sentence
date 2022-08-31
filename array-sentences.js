//Create a function that takes an array of letters, and combines them into words in a sentence.

//The array will be formatted as so:

//[['J','L','L','M']
//,['u','i','i','a']
//,['s','v','f','n']
//,['t','e','e','']]

//SOLUTION 1
function arrAdder(arr) {
    var sentence = "";
    for(var i = 0; i < arr[0].length; i++){
      for(var j = 0; j < arr.length; j++){
        sentence+=arr[j][i];
      }
      sentence+=" ";
    }
    return sentence.trim();
  }

//SOLUTION 2
const arrAdder = arr =>  arr[0].map((_,i)=>  arr.map((_,j)=> arr[j][i]).join('')).join(' ');
