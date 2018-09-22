angular.module('newsApp')
    .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'AppService','$state'];

function HomeController($scope, AppService, $state, AuthService, $timeout) {
   //methods
}