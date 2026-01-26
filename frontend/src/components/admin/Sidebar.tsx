import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faInbox, faSuitcase, faCrosshairs, faServer, faGear } from '@fortawesome/free-solid-svg-icons'
import dadamov from "../../../public/dadamov.png";
import { useNavigate } from "react-router-dom";

const SidebarWrapper = styled.section`
      width: 250px;
      height: 100dvh;
      background-color: var(--color-bg-secondary);
      overflow: auto;
  `;

export const Icon = styled(FontAwesomeIcon)`
      margin: 8px;
      vertical-align: middle;
`;

const SidebarImage = styled.section`
      background-image: url(${dadamov});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 100px;
`;

const SidebarBtnPriority = styled.a`
      display: block;
      color: white;
      margin-left: 4px;
      padding: 16px;
      text-decoration: none;
      transition: border-right 0.4s ease;

      &:hover {
        border-right: 6px solid var(--color-hover-light-purple);
        color: var(--color-hover-light-purple);
      }

      &:active {
        border-right: 6px solid var(--color-primary-purple);
        color: var(--color-primary-purple);
      }
  `;
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <SidebarWrapper>
        <SidebarImage />
        <SidebarBtnPriority onClick={() => navigate("/admin")}> <Icon icon={faChartColumn} /> Dashboard </SidebarBtnPriority>
        <SidebarBtnPriority> <Icon icon={faInbox} /> Mail API </SidebarBtnPriority>
        <SidebarBtnPriority onClick={() => navigate("/admin/projects")}> <Icon icon={faSuitcase} /> Projects </SidebarBtnPriority>
        <SidebarBtnPriority onClick={() => navigate("/admin/skills")}> <Icon icon={faCrosshairs} /> Skills </SidebarBtnPriority>
        <SidebarBtnPriority> <Icon icon={faServer} /> Server Stats</SidebarBtnPriority>
        <SidebarBtnPriority> <Icon icon={faGear} /> Settings</SidebarBtnPriority>
      </SidebarWrapper>
    </>
  );
}

