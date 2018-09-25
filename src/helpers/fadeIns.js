import { TimelineMax } from "gsap";

export function fadeCards() {
  const tl = new TimelineMax();
  tl.to("#bean-div", 0.3, { opacity: 0.8, delay: 0.2 })
    .to("#card-one", 0.3, { opacity: 1 })
    .to("#card-two", 0.3, { opacity: 1 });
}
