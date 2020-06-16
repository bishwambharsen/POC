({
    
    handleSaveStudent: function(component, event, helper) {
        if(helper.validateStudentForm(component)) {
            console.log('Student record being saved is: '+JSON.stringify(component.get('v.student')));
            component.find("forceRecordCmp").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    console.log('Student saved successfully!');
                    console.log('SaveResult contents: '+JSON.stringify(saveResult));
                    console.log('Student obj details: '+JSON.stringify(component.get('v.student')));
                    
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
    },
    
    deleteStudent: function(cmp, event, helper){
        cmp.find('forceRecordCmp').deleteRecord($A.getCallback(function(deleteResult){
            if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
                console.log('Student deleted successfully!');
                
            }
            else if (deleteResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            }
                else if (deleteResult.state === "ERROR") {
                    console.log('Problem deleting student, error: ' +
                                JSON.stringify(deleteResult.error));
                }
                    else {
                        console.log('Unknown problem, state: ' + deleteResult.state +
                                    ', error: ' + JSON.stringify(deleteResult.error));
                    }
        }));
    },
    
    handleRecordUpdated: function(cmp, event, helper){
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
            cmp.find('forceRecordCmp').reloadRecord();
        } else if(eventParams.changeType === "LOADED") {
            // record is loaded in the cache
        } else if(eventParams.changeType === "REMOVED") {
            //record is deleted.
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving, or deleting the record
        }
    }
})