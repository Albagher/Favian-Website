import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import "./Presentation.scss"
function Presentation() {
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
 // @ts-ignore
      const slideInleft1 = (elem, delay, duration) => {
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
            duration: duration || 1.7,
            // scrollTrigger: {
            //   trigger: elem,
            //   start: "top center",
            //   end: "bottom center",
            // },
          }
        );
      };
        // @ts-ignore
      const slideInleft2 = (elem, delay, duration) => {
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
            duration: duration || 2,
            // scrollTrigger: {
            //   trigger: elem,
            //   start: "top center",
            //   end: "bottom center",
            // },
          }
        );
      };


      useEffect(() => {
         // @ts-ignore
        slideInleft("#title");
      }, []);

      useEffect(() => {
         // @ts-ignore
        slideInleft1("#subtitle");
      }, []);

      useEffect(() => {
         // @ts-ignore
        slideInleft2("#btntext");
      }, []);

  return (
    <div className='presentation'>
      {/* titre */}
      <div className="presentation__titel">
        <h1 id="title">

            <span className='titel--text'>

            Welcome to Favian, Your Trusted <br /> Business Consultant

            </span>
        </h1>

      </div>
 {/* sous titre */}
      <div className="presentation__subtitel">

  <p className='subtitl--text' id="subtitle">
  Leverage Data Analysis to Drive Informed Decision-Making and Optimize Your Business Strategies


  </p>
      </div>
 
  {/* btn */}

<div className="presentation__btn " id="btntext">

  <button className='btn--text' >Explore Our Services</button>
</div>
    </div>
  )
}

export default Presentation