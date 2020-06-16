@isTest
public class ParkLocatorTest {

    @isTest
    public static void Test_country(){
        Test.setMock(WebServiceMock.class, new ParkServiceMock());
        
        String[] parks = ParkLocator.country('India');
        system.assert(!parks.isEmpty());
    }
}