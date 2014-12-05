angular.module("workflow").factory("SequentialFlow", ["Activity", function (Activity) {
    function SequentialFlow() {
        this.activities = [];
        this.transitions = [];
    }

    SequentialFlow.prototype = new Activity();

    SequentialFlow.prototype.clear = function () {

    };

    SequentialFlow.prototype.addActivity = function (data) {

    };

    SequentialFlow.prototype.addTransition = function (data, from, to) {

    };

    return SequentialFlow;
}]);