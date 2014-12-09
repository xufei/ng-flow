angular.module("workflow").factory("WorkflowFactory", ["SequentialFlow", "StateMachine", "WorkflowType", "ActivityType", "ActivityFactory", "Transition",
    function (SequentialFlow, StateMachine, WorkflowType, ActivityType, ActivityFactory, Transition) {
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
                    }
                    default :
                    {
                        flow = new SequentialFlow();

                        var start = ActivityFactory.create(ActivityType.Start);
                        var finish = ActivityFactory.create(ActivityType.Finish);

                        flow.addActivity(start);
                        flow.addActivity(finish);

                        var transition = new Transition();
                        transition.from = start;
                        transition.to = finish;

                        flow.addTransition(transition);

                        break;
                    }
                }
                return flow;
            }
        };

        return WorkflowFactory;
    }]);