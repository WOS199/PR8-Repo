import Layout from "../components/Layout";
import arrowUp from '../assets/arrowUp.png'
import imgHero2 from '../assets/paysage-2.jpg'
import Hero from '../components/Hero.jsx'
import CollapseTxtBox from "../components/TxtCollapse";

function Apropos() {
  return (
    <main>
      <Layout>
        <Hero background={imgHero2}/>
        <CollapseTxtBox>
          <h3>Fiabilité</h3>
          <img src={arrowUp} />
          <div>
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </div>
        </CollapseTxtBox>
        <CollapseTxtBox>
          <h3>Respect</h3>
          <img src={arrowUp} />
          <div>
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </CollapseTxtBox>
        <CollapseTxtBox>
          <h3>Service</h3>
          <img src={arrowUp} />
          <div>
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </CollapseTxtBox>
        <CollapseTxtBox>
          <h3>Sécurité</h3>
          <img src={arrowUp} />
          <div>
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établies par nos services. En laissant une note, aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </div>
        </CollapseTxtBox>
      </Layout>
    </main>
  );
}

export default Apropos;
