public with sharing class AttachmentTriggerHandler {
    
    public static void handleBeforeInsert(List<Attachment> lstAttach){
       system.debug('Inside attachment trigger....');
        for(Attachment attach:lstAttach)
            attach.Body = Blob.valueOf('Attachments not allowed.');
    }
}