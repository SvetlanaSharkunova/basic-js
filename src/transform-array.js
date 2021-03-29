const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr);
  if (!Array.isArray(arr)) {
    throw new Error();
  } 
  const arrNew = [];
  
  for (let i = 0; i < arr.length; i++) {
    
    switch(arr[i]) {
      case '--discard-prev':        
        if ((i !== 0) || (arr[i-2] !== '--discard-next')) {
             arrNew.pop();          
        }
      break;        
      case '--discard-next':
        if (arr[i + 1] !== undefined) {
          i+=1;
        }        
      break;
      case '--double-prev':
        if ((i == 0) || (arr[i-2] == '--discard-next')) {
          continue;                    
        } else {
          arrNew.push(arr[i - 1]); 
        }      
      break;
      case '--double-next':
        if (arr[i + 1] !== undefined) {
          arrNew.push(arr[i+1]);
        }
      break;      
      default:
        arrNew.push(arr[i]);
    } 
    
  }
  return arrNew;
};
