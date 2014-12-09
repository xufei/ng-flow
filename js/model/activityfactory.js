angular.module("workflow").factory("ActivityFactory", ["ActivityType", "Start", "Finish", "If", "Switch", "While", "For", "Statement",
    function(ActivityType, Start, Finish, If, Switch, While, For, Statement) {
    var ActivityFactory = {
        create: function(type) {
            var activity;
            switch (type) {
                case ActivityType.Start: {
                    activity = new Start();
                    break;
                }
                case ActivityType.Finish: {
                    activity = new Finish();
                    break;
                }
                case ActivityType.If: {
                    activity = new If();
                    break;
                }
                case ActivityType.Switch: {
                    activity = new Switch();
                    break;
                }
                case ActivityType.While: {
                    activity = new While();
                    break;
                }
                case ActivityType.For: {
                    activity = new For();
                    break;
                }
                case ActivityType.Statement: {
                    activity = new Statement();
                    break;
                }
            }
            return activity;
        }
    };

    return ActivityFactory;
}]);