({
	handleTestEvent : function(component, event, helper) {
		console.log("Handling test event");
        var student = event.getParam("student");
        console.log(student);
	}
})