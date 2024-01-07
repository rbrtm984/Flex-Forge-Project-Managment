

/**
 * Renders a list of projects.
 * Uses Apollo Client to fetch projects data.
 * Displays a loading spinner while data is being fetched.
 * Displays an error message if there is an error fetching the data.
 * If there are projects available, renders a list of ProjectCard components.
 * If there are no projects available, displays a message indicating so.
 */

import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects to show</p>
      )}
    </>
  );
}
