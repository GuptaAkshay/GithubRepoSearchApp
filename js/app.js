var searchApp = angular.module('GithubSearchApp', ['ngRoute','ngStorage']);

searchApp.config( function($routeProvider){
    $routeProvider
    
    .when('/search',{
        controller: "SearchController",
        templateUrl:'views/search-results.html',
        reloadOnSearch: false
    })    
    .otherwise({
        redirectTo:'/'
    });
});