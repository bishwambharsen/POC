@isTest
public class AccountProcessorTest {
    
    @testSetup
    public static void setup(){
        List<Account> accounts = new List<Account>();
        for(Integer i=0;i<10;i++)
            accounts.add(new Account(Name='Test'+i));
        insert accounts;
    }

    @isTest
    public static void countContacts_Test(){
        List<Id> accountIds=new List<Id>();
        for(Account a:[select Id from Account])
            accountIds.add(a.Id);
        
        Test.startTest();
        AccountProcessor.countContacts(accountIds);
        Test.stopTest();
        
        Account a=[select Number_of_Contacts__c,(select Id from Contacts) from Account limit 1];
        system.assertEquals(a.Contacts.size(), a.Number_of_Contacts__c);
    }
}