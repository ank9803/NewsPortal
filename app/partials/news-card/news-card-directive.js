angular.module("newsApp")
    .directive('newsCard', newsCard);

newsCard.$inject = ['$state'];

function newsCard($state) {
    return {
        restrict: 'E',
        templateUrl: './partials/news-card/news-card.html',
        scope:{
            news: '='
        },
        controller: function ($scope) {
            $scope.showNewsdetail = function (news) {
                $state.go('home.newsDetail', {newsData : news});
            }
        }
    };
}