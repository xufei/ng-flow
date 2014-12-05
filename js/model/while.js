angular.module("workflow").factory("While", ["Activity", "Condition", "SequentialFlow", "ActivityType",
    function (Activity, Condition, SequentialFlow, ActivityType) {
        var While = function () {
            Activity.call(this);

            this.type = ActivityType.While;

            this.condition = new Condition();
            this.body = new SequentialFlow();
        };

        While.prototype = new Activity();

        return While;
    }]);