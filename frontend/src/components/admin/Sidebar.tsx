import stylecomp from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faInbox, faSuitcase, faCrosshairs, faServer, faGear } from '@fortawesome/free-solid-svg-icons'
import dadamov from "../../../public/dadamov.png";

const SidebarWrapper = stylecomp.section`
      margin: 0;
      padding: 0;
      width: 250px;
      height: 100%;
      position: fixed;
      overflow: auto;
      background-color: var(--color-bg);
  `;

const Icon = stylecomp(FontAwesomeIcon)`
      margin-right: 8px;
      vertical-align: middle;
`

const SidebarImage = stylecomp.section`
      margin: 0;
      padding: 0;
      background-image: url(${dadamov});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 100px;
`;

const SidebarBtnPriority = stylecomp.a`
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

  return (
    <>
      <SidebarWrapper>
        <SidebarImage />
        <SidebarBtnPriority> <Icon icon={faChartColumn} /> Dashboard </SidebarBtnPriority>
        <SidebarBtnPriority> <Icon icon={faInbox} /> Mail API </SidebarBtnPriority>
        <SidebarBtnPriority> <Icon icon={faSuitcase} /> Projects </SidebarBtnPriority>
        <SidebarBtnPriority> <Icon icon={faCrosshairs} /> Skills </SidebarBtnPriority>
        <SidebarBtnPriority> <Icon icon={faServer} /> Server Stats</SidebarBtnPriority>
        <SidebarBtnPriority> <Icon icon={faGear} /> Settings</SidebarBtnPriority>
      </SidebarWrapper>
    </>
  );
}

