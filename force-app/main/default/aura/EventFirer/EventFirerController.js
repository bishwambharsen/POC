({
	fireTestEvent : function(component, event, helper) {
        component.getEvent("eventFirer").setParams(
            {
                student : component.get("v.student")
            }).fire();
        
        console.log("Fired test event");
	}
})