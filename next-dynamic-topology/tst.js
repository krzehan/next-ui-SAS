
var EventEmitter = require('events').EventEmitter;
var emitter= new EventEmitter();
var emitter1= new EventEmitter();
var emmiter2 = new EventEmitter();




// Subscribe
emitter.on('foo',
    function (arg1, arg2) {
    console.log('foo raised, Args:', arg1, arg2);
}

);

emitter1.on('foo',
    function (arg1, arg2) {
    console.log('foo raised, Args:', arg1, arg2);
}
);






// Emit
emitter.emit('foo',  123 , 456 );
//emitter1.emit('foo', 232 , 233);