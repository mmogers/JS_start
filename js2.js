//----------------Intervals------------------------
//intervals allow to run the code throuth some intervals of time 

// var id = setInterval(my_func, 1000); //1- name or functions, miliseconds
// var counter = 0 ;
// function my_func(){
//     counter++;
//     console.log(counter)

//     if (counter == 3){
//         clearInterval(id) //stops the execution
//     }
// }
 //-------------------or------------------

// var counter =0 ;
// setInterval(function(){
//     counter++;
//     console.log("Seconds passed: " + counter);
// }, 1000);

//---------------TIMER--------------------

setTimeout(function(){
console.log("Timer is working after 2 sec")
}, 2000); //1 - function, after what time the func is running
