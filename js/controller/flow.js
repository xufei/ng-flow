angular.module("workflow").controller("FlowCtrl", ["WorkflowFactory", "ActivityConfig", "StartConfig", "FinishConfig", "DecisionConfig", "StatementConfig",
    function (WorkflowFactory, ActivityConfig, StartConfig, FinishConfig, DecisionConfig, StatementConfig) {

        this.flows = [];

        this.addFlow = function () {
            var workflow = WorkflowFactory.create();
            this.flows.push(workflow);
        };

        this.addActivity = function (flow, type) {
            flow.addActivity(type);
        };


        //下面这些只给视图展示用
    }]);

