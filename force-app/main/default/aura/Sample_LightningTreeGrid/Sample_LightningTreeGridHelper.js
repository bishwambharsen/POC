({
    getAccounts : function(cmp) {
        console.log('Inside getAccounts..');
        var action=cmp.get('c.getAccounts');
        
        action.setCallback(this, function(response){
            var state=response.getState();
            if(state==="SUCCESS"){
                var accounts=response.getReturnValue();
                console.log('Accounts retrieved: '+JSON.stringify(accounts));
                
                var gridData=JSON.parse(JSON.stringify(accounts).split('Contacts').join('_children'));
                console.log('grid data: '+JSON.stringify(gridData));
                cmp.set('v.gridData', gridData);
            }
            else if(state==="ERROR")
                console.log('Error encountered: '+JSON.stringify(response.getError()));
            
        });
        
        action.setStorable();
        $A.enqueueAction(action);
    },
    
    setColumns: function(cmp){
        var rowActions=[{label:'Edit', iconName:'action:edit', name:'Edit'},
                        {label:'Delete',iconName:'action:delete', name:'Delete'}];
        var columns=[{label:'Name', fieldName:'Name', type:'text'},
                     {label:'Phone', fieldName:'Phone', type:'phone'},
                     {label:'Email', fieldName:'Email', type:'email'},
                     {type:'action', typeAttributes:{rowActions:rowActions}}];
        cmp.set('v.gridColumns',columns);
        
    }
})