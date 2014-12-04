angular.module("workflow").factory("WorkflowFactory", ["SequentialFlow", "StateMachine", "WorkflowType",
    function (SequentialFlow, StateMachine, WorkflowType) {
        var WorkflowFactory = {
            create: function (type) {
                var flow;
                switch (type) {
                    case WorkflowType.Sequential:
                    {
                        flow = new SequentialFlow();
                        break;
                    }
                    case WorkflowType.StateMachine:
                    {
                        flow = new StateMachine();
                        break;
                    }
                }
                return flow;
            }
        };

        return WorkflowFactory;
    }]);