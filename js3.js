//--------------DATE----------------
// var date = new Date(); //new object
// console.log(date.getFullYear() + " - year");
// console.log(date.getMonth() + 1 + " - month"); //starting from 0
// console.log(date.getDate() + " - date"); 
// console.log(date.getHours() + " - hours");
// console.log(date.getMinutes() + " - minutes");
// alert("The time is: " + date.getHours() + ":" + date.getMinutes() );

// date.setMinutes(20);
// alert("The time is: " + date.getHours() + ":" + date.getMinutes() ); //my time 

//--------------ARRAYS----------------
// var arr = [8,5,90,7,8,9]
// console.log(arr.length + " - the length")
// console.log(arr + " - an array")
// console.log(arr.join(", ")) //make a line of array elements separated by , 
// console.log(arr.join("|||"))  //elements separated by |||
// console.log(arr.sort()) 
// console.log(arr.reverse()) 
// var string = arr.reverse().join("$ "); //reversed and separated by $ 
// console.log(string) 
// console.log(string.split("$ ")) //split elements by $ - numbers become letters here , JOIN made them letters

//------------CLASSES AND OBJECTS---------------------------
class Person {
    constructor(name, age, happiness){
        this.name = name;
        this.age= age;
        this.happiness = happiness;
    }
    info() {
        if(this.happiness == true){
            console.log(this.name + " is happy!")
        }else{
            console.log(this.name + " is unhappy :(")
        }
    }
   
}

var alex = new Person("Alex", 25, true);
var bob = new Person("Bob", 35, false);
console.log(alex.name +" is " + alex.age + " years old" )
console.log(bob.name +" is " + bob.age + " years old" )
alex.name = 'Alexander';
console.log(alex.name +" is " + alex.age + " years old" )
alex.info();
bob.info();

