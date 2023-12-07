import styles from './LodgingThumbnail.module.scss'
import { Link } from 'react-router-dom'

function LodgingThumbnail({id, title, cover}) {
    return (
        <div style={{backgroundImage: `url(${cover})`}} className={`flx ${styles.LodgingThumbnail}`}>
            <Link to={`/Lodging/${id}`}></Link>
            <p>{title}</p>
        </div>
    )
}

export default LodgingThumbnail