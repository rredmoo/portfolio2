import { Container, HrPrimary } from "../../../../components/common/CommonStyles";
import { Icon } from "../../../Admin/Components/Sidebar";
import { Dot, ResumeBackground, ResumeField } from "./Resume.styles";
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Resume() {
    return (
        <ResumeBackground>
            <HrPrimary />
            <Container>
                <ResumeField>
                    <button className="downloadBtn"><Icon icon={faDownload} />
                        <span className="tooltipText">Download Resume</span>
                    </button>
                    <h1>Work Experiance</h1>
                    <section className="resumeSections">

                        <p className="subTitleText">├── 💼 SIA Azeron </p>
                        <p className="smallText">│   └── 2025 - ongoing</p>

                        <p className="subTitleText">├── 💼 Full Stack Web Developer Internship</p>
                        <p className="smallText">│   └── 2025-2025</p>
                        <p className="smallText">│   └── Ventspils International Radio Astronomy Center (VSRC)</p>

                        <p className="subTitleText">├── 💼 DevOps Internship</p>
                        <p className="smallText">│   └── 2024-2025</p>
                        <p className="smallText">│   └── Accenture</p>
                        <br />
                    </section>
                        <h1>Education</h1>
                    <section className="resumeSections">

                        <p className="subTitleText">├── 📚 First-level professional higher education: “Programming Specialist”</p>
                        <p className="smallText">│   └── 2023 – 2025</p>
                        <p className="smallText">│   └── Ventspils University of Applied Sciences</p>
                        <br />

                        <p className="subTitleText">├── 📚 Secondary education</p>
                        <p className="smallText">│   └── 2020 – 2023</p>
                        <p className="smallText">
                            │   └── Ventspils Secondary School No.4.
                            <br />
                            │   └── Advanced subjects:
                            <br />
                            │   └── “Programming II”
                            <br />
                            │   └── “Business English II”
                        </p>
                        <br />

                        <p className="subTitleText">├── 🕹️ Game development in Unity</p>
                        <p className="smallText">│   └── 2021 – 2022</p>
                        <p className="smallText">│   └── Ventspils Digital Centre (VDC)</p>
                        <br />
                    </section>

                        <h1>Languages</h1>
                    <section className="resumeSections">

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