import * as app from "../../src/module/Add.js";

describe("Addition", function () {

    it("İki sayiyi topla", function () {
        var value= app.toplam(5,5);
        expect(value).toBe(10);
    });
});