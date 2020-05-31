window.addEventListener('load',init);
function init(){
    document.getElementById('login1').addEventListener('click',doLogin);
}
function doLogin(){
    var userid=document.querySelector('#email').value;
    var pwd=document.querySelector('#password').value;
    var log_type=document.querySelector("input[name=a]:checked").value;
    if(!userid.localeCompare("teacher@gmail.com") && log_type=="admin"){
        location.href="dashboard.html";
         alert("Redirect to crud file!!!!!!");
      }
      else if(log_type=="student"){
    firebase.auth().signInWithEmailAndPassword(userid,pwd)
    .then(data=>{
            location.href="studentdashboard.html";
            alert("Redirect to student file!!!!!!");
        
    }).catch(function(error) {
        // Handle Errors here.

        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Invalid email and password");
        // ...
      });
    }
   // var message="";
    // if(!email && !pwd){
    //     // alert("please Fill userid & password");
    //     message="Please Fill UserId And Password";
    //     document.getElementById('error').innerText=message;
            
    // }
    // else if(email=="Teacher@gmail.com" && pwd=="Teacher123"){
    //      location.href="dashboard.html";
    //      alert("Redirect to crud file!!!!!!");
    // }
    // else{
    // if(email!=pwd){
    //     location.href="studentdashboard.html";
    //     alert("Redirect to Student file!!!!!!");
    // }
    // else{
    //     message="Invalid userid or password";
    //     document.querySelector('#error').innerText=message;
        
   
    // }
}

function reset(){
    
    
        document.getElementById("password").value="";
        document.getElementById("email").value="";
}
function register(){
    document.getElementById("login").style="display:none";
    document.getElementById("myForm").style="display:block";
    // var c_pwd=document.querySelector('#confirm_password').value;
    // var pwd=document.querySelector('#password').value;
    // var message="";
    // if(c_pwd===pwd){
    //     location.href="dashboard.html";
    // }
    // else{
    //     message="Invalid userid or password";
    // }
}
function doRegister(){
    var email=document.querySelector('#remail').value;
    var pwd=document.querySelector('#rpassword1').value;
    var c_pwd=document.querySelector('#rconfirmpassword').value;
    console.log(email,pwd,c_pwd);
   
    firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then(data=>{
        location.href="";
         alert("Redirect to crud file!!!!!!");
         }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage);
        // ...
      });
    }    
    // var message="";
    // if(!email && !pwd){
    //    alert(" please Fill userid & password");
    // }
    // else{
    // if(pwd===c_pwd){
        
    //     // location.href="";
    //     alert("Successfully Register!!!!!!!!!");
    //     alert("Redirect to Login Page");
    // }
    // else{
    //     message="Invalid email or password";
    //     document.querySelector('#error').innerText=message;
        
    // }
    // }
    
function doreset(){
    document.getElementById("rpassword1").value="";
    document.getElementById("remail").value="";
    document.getElementById("rconfirmpassword").value="";
}