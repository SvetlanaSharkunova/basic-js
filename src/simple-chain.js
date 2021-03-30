const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr: [],
  getLength() {
    return chainMaker.chainArr.length;
  },
  addLink(value) {
    if (value === undefined) {
      chainMaker.chainArr.push('( )');
    } else {
      chainMaker.chainArr.push('( ' + value + ' )');
    }    
    return chainMaker.chainArr;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || (position > this.getLength - 1) || (isNan(position))) {
      chainMaker.chainArr = [];
        throw new Error();
        } else {
          return chainMaker.chainArr.splice(position, 1);
    }    
  },
  reverseChain() {
    return chainMaker.chainArr.reverse();
  },
  finishChain() {
    let chainFinal = chainMaker.chainArr.join("~~");
    chainMaker.chainArr = [];
    return chainFinal;
  }
};

module.exports = chainMaker;
