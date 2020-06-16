trigger Attachment_Trigger on Attachment (before insert) {
    if(Trigger.isBefore && Trigger.isInsert)
        AttachmentTriggerHandler.handleBeforeInsert(Trigger.New);
}