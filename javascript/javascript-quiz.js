var x,y,z;
var count=0,snd;

var end=0;

document.addEventListener("DOMContentLoaded", function() {
var pass=localStorage.getItem("email_id");
document.getElementById("h11").innerHTML=pass;
});

function start(){
    x=document.getElementById("studname").value;
    y=document.getElementById("clgname").value;
    z=document.getElementById("cheq").checked;
    snd=document.getElementById("aud");
    x=x.trim();
    y=y.trim();
    if(x==""){
        snd.play();
        alert("Enter your name");
        document.getElementById("studname").style.border="solid 4px red";
    }
    else if(x.length<5){
        snd.play();
        alert("Enter your full name");
        document.getElementById("studname").style.border="solid 4px red";
    }
    else{
        localStorage.setItem("student_name",x);
        document.getElementById("studname").style.border="solid 3px green";
        count++;
    }
    if(y.trim()==""){
        snd.play();
        alert("Enter your Institution name");
        document.getElementById("clgname").style.border="solid 4px red";
    }
    else if(y.length<8){
        snd.play();
        alert("Enter your full Institution name");
        document.getElementById("clgname").style.border="solid 4px red";
    }
    else{
        document.getElementById("clgname").style.border="solid 3px green";
        count++;
    }
    if(z==true){
        document.getElementById("apt").style.color="white";
        count++;
    }
    else{
        snd.play();
        alert("Accept the terms and conditions");
        document.getElementById("apt").style.color="red";
    }
    if(count==3){
        end=1;
        window.open("quiz-start.html","_self");
    }
    count=0;
}

window.onbeforeunload = function(e) {
    if(end==1){
      window.location.reload(false); 
    }
    else{
        return "Are you sure";
    }
};