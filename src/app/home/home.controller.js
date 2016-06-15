

class HomeCtrl{
  constructor(HomeService) {
    this.HomeService = HomeService;
  }
}

angular.module('app.home').controller('HomeCtrl', HomeCtrl);
