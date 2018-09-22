angular.module("newsApp")
    .constant('ApiConstant', {
        API_URL: {
            url: 'https://newsapi.org/v2/top-headlines',
            key: 'c1601423c47044e29a23813a0a18484a',
            countryCode: 'gb'
        }
    });