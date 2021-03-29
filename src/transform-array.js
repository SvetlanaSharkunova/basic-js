const CustomError = require("../extensions/custom-error");

module.exports = function transform(/*arr*/) {
  throw new CustomError('Not implemented');
  /*
  if (!Array.isArray(arr)) {
    return false;
  } 
  let x = "";
  let indexX = 0;
  const arrNew = arr.slice();
  
  for (let i = 0; i < arrNew.length; i++) {
    if (typeof arrNew[i] === "string") {
      x = arrNew[i];
      indexX = i;
    }
  }

  switch(x) {
  case '--discard-next':
      arrNew.splice(indexX,2);
    break;
  case '--discard-prev': 
      arrNew.splice(indexX - 1 ,2);
    break;
  case '--double-next':
      arrNew.splice(indexX, 1, arrNew[indexX + 1]);
    break;
  case '--double-prev':
      arrNew.splice(indexX, 1, arrNew[indexX - 1]);
    break;
  }
    console.log(arr);  
   return arrNew; 
*/

};
