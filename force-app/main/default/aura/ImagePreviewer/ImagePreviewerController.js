({
	showPreview : function(cmp, event, helper) {
		let preview = cmp.find('preview');
        $A.util.toggleClass(preview, 'slds-hide');
	}
})