

describe('parttime list page to create page',function() {

    describe('create page control step by step ',function(){

        it('should not add a new parttime because it has only name' , async function(){

            await browser.get('http://localhost/partTimeCalendar/#/Card');
            await element(by.id('Create')).click();
            await element(by.model('parttime.firstname')).sendKeys('neseli');
            expect(by.id('submit').click).toBe(undefined);
        });
        it('should not add a new parttime because it has not proper email' , async function(){
    
            await browser.get('http://localhost/partTimeCalendar/#/Card');
            await element(by.id('Create')).click();
            await element(by.model('parttime.firstname')).sendKeys('neseli');
            await element(by.model('parttime.lastname')).sendKeys('ayaklar');
            await element(by.model('parttime.email')).sendKeys('neseli');
            expect(by.id('submit').click).toBe(undefined);
        });
        it('should not add a new parttime because it has email more than 15 character' , async function(){
    
            await browser.get('http://localhost/partTimeCalendar/#/Card');
            await element(by.id('Create')).click();
            await element(by.model('parttime.firstname')).sendKeys('msdgjkjkahsgkvhsjrgdjfshfklejfdkljawefkjrajewf');
            expect(by.id('submit').click).toBe(undefined);
        });
        it('should not add a new parttime because it has firstname less than 3 character' , async function(){
    
            await browser.get('http://localhost/partTimeCalendar/#/Card');
            await element(by.id('Create')).click();
            await element(by.model('parttime.firstname')).sendKeys('a');
            expect(by.id('submit').click).toBe(undefined);
        });
        it('should no add any parttime because cancel on click' , async function(){
    
            await browser.get('http://localhost/partTimeCalendar/#/Card');
            await element(by.id('Create')).click();
            await element(by.model('parttime.firstname')).sendKeys('neseli');
            await element(by.model('parttime.lastname')).sendKeys('ayaklar');
            await element(by.model('parttime.email')).sendKeys('neseliayaklar@hotmail.com');
            await element(by.model('parttime.workfrom')).sendKeys('home');
            await element(by.id('cancel')).click();
            expect(element(by.className('toast-success')).isPresent()).toBe(false);
    
        });
        it('should open adding new parttime page', async function() {
         
            await browser.get('http://localhost/partTimeCalendar/#/Card');
            await element(by.id('Create')).click();
            await element(by.model('parttime.firstname')).sendKeys('neseli');
            await element(by.model('parttime.lastname')).sendKeys('ayaklar');
            await element(by.model('parttime.email')).sendKeys('neseliayaklar@hotmail.com');
            await element(by.model('parttime.workfrom')).sendKeys('home');
            var submit_form = element(by.id('submit'));
            submit_form.submit();
            expect(element(by.className('toast-success')).isPresent()).toBe(true);
         
        });

    });
    

});