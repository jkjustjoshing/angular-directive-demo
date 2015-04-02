angular.module('demoApp', []);

var module = angular.module('demoApp');

module.controller('demoCtrl', function(getStuff) {
	var vm = this;
	getStuff.getQuestions().then(function(questions) {
		vm.questionArr = questions;
		vm.selected = vm.questionArr[0];
	});
});

module.filter('joshIsAwesome', function() {

	return function(string) {
		return string + ', also Josh is awesome!';
	};

});

module.factory('getStuff', function ($http, apiEndpoint) {

	function getQuestions () {
		return $http.get(apiEndpoint).then(function(result) {
			return result.data.questions;
		});
	}

	return {
		getQuestions: getQuestions
	};

});

module.value('apiEndpoint', 'https://private-13d41-demo155.apiary-mock.com');