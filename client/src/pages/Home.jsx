import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";

export default function Home () {
  return (
    <>
      <div className="d-flex gap- mb-4">
        <AddClientModal />
      </div>

      <Projects />
      <hr></hr>
      <Clients />
    </>
  );
}
