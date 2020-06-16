public with sharing class  StudentController {
    
    @AuraEnabled
    public static Student__c save(Student__c student){
        if(student == null)
            throw new AuraHandledException('student is null');
        insert student;
        return student;
    }
    
    @AuraEnabled
    public static List<Student__c> getAllStudents(){
        return [select Name, Age__c, Department__c from Student__c order by Id desc];
    }
    
    @AuraEnabled
    public static void save(List<Student__c> students){
        system.debug('Students: '+students);
        Database.SaveResult[] results=Database.insert(students, false);
        
        for(Database.SaveResult result:results){
            if (result.isSuccess()) {
                // Operation was successful, so get the ID of the record that was processed
                System.debug('Successfully inserted account. Account ID: ' + result.getId());
            }
            else {
                // Operation failed, so get all errors                
                for(Database.Error err : result.getErrors()) {
                    System.debug('The following error has occurred.');                    
                    System.debug(err.getStatusCode() + ': ' + err.getMessage());
                    System.debug('Account fields that affected this error: ' + err.getFields());
                }
            }
        }
    }
}