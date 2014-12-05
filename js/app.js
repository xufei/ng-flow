angular.module("workflow", []);

angular.module("workflow").value("WorkflowType", {
    Sequential: "sequential",
    StateMachine: "stateMachine"
});

angular.module("workflow").value("ActivityType", {
    Start: "start",
    Finish: "finish",
    If: "if",
    Switch: "switch",
    While: "while",
    For: "for",
    Statement: "statement"
});


angular.module("workflow").value("ActivityConfig", {
    "default": {
        width: 100,
        height: 60
    },
    "start": {
        width: 40,
        height: 40
    },
    "finish": {
        width: 40,
        height: 40
    },
    "if": {
        width: 80,
        height: 40
    },
    "switch": {
        width: 80,
        height: 40
    },
    "while": {
        width: 80,
        height: 40
    },
    "for": {
        width: 80,
        height: 40
    },
    "statement": {
        width: 80,
        height: 40
    }
});