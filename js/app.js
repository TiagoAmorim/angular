(function(angular) {

	var portfolioApp = angular.module('portfolioApp',
	[
		'ngRoute',
		'portfolioController', // ToDo
	]);

	portfolioApp.config(function($routeProvider){
		$routeProvider.
			when('/',{
				templateUrl : 'portfolio-index.html' , 
				controller : 'portfolioController'
			}).
			otherwise({ redirectTo : '/'});
	});

})(angular);