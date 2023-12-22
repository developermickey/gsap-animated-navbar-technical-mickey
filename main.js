gsap.registerPlugin(ScrollTrigger); 


gsap.from(".nav", {
    duration: 0.5,
    opacity: 0,
    y: "-100%",
    stagger: 0.2,
    delay: 0.1,
})
gsap.from(".text1", {
    duration: 0.5,
    opacity: 0,
    y: "-100%",
    stagger: 0.2,
    delay: 0.3,
})

gsap.from(".text2", {
    duration: 0.5,
    opacity: 0,
    y: "-100%",
    stagger: 0.2,
    delay: 0.5,
})

gsap.from(".text3", {
    duration: 0.5,
    opacity: 0,
    y: "-100%",
    stagger: 0.2,
    delay: 0.7,
})
gsap.from(".text4", {
    duration: 0.5,
    opacity: 0,
    y: "-100%",
    stagger: 0.2,
    delay: 0.9,
})


gsap.from(".list1", {
    duration: 0.5,
    opacity: 0,
    y: "-100%",
    stagger: 0.2,
    delay: 0.5,
})
gsap.from(".list2", {
    duration: 0.5,
    opacity: 0,
    y: "-100%",
    stagger: 0.2,
    delay: 0.8,
})

gsap.from(".list3", {
    duration: 0.5,
    opacity: 0,
    y: "-100%",
    stagger: 0.2,
    delay: 1,
})

gsap.from(".list4", {
    duration: 0.5,
    opacity: 0,
    y: "-100%",
    stagger: 0.2,
    delay: 1.3,
})


gsap.to(".nav", {
    backgroundColor: "white",
    color: "black",
    duration: 0.5,
    stagger: 0.2,
    delay: 1,
    scrollTrigger: {
        trigger: "#page2",
        start: "top 10%",
        end: "top 100%",
        scrub: true
    },
})

gsap.to(".nav ul li a", {
    color: "black",
    duration: 0.5,
    stagger: 0.2,
    delay: 1,
    scrollTrigger: {
        trigger: "#page2",
        start: "top 10%",
        end: "top 100%",
        scrub: true
    }
})