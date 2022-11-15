$(document).ready(function(){
    const button = document.getElementById("bobux")
    const button2 = document.getElementById("xtra")
    const button3 = document.getElementById("xxtra")
    const count = document.getElementById("count")
    let clicks = 0
    $(button).click(function(){
        clicks += 1
        count.innerHTML = clicks
    })
    $(button2).click(function(){
        clicks += 10
        count.innerHTML = clicks
    })
    $(button3).click(function(){ 
        clicks += 50
        count.innerHTML = clicks
    })
})
