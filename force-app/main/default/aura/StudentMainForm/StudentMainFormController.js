({
    addStudent : function(cmp, evt, helper) {
        let student={
            sobjectType:'Student__c',
            Name:'',
            Age__c:'',
            Department__c:''
        }
        let students=cmp.get('v.students');
        students.push(student);
        cmp.set('v.students', students);
    },
    
    submit: function(cmp, evt, helper){
        let students=cmp.get('v.students');
        console.log('Students: ', JSON.stringify(students));
        helper.saveStudents(cmp, evt);
    }
})