import "./App.css";
// import Presentation from "./components/Presentation";
import { Parallax } from "react-parallax";
import backgroundImgData from "./images/bgData.webp";
import Presentation from "./components/Presentation";

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
        </div>
    );
}

export default App;
