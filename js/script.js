document.addEventListener("DOMContentLoaded", function () {
  var menuAnimation = gsap.timeline({ paused: true });
  var menuAnimationBack = gsap.timeline({ paused: true, reversed: true });

  var navMain = document.getElementById("nav-main");
  var menuButton = document.getElementById("menu-button");
  var toggleIcon = document.querySelector(".toggle");

  var toggle = true;

  gsap.set('.link', { y: 30, autoAlpha: 0 });

  menuAnimation
    .to(navMain, {
      duration: 0.8,
      height: '100%',
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power2.inOut"
    })
    .to('.link', {
      duration: 0.5,
      autoAlpha: 1,
      y: 0,
      stagger: 0.2,
      ease: "power4.out"
    }, "-=0.2");

  menuAnimationBack
    .to('.link', {
      duration: 0.4,
      autoAlpha: 0,
      y: 30,
      stagger: 0.15,
      ease: "power4.in"
    })
    .to(navMain, {
      duration: 0.55,
      height: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      ease: "power4.in"
    });

  menuButton.onclick = function () {
    toggle = !toggle;
    toggleIcon.classList.toggle("active");

    toggle === false
      ? menuAnimation.play(0)
      : menuAnimationBack.play(0);
  };

  function setMenuMargin() {
    const header = document.querySelector("header");
    const menuContent = document.querySelector(".menu-content");

    if (header && menuContent) {
      const headerHeight = header.offsetHeight;
      menuContent.style.marginTop = headerHeight + "px";
    }
  }
  setMenuMargin();
  window.addEventListener("resize", setMenuMargin);

});
