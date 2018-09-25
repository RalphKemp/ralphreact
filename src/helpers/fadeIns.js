import { TimelineMax } from "gsap";

export function fadeCards() {
  const tl = new TimelineMax();
  tl.to("#card-one", 0.3, { opacity: 1, delay: 0.3 }).to("#card-two", 0.3, { opacity: 1 });
}
