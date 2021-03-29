const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) { 
  
  if (!Array.isArray(members)) {
    return false;
  } 
  const secret = members.filter(member => (typeof member === "string"));
  console.log(secret);
  const secretWord = secret
  .map(function(member) {
    return member.trim().toUpperCase()[0];
  })
  .sort()
  .join('');  
  return secretWord;
  
};
