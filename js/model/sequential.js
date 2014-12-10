angular.module("workflow").factory("SequentialActivity", ["Activity", "Transition",
    function (Activity, Transition) {
        var SequentialActivity = function () {
            Activity.call(this);

            this.type = ActivityType.Sequential;

            this.condition = new Condition();
            this.positive = new SequentialFlow();
            this.negtive = new SequentialFlow();

        };

        SequentialActivity.prototype = new Activity();

        return SequentialActivity;
    }]);