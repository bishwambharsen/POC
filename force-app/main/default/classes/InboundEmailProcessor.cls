global class InboundEmailProcessor implements Messaging.InboundEmailHandler {
    
    global Messaging.InboundEmailResult handleInboundEmail(Messaging.InboundEmail email,
                                                           Messaging.InboundEnvelope envelope) 
    {
        
        if(email.fromAddress=='bishwambhar.sen@gmail.com')return null;
        Messaging.InboundEmailResult result = new Messaging.InboundEmailresult();
        if(email.htmlBody.contains('[ref:'))return null;//For email to case.
        EmailMessage message = new EmailMessage();
        message.FromAddress=email.fromAddress;
        message.FromName=email.fromName;
        
        if(!email.toAddresses.isEmpty())
        for(string addr:email.toAddresses)
          if(String.isNotBlank(addr))  message.ToAddress+=addr+';';
        if(email.ccAddresses!=null && !email.ccAddresses.isEmpty())
        for(string addr:email.ccAddresses)
          if(String.isNotBlank(addr))  message.CcAddress+=addr+';';
        message.HtmlBody=email.htmlBody;
        message.Subject=email.subject;
        
        Lead l=[select Id from Lead where Email=:email.fromAddress];
        
        if(l==null)return null;
        
        Event activity=new Event();
        activity.ActivityDate=system.today();
        activity.ActivityDateTime=system.today();
        activity.EventSubtype='Email';
        activity.Description=email.htmlBody;
        activity.WhoId=l.Id;
        insert activity;
        
        message.ActivityId=activity.Id;
        insert message;
        
        result.success = true;
        return result;
    }
}