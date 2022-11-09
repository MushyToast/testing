$(document).ready(function(){
    const button = document.getElementById("bobux")
    const count = document.getElementById("count")
    let clicks = 0
    $(button).click(function(){
        clicks += 1
        count.innerHTML = clicks
    })
})