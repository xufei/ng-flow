angular.module("workflow").factory("SequentialActivity", ["Activity", "Transition", "ActivityType",
    function (Activity, Transition, ActivityType) {
        var SequentialActivity = function () {
            Activity.call(this);

            this.type = ActivityType.Sequential;

            this.transitions = [];

        };

        SequentialActivity.prototype = new Activity();

        return SequentialActivity;
    }]);