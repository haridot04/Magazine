
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

console.log(tl);

tl.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 2 });
tl.fromTo('#college', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

tl.fromTo('#read', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.2");

var img = document.querySelector('main');
var freewayEaseTween = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true,
});

freewayEaseTween
    .set(img, { backgroundSize: "100% 100%" })
    // animate CSS autoAlpha to 1
    .to(img, 5, {
        backgroundSize: "+=100% +=50%",
        autoRound: false,
        ease: Power1.ease0ut
    })
    .progress(1).progress(0)
    .play(); 