class Person {
    firstName : string;

    constructor(name : string) {
        this.firstName = name;
    }

    getName(){
        return 'NAME: ' + this.firstName;
    }
    greet(){
        console.log('Hi there !');
    }
    
}

class Customer extends Person{
    getName(){
        return 'NAMEEEEEEE: ' + this.firstName;
    }
    greetCutomer(){
        super.greet();
    }
}
var aCustumer = new Customer('Luck');
aCustumer.greetCutomer();
// var aPerson : Person;
// aPerson = new Person('John');

var aPerson = new Person('John');
aPerson.firstName = 'kATE';
console.log(aPerson.firstName);
console.log(aPerson.getName());

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet());


enum weekDays {
    MON = 100, TUE, WED, THR, FRI, SAT, SUN
}

let day = weekDays.WED;


function echo(arg: any) : number {
    return 1;
}

//generic function
function generic<T>(arg: T) : T {
    return arg;
}

var myVal = generic(1);