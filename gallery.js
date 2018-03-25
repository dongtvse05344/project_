function myStartFunction() {
  var time = setTimeout(function(){ alertFunc(); }, 5000);
}

function alertFunc(param1) {
    var n = document.getElementById("boxqc");
    n.style.visibility="visible";
       var myVideo = document.getElementById("video1"); 
    if (myVideo.pause) 
        myVideo.play(); 
    var body = document.getElementById("main1"); 
    body.style.opacity=0.6;
}
function close1() {
    var m = document.getElementById("boxqc");
    m.style.visibility="hidden";
    var myVideo = document.getElementById("video1"); 
    if (myVideo.play) 
        myVideo.pause(); 
    var body = document.getElementById("main1"); 
    body.style.opacity=1;

}

$(function(){

    $('.anhnho').click(function(event){
        console.log("123123");
        var a = $(this).next();
        var b =  $(this).next().next();
        a.css("opacity","1");
        a.css("visibility","visible");
        b.css("opacity","1");
        b.css("visibility","visible");
    });
})
    $(function(){
         
         $('.nenden').click(function(event){
            console.log("4444");
        var c =$(this);
        var d =$(this).prev();
        c.css("opacity","0");
        c.css("visibility","hidden");
        d.css("opacity","0");
        d.css("visibility","hidden");
    });
    })