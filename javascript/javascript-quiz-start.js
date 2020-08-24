var q1,q2,mark=0;
var cheq,snd;
var arr=new Array;

var end=0;

var pass_2;

document.addEventListener("DOMContentLoaded", function() {
    pass_2=localStorage.getItem("student_name");
    document.getElementById("general").innerHTML=" General Quiz - "+pass_2;
});

function func(){
    for(var i=0;i<20;i++){
        arr[i]=document.getElementById("q"+i);
        if(arr[i].checked==true){
            mark++;
        }
    }
    cheq=document.getElementById("cheq").checked;
    snd=document.getElementById("aud");
    if(cheq==true){
        document.getElementById("apt").style.color="green";
        if(mark>=15){
            end=1;
            window.open("quiz-congrats.html","_self");
        }
        else{
            end=1;
            window.open("quiz-reattend.html","_self");
        }
    }
    else{
        snd.play();
        document.getElementById("apt").style.color="red";
        alert("Accept the above Condition");
    }
    mark=0;
}

window.onbeforeunload = function(e) {
    if(end==1){
      window.location.reload(false); 
    }
    else{
        return "Are you sure";
    }
};