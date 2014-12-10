angular.module("workflow").controller("FlowCtrl", ["WorkflowFactory", "WorkflowConfig", "ActivityConfig", "ActivityFactory", "ActivityType",
    function (WorkflowFactory, WorkflowConfig, ActivityConfig, ActivityFactory, ActivityType) {

        this.flows = [];

        this.addFlow = function () {
            var workflow = WorkflowFactory.create();

            this.flows.push(workflow);
        };

        this.addActivity = function (flow, type) {
            flow.addActivity(type);
        };

        this.prepareInsert = function(flow, type) {
            flow.isEditing = true;
            flow.insertionType = type;
        };

        this.insertActivity = function(flow, transition) {
            var activity = ActivityFactory.create(flow.insertionType);
            flow.insert(activity, transition);
            flow.isEditing = false;
        };

        //下面这些只给视图展示用
        this.nodeX = function(activity) {
            return WorkflowConfig.offsetX + (ActivityConfig.default.width - ActivityConfig[activity.type].width) / 2;
        };

        this.nodeY = function(activity) {
            var index = 0;
            for (var i=0; i<activity.parent.activities.length; i++) {
                if (activity.parent.activities[i] == activity) {
                    index = i;
                    break;
                }
            }

            return WorkflowConfig.offsetY + 100 * index;
        };

        this.path = function(transition) {
            var from = transition.from;
            var to = transition.to;

            var fromX = this.nodeX(from) + ActivityConfig[from.type].width / 2;
            var fromY = this.nodeY(from) + ActivityConfig[from.type].height;

            var toX = this.nodeX(to) + ActivityConfig[to.type].width / 2;
            var toY = this.nodeY(to) - (ActivityConfig.default.height - ActivityConfig[to.type].height) / 2;

            return "M" + fromX + "," + fromY + " L" + toX + "," + toY;
        };

        this.insertPositionX = function(transition) {
            var from = transition.from;
            var fromX = this.nodeX(from) + ActivityConfig[from.type].width / 2;

            return fromX;
        };

        this.insertPositionY = function(transition) {
            var from = transition.from;
            var to = transition.to;

            var fromY = this.nodeY(from) + ActivityConfig[from.type].height;
            var toY = this.nodeY(to) - (ActivityConfig.default.height - ActivityConfig[to.type].height) / 2;

            return (fromY + toY) / 2;
        };
    }]);

