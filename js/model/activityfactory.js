angular.module("workflow").factory("ActivityFactory", ["ActivityType", function(ActivityType) {
    var ActivityFactory = {
        create: function(type) {
            var flow;
            switch (type) {
                case ActivityType.Sequential: {
                    flow = new SequentialFlow();
                    break;
                }
                case ActivityType.StateMachine: {
                    flow = new StateMachine();
                    break;
                }
            }
            return flow;
        }
    };

    return ActivityFactory;
}]);