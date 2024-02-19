import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import "./AboutUsMoreInfo.scss";
type Props = {};

const AboutUsMoreInfo = (props: Props) => {
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
    const slideInbottom = (elem, delay, duration) => {
      gsap.fromTo(
        elem,
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
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
      slideInbottom("#services-item");
    }, []);

    useEffect(() => {
      // @ts-ignore
      slideInbottom("#acceleration-item");
    }, []);

    useEffect(() => {
      // @ts-ignore
      slideInbottom("#modernization-item");
    }, []);

    useEffect(() => {
      // @ts-ignore
      slideInbottom("#experience-service-item");
    }, []);

  useEffect(() => {
    // @ts-ignore
    slideInleft("#service-title");
  }, []);
  useEffect(() => {
    // @ts-ignore
    slideInleft("#acceleration-title");
  }, []);
  useEffect(() => {
    // @ts-ignore
    slideInleft("#modernization-title");
  }, []);
  useEffect(() => {
    // @ts-ignore
    slideInleft("#experience-service-title");
  }, []);

  useEffect(() => {
    // @ts-ignore
    slideInleft("#services-description");
  }, []);
  useEffect(() => {
    // @ts-ignore
    slideInleft("#acceleration-description");
  }, []);
  useEffect(() => {
    // @ts-ignore
    slideInleft("#modernization-description");
  }, []);
  useEffect(() => {
    // @ts-ignore
    slideInleft("#experience-service-description");
  }, []);

  useEffect(() => {
    // @ts-ignore
    slideInleft("#services-line");
  }, []);
  useEffect(() => {
    // @ts-ignore
    slideInleft("#acceleration-line");
  }, []);
  useEffect(() => {
    // @ts-ignore
    slideInleft("#modernization-line");
  }, []);
  useEffect(() => {
    // @ts-ignore
    slideInleft("#experience-service-line");
  }, []);

  return (
    <div className="about-us-more-info">
      <div className="about-us-more-info__container">
        <div className="about-us-more-info__services">
          <div className="about-us-more-info__services-item" id="services-item">
            <div className="about-us-more-info__services-logo">logo</div>
            <h1
              className="about-us-more-info__services-item-title"
              id="service-title"
            >
              Our Services
            </h1>
            <p
              className="about-us-more-info__services-item-description"
              id="services-description"
            >
              We offer a range of data analysis services to help businesses
              optimize their operations and strategies. Our services include
              cloud analytics modernization, data science acceleration, and full
              customer experience service. In addition, we provide a platform
              called Finops to help clients analyze their costs and usage for
              cost optimization.
            </p>
            <div
              className="about-us-more-info__services-item-line"
              id="services-line"
            ></div>
          </div>
        </div>
        <div className="about-us-more-info__acceleration">
          <div className="about-us-more-info__acceleration-item" id="acceleration-item">
            <div className="about-us-more-info__acceleration-logo">logo</div>
            <h1
              className="about-us-more-info__acceleration-item-title title"
              id="acceleration-title"
            >
              Data Science Acceleration
            </h1>
            <p
              className="about-us-more-info__acceleration-item-description"
              id="acceleration-description"
            >
              Our data science acceleration service helps businesses to leverage
              the power of data science to drive informed decision-making and
              maximize results. We use advanced data analytics techniques to
              extract insights from data, helping businesses to make the right
              decisions at the right time.
            </p>
            <div
              className="about-us-more-info__acceleration-item-line"
              id="acceleration-line"
            ></div>
          </div>
        </div>
        <div className="about-us-more-info__modernization">
          <div className="about-us-more-info__modernization-item" id="modernization-item">
            <div className="about-us-more-info__modernization-logo">logo</div>
            <h1
              className="about-us-more-info__modernization-item-title title"
              id="modernization-title"
            >
              Cloud Analytics Modernization
            </h1>
            <p
              className="about-us-more-info__modernization-item-description"
              id="modernization-description"
            >
              Our cloud analytics modernization service helps businesses to
              modernize their data infrastructure, making it more efficient,
              scalable, and cost-effective. With our expertise in data
              management and cloud computing, we help businesses to leverage the
              latest technologies to optimize their operations and achieve their
              goals.
            </p>
            <div
              className="about-us-more-info__modernization-item-line"
              id="modernization-line"
            ></div>
          </div>
        </div>
        <div className="about-us-more-info__experience-service">
          <div className="about-us-more-info__experience-service-item" id="experience-service-item">
            <div className="about-us-more-info__experience-service-logo">
              logo
            </div>
            <h1
              className="about-us-more-info__experience-service-item-title title"
              id="experience-service-title"
            >
              Full Customer Experience Service
            </h1>
            <p
              className="about-us-more-info__experience-service-item-description"
              id="experience-service-description"
            >
              Our full customer experience service helps businesses to enhance
              their customer experience, creating loyal customers who will
              return time and time again. We analyze customer data to identify
              pain points and opportunities for improvement, helping businesses
              to create a seamless and personalized customer experience.
            </p>
            <div
              className="about-us-more-info__experience-service-item-line"
              id="experience-service-line"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMoreInfo;
