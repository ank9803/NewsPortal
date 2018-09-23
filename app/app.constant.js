angular.module("newsApp")
    .constant('ApiConstant', {
        API_URL: {
            topHeadlines: 'https://newsapi.org/v2/top-headlines',
            everything: 'https://newsapi.org/v2/everything',
            key: 'c1601423c47044e29a23813a0a18484a',
            countryCode: 'gb'
        }
    });