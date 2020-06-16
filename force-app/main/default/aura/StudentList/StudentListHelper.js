({
	setColumns : function(cmp) {
        console.log('Setting columns for the data table!!');
		var columns=[
            {label:'Name', fieldName:'Name', type:'text', editable:true},
            {label:'Age', fieldName:'Age__c', type:'number', editable:true, cellAttributes: { alignment: 'justify' }},
            {label:'Department', fieldName:'Department__c', type:'text', editable:true}
        ];
        console.log('Columns: '+JSON.stringify(columns));
        cmp.set('v.columns',columns);
	}
})