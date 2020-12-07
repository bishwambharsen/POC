/**
 * @description       : 
 * @author            : bishwambhar.sen@sen-force.com
 * @group             : 
 * @last modified on  : 12-07-2020
 * @last modified by  : bishwambhar.sen@sen-force.com
 * Modifications Log 
 * Ver   Date         Author                          Modification
 * 1.0   12-07-2020   bishwambhar.sen@sen-force.com   Initial Version
**/
public with sharing class  StudentController {
    
    @AuraEnabled
    public static Student__c save(Student__c student){
       try {
           if(Schema.SObjectType.Student__c.isCreateable()){
                insert student;
                return student;
           }else{
               throw new AuraHandledException('The user doesnt have permission to create a student.');
           }
                
       } catch (Exception e) {
           throw new AuraHandledException(e.getMessage());
       } 
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Student__c> getAllStudents(){
        try{
            return [select Name, Age__c, Department__c from Student__c with security_enforced order by Id desc];
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
       
    }
    
    @AuraEnabled
    public static void save(List<Student__c> students){
       try {
           if(Schema.SObjectType.Student__c.isCreateable())
                insert students;
            else {
                throw new AuraHandledException('The user doesnt have permission to create student records.');
            }
       } catch (Exception e) {
           throw new AuraHandledException(e.getMessage());
       } 
    }
}