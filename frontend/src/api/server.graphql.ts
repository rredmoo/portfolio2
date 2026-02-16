import { gql } from "@apollo/client";

export const GET_SERVER_STATS = gql`
  query {
    serverStats {
      cpuUsage
      memoryUsage
      currentTime
    }
  }
`;
