angular.module('newsApp')
    .factory('HomeInnerService', HomeInnerService);

HomeInnerService.$inject = ['$http', 'ApiConstant'];

function HomeInnerService($http, ApiConstant) {
    var homeInnerService = {};
    //function declarations
    homeInnerService.getNews = getNews;
    homeInnerService.filterNewsByKeyword = filterNewsByKeyword;

    //function definition
    function getNews(countryCode, category) {
        countryCode = countryCode ? countryCode : ApiConstant.API_URL.countryCode;
        category = category ? category : 'business';
        return $http({
            method: 'GET',
            url: ApiConstant.API_URL.topHeadlines + '?country=' + countryCode +
                '&category=' + category + '&apiKey=' + ApiConstant.API_URL.key
        });
    }
    function filterNewsByKeyword(keyword) {
        return $http({
            method: 'GET',
            url: ApiConstant.API_URL.everything + '?q=' + keyword +
                '&apiKey=' + ApiConstant.API_URL.key
        });
    }
    return homeInnerService;
}