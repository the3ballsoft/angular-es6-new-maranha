
class T3bsNavCtrl {
  constructor($location, $rootScope){
    this.$location = $location;
    this.$rootScope = $rootScope;
    this.options = [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        url: '/'
      },
      {
        title: 'Usuarios',
        icon: 'account_circle',
        url: '/users'
      },
      {
        title: 'Salir',
        icon: 'exit_to_app',
        url: '/logout'
      }
    ];
  }
}

angular.module('app.home').component('t3bsNav', {
  bindings: {},
  controller: T3bsNavCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'app/layouts/nav.html' 
});
/*
    <md-sidenav md-is-locked-open="$mdMedia('gt-md')" md-component-id="left"
class="md-whiteframe-z2" layout="column">
      <md-toolbar class="md-tall md-hue-2">
        <span flex></span>
        <div layout="column" class="md-toolbar-tools-bottom inset">
          <user-avatar></user-avatar>
          <span></span>
          <div>Firstname Lastname</div>
          <div>email@domainname.com</div>
        </div>
      </md-toolbar>
      <md-list>
        <md-item ng-repeat="item in menu">
          <a>
            <md-item-content md-ink-ripple layout="row" layout-align="start center">
              <div class="inset">
                <ng-md-icon icon="{{item.icon}}"></ng-md-icon>
              </div>
              <div class="inset">{{item.title}}
              </div>
            </md-item-content>
          </a>
        </md-item>
        <md-divider></md-divider>
        <md-subheader>Management</md-subheader>
        <md-item ng-repeat="item in admin">
          <a>
            <md-item-content md-ink-ripple layout="row" layout-align="start center">
              <div class="inset">
                <ng-md-icon icon="{{item.icon}}"></ng-md-icon>
              </div>
              <div class="inset">{{item.title}}
              </div>
            </md-item-content>
          </a>
      </md-item>
      </md-list>
    </md-sidenav>

*/
