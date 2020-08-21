document.querySelector("#menu-btn").addEventListener("click",function(){
    document.querySelector(".nav-pop").classList.toggle("active");
})

document.querySelector(".p4").attributes[1].nodeValue = document.querySelector(".p4").childNodes[0].textContent;

document.querySelector("#p1").addEventListener("mouseover",function(){
    document.querySelector(".second-back").style.backgroundImage = "url('../static/img/mansbuy-back.jpg')"
})

document.querySelector("#p2").addEventListener("mouseover",function(){
    document.querySelector(".second-back").style.backgroundImage = "url('../static/img/calendar-back.jpg')"
})

document.querySelector("#p3").addEventListener("mouseover",function(){
    document.querySelector(".second-back").style.backgroundImage = "url('../static/img/mansbuy-back.jpg')"
})