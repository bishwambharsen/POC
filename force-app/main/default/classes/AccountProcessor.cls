public class AccountProcessor {

    @future
    public static void countContacts(List<Id> accountIds){
        List<Account> accounts=[select Id, (select Id from Contacts), Number_of_Contacts__c
                                from Account
                                where Id in:accountIds];
        
        system.debug('Accounts: '+accounts);
        
        for(Account a:accounts)
            a.Number_of_Contacts__c=a.Contacts.size();
        
        update accounts;   
    }
}