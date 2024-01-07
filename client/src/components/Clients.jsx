/**
 * Renders a table of clients fetched from the server.
 * Uses the useQuery hook from @apollo/client to fetch the clients.
 * Displays a loading spinner while fetching the data.
 * Displays an error message if there is an error fetching the data.
 * Renders the client data in a table format.
 *
 * @returns {JSX.Element} The Clients component.
 */

import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner/>;
  if (error) return <p>Something went wrong!</p>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
