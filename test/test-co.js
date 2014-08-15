var chai = require('chai');
var co = require('co');
var thunkify = require('thunkify');
var request = require('request');
var get = thunkify(request.get);

chai.should();

describe('coroutines', function () {
    it('should let me use co', function (done) {
        co(function*(){
            console.log('1');
            var a = yield get('http://www.cnn.com');
            console.log('2');
            var b = yield get('http://www.google.com');
            console.log('3');
            var c = yield get('http://www.entrinsik.com');
            console.log('4');

            console.log(a[0].statusCode);
            console.log(b[0].statusCode);
            console.log(c[0].statusCode);
            done();
        })();
    });
});