anime({
  targets: "div .arrow",
  translateY: [
    { value: 20, duration: 100 },
    { value: 0, duration: 1000 },
  ],

  delay: function (el, i, l) {
    return 2500;
  },
  loop: true,
});

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


