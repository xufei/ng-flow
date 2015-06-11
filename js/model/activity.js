angular.module("workflow").factory("Activity", function() {
    var Activity = function() {
        this.name = "Activity";
        this.parent = null;
        this.root = null;

        this.selectedActivity = null;
    };

    Activity.prototype = {
        selectActivity: function(activity) {
            if (this.selectedActivity) {
                this.selectedActivity.selected = false;
            }

            this.selectedActivity = activity;
            activity.selected = true;
        }
    };

    return Activity;
});