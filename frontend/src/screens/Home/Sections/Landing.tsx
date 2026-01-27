import { Canvas } from "@react-three/fiber";
import Model3D from "../Components/Model3D";
import {
  LandingContainer,
  LandingBackground,
  LandingContent,
  TopLabel,
  LandingHeadline,
  Subtext,
  Buttons,
  PrimaryButton,
  SecondaryButton,
  SocialButtons,
  CircleButton,
} from "./Landing.styles";
import BackgroundParticles from "../Components/BackgroundParticles";
import SceneGrid from "../../../components/common/SceneGrid";
import {
  faSquareGithub,
  faSquareLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Icon } from "../../Admin/Components/Sidebar";

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
        <SceneGrid />
        <BackgroundParticles />
      </Canvas>

      {/* The rest of the pages UI components */}
      <LandingContent>
        <TopLabel>FULL-STACK WEB DEVELOPER</TopLabel>
        <LandingHeadline>
          Hi, I’m <span>Dāvids Adamovičs</span>
        </LandingHeadline>
        <Subtext>Welcome to my portfolio.</Subtext>

        <Buttons>
          <PrimaryButton>View Projects</PrimaryButton>
          <SecondaryButton>Contact Me</SecondaryButton>
        </Buttons>
        <SocialButtons>
          <CircleButton href="https://github.com/rredmoo" target="_blank">
            <Icon icon={faSquareGithub} />
          </CircleButton>

          <CircleButton
            href="https://www.linkedin.com/in/d%C4%81vids-adamovi%C4%8Ds-084348306/"
            target="_blank"
          >
            <Icon icon={faSquareLinkedin} />
          </CircleButton>

          <CircleButton href="https://discord.com/users/841674442350133279">
            <Icon icon={faDiscord} />
          </CircleButton>
        </SocialButtons>
      </LandingContent>
    </LandingContainer>
  );
}
