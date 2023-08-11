var hero1 = document.querySelectorAll(".hero-image-1")[0]
var hero2 = document.querySelectorAll(".hero-image-2")[0]
var hero3 = document.querySelectorAll(".hero-image-3")[0]
var hero4 = document.querySelectorAll(".hero-image-4")[0]

function klik(){
    window.scrollBy(0, window.innerHeight)
}

var x = 0
setInterval(function shift(){
    if(x == 0){
        hero1.style.transform = "translateX(-100%)"
        hero2.style.transform = "translateX(-100%)"
        hero3.style.transform = "translateX(-100%)"
        hero4.style.transform = "translateX(-100%)"
        x+=2
    } else if(x == 1){
        hero2.style.visibility = "visible"
        hero4.style.visibility = "hidden"
        hero1.style.transform = "translateX(-100%)"
        hero2.style.transform = "translateX(-100%)"
        hero3.style.transform = "translateX(-100%)"
        x++    
    } else if(x == 2){
        hero3.style.visibility = "visible"
        hero1.style.visibility = "hidden"
        hero2.style.transform = "translateX(-200%)"
        hero3.style.transform = "translateX(-200%)"
        hero4.style.transform = "translateX(-200%)"
        x++
    } else if(x == 3){
        hero4.style.visibility = "visible"
        hero2.style.visibility = "hidden"
        hero3.style.transform = "translateX(-300%)"
        hero4.style.transform = "translateX(-300%)"
        hero1.style.transform = "translateX(100%)"
        x++
    } else if(x == 4){
        hero1.style.visibility = "visible"
        hero3.style.visibility = "hidden"
        hero4.style.transform = "translateX(-400%)"
        hero1.style.transform = "translateX(0%)"
        hero2.style.transform = "translateX(0%)"
        x = 1
    }    
},10000)