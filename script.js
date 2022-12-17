window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 9 || document.documentElement.scrollTop > 9){
        document.getElementById("btn").style.display = "block";
    }
    else {
        document.getElementById("btn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}