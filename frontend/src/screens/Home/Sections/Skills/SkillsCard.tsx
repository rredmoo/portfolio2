import type { Skill } from "../../../../api/types";
import { Card } from "./Skills.styles";

type SkillTypeProp = {
  skill: Skill;
};

export default function SkillsCard({ skill } : SkillTypeProp){
    return(
        <>
            <Card>
                  <h1>
                    {skill.title}
                  </h1>
                  <p>{skill.level}</p>
                  <p>{skill.category}</p>
                </Card>
        </>
    )
}