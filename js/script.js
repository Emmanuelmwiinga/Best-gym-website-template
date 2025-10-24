const CustomEaseCreated = CustomEase.create("custom", ".87,0,.13,1");
const counter = document.getElementById("counter");

gsap.set(".video-container", {
  scale: 0,
  rotation: -20,
});

gsap.to(".hero", {
  clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
  duration: 1.5,
  ease: CustomEaseCreated,
  delay: 1,
});

gsap.to(".hero", {
  clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
  duration: 2,
  ease: CustomEaseCreated,
  delay: 3,
  onStart: () => {
    gsap.to(".progress-bar", {
      width: "100vw",
      duration: 2,
      ease: CustomEaseCreated,
    });

    gsap.to(counter, {
      innerHTML: 100,
      duration: 2,
      ease: CustomEaseCreated,
      snap: { innerHTML: 1 },
    });
  },
});

gsap.to(".hero", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 1,
  ease: CustomEaseCreated,
  delay: 5,
  onStart: () => {
    gsap.to(".video-container", {
      scale: 1,
      rotation: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.25,
      ease: CustomEaseCreated,
    });

    gsap.to(".progress-bar", {
      opacity: 0,
      duration: 0.3,
    });

    gsap.to(".logo", {
      left: 0,
      transform: "translateX(0%)",
      duration: 0.25,
      ease: CustomEaseCreated,
      onStart: () => {
        gsap.to(".char anim-out h1", {
          y: "100%",
          duration: 1,
          stagger: -0.75,
          ease: CustomEaseCreated,
        });

        gsap.to(".char anim-in h1", {
          x: "-1200%",
          duration: 1,
          ease: CustomEaseCreated,
          delay: 0.25,
        });
      },
    });
  },
});

gsap.to(".header span", {
  y: "0%",
  opacity: 1,
  duration: 1,
  ease: "power3.out",
  delay: 5.75,
  stagger: 0.15,
});

gsap.to(".header span", {
  y: "0%",
  duration: 1,
  ease: "power3.out",
  delay: 5.75,
  stagger: 0.175,
});