
describe('HomePage', () => {

    beforeEach(() => {
        browser.get('http://localhost/partTimeCalendar/#/Home')
    });

    it('should change calendar to month view', function() {
        element(by.id('remote')).click();
    });

    it('should change calendar to day view', function() {
        element(by.id('Day')).click();
    });
     
    it('should change calendar to week view', function() {
        element(by.id('Week')).click();
    });

    it('should change calendar to week view', function() {
        element(by.id('inoffice')).click();
    });

    it('should change calendar to month view', function() {
        element(by.id('Month')).click();
    });

    it('should change calendar to week view', function() {
        element(by.id('home')).click();
    });

    it('should go to create new event page', function() {
        element(by.id('ManageButton')).click();
        element(by.id('plus')).click();
  
       
    });

})
