angular.module("workflow").factory("Transition", ["Condition", function(Condition) {
    var Transition = function(data) {
        this.name = data.name || "Transition";
        this.condition = new Condition(data.condition);

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