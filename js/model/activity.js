angular.module("workflow").factory("Activity", function() {
    var Activity = function() {
        this.name = "Activity";
        this.parent = null;
        this.root = null;
    };

    return Activity;
});