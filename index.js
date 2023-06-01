gsap.registerPlugin(ScrollTrigger);
// $(".tent-main-grayscale").hover(
//   function () {
//     $(this).css({
//       "z-index": "1",
//       opacity: "0",
//     });

//     $(".tent-main-color").css({
//       opacity: "1",
//       transform: "scale3d(1.025, 1.10, 1.25) translate(-79%, 36%)",
//       transition: "all 0.6s ease-in",
//     });
//   },
//   function () {
//     $(".tent-main-color").css({
//       "z-index": "1",
//       transform: "scale3d(1, 1, 1) translate(-80%, 36%)",
//       transition: "all 0.6s ease-out",
//     });

//     $(this).css({
//       "z-index": "2",
//       opacity: "1",
//       transition: "all 0.6s ease-in-out",
//     });
//   }
// );

const textToArray = gsap.utils.toArray("#firstPara");
const baseTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: textToArray,
    start: "top 90%",
    end: "bottom 50%",
    scrub: 2,

    toggleActions: "play none play reverse",
  },
});

baseTimeline.from(textToArray, {
  y: 100,
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  skewX: 7,
  ease: "back.inOut",
});

const time = gsap.timeline();

gsap.utils.toArray(".cf-project-preview").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});
