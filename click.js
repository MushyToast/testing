var clicks = 0
$(document).ready(function(){
    const button = document.getElementById("bobux")
    const count = document.getElementById("count")
    $(button).click(function(){
        clicks = clicks + 1
        count.innerHTML = toString(clicks)
    })
})