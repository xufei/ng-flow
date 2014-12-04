angular.module("workflow", []);

angular.module("workflow").value("WorkflowType", {
    "Sequential": "sequential",
    "StateMachine": "stateMachine"
});


angular.module("workflow").value("ActivityType", {
    "Start": "start",
    "Finish": "finish",
    "If": "if",
    "Switch": "switch",
    "While": "while",
    "For": "for",
    "Statement": "statement"
});