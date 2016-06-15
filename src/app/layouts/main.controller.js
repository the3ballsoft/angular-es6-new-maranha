
class MainCtrl {
  constructor($scope, $rootScope, AUTH_EVENTS, Session) {
    this.HomeService = HomeService;
    this.AUTH_EVENTS = AUTH_EVENTS;
    this.$rootScope = $rootScope;
    this.user = Session.getUser();
  }

  logout() {
    this.$rootScope.$broadcast(this.AUTH_EVENTS.logout);
  }
}

angular.module('app.home').controller('MainCtrl', MainCtrl);
