//****************   ******************/
// Header Title Animation
//****************   ******************/
const headerTitle = document.querySelector(".header-title");
const headerTitleContent = headerTitle.textContent;
const headerTitleArray = headerTitleContent.split("");
headerTitle.textContent = "";

for(let i=0; i<headerTitleArray.length; i++){
    headerTitle.innerHTML += `<span>${headerTitleArray[i]}</span>`;
}

let index = 0;
let timer = setInterval(animaText,60);

function animaText(){
    const span = headerTitle.querySelectorAll("span")[index];
    span.classList.add("animate");
    index ++;
    if(index === headerTitleArray.length){
        clearInterval(timer);
        index = 0;
    }
};

//****************   ******************/
// Header Text Animation
//****************   ******************/
const blinkWorks = ["coding","doing project","learning","workout"];
const blinkText = document.querySelector(".headerP");
const cursor = document.querySelector(".cursor");
let arrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < blinkWorks[arrayIndex].length){
        if(!cursor.classList.contains("typing"))
        cursor.classList.add("typing");
        blinkText.textContent += blinkWorks[arrayIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(type,200);
    }else{
        cursor.classList.remove("typing");
        setTimeout(erase,2000);
    }
}

function erase(){
    if(charIndex > 0){
        if(!cursor.classList.contains("typing"))
        cursor.classList.add("typing");
        blinkText.textContent = blinkWorks[arrayIndex].substring(0,charIndex-1);
        charIndex --;
        setTimeout(erase,100)
    }else{
        cursor.classList.remove("typing");
        arrayIndex ++;
        if(arrayIndex >= blinkWorks.length){
            arrayIndex = 0;
        }
        setTimeout(type,1000);
    }
}


document.addEventListener("DOMContentLoaded",()=>{
    type();
})

//****************   ******************/
// modal window Wechat Animation
//****************   ******************/
const svgWechat = document.querySelector(".wechatIcon");
const svgQr = document.querySelector(".wechatQRdiv");

svgWechat.addEventListener("click",()=>{
    if(svgQr.style.display === "block"){
        svgQr.style.display = "none";
    }else{
        svgQr.style.display = "block"
    }
})

//********************************** */
// Adding SVG hover with tooltips
//********************************** */
for(let i = 1; i < 10; i ++ ){
    const iconDiv = document.querySelectorAll(".forjs");
    const span = document.querySelectorAll(".span");
    iconDiv[i-1].onmousemove = function(e){
        let x = e.clientX;
        let y = e.clientY;
    
        span[i-1].style.top = (y + 10) + "px";
        span[i-1].style.left = (x + 10) + "px";}
}


