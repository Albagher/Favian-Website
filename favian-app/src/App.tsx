import "./App.css";
// import Presentation from "./components/Presentation";
import { Parallax } from "react-parallax";
import backgroundImgData from "./images/bgData.webp";
import Presentation from "./components/Presentation";
import bgImageSectionLeft from "./images/bg-left-section2.webp";

function App() {
    return (
        <div className="App">
            {/* section 1 */}
            <Parallax
                strength={500}
                renderLayer={(percentage) => (
                    <div
                        style={{
                            backgroundImage: `url(${backgroundImgData})`,
                            position: "absolute",
                            width: "100vw",
                            height: "100vh",
                            transform: `scale(${percentage * 1})`,
                        }}
                    />
                )}
            >
                <div className="content">
                    {/* <img src={backgroundImgData} alt="Votre image" /> */}
                    <div className="text-content">
                        <Presentation />
                    </div>
                </div>
            </Parallax>

            {/* section2 */}
            <div className="container-description">
                <section className="description">
                    <div className="description-left">
                        <Parallax
                            strength={500}
                            renderLayer={(percentage) => (
                                <div
                                    style={{
                                        backgroundImage: `url(${bgImageSectionLeft})`,
                                        position: "absolute",
                                        width: `300vw`,
                                        height: "100%",
                                        // transform: `scale(${percentage * 1})`,
                                        transform: `translate(${
                                            percentage * -100
                                        }px, ${percentage * 100}px)`, // Déplace l'image de droite à gauche
                                    }}
                                />
                            )}
                        >
                            <div className="content">
                                {/* <img src={backgroundImgData} alt="Votre image" /> */}
                                <div className="text-content">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Dicta numquam, minus
                                    placeat aliquam officia necessitatibus ab
                                    ducimus impedit sint. Possimus, maiores
                                    assumenda! Accusantium rem assumenda
                                    expedita cumque eaque odio aut!
                                </div>
                            </div>
                        </Parallax>
                    </div>
                    <div className="description-right">right</div>
                </section>
            </div>
        </div>
    );
}

export default App;
