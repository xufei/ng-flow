angular.module("workflow").factory("SequentialFlow", ["Activity", "WorkflowType", "ActivityFactory", "Transition",
    function (Activity, WorkflowType, ActivityFactory, Transition) {
        function SequentialFlow() {
            this.type = WorkflowType.Sequential;

            this.activities = [];
            this.transitions = [];

            this.start = this.addActivity(WorkflowType.Start);
            this.finish = this.addActivity(WorkflowType.Finish);

            this.addTransition("", this.start, this.finish);
        }

        SequentialFlow.prototype = new Activity();

        SequentialFlow.prototype.clear = function () {

        };

        SequentialFlow.prototype.addActivity = function (type) {
            var activity = ActivityFactory.create(type);
            this.activities.push(activity);
        };

        SequentialFlow.prototype.addTransition = function (data, from, to) {
            var transition = new Transition(data, from, to);
            this.transitions.push(transition);
        };

        return SequentialFlow;
    }]);