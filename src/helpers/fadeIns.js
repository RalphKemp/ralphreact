import { TimelineMax, TweenMax } from "gsap";

export function fadeCards() {
  const tl = new TimelineMax();
  tl.to("#card-one", 0.4, { opacity: 1, delay: 0.3})
    .to("#card-two", 0.4, { opacity: 1 });

  TweenMax.to("#bean-div", 0.8, { opacity: 0.8, delay: 1.1 })
}
