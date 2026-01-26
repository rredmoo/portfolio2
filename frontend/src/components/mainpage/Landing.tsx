import { Canvas } from "@react-three/fiber";
import Model3D from "../common/Model3D";
import { LandingContainer, LandingBackground, LandingContent, TopLabel, LandingHeadline, Subtext, Buttons, PrimaryButton, SecondaryButton } from "../styles/Landing.styles";
import BackgroundParticles from "../styles/BackgroundParticles";
import SceneGrid from "../common/SceneGrid";

export default function Landing() {
  return (
    <LandingContainer>
        <LandingBackground />

        {/* Canvas for the model */}
        <Canvas
          style={{ position: "absolute", inset: 0, zIndex: 1 }} 
          camera={{ position: [0, 0.1, 8], fov: 60, near: 0.1, far: 100 }}>
          <ambientLight intensity={0.25} /> // brightness of the canvas
          <directionalLight position={[5, 5, 5]} intensity={0.6}/> // light source location
          <Model3D />
          <SceneGrid />
          <BackgroundParticles />
        </Canvas>

        {/* The rest of the pages UI components */}
        <LandingContent>
          <TopLabel>FULL-STACK WEB DEVELOPER</TopLabel>
          <LandingHeadline>Hi, I’m <span>Dāvids Adamovičs</span></LandingHeadline>
          <Subtext>Welcome to my portfolio.</Subtext>
          
          <Buttons>
            <PrimaryButton>View Projects</PrimaryButton>
            <SecondaryButton>Contact Me</SecondaryButton>
          </Buttons>
        </LandingContent>
    </LandingContainer>
  );
}
