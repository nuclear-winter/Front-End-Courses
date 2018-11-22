describe("pow", function(){
    it("Возводит в n-ю степень", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("Возводит в n-ю степень", function () {
        assert.equal(pow(3, 4), 81);
    });
});