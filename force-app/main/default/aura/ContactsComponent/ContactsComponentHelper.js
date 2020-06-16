({
	getContacts : function(component) {
		var action = component.get("c.getContacts");
        
        action.setCallback(this, function(resp) {
            var state = resp.getState();
            debugger;
            if(component.isValid() && state === "SUCCESS"){
                component.set("v.Contacts", resp.getReturnValue());
                console.log(component.get("v.Contacts"));
            }
        });
        
        $A.enqueueAction(action);
	}
})