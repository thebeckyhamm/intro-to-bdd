describe("Bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

  describe("squared", function() {

    it("takes a number and squares it", function() {
      expect(bar.squared(2)).eq(4);
    });

  });

  describe("cubed", function() {

    it("takes a number and cubes it", function() {
      expect(bar.cubed(3)).eq(27);
    });

  });

  describe("exponentOf", function() {

    it("finds the exponent of a number", function() {
      var exponentOf3 = bar.exponentOf(3);
      expect( exponentOf3(3) ).eq(27);
    });

  });

  describe("reverseString", function() {

    it("takes a string and reverses it", function() {

      var string = "reverse reverse";
      expect(bar.reverseString(string)).eq("esrever esrever");

    });

  });

  describe("cipher", function() {

    it("ciphers a string by finding characters 100 unicode values higher than its assigned value", function() {

      var string = "cipher me";
      expect(bar.cipher(string)).eq("ÇÍÔÌÉÖÑÉ");

    });

  });

  describe("decipher", function() {

    it("deciphers a string previously ciphered by moving value back 100 unicode characters", function() {

      var string = "ÇÍÔÌÉÖÑÉ";
      expect(bar.decipher(string)).eq("cipher me");

    });

  });

  describe("rot13", function() {

    it("encrypts a string by moving characters over by 13", function() {

      var string = "i am a secret";
      expect(bar.rot13(string)).eq("v nz n frperg");

    });

  });

});
