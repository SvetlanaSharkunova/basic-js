const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr: [],
  getLength() {    
    return this.chainArr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chainArr.push('( )');
    } else {
      this.chainArr.push('( ' + value + ' )');
    }    
    return this;
  },
  removeLink(position) {
    if (typeof position === "number") {
      this.chainArr = [];
        throw new Error();
        } else {
           this.chainArr.splice(position, 1);
           return this;
    }    
  },
  reverseChain() {
    this.chainArr.reverse();
    return this; 
  },
  finishChain() {
    let chainFinal = chainMaker.chainArr.join("~~");
    this.chainArr = [];
    return chainFinal;
  }
};

module.exports = chainMaker;
