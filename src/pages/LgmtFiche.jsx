import { useParams } from "react-router-dom"
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import LgmtTags from "../components/LgmtTags";
import logementData from '../data/logements.json'
import styles from '../styles/lgmtFiche.module.scss'
import StarScale from "../components/StarScale";
import Host from "../components/Host";

function LgmtFiche () {

    const params = useParams();
    const logement = logementData.find(item => item.id === params.id);
    const { id, cover, title, pictures, description, host, rating, location, equipements, tags } = logement

    return (
        <Layout>
            <Carousel itemId={params.id} pics={pictures}/>
            <div className={`flx ${styles.mainContainer}`}>
                <div className={styles.propertyInfos}>
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <LgmtTags tags={tags} />
                </div>
                <div className={`flx ${styles.hostScale}`}>
                    <StarScale rating={rating}/>
                    <Host host={host}/>
                </div>
            </div>
        </Layout>
    )
}

export default LgmtFiche