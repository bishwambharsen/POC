@isTest
public class AddPrimaryContactTest {

    @testSetup
    public static void setup(){
        List<Account> accounts=new List<Account>();
        for(Integer i=0;i<100;i++){
            if(i<50)
                accounts.add(new Account(Name='Account'+i, BillingState='NY'));
            else
                accounts.add(new Account(Name='Account'+i, BillingState='CA'));
        }
        insert accounts;
    }
    
    @isTest
    public static void queueableJob_Test(){
        Contact c=new Contact(LastName='Sen');
        
        AddPrimaryContact job=new AddPrimaryContact(c,'CA');
        
        Test.startTest();
        Id jobId=System.enqueueJob(job);
        Test.stopTest();
        
        system.assertEquals(50, [select count() from Contact where Account.BillingState='CA']);
    }
}