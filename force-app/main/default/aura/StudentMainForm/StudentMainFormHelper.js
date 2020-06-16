({
    saveStudents : function(cmp, evt) {
        let action=cmp.get('c.save');
        
        action.setParams({students:cmp.get('v.students')});
        cmp.set('v.showSpinner', true);
        
        action.setCallback(this, function(response){
            
            cmp.set('v.showSpinner', false);
            
            let state=response.getState();
            
            if(state==="SUCCESS"){
                cmp.find('notifsLib').showToast({
                    variant:'success',
                    message:'Students saved successfully!'
                });
                $A.get('e.force:refreshView').fire();
            }
            else if(state==="ERROR"){
                console.error(JSON.stringify(response.getErrors()));
                cmp.find('notifsLib').showToast({
                    variant:'error',
                    message:'Save operation failed!'
                });
            }
        });
        
        $A.enqueueAction(action);
    }
})