@RestResource(urlMapping='/Accounts/*/contacts')
global class AccountManager {

    @HttpGet
    global static Account getAccount(){
        RestRequest request = RestContext.request;
        string URI=request.requestURI;
        system.debug('URI: '+URI);
        string accountId=URI.substringBetween('Accounts/', '/contacts');
        system.debug('accountId: '+accountId);
        Account account = [select Id, Name,(select Id, Name from Contacts) from Account where Id=:accountId];
        return account;
    }
}