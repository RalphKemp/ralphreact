import { TimelineMax, TweenMax } from "gsap";

export function fadeCards() {
  const tl = new TimelineMax();
  tl.to("#card-one", 0.4, { opacity: 1, delay: 0.2 }).to("#card-two", 0.4, {
    opacity: 1
  });

  TweenMax.to("#bean-div", 0.7, { opacity: 1, delay: 1 });
}
