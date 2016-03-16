var page1Controller = ['$scope', 'itemService', function ($scope, item) {

  $scope.items = item.items();

  $scope.item = {

  };

  var fn = $scope.fn = {
    init: function () {
      fn.clear();
    },
    clear: function() {
      $scope.item = {
        name: '',
        time: 0.5,
        type: '',
        yield: 1,
        materials: [],
        physical: true,
        handmade: true,
        icon: ''
      };
    },
    addMaterial: function (item) {
      for (var i = 0 ; i < $scope.item.materials.length; i++) {
        if ($scope.item.materials[i].name === item.name)
          return;
      }
      var obj = angular.copy(item);
      obj.amount = 1;
      $scope.item.materials.push(obj);
    },
    removeMaterial: function (item) {
      for (var i = 0 ; i < $scope.item.materials.length; i++) {
        if ($scope.item.materials[i].name === item.name) {
          $scope.item.materials.splice(i, 1);
        }
      }
    },
    addItem: function () {
      $scope.items.push(angular.copy($scope.item));
      fn.clear();
    },
    valid: function () {
      if ($scope.item.name.length === 0) return false;
      if ($scope.item.type.length === 0) return false;
      if ($scope.item.icon.length === 0) return false;
      return true;
    },
    download: function () {
      return "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify($scope.items));
    }
  };

  fn.init();

}];