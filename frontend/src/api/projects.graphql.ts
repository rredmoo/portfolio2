import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects($first: Int!, $page: Int!) {
    projects(first: $first, page: $page) {
      data {
        id
        title
        description
        link
        isFeatured
        skills {
          id
          title
        }
        imagePath
        createdAt
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;
