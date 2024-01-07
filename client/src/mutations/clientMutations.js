import { gql } from "@apollo/client";

/**
 * GraphQL mutation to add a client.
 *
 * @typedef {Object} AddClientMutation
 * @property {string} name - The name of the client.
 * @property {string} email - The email of the client.
 * @property {string} phone - The phone number of the client.
 * @property {string} id - The unique identifier of the client.
 */

/**
 * GraphQL mutation to delete a client.
 *
 * @typedef {Object} DeleteClientMutation
 * @property {string} id - The unique identifier of the client.
 * @property {string} name - The name of the client.
 * @property {string} email - The email of the client.
 * @property {string} phone - The phone number of the client.
 */

/**
 * GraphQL mutation to add a client.
 *
 * @type {AddClientMutation}
 */
const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

/**
 * GraphQL mutation to delete a client.
 *
 * @type {DeleteClientMutation}
 */
const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export { ADD_CLIENT, DELETE_CLIENT };
