/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The value of this is the window/console object, the javascript language within.
* 2. Implicit Binding - Wherever a function is called by a preciding dot, the object is bofore that dot.
* 3. New binding - When a constructor function is used, this referes to the creation of the object.
* 4. Explicit binding - Whenever the call or apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function honk(name){
    console.log(this);
    return `The ${name} is honking`
}

honk("Jeep");

// Principle 2

// code example for Implicit Binding
const xj = {
    make : "Jeep",
    rev : function() {
        console.log(`The ${this.make} is reving loud`);
        console.log(this);
    }
};

xj.rev();


// Principle 3

// code example for New Binding
function Car(make,model) {
    this.make = make;
    this.model = model;
    this.honk = function() {
        console.log(`The ${this.make} is honking`);
        console.log(this);
    };
}

const jeep = new Car("Jeep", "XJ");

jeep.honk();


// Principle 4

// code example for Explicit Binding
function Person(obj) {
	this.name = obj.name;
	this.age = obj.age;
	this.speak = function() {
		console.log(`This new binding`, this)
		console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old!`);
	}
}

const adrian = new Person({name: "Adrian", age: 26});
const esme = new Person({name: "Esme", age: 23});

adrian.speak();
esme.speak();

adrian.speak.call(esme);
esme.speak.apply(adrian);