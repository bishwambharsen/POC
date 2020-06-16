trigger BatchApexErrorTrigger on BatchApexErrorEvent (after insert) {

    if(Trigger.isAfter && Trigger.isInsert){
        List<BatchLeadConvertErrors__c> errors = new List<BatchLeadConvertErrors__c>();
        
        for(BatchApexErrorEvent e:Trigger.new){
            BatchLeadConvertErrors__c error = new BatchLeadConvertErrors__c();
            error.AsyncApexJobId__c = e.AsyncApexJobId;
            error.Records__c=e.JobScope;
            error.StackTrace__c=e.StackTrace;
            errors.add(error);
        }
        
        insert errors;
    }
}