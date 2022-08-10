const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "Power3.easeout" },
});

tl.fromTo(".logo h1", { opacity: 0 }, { opacity: 1 });
tl.fromTo(".book-now", { opacity: 0 }, { opacity: 1 });
tl.fromTo(".social-media-icon", { opacity: 0 }, { opacity: 1 });
tl.fromTo(".nav-bar", { y: "-20%", opacity: 0 }, { y: "0", opacity: 1 }, "<");
tl.fromTo("#hero", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 });
tl.fromTo(
  ".slider-content h3",
  { opacity: 0, scale: 0.5 },
  { opacity: 1, scale: 1 }
);
tl.fromTo(
  ".slider-content h1",
  { opacity: 0, x: "-10%" },
  { opacity: 1, x: 0 }
);
tl.fromTo(
  ".slider-content h1 span.dolls-ani",
  { opacity: 0, x: "20%" },
  { opacity: 1, x: 0 },
  "<"
);

// tl.fromTo(
//   ".scroll-animated",
//   { opacity: 0, x: "-10%", scrollTrigger: ".scroll-animated" },
//   { opacity: 1, x: 0 }
// );
