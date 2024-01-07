
/**
 * A button component used to delete a project.
 *
 * @component
 * @param {string} projectId - The ID of the project to be deleted.
 * @returns {JSX.Element} The delete project button.
 */

import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";

export default function DeleteProjectButton({ projectId }) {

    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted() {
            navigate("/");
        },                         
        refetchQueries: [{ query: GET_PROJECTS }],
    });
    
  return (
    <div className="d-flex mt-5">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className="icon" />
        Delete Project
      </button>
    </div>
  );
}
