import Sidebar from "../components/admin/Sidebar";
import stylecomp from "styled-components";

export default function Admin() {

  const MainContainer = stylecomp.section`
    margin-left: 250px;
    padding: 1px 16px;
    min-height: 100dvh;
    background: var(--color-bg-secondary);
  `;

  return(
    <>
    <Sidebar/>
    <MainContainer>

    <h1>Helo There, Admin</h1>
    <p>This is the Dashboard</p>

    </MainContainer>
    </>
  )
}
