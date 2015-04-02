angular.module('demoApp').directive('jkQuestionAnswer', function() {

	return {
		restrict: 'E',
		scope: {
			data: '='
		},
		replace: false,
		// Must run from server for AJAX to work! http://joshkra.me/angular-directive-demo
		templateUrl: 'scripts/jk-question-answer/jk-question-answer.html',
		link: function (scope, element) {
			console.log(scope.data);
		}
	};

});