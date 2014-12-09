angular.module("workflow").factory("Statement", ["Activity", "ActivityType", function(Activity, ActivityType) {
    var Statement = function() {
        Activity.call(this);

        this.type = ActivityType.Statement;
    };

    Statement.prototype = new Activity();

    return Statement;
}]);