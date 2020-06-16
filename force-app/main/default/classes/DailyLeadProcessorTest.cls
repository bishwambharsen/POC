@isTest
public class DailyLeadProcessorTest {

    @testSetup
    public static void setup(){
        List<Lead> leads=new List<Lead>();
        for(Integer i=0;i<200;i++)
            leads.add(new Lead(LastName='Sen', Company='ABC International', LeadSource=''));
        insert leads;
    }
    
    @isTest
    public static void schedulable_test(){
        DailyLeadProcessor job=new DailyLeadProcessor();
        Test.startTest();
        Id jobId=System.schedule('Daily Lead Processor', '0 0 0 1 4 ?', job);
        Test.stopTest();
        system.assertEquals(200, [select count() from Lead where LeadSource='Dreamforce']);
    }
        
}