/**
 * Renders a row for a client in a table.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.client - The client object.
 * @param {string} props.client.name - The name of the client.
 * @param {string} props.client.email - The email of the client.
 * @param {string} props.client.phone - The phone number of the client.
 * @returns {JSX.Element} The rendered component.
 */

import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: { clients: clients.filter((client) => client.id !== deleteClient.id) },
    //   });
    // },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
