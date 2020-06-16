public with sharing class LightningTreeGridController {

    @AuraEnabled
    public static List<Account> getAccounts(){
        return [select Name, Phone, (select Name, Email from Contacts) from Account limit 10];
    }
}