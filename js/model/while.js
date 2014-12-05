angular.module("workflow").factory("While", ["Activity", "Condition", "SequentialFlow", function(Activity, Condition, SequentialFlow) {
    var While = function() {
        Activity.call(this);

        this.condition = new Condition();
        this.body = new SequentialFlow();
    };

    While.prototype = new Activity();

    return While;
}]);