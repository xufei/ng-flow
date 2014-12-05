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
    width: 100,
    height: 60
});

angular.module("workflow").value("StartConfig", {
    width: 40,
    height: 40
});

angular.module("workflow").value("FinishConfig", {
    width: 40,
    height: 40
});

angular.module("workflow").value("DecisionConfig", {
    width: 80,
    height: 40
});

angular.module("workflow").value("StatementConfig", {
    width: 80,
    height: 40
});