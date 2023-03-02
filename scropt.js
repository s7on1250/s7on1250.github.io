const about1 = document.querySelector(".about-one");
const about2 = document.querySelector(".about-two");
const feedback = document.querySelector(".feed");
const sfeedback = document.querySelector(".sfeed");
window.addEventListener("scroll", function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset > 1){
        about1.classList.add("active");
    }
    if(window.pageYOffset > 195){
        about2.classList.add("active");
    }
    if(window.pageYOffset > 512){
        feedback.classList.add("active");
    }
    if(window.pageYOffset > 842){
        sfeedback.classList.add("active");
    }
})
