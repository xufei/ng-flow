angular.module("workflow").factory("StateMachine", ["Activity", "CompositeActivity", function(Activity, CompositeActivity) {
    var State = Activity;

    var StateMachine = function() {
        CompositeActivity.call(this);

        this.name = "State Machine";
        this.states = {};
        this.transitions = [];

        this.startState = this.addState("Start");
        this.finishState = this.addState("Finish");

        this.currentState = this.startState;
    };

    StateMachine.prototype = {
        load: function(data) {
            for (var i=0; i<data.states.length; i++) {
                this.addState(data.states[i]);
            }
        },

        execute: function() {
            this.currentState.execute();

            for (var i=0; i<this.transitions.length; i++) {
                if (this.transitions[i].from == this.currentState) {
                    if (this.transitions[i].evaluate()) {
                        this.currentState = this.transitions[i].to;
                        break;
                    }
                }
            }
        },

        addState: function(name) {
            var state = new Activity(name);

            state.parent = this;
            this.states[name] = state;

            return state;
        },

        addTransition: function(data) {
            var transition = new Transition(data);

            transition.parent = this;
            this.transitions.push(transition);
            transition.from = this.states[data.from];
            transition.to = this.states[data.to];

            return transition;
        },

        isFinished: function() {
            return this.currentState == this.finishState;
        }
    }.extend(Activity);

    return StateMachine;
}]);

