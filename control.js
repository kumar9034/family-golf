var crsr = document.querySelector(".cursor")
var crsrblur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsrblur.style.left = dets.x -250 +"px"
    crsrblur.style.top = dets.y -250 +"px"
    
})
var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"

    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"

    })
})



gsap.to(".nav",{
    backgroundColor :"#000",
    height:"120px",  
    duration:1,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }
})

gsap.to(".main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -25 %",
        end:"top -70%",
        scrub:2
    }
})
gsap.from(".notic img, .about-us",{
    y:90,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".notic",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3,
    }
})
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})
gsap.from(".colon1",{
    y:-10,
    x:-10,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        start:"top 20%",
        end:"top 70%",
        scrub:4
    }
})
gsap.from(".write-notic img",{
    y:10,
    x:20,
    scrollTrigger:{
        trigger:".write-notic img",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 40%",
        scrub:4
    }
})
gsap.from(".page3 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:"body",
        start:"top 75%",
        // markers:true,
        end:"top 70%",
        scrub:5
    }
}
)