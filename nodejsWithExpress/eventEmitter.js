const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//觸發事件: on搭配emit
eventEmitter.on('callMe', (num1, num2) => {
    console.log(num1+num2);
});

eventEmitter.emit('callMe',3,4);


// class繼承EventEmitter用法
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let peter = new Person('Peter');
peter.on('nameCall', () => {
    console.log(`My name is ${peter.name}`);
});

peter.emit('nameCall');