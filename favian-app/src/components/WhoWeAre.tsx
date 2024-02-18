import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import "./WhoWeAre.scss";
type Props = {
  title: string;
  paragraphe: string;
};

const WhoWeAre = ({ title, paragraphe }: Props) => {
  // @ts-ignore
  const slideInleft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 1.1,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    // @ts-ignore
    slideInleft("#who-we-are");
  }, []);

  return (
    <div className="who-we-are">
      <div className="who-we-are__container" id="who-we-are">
        <h1 className="who-we-are__title">{title}</h1>
        <p className="who-we-are__paragraph">{paragraphe}</p>
      </div>
    </div>
  );
};

export default WhoWeAre;
