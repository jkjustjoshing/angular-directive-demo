angular.module('demoApp').directive('jkQuestionAnswer', function() {

	return {
		restrict: 'E',
		scope: false,
		link: function (scope, element) {
			console.log('inside jk-question-answer directive');
		}
	};

});