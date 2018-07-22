window.app = window.angular.module('notas', ['ngRoute'])

window.app.config(function($routeProvider, $locationProvider){
    
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'homeController'
    })
    .when('/nota',{
        templateUrl: 'nota.html',
        controller: 'notaController'
    })
    .when('/nota/:id',{
        templateUrl: 'nota.html',
        controller: 'notaController'
    })
    .otherwise('/')
})
