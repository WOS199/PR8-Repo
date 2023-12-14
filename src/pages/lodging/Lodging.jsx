import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Carousel from "../../components/carousel/Carousel";
import LodgingTags from "../../components/lodgingTags/LodgingTags";
import logementData from "../../data/logements.json";
import styles from "./Lodging.module.scss";
import StarScale from "../../components/starScale/StarScale";
import Host from "../../components/host/Host";
import arrowUp from "../../assets/arrowUp.png";
import TextCollapse from "../../components/textCollapse/TextCollapse";
import ErrorPage from "../errorPage/ErrorPage";

function Lodging() {
  const params = useParams();
  const logement = logementData.find((item) => item.id === params.id);

  if(!logement){
    return (
      <ErrorPage />
    )
  }

  const {
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
            <LodgingTags tags={tags} />
          </div>
          <div className={`flx ${styles.hostScale}`}>
            <StarScale rating={rating} />
            <Host host={host} />
          </div>
        </div>
        <div className={`flx ${styles.collapsibles}`}>
          <TextCollapse>
            <h3>Description</h3>
            <img src={arrowUp} />
            <div>
              <p>{description}</p>
            </div>
          </TextCollapse>
          <TextCollapse>
            <h3>Équipements</h3>
            <img src={arrowUp} />
            <div>
              <ul>
                {equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </TextCollapse>
        </div>
      </Layout>
    </main>
  );
}

export default Lodging;
