import Sidebar from "../components/admin/Sidebar";
import MainAdminContainer from "../components/admin/AdminLayout";

export default function Skills() {
  return (
    <>
      <Sidebar />
      <MainAdminContainer>
        <h1>Hello There, Admin</h1>
        <p>This is the Skills panel</p>
      </MainAdminContainer>
    </>
  );
}
