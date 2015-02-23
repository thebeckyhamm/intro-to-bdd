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

});
