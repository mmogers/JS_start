//_________________________1__________________________
//console.log("Hello")
//alert("alert window")
//var confirm_true = confirm("confirm window: yes, no ")
//var text = prompt("enter some text yo prompt window")
//console.log(confirm_true + " confirm")
//console.log("prompt text " + text)
//________________________2_____________________________
/*var text = document.getElementById('text1');
console.log(text.id)
console.log(text.title)
text.title = "new text" //we can give a new value to the attribute
console.log(text.title)

//from css
text.style.color = "red";//can change style
text.style.backgroundColor = "lightGray"; //background - clor -> backgroundColor = camel case
text.innerHTML = "New<br>text";
document.getElementById('text1').style.color = "orange"; //we can not create a new var

var spans = document.getElementsByTagName('span') //an array , even if we have 1 object the array will be returned
console.log('spans: ')
for(var i =0 ; i < spans.length; i++){
   console.log(spans[i].innerHTML) //innerHTML helps to assign and take out a value
}
console.log('spans with class: ')
var spansWithClass = document.getElementsByClassName('simple-text')
for(var i =0 ; i < spansWithClass.length; i++){
    console.log(spansWithClass[i].innerHTML) //innerHTML helps to assign and take out a value
 } */
 //--------------------------3----------------------------
 document.getElementById('main-form').addEventListener('submit', checkForm); 
 //which event - submit, click, which form is called-checkForm

 //function checkForm(el){
function checkForm(event){

    event.preventDefault(); //turn off the default restart of the page
    var el = document.getElementById('main-form') //add this line 


    //var name = document.getElementById('name').value;
    //through element this
    var name = el.name.value;
    var pass = el.pass.value; //by name
    var repass = el.repass.value;
    var state = el.state.value;
 
    var fail = "";
    if(name == "" || pass == "" || state == "") {
        fail = "Fill in all the fields!"
    } else if (name.length <= 1 || name.length > 50){
        fail = "Enter the correct name"
    }else if(pass != repass){
        fail = "Passords should match!"
    }else if(pass.split('&').length> 1 ){
        fail = "Incorrect password, Should not include &!"
    }

    if (fail != ""){
        //alert(fail)
        document.getElementById('error').innerHTML = fail;
    }else{
        alert("All the fields are correctly filled!")
        window.location = 'https://www.google.com/'; //can redirect to other page 
    }
    return false;

 }
