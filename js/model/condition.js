angular.module("workflow").factory("Condition", function() {
    var Condition = function(expression) {
        this.expression = expression;
    };

    return Condition;
});