public with sharing class ContactController {

    @AuraEnabled
    public static List<Contact> getContacts(){
        
        return [select FirstName, LastName, MobilePhone from Contact limit 10];
    }
}