public class AddPrimaryContact implements Queueable {

    Contact c;
    String state;
    
    public AddPrimaryContact(Contact c, String state){
        this.c=c;
        this.state=state;
    }
    
    public void execute(QueueableContext qc){
        List<Contact> primaryContacts=new List<Contact>();
        for(Account acc:[select Id from Account where BillingState=:this.state limit 200]){
            Contact primaryContact=this.c.clone();
            primaryContact.AccountId=acc.Id;
            primaryContacts.add(primaryContact);
        }
        insert primaryContacts;
    }
}