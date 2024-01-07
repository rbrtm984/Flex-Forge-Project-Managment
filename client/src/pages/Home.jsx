import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

export default function Home () {
  return (
    <>
      <div className="d-flex gap- mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>

      <Projects />
      <hr></hr>
      <Clients />
    </>
  );
}
