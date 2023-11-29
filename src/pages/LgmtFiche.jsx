import { useParams } from "react-router-dom"
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import LgmtTags from "../components/LgmtTags";
import logementData from '../data/logements.json'
import styles from '../styles/lgmtFiche.module.scss'

function LgmtFiche () {

    const params = useParams();
    const logement = logementData.find(item => item.id === params.id);
    const { id, cover, title, pictures, description, host, rating, location, equipements, tags } = logement

    return (
        <Layout>
            <Carousel itemId={params.id} pics={pictures}/>
            <h1>{title}</h1>
            <p>{location}</p>
            <LgmtTags tags={tags} />
        </Layout>
    )
}

export default LgmtFiche