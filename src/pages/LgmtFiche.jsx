import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import LgmtTags from "../components/LgmtTags";
import logementData from "../data/logements.json";
import styles from "../styles/lgmtFiche.module.scss";
import StarScale from "../components/StarScale";
import Host from "../components/Host";
import arrowUp from "../assets/arrowUp.png";
import CollapseTxtBox from "../components/TxtCollapse";
import ErrorPage from "./ErrorPage";

function LgmtFiche() {
  const params = useParams();
  const logement = logementData.find((item) => item.id === params.id);

  if(!logement){
    return (
      <ErrorPage />
    )
  }

  const {
    id,
    cover,
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = logement;

  return (
    <main>
      <Layout>
        <Carousel itemId={params.id} pics={pictures} />
        <div className={`flx ${styles.mainContainer}`}>
          <div className={styles.propertyInfos}>
            <h1>{title}</h1>
            <p>{location}</p>
            <LgmtTags tags={tags} />
          </div>
          <div className={`flx ${styles.hostScale}`}>
            <StarScale rating={rating} />
            <Host host={host} />
          </div>
        </div>
        <div className={`flx ${styles.collapsibles}`}>
          <CollapseTxtBox>
            <h3>Description</h3>
            <img src={arrowUp} />
            <div>
              <p>{description}</p>
            </div>
          </CollapseTxtBox>
          <CollapseTxtBox>
            <h3>Équipements</h3>
            <img src={arrowUp} />
            <div>
              <ul>
                {equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </CollapseTxtBox>
        </div>
      </Layout>
    </main>
  );
}

export default LgmtFiche;
