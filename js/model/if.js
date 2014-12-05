angular.module("workflow").factory("If", ["Activity", "Condition", "SequentialFlow", "ActivityType",
    function (Activity, Condition, SequentialFlow, ActivityType) {
        var If = function () {
            Activity.call(this);

            this.type = ActivityType.If;

            this.condition = new Condition();
            this.positive = new SequentialFlow();
            this.negtive = new SequentialFlow();

        };

        If.prototype = new Activity();

        return If;
    }]);