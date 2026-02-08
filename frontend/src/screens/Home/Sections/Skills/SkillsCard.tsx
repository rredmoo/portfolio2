import type { Skill } from "../../../../api/types";
import { Card, LevelBar } from "./Skills.styles";

type SkillTypeProp = {
  skill: Skill;
};

export default function SkillsCard({ skill }: SkillTypeProp) {
  const levelFillPercent = skill.level * 2 * 10;

  return (
    <>
      <Card>
        <div className="titleContainer">
          <h1>{skill.title}</h1>
          <p>({skill.category})</p>
        </div>
        <br />
        <LevelBar>
          <div
            className="fillableLevelBar"
            style={{ width: `${levelFillPercent}%` }}
          ></div>
        </LevelBar>
        <p>{levelFillPercent}/100</p>
      </Card>
    </>
  );
}
