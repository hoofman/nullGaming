/*basic test file to check mocha will play nice :) */

var assert = require('assert');
describe('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("ReactJS is ace!".length, 15);
    });
 it('should return first charachter of the string', function () {
        assert.equal("ReactJS is ace!".charAt(0), 'R');
    });
});