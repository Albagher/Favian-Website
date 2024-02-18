import "./App.css";
// import Presentation from "./components/Presentation";
import { Parallax } from "react-parallax";
import backgroundImgData from "./images/bgData.webp";
import Presentation from "./components/Presentation";
import bgImageSectionLeft from "./images/bg-left-section2.webp";
import bgImageSection3Left from "./images/bg-left-section3.webp";
import bgImageSection4bottm from "./images/bg-center-section4.webp";
import partnersBg from "./images/partnersBg.webp";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import WhoWeAre from "./components/WhoWeAre";

const whoWeAre = {
  title: "Who We Are",
  paragraphe: `
          Favian is a leading business consultant based in Paris, with a global
          presence in Germany and Canada. Our team of agile and creative
          professionals, powered by AI and data science, delivers valuable
          insights and analysis to clients, helping them optimize their business
          operations and strategies. We specialize in providing crucial
          consulting services to various industries, leveraging data to drive
          informed decision-making and maximize results. We pride ourselves on
          our adaptability in the fast-paced business world, which is crucial in
          the ever-evolving data analysis industry.
  `,
};

function App() {
  return (
    <div className="App">
      <div className="container__nav">
        <Nav />
      </div>
      {/* section 1 */}
      <div className="container-presentation">
        <div className="presentations">
          <Parallax
            strength={500}
            renderLayer={(percentage) => (
              <div
                style={{
                  backgroundImage: `url(${backgroundImgData})`,
                  position: "absolute",
                  width: "100vw",
                  margin: 0,
                  padding: 0,
                  height: "100%",
                  transform: `scale(${percentage * 1})`,
                  filter: "contrast(1.1)",
                }}
              />
            )}
          >
            <div className="content">
              <div className="text__content--presentaion">
                <Presentation />
              </div>
            </div>
          </Parallax>
        </div>
      </div>

      {/* section2 */}
      <div className="container-description">
        <section className="description">
          <div className="description-left">
            <Parallax
              strength={500}
              renderLayer={(percentage) => (
                <div
                  style={{
                    position: "absolute",
                    width: `950px`,
                    transform: `translate(${percentage * -100}px`,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <img
                      src={bgImageSectionLeft}
                      alt="Votre image"
                      style={{
                        width: "100%",
                        filter: "contrast(1.18)",
                      }}
                    />
                  </div>
                </div>
              )}
            >
              <div className="description-content">
                <WhoWeAre
                  title={whoWeAre.title}
                  paragraphe={whoWeAre.paragraphe}
                />
              </div>
            </Parallax>
          </div>
          <div className="description-right">right</div>
        </section>
      </div>

      {/* section3 */}
      <div className="container-service">
        <section className="service">
          <div className="service-left">
            <Parallax
              strength={500}
              renderLayer={(percentage) => (
                <div
                  style={{
                    position: "absolute",
                    width: `900px`,
                    height: "1500px",
                    overflow: "hidden",
                    top: "-160.164px",
                    transform: `translate3d(0px, 0px, 0px) skew(0deg, ${
                      percentage * -10
                    }deg`,
                  }}
                >
                  <img
                    src={bgImageSection3Left}
                    alt="Votre image"
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      filter: "contrast(1.18)",
                    }}
                  />
                </div>
              )}
            >
              <div className="service-content">
                <div className="text-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta numquam, minus placeat aliquam officia necessitatibus ab
                  ducimus impedit sint. Possimus, maiores assumenda! Accusantium
                  rem assumenda expedita cumque eaque odio aut!
                </div>
              </div>
            </Parallax>
          </div>
          <div className="service-right">right</div>
        </section>
      </div>
      {/* section 4 */}
      <div className="container-number">
        <section className="number">
          <div className="number-top">chiffre</div>
          <div className="number-bottm">
            <Parallax
              strength={500}
              renderLayer={(percentage) => (
                <div
                  style={{
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      width: "2286px",
                      position: "relative",
                      left: "-100px",
                      transform: `translate3d(${
                        percentage * -200
                      }px, 0px, 0px)`,
                      filter: "contrast(1.2)",
                    }}
                  >
                    <img
                      src={bgImageSection4bottm}
                      alt="Votre image"
                      style={{
                        width: "2286px",
                        position: "absolute",
                        objectPosition: "50% 50%",
                        objectFit: "cover",
                        height: "999px",
                        opacity: "0.5",
                        filter: "contrast(98%)",
                      }}
                    />
                  </div>
                </div>
              )}
            >
              <div className="description-content">
                <div className="text-content">
                  Lorem ipsum dolor sit, amet consectetur
                </div>
              </div>
            </Parallax>
          </div>
        </section>
      </div>
      {/* section 5 */}
      <div className="container-partners">
        <section className="partners">
          <div className="partners-logo">
            <div className="logo">Our Partners</div>
            <div className="logo">logo2</div>
            <div className="logo">logo3</div>
            <div className="logo">logo4</div>
            <div className="logo">logo5</div>
          </div>

          <div className="partners-contenu">
            <div className="partners-qustion">
              <Parallax
                strength={500}
                renderLayer={(percentage) => (
                  <div
                    style={{
                      position: "absolute",
                      transform: `perspective(500px) translate3d(10px, 0, ${
                        percentage * 100
                      }px)`,
                    }}
                  >
                    <img
                      src={partnersBg}
                      alt="Votre image"
                      style={{
                        overflow: "hidden",
                        filter: "contrast(1.18)",
                      }}
                    />
                  </div>
                )}
              >
                <div className="partners-content">
                  <div className="text-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit ?
                  </div>
                </div>
              </Parallax>
            </div>
            <div className="partners-contact">
              text Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium ab fugit nostrum ratione illum, odit similique ullam
              voluptatum
              <button>click</button>
            </div>
          </div>
        </section>
      </div>
      {/* footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
