angular.module("workflow").factory("For", ["Activity", "Condition", "SequentialFlow", "ActivityType",
    function (Activity, Condition, SequentialFlow, ActivityType) {
        var For = function () {
            Activity.call(this);

            this.type = ActivityType.For;

            this.condition = new Condition();
            this.body = new SequentialFlow();
        };

        For.prototype = new Activity();

        return For;
    }]);