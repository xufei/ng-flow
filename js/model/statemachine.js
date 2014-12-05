angular.module("workflow").factory("StateMachine", ["Activity", "WorkflowType",
    function (Activity, WorkflowType) {
        var StateMachine = function () {
            this.type = WorkflowType.StateMachine;

            this.states = {};
            this.transitions = [];

            this.startState = this.addState("Start");
            this.finishState = this.addState("Finish");

            this.currentState = this.startState;
        };

        StateMachine.prototype = new Activity();

        StateMachine.prototype.load = function (data) {
            for (var i = 0; i < data.states.length; i++) {
                this.addState(data.states[i]);
            }
        };

        StateMachine.prototype.execute = function () {
            this.currentState.execute();

            for (var i = 0; i < this.transitions.length; i++) {
                if (this.transitions[i].from == this.currentState) {
                    if (this.transitions[i].evaluate()) {
                        this.currentState = this.transitions[i].to;
                        break;
                    }
                }
            }
        };

        StateMachine.prototype.addState = function (name) {
            var state = new Activity(name);

            state.parent = this;
            this.states[name] = state;

            return state;
        };

        StateMachine.prototype.addTransition = function (data) {
            var transition = new Transition(data);

            transition.parent = this;
            this.transitions.push(transition);
            transition.from = this.states[data.from];
            transition.to = this.states[data.to];

            return transition;
        };

        StateMachine.prototype.isFinished = function () {
            return this.currentState == this.finishState;
        };

        return StateMachine;
    }]);

