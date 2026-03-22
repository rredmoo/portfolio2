import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterWrapper = styled.footer`
  background: rgba(14 18 31);
  color: #f5f5f5;
  padding: 3rem 1.5rem;
  margin-top: 3rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const FooterSection = styled.div`
  text-align: center;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  p,
  a {
    font-size: 0.95rem;
    color: #d1d1d1;
    text-decoration: none;
    line-height: 1.8;
  }

  a:hover {
    color: white;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* center the whole column */
  gap: 0.8rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid #2a2a2a;
  margin-top: 2rem;
  padding-top: 1.2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #a1a1a1;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterSection>
                    <h3>dadamov.info</h3>
                    <p>
                        Personal portfolio showcasing projects, skills, and contact
                        information.
                    </p>
                </FooterSection>

                <FooterSection>
                    <h3>Socials</h3>
                    <SocialLinks>
                        <a
                            href="https://www.linkedin.com/in/d%C4%81vids-adamovi%C4%8Ds-084348306/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>

                        <a
                            href="https://github.com/rredmoo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>

                        <a
                            href="https://discord.com/users/841674442350133279"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faDiscord} /> Discord
                        </a>
                    </SocialLinks>
                </FooterSection>

                <FooterSection>
                    <h3>Contact</h3>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
                        davidsadamovicss@gmail.com
                    </p>
                </FooterSection>
            </FooterContainer>

            <BottomBar>
                © {new Date().getFullYear()} dadamov.info. All rights reserved.
            </BottomBar>
        </FooterWrapper>
    );
}