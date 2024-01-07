import { useNavigate } from 'react-router-dom';
import { FaTrash} from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";

export default function DeleteProjectButton() {
  return (
    <div>deleteProjectButton</div>
  )
}
