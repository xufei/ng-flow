angular.module("workflow").factory("SequentialFlow", ["Activity", "WorkflowType", "Transition",
    function (Activity, WorkflowType, Transition) {
        function SequentialFlow() {
            this.type = WorkflowType.Sequential;

            this.isEditing = false;
            this.isDirty = false;

            this.activities = [];
            this.transitions = [];
        }

        SequentialFlow.prototype = new Activity();

        SequentialFlow.prototype.clear = function () {

        };

        SequentialFlow.prototype.getActivityIndex = function(activity) {
            var index = -1;
            for (var i=0; i<this.activities.length; i++) {
                if (this.activities[i] == activity) {
                    index = i;
                    break;
                }
            }

            return index;
        };

        SequentialFlow.prototype.addActivity = function (activity) {
            activity.parent = this;
            this.activities.push(activity);
        };

        SequentialFlow.prototype.insertActivityAt = function (activity, index) {
            activity.parent = this;
            this.activities.splice(index, 0, activity);
        };

        SequentialFlow.prototype.addTransition = function (transition) {
            this.transitions.push(transition);
        };

        SequentialFlow.prototype.insert = function(activity, transition) {
            var index = this.getActivityIndex(transition.to);
            this.insertActivityAt(activity, index);

            var newTransition = new Transition("", activity, transition.to);
            transition.to = activity;

            this.addTransition(newTransition);
        };

        return SequentialFlow;
    }]);