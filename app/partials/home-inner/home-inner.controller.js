angular.module('newsApp')
    .controller('HomeInnerController', HomeInnerController);

HomeInnerController.$inject = ['$scope', '$state', 'AppService', 'HomeInnerService', '$rootScope'];

function HomeInnerController($scope, $state, AppService, HomeInnerService, $rootScope) {
   //set page title
   AppService.setPageTitle('News | Home');
   //method declarations
   $scope.init = init;
   $scope.getNews = getNews;
   $scope.filterNews = filterNews;
   //method definition
   function getNews() {
       $rootScope.loadingImage = true;
       HomeInnerService.getNews()
           .then(function (response) {
              $scope.newsList = response.data.articles;
              $rootScope.loadingImage = false;
           })
           .catch(function (error) {
              $rootScope.loadingImage = false;
              console.log('Some error has occurred', error);
           });
   }
   function filterNews(e) {
       e.preventDefault();
       $rootScope.loadingImage = true;
       HomeInnerService.filterNewsByKeyword($scope.searchText)
           .then(function (response) {
               if(response.data.totalResults === 0){
                   $scope.noResult = true;
               } else {
                   $scope.noResult = false;
                   $scope.newsList = response.data.articles;
               }
               $rootScope.loadingImage = false;
           })
           .catch(function (error) {
               $rootScope.loadingImage = false;
               console.log('Some error has occurred', error);
           });
   }
   function init() {
       $scope.searchText = '';
        $scope.getNews();
   }
    $scope.init();
}