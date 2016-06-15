
angular.module('app', 
               [
                 'ui.router',
                 'templates',
                 'ngMaterial',
                 'ngMdIcons',
                 'ngAnimate',
                 'app.auth',
                 'app.home',
                 'app.users'
               ]);

angular.module('app.auth', [])
angular.module('app.home', [])
angular.module('app.users', [])
