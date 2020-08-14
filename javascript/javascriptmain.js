
var pwd,email,x,y,z=0,snd;

function start_quiz(){
    snd=document.getElementById("aud");
    pwd=document.getElementById("password").value;
    email=document.getElementById("email").value;
    x=/^([a-z A-Z 0-9 \.-]+)@([a-z A-Z 0-9 -]+)\.([a-z]{2,10})(.[a-z]{2,10})?$/;
    y=/[a-z A-Z 0-9]{8,20}/;
    if(x.test(email)){
        document.getElementById("email").style.border="solid 4px green";
        z++;
    }
    else{
        snd.play();
        alert("Enter a Valid E-mail");
        document.getElementById("email").style.border="solid 6px red";
    }
    if(pwd.trim()==""){
        snd.play();
        alert("Enter Your Password");
        document.getElementById("password").style.border="solid 6px red";
    }
    else if(y.test(pwd)){
        document.getElementById("password").style.border="solid 4px green";
        z++;
    }
    else{
        snd.play();
        alert("Enter a Password of length atleast 8 Characters");
        document.getElementById("password").style.border="solid 6px red";
    }
    if(z==2){
        window.open("quiz-entry.html","_self");
    }
    z=0;
}