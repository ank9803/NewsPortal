angular.module('newsApp')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                abstract: true,
                url: '',
                pagename : 'home',
                templateUrl: './partials/home/home-template.html',
                controller: 'HomeController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: [
                                './partials/home/home.controller.js',
                                './partials/home/home.style.css'
                            ]
                        });
                    }]
                }
            })
            .state('home.inner', {
                url: '/home',
                templateUrl: './partials/home-inner/home-inner.html',
                controller: 'HomeInnerController',
                pagename : 'home-inner',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: [
                                './partials/home-inner/home-inner.css',
                                './partials/home-inner/home-inner.service.js',
                                './partials/home-inner/home-inner.controller.js',
                                './partials/news-card/news-card-directive.js',
                                './partials/news-card/news-card.css'
                            ]
                        });
                    }]
                }
            })
            .state('home.newsDetail', {
                url: '/news',
                templateUrl: './partials/news-detail/news-detail.html',
                controller: 'NewsDetailController',
                pagename : 'news-detail',
                params: {
                    newsData: {}
                },
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: [
                                './partials/news-detail/news-detail.css',
                                './partials/news-detail/news-detail.controller.js'
                            ]
                        });
                    }]
                }
            });
        $locationProvider.html5Mode(true);
    });
