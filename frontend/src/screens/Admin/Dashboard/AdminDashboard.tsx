import { useQuery } from "@apollo/client/react";
import { GET_SERVER_STATS } from "../../../api/server.graphql";
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import type { ServerStats } from "../../../api/types";

export default function Admin() {
  const { data } = useQuery<ServerStats>(GET_SERVER_STATS, {
    pollInterval: 5000,
  });

  return (
    <>
      <AdminLayout>
        <Sidebar />
        <MainAdminContainer>
          <h1>Hello There, Admin</h1>
          <p>This is the Dashboard</p>
          
          <p>CPU Usage: {data?.serverStats.cpuUsage}%</p>
          <p>{data?.serverStats.memoryUsage}</p>
          <p>{data?.serverStats.currentTime}</p>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
