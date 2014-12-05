angular.module("workflow").factory("WorkflowFactory", ["SequentialFlow", "StateMachine", "WorkflowType",
    function (SequentialFlow, StateMachine, WorkflowType) {
        var WorkflowFactory = {
            create: function (type) {
                var flow;
                switch (type) {
                    case WorkflowType.StateMachine:
                    {
                        flow = new StateMachine();
                        break;
                    }
                    case WorkflowType.Sequential:
                    {
                        flow = new SequentialFlow();
                        flow.addActivity();
                        flow.addActivity();
                        break;
                    }
                    default : {
                        flow = new SequentialFlow();
                        break;
                    }
                }
                return flow;
            }
        };

        return WorkflowFactory;
    }]);