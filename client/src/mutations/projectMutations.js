/**
 * GraphQL mutations for project management.
 * @module projectMutations
 */

import { gql } from '@apollo/client';

/**
 * Mutation to add a new project.
 *
 * @typedef {Object} AddProjectMutation
 * @property {string} name - The name of the project.
 * @property {string} description - The description of the project.
 * @property {string} status - The status of the project.
 * @property {string} clientId - The ID of the client associated with the project.
 *
 * @returns {Object} The added project.
 */

const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

/**
 * Mutation to delete a project.
 *
 * @typedef {Object} DeleteProjectMutation
 * @property {string} id - The ID of the project to be deleted.
 *
 * @returns {Object} The deleted project.
 */

const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

/**
 * Mutation to update a project.
 *
 * @typedef {Object} UpdateProjectMutation
 * @property {string} id - The ID of the project to be updated.
 * @property {string} name - The updated name of the project.
 * @property {string} description - The updated description of the project.
 * @property {string} status - The updated status of the project.
 *
 * @returns {Object} The updated project.
 */

const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };