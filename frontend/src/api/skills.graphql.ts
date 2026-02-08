import { gql } from "@apollo/client";

export const GET_SKILLS = gql`
  query GetSkills($first: Int!, $page: Int!) {
    skills(first: $first, page: $page) {
      data {
        id
        title
        category
        level
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;
