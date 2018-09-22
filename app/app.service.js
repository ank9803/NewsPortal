angular.module('newsApp')
    .service('AppService', AppService);

AppService.$inject = ['$rootScope'];

function AppService($rootScope) {
    this.appData = {};

    this.setPageTitle = function (title) {
        this.appData.pageTitle = title;
        $rootScope.$broadcast('title:updated', this.appData);
    };
    this.getPageTitle = function () {
        return this.appData.pageTitle;
    };
}