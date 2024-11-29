import { MdOutlineCatchingPokemon } from "react-icons/md"
import { FaClipboardList } from "react-icons/fa"

import '../styles/components/projectscontainer.sass'

const projects = [
  {id: "pokedex", name: "POKEDEX", icon: <MdOutlineCatchingPokemon /> },
  {id: "todolist", name: "TO DO LIST", icon: <FaClipboardList /> },
];

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos Feitos</h2>
      <a href="https://github.com/Fabianocsc?tab=repositories" className="btn">
      Ver meus Projetos
      </a>
    </section>
  )
};

export default ProjectsContainer
