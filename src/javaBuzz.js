function Javabuzz(){
}

Javabuzz.prototype.isDivisibleByThree = function(number) {
  if (number % 3 === 0) {
    return true;
  }
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  if (number % 5 === 0) {
    return true;
  }
};

Javabuzz.prototype.isDivisibleBy = function(number) {
  if (this.isDivisibleByThree(number) && this.isDivisibleByFive(number)) {
    return "javabuzz";
  } else if (this.isDivisibleByFive(number)) {
    return "buzz";
  } else if (this.isDivisibleByThree(number)) {
    return "java"
  }

};
