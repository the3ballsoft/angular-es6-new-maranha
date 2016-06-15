
class HomeService {

  constructor($http, CONFIG){
    this.$http = $http;
    this.URL = CONFIG.API_URL+'home/';
  }

  /*
   * fetch dashboard data 
   */
  get(callback) {
      return this.$http.get(this.URL)
                 .then(callback, this.handleError);
  };

  /*
   * print error
   */
  handleError(res) {
    console.warn(res);
  }

}

angular.module('app.auth').service('HomeService', HomeService); 
