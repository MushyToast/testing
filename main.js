$(document).ready(function(){
    var h1 = document.getElementById("women")
    document.getElementById('men').onclick = function(){
        $("#women").animate({duration: '5',opacity: '0'
    }, 100)
    }
})