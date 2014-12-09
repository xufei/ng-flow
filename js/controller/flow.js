angular.module("workflow").controller("FlowCtrl", ["WorkflowFactory", "WorkflowConfig", "ActivityConfig",
    function (WorkflowFactory, WorkflowConfig, ActivityConfig) {

        this.flows = [];

        this.addFlow = function () {
            var workflow = WorkflowFactory.create();
            this.flows.push(workflow);
        };

        this.addActivity = function (flow, type) {
            flow.addActivity(type);
        };


        //下面这些只给视图展示用
        this.nodeX = function(activity) {
            var width = ActivityConfig[activity.type].width;
            return WorkflowConfig.offsetX + (ActivityConfig.default.width - width) / 2;
        };

        this.nodeY = function(index) {
            return WorkflowConfig.offsetY + 100 * index;
        };
    }]);

