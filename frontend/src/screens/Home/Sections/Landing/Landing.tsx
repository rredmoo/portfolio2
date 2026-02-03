import { Canvas } from "@react-three/fiber";
import Model3D from "../../Components/Model3D";
import {
  LandingContainer,
  LandingBackground,
  LandingContent,
  LandingButtonsGroup,
  LandingSocialButtonsGroup,
} from "./Landing.styles";
import BackgroundParticles from "../../Components/BackgroundParticles";
import { SceneGridGround } from "./SceneGrid.tsx";
import {
  faSquareGithub,
  faSquareLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Icon } from "../../../Admin/Components/Sidebar.tsx";

export default function Landing() {
  return (
    <LandingContainer>
      <LandingBackground />

      {/* Canvas for the model */}
      <Canvas
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
        camera={{ position: [0, 0.1, 8], fov: 60, near: 0.1, far: 100 }}
      >
        <ambientLight intensity={0.35} /> // brightness of the canvas
        <directionalLight position={[5, 5, 5]} intensity={0.6} /> // light
        source location
        <Model3D />
        <SceneGridGround />
        <BackgroundParticles />
      </Canvas>

      {/* The rest of the pages UI components */}
      <LandingContent>
        <p className="topLable">FULL-STACK WEB DEVELOPER</p>
        <p className="landingHealine">
          Hi, I’m <span>Dāvids Adamovičs</span>
        </p>
        <p className="subtext">Welcome to my portfolio.</p>

        <LandingButtonsGroup>
          <button className="primaryButtonLanding">View Projects</button>
          <button className="secondaryButtonLanding">Contact Me</button>
        </LandingButtonsGroup>
        <LandingSocialButtonsGroup>
          <button className="circleButton">
            <a
              href="https://github.com/rredmoo"
              target="_blank">
              <Icon icon={faSquareGithub} />
            </a>
          </button>

          <button className="circleButton">
            <a
              href="https://www.linkedin.com/in/d%C4%81vids-adamovi%C4%8Ds-084348306/"
              target="_blank">
              <Icon icon={faSquareLinkedin} />
            </a>
          </button>

          <button className="circleButton">
            <a
              href="https://discord.com/users/841674442350133279"
              target="_blank">
              <Icon icon={faDiscord} />
            </a>
          </button>
        </LandingSocialButtonsGroup>
      </LandingContent>
    </LandingContainer >
  );
}
