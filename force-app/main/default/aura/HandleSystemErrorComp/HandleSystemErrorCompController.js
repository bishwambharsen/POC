({
    trigger: function(cmp, event) {
        // Call an Apex controller that throws an error
        console.log("Inside trigger");
        var action = cmp.get("c.raiseException");
        action.setCallback(cmp, function(response){
            console.log("Inside callback")
            cmp.set("v.response", response);
        });
        $A.enqueueAction(action);
    },
    
    showSystemError: function(event) {
        // Handle system error
        console.log("Inside showSystemError")        
        console.log(event.getParam("error"));
    },
    doInit: function(cmp, evt){
        console.log("Inside Init");
    }
})