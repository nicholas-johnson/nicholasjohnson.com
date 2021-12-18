angular.module('exercise', [])
  .directive('exercise', function() {
    var directive = {
      scope:true,
      restrict:'C'
    }
    return directive;
  });
