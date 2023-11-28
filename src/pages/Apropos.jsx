import Layout from "../components/Layout";
import arrowUp from '../assets/arrowUp.png'
import Hero from '../components/Hero.jsx'
import CollapseTxtBox from "../components/TxtCollapse";

function Apropos() {
  return (
    <>
      <Layout>
        <Hero />
        <CollapseTxtBox>
          <h3>Fiabilité</h3>
          <img src={arrowUp} />
          <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </CollapseTxtBox>
        <CollapseTxtBox>
          <h3>Respect</h3>
          <img src={arrowUp} />
          <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </CollapseTxtBox>
        <CollapseTxtBox>
          <h3>Service</h3>
          <img src={arrowUp} />
          <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </CollapseTxtBox>
        <CollapseTxtBox>
          <h3>Sécurité</h3>
          <img src={arrowUp} />
          <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </CollapseTxtBox>
      </Layout>
    </>
  );
}

export default Apropos;
