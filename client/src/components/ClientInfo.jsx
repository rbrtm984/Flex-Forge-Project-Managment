/**
 * Renders the client information.
 * @param {Object} client - The client object.
 * @param {string} client.name - The name of the client.
 * @param {string} client.email - The email of the client.
 * @param {string} client.phone - The phone number of the client.
 * @returns {JSX.Element} The rendered client information.
 */

import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

export default function ClientInfo({ client }) {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="me-2" />
          {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="me-2" />
          {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="me-2" />
          {client.phone}
        </li>
      </ul>
    </>
  );
}
