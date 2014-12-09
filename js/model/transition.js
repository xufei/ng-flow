angular.module("workflow").factory("Transition", ["Condition", function(Condition) {
    var Transition = function(condition, from, to) {
        this.condition = new Condition(condition);

        this.from = from;
        this.to = to;
        this.parent = null;
    };

    Transition.prototype = {
        evaluate: function() {
            if (!this.condition) {
                return true;
            }
            else {
                return this.condition.call(this.parent);
            }
        }
    };

    return Transition;
}]);