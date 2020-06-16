trigger EventTrigger on Event (before insert) {
    
    if(Trigger.isInsert && Trigger.isBefore){
        system.debug('Before insert begins');
        Set<Id> leadIds=new Set<Id>();
        for(Event e:Trigger.new){
            //Checks if the event is related to a lead
            if(e.WhoId.getSobjectType()==Lead.SobjectType){
                leadIds.add(e.WhoId);//store the leadId to check later for meetings.
            }
        }
        
        List<Lead> leads=[select Id, (select Id from Events where Subject ='Meeting')
                        from Lead];
        for(Lead l:leads){
            //Meeting type event already exists
            if(l.Events.size()>0){
                for(Event e:Trigger.new){
                    if(l.Id==e.WhoId){
                        e.Subject='Follow Up';
                    }
                }
            }
        }
        
    }
}