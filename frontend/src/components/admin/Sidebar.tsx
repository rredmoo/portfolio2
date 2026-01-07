import stylecomp from "styled-components";

export default function Sidebar() {
  const Sidebar = stylecomp.section`
        margin: 0;
        padding: 0;
        width: 200px;
        background-color: #ffffff;
        position: fixed;
        height: 100%;
        overflow: auto;
        border-right: 1px solid;
        border-color: #b3b3b3ff;

    `;

    const SidebarImage = stylecomp.section`
        background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIz6hFadRdJg7eBXiH5LxWD_etUkJE8fDE2g&s");
        height: 100px;
        object-fit: fill;
    `;

    const SidebarBtnPriority = stylecomp.a`
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
        text-align: center;
        border-radius: 8px;

        &:hover {
          background-color: #f4f5f6;
          color: white;
        }
    `;

  return (
    <>
      <Sidebar>
        <SidebarImage/>
        <SidebarBtnPriority>Dashboard</SidebarBtnPriority>
        <SidebarBtnPriority>Mail API</SidebarBtnPriority>
        <SidebarBtnPriority>Projects</SidebarBtnPriority>
        <SidebarBtnPriority>Skills</SidebarBtnPriority>
        <SidebarBtnPriority>Server Stats</SidebarBtnPriority>
        <SidebarBtnPriority>Settings</SidebarBtnPriority>
      </Sidebar>
    </>
  );
}
