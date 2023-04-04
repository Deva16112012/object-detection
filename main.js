x="";
object=[];
status1="";
function preload(){
    x=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    g=ml5.objectDetector('cocossd',v);
    document.getElementById("j").innerHTML="Status :  Object Detecting";
}
function draw(){
    image(x,0,0.640,420);
    if(status1 != ""){
        for(i=0;i<object.length;i++){
            document.getElementById("j").innerHTML="Status : Object Detected";
            z=floor(object[i].confidence*100);
            text(object[i].label+" "+z+"%",object[i].x+15,object[i].y+15);
            fill("blue");
        noFill();
        stroke("blue");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}
function v(){
    console.log("YES! I am fully loaded");
    status1=true;
    g.detect(x,ans);
}
function ans(error,result){
    if(error){
        console.log(error);
    }
    console.log(result);
    object=result;
}