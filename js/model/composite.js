angular.module("workflow").factory("CompositeActivity", ["Activity", function(Activity) {
    var CompositeActivity = function() {
        Activity.call(this);
    };

    CompositeActivity.prototype = new Activity();

    return CompositeActivity;
}]);