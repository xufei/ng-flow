angular.module("workflow").factory("WorkflowFactory", function() {
    var WorkflowFactory = {
        create: function(type) {
            var flow;
            switch (type) {
                case types.Sequential: {
                    flow = new SequentialFlow();
                    break;
                }
                case types.StateMachine: {
                    flow = new StateMachine();
                    break;
                }
            }
            return flow;
        }
    };

    return WorkflowFactory;
});