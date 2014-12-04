angular.module("workflow").factory("SequentialFlow", ["CompositeActivity", function (CompositeActivity) {
    function SequentialFlow() {

    }

    SequentialFlow.prototype = new CompositeActivity();

    SequentialFlow.prototype.clear = function () {

    };

    SequentialFlow.prototype.addActivity = function (data) {

    };

    SequentialFlow.prototype.addTransition = function (data, from, to) {

    };

    return SequentialFlow;
}]);