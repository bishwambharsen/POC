({
    handleUploadComplete : function(cmp, evt, helper) {
        let files=evt.getParam('files');
        
        let fileIds=cmp.get('v.fileIds');
        
        files.forEach(function(file){
            fileIds.push(file.documentId);
        });
        cmp.set('v.fileIds',fileIds);
    },
    
    deleteFile: function(cmp, evt, helper){
        let fileId=evt.getSource().get('v.title');
        
        let action=cmp.get('c.deleteDoc');
        
        action.setParams({fileId:fileId});
        
        cmp.set('v.isLoading', true);
        action.setCallback(this, function(resp){
            cmp.set('v.isLoading', false);
            let state=resp.getState();
            
            if(state==="SUCCESS"){
                cmp.find('notif').showToast({
                    title:'Success',
                    variant:'success',
                    message:'File deleted successfully'
                });
                
                let fileIds=cmp.get('v.fileIds');
                fileIds.splice(fileIds.indexOf(fileId), 1);
                console.log(JSON.stringify(fileIds));
                cmp.set('v.fileIds', fileIds);
            }
            else{
                console.error(JSON.stringify(resp.getError()));
                cmp.find('notif').showToast({
                    title:'Error',
                    variant:'error',
                    message:'Something went wrong!'
                });
            }
        });
        
        $A.enqueueAction(action);
    }
})