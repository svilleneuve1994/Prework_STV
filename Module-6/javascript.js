document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.background = "blue";

});

document.getElementById("circleBtn").addEventListener("click", function(){

    document.getElementById("box").style.borderRadius = "50%";

});

document.getElementById("borderBtn").addEventListener("click", function(){

    document.getElementById("box").style.border = "thick solid #000";

});

document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0";

});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.background = "orange";
    document.getElementById("box").style.borderRadius = "0";
    document.getElementById("box").style.border = "none";
    document.getElementById("box").style.opacity = "1";

}); 