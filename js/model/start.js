angular.module("workflow").factory("Start", ["Activity", "ActivityType", function(Activity, ActivityType) {
    var Start = function() {
        Activity.call(this);

        this.type = ActivityType.Start;
    };

    Start.prototype = new Activity();

    return Start;
}]);