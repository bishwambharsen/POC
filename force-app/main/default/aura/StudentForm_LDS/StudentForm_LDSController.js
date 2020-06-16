({
    doInit: function(component, event, helper) {
        console.log('Initializing....');
        // Prepare a new record from template
        component.find("forceRecordCmp").getNewRecord(
            "Student__c", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newStudent");
                var error = component.get("v.error");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                console.log("Record template initialized: " + JSON.stringify(rec));
            })
        );
    },
    
    handleSaveStudent: function(component, event, helper) {
        if(helper.validateStudentForm(component)) {
            console.log('Student record being saved is: '+JSON.stringify(component.get('v.student')));
            component.find("forceRecordCmp").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    console.log('Student saved successfully!');
                    console.log('SaveResult contents: '+JSON.stringify(saveResult));
                    console.log('Student obj details: '+JSON.stringify(component.get('v.student')));
					//Now pass the studentId to the view component
                    var localEvent=$A.get('e.c:enableFileUpload');
                    localEvent.setParams({studentId:saveResult.recordId});
                    localEvent.fire();
                }
                else if (saveResult.state === "INCOMPLETE") {
                    console.log("User is offline, device doesn't support drafts.");
                }
                    else if (saveResult.state === "ERROR") {
                        console.log('Problem saving contact, error: ' +
                                    JSON.stringify(saveResult.error));
                    }
                        else {
                            console.log('Unknown problem, state: ' + saveResult.state +
                                        ', error: ' + JSON.stringify(saveResult.error));
                        }
            });
        }
    }
})