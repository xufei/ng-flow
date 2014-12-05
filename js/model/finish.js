angular.module("workflow").factory("Finish", ["Activity", function(Activity) {
    var Finish = function() {
        Activity.call(this);
    };

    Finish.prototype = new Activity();

    return Finish;
}]);