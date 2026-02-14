import { gql } from "@apollo/client";

// used in public portfolio
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

// used in admin dashboard
export const GET_PROJECTS_ADMIN = gql`
  query GetProjects($first: Int!, $page: Int!) {
    projects(first: $first, page: $page) {
      data {
        id
        title
        isFeatured
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;

// used in admin panel to delete projetcs
export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

