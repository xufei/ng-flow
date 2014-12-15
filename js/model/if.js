angular.module("workflow").factory("If", ["Activity", "Condition", "SequentialActivity", "ActivityType",
    function (Activity, Condition, SequentialActivity, ActivityType) {
        var If = function () {
            Activity.call(this);

            this.type = ActivityType.If;

            this.condition = new Condition();
            this.branches = [];

            var positive = new SequentialActivity();
            var negative = new SequentialActivity();

            this.positive = positive;
            this.negative = negative;

            this.branches.push(positive);
            this.branches.push(negative);
        };

        If.prototype = new Activity();

        return If;
    }]);