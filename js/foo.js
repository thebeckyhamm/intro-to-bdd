window.Foo = (function() {

  function Foo() {

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
    },

    greet: function(name) {
        return "Hello, " + name + "!";
    }

  };

  return Foo;

})();
