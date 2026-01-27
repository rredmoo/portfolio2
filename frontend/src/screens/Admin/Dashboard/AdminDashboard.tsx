import MainAdminContainer from "../../../components/admin/MainAdminContainer";
import AdminLayout from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";


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
