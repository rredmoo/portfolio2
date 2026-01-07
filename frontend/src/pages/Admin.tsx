import Sidebar from "../components/admin/sidebar";
import stylecomp from "styled-components";

export default function Admin() {

  const MainContainer = stylecomp.section`
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
    background: #f9f9fb;
  `;

  return(
    <>
    <Sidebar/>
    <MainContainer>

    <h1>hello there admin</h1>

    </MainContainer>
    </>
  )
}
