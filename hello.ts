var fn = () => 'response';

var a: number;
var b: boolean;
var c: string;
var myArray: number[];

a = 10;
b = true;
c = 'rol';

myArray= [1,2,3];

//tuple 
var myArrayTuple: [number, boolean] = [1, true];

function add(a : number, b : number, c?:number, d= 0, e : number = 0 ) : number { //c? is optional argument, if it is not passed, no complain 
                                                // d is optional too, if no value then 0
    return a + b;
}

var sum = add(1,2,3);
console.log('x');
console.log(sum);

// union type
var g : number | boolean; // g can be only number or boolean, not any, not string