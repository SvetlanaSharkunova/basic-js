const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds  = Math.floor((turns * 3600) / turnsSpeed);
  let Hanoi = {};
  Hanoi.turns  = turns;
  Hanoi.seconds = seconds;
  return Hanoi;
};
