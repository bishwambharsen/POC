({
    getStudentRecord : function(component, event, helper) {
        console.log('Handling event with studentId payload..');
        
        var studentId=event.getParam('studentId');
        console.log('Student ID received: '+studentId);
        
        component.set('v.studentId', studentId);
    },
    
    deleteStudent: function(cmp, event, helper){
        console.log('Preparing to delete the student record..');
        
        cmp.find('forceRecordCmp').deleteRecord($A.getCallback(function(deleteResult){
            if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
                console.log("Record is deleted.");
            }
            else if (deleteResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            }
                else if (deleteResult.state === "ERROR") {
                    console.log('Problem deleting record, error: ' +
                                JSON.stringify(deleteResult.error));
                }
                    else {
                        console.log('Unknown problem, state: ' + deleteResult.state +
                                    ', error: ' + JSON.stringify(deleteResult.error));
                    } 
        }));
    }
})