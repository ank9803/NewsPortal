angular.module('newsApp')
    .controller('NewsDetailController', NewsDetailController);

NewsDetailController.$inject = ['$scope', '$state', 'AppService'];

function NewsDetailController($scope, $state, AppService) {
    //set page title
    AppService.setPageTitle('News | News Detail');
    $scope.newsData = $state.params.newsData;

}