@isTest
public class LeadProcessorTest {

    @testSetup
    public static void setup(){
        List<Lead> leads = new List<Lead>();
        for(Integer i=0;i<200;i++)
            leads.add(new Lead(LastName='Sen', Company='ABC International'));
        insert leads;
    }
    
    @isTest
    public static void batch_Test(){
        
        Test.startTest();
        LeadProcessor lp=new LeadProcessor();
        Id batchId=Database.executeBatch(lp);
        Test.stopTest();
        List<Lead> leads=[select Id from Lead where LeadSource='Dreamforce'];
        system.assert(leads.size()==200);
    }
}