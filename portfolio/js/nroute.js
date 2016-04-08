app = angular.module("multiPortfolio", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "views/home.html"
		})
		.when("/film", {
			templateUrl: "views/film.html"
		})
		.when("/games", {
			templateUrl: "views/games.html"
		})
		.when("/personal", {
			templateUrl: "views/personal.html"
		})
		.when("/about", {
			templateUrl: "views/about.html"
		})
		.when("/contact", {
			templateUrl: "views/contact.html"
		})
		.otherwise({
			redirectTo: "/"
		})
})