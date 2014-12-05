angular.module("workflow").factory("Start", ["Activity", function(Activity) {
    var Start = function() {
        Activity.call(this);
    };

    Start.prototype = new Activity();

    return Start;
}]);