public with sharing class FileController {

    @AuraEnabled
    public static void deleteDoc(Id fileId){
        ContentDocument file=[select Id from ContentDocument where Id=:fileId];
        delete file;
    }
}