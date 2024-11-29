import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/selfie.jpeg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
  return (
  <aside id="sidebar">
    <img src={Avatar} alt="Fabiano Cesar" />
    <p className="title">Fabiano César</p>
    <SocialNetworks />
    <InformationContainer />
    
  </aside>
  );
};

export default Sidebar;
