

/**
 * Renders a project card component.
 * @param {Object} project - The project object.
 * @param {string} project.name - The name of the project.
 * @param {string} project.id - The ID of the project.
 * @param {string} project.status - The status of the project.
 * @returns {JSX.Element} The project card component.
 */

export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6">
      <div className="d card mb-3">
        <div className="d card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>
            <a className="btn btn-light" href={`/projects/${project.id}`}>View</a>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
