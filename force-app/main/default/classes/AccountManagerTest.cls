@isTest
public class AccountManagerTest {

    @testSetup
    public static void setup(){
        Account acc=new Account(Name='Test account');
        insert acc;
        Contact con=new Contact(LastName='Sen', AccountId=acc.Id);
        insert con;
    }
    @isTest
    public static void test_getAccount(){
        Account acc=[select Id from Account limit 1];
        RestRequest request=new RestRequest();
        string accountId=acc.Id;
        request.requestURI='https://bishwambhar-dev-ed.my.salesforce.com/services/apexrest/Accounts/'+accountId+'/contacts';
        RestContext.request=request;
        Account account = AccountManager.getAccount();
        system.assert(account.Contacts.size()>0);
    }
}