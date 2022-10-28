window.onload = function(){
    var text = document.getElementById("h1")
    document.getElementById("btn").onclick=function(){
        alert(document.getElementById("amogsus").value)
        text.innerHTML = "sussy boi"
    }
    document.getElementById("amogsus2").onclick = function(){
        document.getElementById("h1").innerHTML = document.getElementById("amogsus").value
    }
    document.getElementById("clear").onclick = function(){
        document.write(fetch("https://mushytoast.github.io/mysite/index.html"))
    }
}
