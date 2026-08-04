import { Canvas } from "@react-three/fiber";
import {
  LandingContainer,
  LandingBackground,
  LandingContent,
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

      <Canvas
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
        camera={{ position: [0, 0.1, 8], fov: 60, near: 0.1, far: 100 }}
      >
        <SceneGridGround />
        <BackgroundParticles />
      </Canvas>

      <LandingContent>
        <p className="topLable">FULL-STACK WEB DEVELOPER</p>

        <p className="landingHealine">
          Hi, I’m <span>Dāvids Adamovičs</span>
        </p>

        <p className="subtext">Based in Ventspils, Latvia</p>

        <LandingSocialButtonsGroup>
          <button className="circleButton">
            <a href="https://github.com/rredmoo" target="_blank">
              <Icon icon={faSquareGithub} />
            </a>
          </button>

          <button className="circleButton">
            <a
              href="https://www.linkedin.com/in/d%C4%81vids-adamovi%C4%8Ds-084348306/"
              target="_blank"
            >
              <Icon icon={faSquareLinkedin} />
            </a>
          </button>

          <button className="circleButton">
            <a
              href="https://discord.com/users/841674442350133279"
              target="_blank"
            >
              <Icon icon={faDiscord} />
            </a>
          </button>
        </LandingSocialButtonsGroup>
      </LandingContent>
    </LandingContainer>
  );
}