({
	handleUploadFinished : function(cmp, event, helper) {
		var files=event.getParam('files');
        console.log('Files uploaded: '+JSON.stringify(files));
        var fileIds=[];
        files.forEach(function(file){
            fileIds.push(file.documentId);
        });
        cmp.set('v.fileIds', fileIds);
	},
    
    setRecordId: function(cmp, event, helper){
        var studentId=event.getParam('studentId');
        console.log('student Id received: '+studentId);
        cmp.set('v.recordId', studentId);
    }
})