({
	handleCompEvent : function(component, event, helper) {
		console.log("Handling component event");
        var studentID = event.getParam("studentID");
        console.log("Captured comp event studentID:" + studentID);
	}
})