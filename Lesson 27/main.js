function showMessage(){
    alert("this message in inside a function")
}

showMessage();

function sum(number1,number2){
    return number1+number2;
}

console.log(sum(25,4))

var arrowFunction = () => alert("hello")

arrowFunction();

var arrowFunction = name => alert('hello $(name)');

arrowFunction("enes");

function dsFunction(){
    var localVar = "Digital School"

    alert(localVar)
}

dsFunction();

var car = {
    name: "Audi",
    color: "Lightblue",
    year: 2002,
    kilometers: 270000,
    startEngine : function(){
        alert("vroom");
    }
}

console.log(car);

car.startEngine();

var computer = new Object();

computer.name = "Lenovo";
computer.CPU = "intel core i7";
computer.RAM = "16gb";
computer.GPU = "geforce";
computer.type = function(){
    return this.name+' , '+this.CPU+ ' , '+this.RAM+ ' , '+this.GPU;
};

alert(computer.GPU);
alert(computer.type());

delete computer.GPU;

function Computer(name,CPU,RAM,GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1 = new Computer("macbook" , "m1" , "8gp" , "5600");
var computer2 = new Computer("acer" , "intel" , "4gp" , "integrated");
