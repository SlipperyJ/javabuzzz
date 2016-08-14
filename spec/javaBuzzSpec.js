describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('when a number is divisble by', function() {
    it('3, prints "Java"', function() {
      expect(javabuzz.isDivisibleBy(3)).toEqual("java")
    });

    it('5, prints "buzz"', function() {
      expect(javabuzz.isDivisibleBy(5)).toEqual("buzz")
    });

    it('15, prints "javabuzz"', function() {
      expect(javabuzz.isDivisibleBy(15)).toEqual("javabuzz")
    });
  });
});
