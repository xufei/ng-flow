angular.module("workflow").factory("Finish", ["Activity", "ActivityType", function(Activity, ActivityType) {
    var Finish = function() {
        Activity.call(this);

        this.type = ActivityType.Finish;
    };

    Finish.prototype = new Activity();

    return Finish;
}]);