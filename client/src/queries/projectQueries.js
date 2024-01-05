import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      status
      client {
        id
        name
      }
    }
  }
`;

export { GET_PROJECTS };