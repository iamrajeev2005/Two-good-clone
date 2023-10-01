function videoconAnimation() {
    var videocontainer = document.querySelector("#video-container");
    var playbtn = document.querySelector(".play");
    videocontainer.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocontainer.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    videocontainer.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
  videoconAnimation();

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive();

function navbarAnimation(){
    gsap.to("#nav-part1 svg",{
        transform: "translateY(-155%)",
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page1",
            // markers: true,
            start:"top 0%",
            end:"top -2%",
            scrub:1
        }
    })
    gsap.to("#nav-part2 #links",{
        transform: "translateY(-155%)",
        opacity:0,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page1",
            // markers: true,
            start:"top 0%",
            end:"top -2%",
            scrub:1
        }
    })
}
navbarAnimation();

function page1animation(){
    gsap.from("#page1 h1",{
        y  : 100,
        opacity : 0,
        stagger : 0.3,
        delay: .3,
        duration:.6
    });
    gsap.from("#page1 #video-container",{
        y  : 100,
        opacity : 0,
        delay: 1.1,
        duration:.6
    });
}
page1animation();

function itemanimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            left:dets.x,
            top:dets.y,
        });
    });
    document.querySelectorAll("#page3 .boxes").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(".cursor",{
                opacity:.6,
                transform: 'translate(-50%,-50%) scale(1)'
            });
        });
        elem.addEventListener("mouseleave",function(){
            gsap.to(".cursor",{
                opacity:.6,
                transform: 'translate(-50%,-50%) scale(0)'
            });
        });
    });
}
itemanimation();

function smallanimations(){
  gsap.from("#page2-end",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:"#page2-end",
      scroller:"#main",
      // markers:true,
      start:"top 90%",
      end:"top 30%",
      scrub:2,
      stagger:.4,
    }
  })
  gsap.from("#page5",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:"#page5",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 20%",
      scrub:2,
      stagger:.4,
    }
  })
  gsap.from("footer .elemlast .writing img",{
    y:100,
    opacity:0,
    duration:.2,
    scrollTrigger:{
      trigger:"footer .elemlast .writing img",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 20%",
      scrub:1,
    }
  })
}
smallanimations();
