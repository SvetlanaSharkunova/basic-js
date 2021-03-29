const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) { 
  
  let strRepeatTimes = options.repeatTimes;
  let strSeparator = options.separator;
  
  let addStr = options.addition;
  let addSeparator = options.additionSeparator;
  let addRepeatTimes = options.additionRepeatTimes;
  let str2 = "";
  let str2Final = ""; 
  
  if (options.hasOwnProperty('addition')) {
    if (typeof addStr !== 'string') {
      addStr = String(addStr);
    }
    if (!options.hasOwnProperty('additionRepeatTimes')) {
      addRepeatTimes = 1;
    }
    if(!options.hasOwnProperty('additionSeparator')) {
      addSeparator = "|";
    }
    str2 = (addStr + addSeparator).repeat(addRepeatTimes);    
    str2Final = str2.slice(0, addSeparator.length * (-1));          
  } 
  
  if (typeof str !== 'string') { 
    str = String(str);
  }
  if(!options.hasOwnProperty('repeatTimes')) {
    strRepeatTimes = 1;
  }
  if(!options.hasOwnProperty('separator')) {
    strSeparator = "+";
  }
  let str1 = (str + str2Final + strSeparator).repeat(strRepeatTimes);  
  let strFinal = str1.slice(0, strSeparator.length * (-1));
  
  return strFinal;
 
};
  