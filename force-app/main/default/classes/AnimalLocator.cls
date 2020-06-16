public class AnimalLocator {
    //private static string endpoint='https://th-apex-http-callout.herokuapp.com/animals/';
    
    public static String getAnimalNameById(Integer id){
        String animalName='';
        HttpRequest request=new HttpRequest();
        request.setMethod('GET');
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals/'+id);
        
        HttpResponse response=(new Http()).send(request);
        
        if(response.getStatusCode()==200){
            
            Map<string, Object> mapResponse= (Map<string, Object>)JSON.deserializeUntyped(response.getBody());
            system.debug('mapResponse: '+mapResponse);
            Map<String,Object> animal=(Map<String,Object>)mapResponse.get('animal');
            system.debug('animal: '+animal);
            animalName=(String)animal.get('name');
        }
        return animalName;
        
    }
}