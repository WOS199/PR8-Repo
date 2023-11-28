import { useParams } from "react-router-dom"
import Layout from "./Layout";
import Carousel from "./Carousel";

function LgmtFiche () {

    const params = useParams();
    
    return (
        <Layout>
            <h2>Page concernant la fiche {params.id}</h2>
            <Carousel itemId={params.id} />
        </Layout>
    )
}

export default LgmtFiche