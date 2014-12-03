angular.module("workflow").factory("SequentialFlow", ["CompositeActivity", function(CompositeActivity) {
    function SequentialFlow() {

    }

    SequentialFlow.prototype = {
        clear: function () {

        },

        addActivity: function (data) {

        },

        addTransition: function (data, from, to) {

        }
    }.extend(Activity);

    return SequentialFlow;
}]);