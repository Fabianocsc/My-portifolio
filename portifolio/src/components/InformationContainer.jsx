import { AiFillPhone, AiFillEnvironment } from 'react-icons/ai';
import { SiGmail } from "react-icons/si";

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
  return <section id="information">
    <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p>(84)99941-0760</p>
        </div>
    </div>
    <div className="info-card">
        <SiGmail id="gmail-icon" />
        <div>
            <h3>Gmail</h3>
            <p>fabiano.cesar000@gmail.com</p>
        </div>
    </div>
    <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
            <h3>Localização</h3>
            <p>Natal - RN</p>
        </div>
    </div>
  </section>
}

export default InformationContainer
