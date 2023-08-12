// Buat 4 foto Home Page otomatis Carousel
var hero1 = document.querySelectorAll(".hero-image-1")[0]
var hero2 = document.querySelectorAll(".hero-image-2")[0]
var hero3 = document.querySelectorAll(".hero-image-3")[0]
var hero4 = document.querySelectorAll(".hero-image-4")[0]

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



// Buat typewritter otomatis
var textSample1 = "Happy Anniversary Bubub! Terima kasih udah jadi pacar terbaik buat aku, yang mau nemenin aku kapan aja dan dimana aja. Makasi juga udah selalu setia dan sabar menghadapi aku. Aku minta maaf ya kalo selama ini bikin kamu kesel, bikin kamu ga nyaman, pokoknya semua kesalahan - kesalahanku sengaja maupun tidak sengaja. Aku janji akan selalu berusaha menjadi cowok yang lebih baik buat kamu setiap harinya, yang bisa bikin kamu selalu nyaman dan bahagia."
var textSample2 = "Ngga terasa udah setahun kita balikan Bub. Udah setahun loh aku tembak kamu malem-malem di mobil di depan rumahmu. Aku seneng banget waktu itu Bub. Aku pulang ga berhenti mikirin kamu. Aku ngga nyangka akhirnya aku pacaran sama kamu lagi. Selama setahun ini banyak hal yang udah kita lewatin. Aku bersyukur banget punya pacar kayak kamu Bub. Selama setahun ini aku ga pernah yang namanya kesel sama kamu atau merasa punya pacar itu nyusahin. Hebat kamu Bub, aku kagum sama kesabaranmu Bub. Sekali lagi makasi buat semuanya Bub dan maaf kalo aku belum sempurna yaa."
var textSample3 = "Selamat hari jadi hubungan kita sayang. Semoga cinta kita tetap awet selamanya. Aku selalu sayang kamu Bub. I Love You Bubub!"
var titleSample = "Selamat Hari Jadian"

var titleParagraph = document.getElementsByClassName("title-paragraph")[0]
var textParagraph1 = document.getElementsByClassName("text-paragraph")[0]
var textParagraph2 = document.getElementsByClassName("text-paragraph")[1]
var textParagraph3 = document.getElementsByClassName("text-paragraph")[2]

var i = 0
var j = 0
function types(){
    if(i < titleSample.length && j == 0){
        titleParagraph.textContent += titleSample[i]
        i++
        setTimeout(types,100) 
    } else if(i == titleSample.length && j == 0){
        i = 0
        j++
        setTimeout(types,100)
    }
    if(i < textSample1.length && j == 1){
        textParagraph1.textContent += textSample1[i]
        i++
        setTimeout(types,100)
    } else if(i == textSample1.length && j == 1){
        i = 0
        j++
        setTimeout(types,100)
    } else if(i < textSample2.length && j == 2){
        textParagraph2.textContent += textSample2[i]
        i++
        setTimeout(types,100)
    } else if(i == textSample2.length && j == 2){
        i = 0
        j++
        setTimeout(types,100)
    } else if(i < textSample3.length && j == 3){
        textParagraph3.textContent += textSample3[i]
        i++
        setTimeout(types,100)
    }
}


// Tombol See More
var homeButton = document.querySelectorAll(".home-button")[0]
function klik(){
    document.body.style.overflow = "visible"

    window.scrollBy(0, window.innerHeight-window.scrollY)

    types()
    
    var audio = new Audio("Perfect Ed Sheeran.mp3")
    audio.play()

    homeButton.onclick = false
}
// homeButton.onclick = klik


// Surprise Kado Bawah
var giftPage = document.querySelectorAll(".gift-page")[0]
var gift = document.querySelectorAll(".gift")[0]
function surprise(){
    gift.style.opacity = "100%"
    gift.style.width = "180px"
    gift.style.height = "180px"

    function surprise2(){
        var giftTextHeader = document.createElement("h2")
        giftTextHeader.innerText = "SURPRISE!"
        giftPage.appendChild(giftTextHeader)
        var giftText = document.createElement("h3")
        giftText.innerText = "DI BAWAH KURSI !!!"
        giftPage.appendChild(giftText)
    }
    setTimeout(surprise2,500)
}

// var a = document.querySelectorAll(".home-page")[0].offsetHeight
// var b = document.querySelectorAll(".paragraph")[0].offsetHeight
// var c = document.querySelectorAll(".photo-album")[0].offsetHeight
// var giftScrollEffect = a + b + c - 100
// window.onscroll = function(){
//     if(window.scrollY > giftScrollEffect ){
//         gift.style.transform = "translateY(0%)"
//     }
// }

function alert(){
    alert("Tunggu lengkapnya besok ya bubub hihi")
}

