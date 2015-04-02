angular.module('demoApp').directive('jkQuestionAnswer', function() {

	return {
		restrict: 'E',
		scope: false,
		replace: true,
		templateUrl: 'jk-question-answer/jk-question-answer.html',
		link: function (scope, element) {
			console.log('inside jk-question-answer directive');
		}
	};

});