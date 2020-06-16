({
    scriptsLoaded: function(cmp, evt, helper){
        console.log('Scripts loaded...')  
    },
    handleUpdateStudents : function(component, event, helper) {
        console.log("Handling update event");
        //debugger;
        var student = event.getParam("student");
        console.log(student);
        var students = component.get("v.students");
        students.push(student);
        component.set("v.students", students);
    },
    
    doInit : function(component, event, helper){
        console.log("Initializing student list component");
        var action = component.get("c.getAllStudents");
        
        action.setCallback(this, function(response){
            // console.log(response.getReturnValue());
            
            if(component.isValid() && response.getState()==="SUCCESS"){
                let students=response.getReturnValue();
                students.forEach(item=>{item.Test='Test'});
               // component.set('v.students', students );
                console.log('Student list: '+JSON.stringify(students));
                $('#tableId').DataTable({data:students,
                                         columns:[
                                             {data:'Name'},
                                             {data:'Age__c'},
                                             {data:'Department__c'},
                                             {data:'Test'}
                                         ],
                                        responsive:true,
                                        searching:false,
                                        ordering:false,
                                        paging:false
                                       });
            }
        });
        
        $A.enqueueAction(action);
        
        // helper.setColumns(component);
    },
    
    enableFileUpload: function(cmp, event, helper){
        var selectedRows=event.getParam('selectedRows');
        console.log('selected row: '+JSON.stringify(selectedRows));
        
        var localEvent = $A.get('e.c:enableFileUpload');
        localEvent.setParams({studentId:selectedRows[0].Id});
        localEvent.fire();
    }
})