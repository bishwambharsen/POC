({
    isValid : function(component) {
        console.log("Validating component");
        var student = component.get("v.student");
        return !($A.util.isEmpty(student.Name) || student.Age__c === 0 
                 || $A.util.isEmpty(student.Department__c));
        
    },
    
    save : function(component){
        console.log("Saving component");
        
        var action = component.get("c.save");
        //  console.log(JSON.stringify(component.get("v.student")));
        action.setParams({
            student: component.get("v.student")
        });
       $A.util.toggleClass(component.find('spinner'),'slds-hide');
        action.setCallback(this, function(response){
            $A.util.toggleClass(component.find('spinner'),'slds-hide');
            //  console.log(response.getState());
            if(component.isValid() && response.getState()==="SUCCESS"){
                var blankStudent = {sobjectType:'Student__c',
                                    Name:'',
                                    Age__c:'',
                                    Department__c:''};
                component.set("v.student", blankStudent);
                console.log("Firing appplication event");
                var updateStudentEvent = $A.get("e.c:updateStudents");
                
                updateStudentEvent.setParams(
                    {
                        student : response.getReturnValue()
                    });
                
                updateStudentEvent.fire();
                
                console.log("Firing component event");
                var compEvent = component.getEvent("compEvent");
                console.log("StudentID:" + response.getReturnValue().Id);
                compEvent.setParams({
                    studentID : response.getReturnValue().Id
                });
                
                compEvent.fire();
                
            }
            else if(response.getState()==="ERROR"){
                var errors = response.getError();
                console.log(JSON.stringify(errors));
                if(errors){
                    if(errors[0] && errors[0].message)
                        console.log(errors[0].message);
                }
                else{
                    console.log("Unknown error!")
                }
            }
            
        });
        
        $A.enqueueAction(action);
    }
})