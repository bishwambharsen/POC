({
    handleAccountSave:function(cmp){
        cmp.find('forceRecordCmp').saveRecord(function(saveResult){
            if(saveResult.state==="SUCCESS" || saveResult.state==="DRAFT"){
                var toast=$A.get('e.force:showToast');
                toast.setParams({title:'Success',message:'Account saved successfully!'});
                toast.fire();
            }
            else if(saveResult.state==="ERROR"){
                
                var errMsg = "";
                // saveResult.error is an array of errors, 
                // so collect all errors into one message
                for (var i = 0; i < saveResult.error.length; i++) {
                    errMsg += saveResult.error[i].message + "\n";
                }
                cmp.set("v.recordSaveError", errMsg);
            } else {
                cmp.set("v.recordSaveError", "");
            }
        }
                                             );                                                                            
    }                                      
    
})