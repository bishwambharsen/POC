@isTest
public class AnimalLocatorTest {

    @isTest
    public static void test_getAnimalNameById(){
        Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
        
        String animalName=AnimalLocator.getAnimalNameById(1);
        
        //system.assertEquals(200, response.getStatusCode());
        system.assert(String.isNotEmpty(animalName));
    }
}