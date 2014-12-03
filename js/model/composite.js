angular.module("workflow").factory("CompositeActivity", ["Activity", function(Activity) {
    var CompositeActivity = function() {
        Activity.call(this);
    };

    angular.extend(CompositeActivity.prototype, Activity);
}]);