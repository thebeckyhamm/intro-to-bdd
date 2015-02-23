window.Foo = (function() {

  function Foo() {
    // this.greet = function(name) {
    //   return "Hello, " + name + "!";
    // }
  }

  Foo.prototype = {

    plusOne: function(n) {
        return n + 1;
    },

    sortArray: function(arr) {
        return _.sortBy(arr);
    },

    hasValue: function(arr, value) {
        return _.contains(arr, value);
    }

  };

  return Foo;

})();

Foo.greet = function(name) {
  return "Hello, " + name + "!";
};
