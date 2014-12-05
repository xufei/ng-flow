angular.module("workflow").factory("Switch", ["Activity", "SequentialFlow", function(Activity) {
    var Switch = function() {
        Activity.call(this);

        this.branches = [];
    };

    Switch.prototype = new Activity();

    Switch.prototype.addBranch = function() {
        var branch = new SequentialFlow();
        this.branches.push(branch);
    };

    Switch.prototype.removeBranch = function(branch) {
        for (var i=0; i<this.branches.length; i++) {
            if (this.branches[i] == branch) {
                this.branches.splice(i, 1);
                break;
            }
        }
    };

    return Switch;
}]);