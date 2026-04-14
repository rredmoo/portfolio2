import { gql } from "@apollo/client";

export const GET_SKILLS = gql`
  query GetSkills($first: Int!, $page: Int!, $is_featured: Boolean) {
    skills(first: $first, page: $page, is_featured: $is_featured) {
      data {
        id
        title
        category
        level
        is_featured
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;

// used in admin panel to delete skills
export const DELETE_SKILL = gql`
  mutation DeleteSkill($id: ID!) {
    deleteSkill(id: $id) {
      id
    }
  }
`;

export const GET_SKILLS_SELECT = gql`
  query GetSkillsSelect {
    skillsSelect {
      id
      title
    }
  }
`;
