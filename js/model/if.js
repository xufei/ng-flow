angular.module("workflow").factory("If", ["Activity", "Condition", "SequentialFlow", function(Activity, Condition, SequentialFlow) {
    var If = function() {
        Activity.call(this);

        this.condition = new Condition();
        this.positive = new SequentialFlow();
        this.negtive = new SequentialFlow();

    };

    If.prototype = new Activity();

    return If;
}]);