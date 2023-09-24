anime({
  targets: "div.arrow",
  translateY: [
    { value: 20, duration: 1000 },
    { value: 0, duration: 250 },
  ],
  boxShadow: [
    // Initial shadow (at the top)
    {
      value: "0px 10px 10px -10px #FFFFFF",
      duration: 1000,
    },
    // No shadow
    {
      value: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
      duration: 1000,
    },
  ],
  loop: true,
  autoplay: true,
  delay: 750,
  easing: "easeInOutQuad", // Use easeInOutQuad easing for smoother animation
});




// Function to start the animation when the section becomes visible
function startAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Start the animation
      anime({
        targets: "button.anime_left",
        translateX: [
          { value: 18, duration: 650, easing: 'easeInOutQuad' },
          { value: -18, duration: 650, easing: 'easeInOutQuad' }, // Reverse animation
          { value: 0, duration: 500, easing: 'easeInOutQuad' }, // Reverse animation

        ],
        loop: true,
        autoplay: true,
        delay: 1500,
      });
 

      // Remove the observer since we only want to start the animation once
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(startAnimation, {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No additional margin
  threshold: 0.5, // When 50% of the element is visible
});

// Observe the section element
const section = document.getElementById("slider-food");
observer.observe(section);



anime({
  targets: "span.letter1",
  keyframes: [
    {translateY: -10},
    {translateY: 0},
  ],
  duration: 3500,
  easing: 'easeOutElastic(5, .1)',
  loop: false
});
anime({
  targets: "span.letter2",
  keyframes: [
    {translateY: -10},
    {translateY: 0},
  ],
  duration: 3500,
  easing: 'easeOutElastic(5, .2)',
  loop: false
});
anime({
  targets: "span.letter3",
  keyframes: [
    {translateY: -10},
    {translateY: 0},
  ],
  duration: 3500,
  easing: 'easeOutElastic(5, .3)',
  loop: false
});
anime({
  targets: "span.letter4",
  keyframes: [
    {translateY: -10},
    {translateY: 0},
  ],
  duration: 3500,
  easing: 'easeOutElastic(5, .4)',
  loop: false
});
anime({
  targets: "span.letter5",
  keyframes: [
    {translateY: -10},
    {translateY: 0},
  ],
  duration: 3500,
  easing: 'easeOutElastic(1, .5)',
  loop: false
});
anime({
  targets: "span.letter6",
  keyframes: [
    {translateY: -10},
    {translateY: 0},
  ],
  duration: 3500,
  easing: 'easeOutElastic(1, .6)',
  loop: false
});
anime({
  targets: "span.letter7",
  keyframes: [
    {translateY: -10},
    {translateY: 0},
  ],
  duration: 3500,
  easing: 'easeOutElastic(1, .7)',
  loop: false
});
anime({
  targets: "span.letter8",
  keyframes: [
    {translateY: -10},
    {translateY: 0},
  ],
  duration: 3500,
  easing: 'easeOutElastic(1, .8)',
  loop: false
});
anime({
  targets: "span.letter9",
  keyframes: [
    {translateY: -10},
    {translateY: 0},
  ],
  duration: 3500,
  easing: 'easeOutElastic(1, .9)',
  loop: false
});
const scroll_animation = anime({
  targets: '.img-figure',
  translateX: -1000,
  loop: false,
  duration: 2000,
  easing: 'easeInOutExpo'
});
const scroll_animation_2 = anime({
  targets: '.img-figure-r',
  translateX: 1000,
  loop: false,
  duration: 2000,
  easing: 'easeInOutExpo'
});
const animateOnscroll = function(div,speed= 200,offset=250){
  const scroll_p = window.pageYOffset - div.offsetTop;
  return (scroll_p + offset) / speed;
}
const section2 = document.querySelector("#slider-food")

window.onscroll = function (){
  scroll_animation.seek(animateOnscroll(section2)*scroll_animation.duration);
  scroll_animation_2.seek(animateOnscroll(section2)*scroll_animation_2.duration);


}


