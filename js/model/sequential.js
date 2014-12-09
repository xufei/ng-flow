angular.module("workflow").factory("SequentialFlow", ["Activity", "WorkflowType", "Transition",
    function (Activity, WorkflowType, Transition) {
        function SequentialFlow() {
            this.type = WorkflowType.Sequential;

            this.activities = [];
            this.transitions = [];
        }

        SequentialFlow.prototype = new Activity();

        SequentialFlow.prototype.clear = function () {

        };

        SequentialFlow.prototype.addActivity = function (activity) {
            this.activities.push(activity);
        };

        SequentialFlow.prototype.addTransition = function (transition) {
            this.transitions.push(transition);
        };

        return SequentialFlow;
    }]);