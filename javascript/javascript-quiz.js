var x,y,z;
var count=0,snd;
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
        window.open("index3.html","_self");
    }
    count=0;
}