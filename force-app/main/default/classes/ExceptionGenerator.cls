public with sharing class ExceptionGenerator {
    
    @AuraEnabled
    public static void  raiseException(){
        
        List<Account> accts = new List<Account>();
        system.debug('accts first element name:'+accts[0].Name);
    }
    
}