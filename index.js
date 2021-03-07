
setInterval(AddTimer, 1000);

function ChangePos(){
    
    let Circle = document.getElementById("crc");
    


    let RandomN = Math.floor(Math.random()*100);
    let RandomN2 = Math.floor(Math.random()*100);


   
    if(RandomN >= 90){
        RandomN = RandomN/2;
    }else if(RandomN <= 20){
        RandomN = RandomN * 2;
    }
    if(RandomN2 >= 90){
        RandomN2 = RandomN2/2;
    }else if(RandomN2 <= 20){
    RandomN2 = RandomN2 * 2;
    }



    Circle.style.left = RandomN + "%"
    Circle.style.top = RandomN2 + "%"

    let Counter = document.getElementById("Counter");

    Counter.innerHTML = parseInt(Counter.innerHTML)+1;
    document.getElementById("Counter") = Counter;
   
}
function AddTimer(){
    let crc = document.getElementById("crc")
    let Timer = document.getElementById("Timer")
    

    if(Timer.innerHTML != 0){
        Timer.innerHTML = parseInt(Timer.innerHTML)-1
    }else{
        crc.style.pointerEvents = "none";
    }
    
}
