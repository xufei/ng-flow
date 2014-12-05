angular.module("workflow").factory("For", ["Activity", "Condition", "SequentialFlow", function(Activity, Condition, SequentialFlow) {
    var For = function() {
        Activity.call(this);

        this.condition = new Condition();
        this.body = new SequentialFlow();
    };

    For.prototype = new Activity();

    return For;
}]);