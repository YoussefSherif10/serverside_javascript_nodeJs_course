const chai = require('chai');
const mocha = require('mocha');
const {addition, division} = require("./index");

const expect = chai.expect;

describe('Test calculator functionality', () => {

   describe('Test addition functionality', () => {
       it(' 2 + 2 should be equal to 4', () => {
           expect(addition(2,2)).to.equal(4);
       })
   })

    describe('test the division functionality', () => {
        it('divide By Zero', () => {
            expect(division(12, 0)).to.equal(undefined);
        })
    })

});