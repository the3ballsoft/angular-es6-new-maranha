
class T3bsHeaderCtrl {
  constructor($location, $rootScope){
    this.$location = $location;
    this.$rootScope = $rootScope;
  }
}

angular.module('app.home').component('t3bsHeader', {
  bindings: {},
  controller: T3bsHeaderCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'app/layouts/header.html' 
});

