
var textWrapper = document.querySelector('.main-intro-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const tl = gsap.timeline({ defaults: { ease: "power1.out" , loop: true} })
tl.to(".main-text", {opacity: 1, duration: 1})
tl.fromTo(".letter",{opacity: 0}, { opacity: 1, duration: 0.8, stagger: 0.05 , ease: "power3.inOut"});
