import { Container, HrPrimary } from "../../../../components/common/CommonStyles";
import { BoldText, Dot, ResumeBackground, ResumeField, SmallText } from "./Resume.styles";

export default function Resume() {
    return (
        <ResumeBackground>
            <HrPrimary />
            <Container>
                <ResumeField>
                    <section>
                        <h2>Work Experiance</h2>

                        <BoldText>💼 SIA Azeron</BoldText>
                        <SmallText>2025 - ongoing</SmallText>

                        <BoldText>💼 Full Stack Web Developer Internship</BoldText>
                        <SmallText>2025</SmallText>
                        <SmallText>Ventspils International Radio Astronomy Center (VSRC)</SmallText>

                        <BoldText>💼 DevOps Internship</BoldText>
                        <SmallText>2024</SmallText>
                        <SmallText>Accenture</SmallText>
                        <br />
                    </section>
                    <section>
                        <h2>Education</h2>

                        <SmallText>2023 – 2025</SmallText>
                        <BoldText>
                            📚 First-level professional higher education:
                        </BoldText>
                        “Programming Specialist”
                        <SmallText>Ventspils University of Applied Sciences</SmallText>
                        <br />

                        <SmallText>2020 – 2023</SmallText>
                        <BoldText>📚 Secondary education</BoldText>
                        <SmallText>
                            Ventspils Secondary School No.4.
                            <br />
                            Advanced subjects:
                            <br />
                            “Programming II”
                            <br />
                            “Business English II”
                        </SmallText>
                        <br />

                        <SmallText>2021 – 2022</SmallText>
                        <BoldText>🕹️ Game development in Unity</BoldText>
                        <SmallText>Ventspils Digital Centre (VDC)</SmallText>
                        <br />
                    </section>

                    <section>
                        <h2>Languages</h2>

                        <p>
                            Latvian{" "}
                            {[...Array(5)].map((_, i) => (
                                <Dot key={i} active />
                            ))}
                        </p>

                        <p>
                            English{" "}
                            {[...Array(5)].map((_, i) => (
                                <Dot key={i} active />
                            ))}
                        </p>

                        <p>
                            Russian{" "}
                            {[...Array(3)].map((_, i) => (
                                <Dot key={i} active />
                            ))}
                            {[...Array(2)].map((_, i) => (
                                <Dot key={i} />
                            ))}
                        </p>
                    </section>
                </ResumeField>
            </Container>
        </ResumeBackground>
    )
}