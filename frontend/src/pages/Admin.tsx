import MainAdminContainer from "../components/admin/MainAdminContainer";
import AdminLayout from "../components/admin/AdminLayout";
import Sidebar from "../components/admin/Sidebar";


export default function Admin() {
  return (
    <>
      <AdminLayout>
        <Sidebar />
        <MainAdminContainer>
          <h1>Hello There, Admin</h1>
          <p>This is the Dashboard</p>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
