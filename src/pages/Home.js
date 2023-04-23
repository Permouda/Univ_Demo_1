import { useState } from "react"
import { Pannellum } from "pannellum-react";

// Importer les Images
import DefaultImage from '../images/Default images/default.jpg'
// import fantasyCave from '../images/jpg/sky/sky_islamic_tower.jpg'

const Home = () => {
    //initialisation de currentScene
    const [currentScene, setCurrentScene] = useState(DefaultImage);

    // const handleImageChange = () => {
    //     if (currentScene === fantasyNight) {
    //       setCurrentScene(fantasyCave);
    //     } else {
    //       setCurrentScene(fantasyNight);
    //     }
    //   };
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          setCurrentScene(reader.result);
        };
        reader.readAsDataURL(file);
      };

    return (
        <>
            <div className="h-screen">
                <Pannellum
                    width="100%"
                    height="100%"
                    image={currentScene}
                    yaw={300}
                    hfov={110}
                    autoLoad
                    autoRotate={-5}
                    //compass={true}
                    showZoomCtrl={false}
                    mouseZoom={false}
                    onLoad={() => {
                        console.log("panorama loaded");
                    }}
                >
                    {/* <Pannellum.Hotspot
                        // type="custom"
                        // pitch={-10}
                        // yaw={-120}
                        // handleClick={(evt, name) =>
                        //     setCurrentScene(currentScene !== fantasyNight ? fantasyNight : fantasyCave)
                        // }
                        type="custom"
                        pitch={-10}
                        yaw={-120}
                        handleClick={(evt, name) => handleImageChange()}
                    /> */}
                </Pannellum>
                <input type="file" onChange={handleImageChange} />
            </div>
        </>
    )
}

export default Home;