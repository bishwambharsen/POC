public class DailyLeadProcessor implements Schedulable {

    public void execute(SchedulableContext sc){
        List<Lead> leads=[select LeadSource from Lead where LeadSource='' limit 200];
        for(Lead l:leads)
            l.LeadSource='Dreamforce';
        update leads;
    }
}