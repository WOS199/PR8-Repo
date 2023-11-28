import styles from '../styles/lgmtThumbnail.module.scss'
import { Link } from 'react-router-dom'

function LgmtThumbnail({id, title, cover}) {
    return (
        <div style={{backgroundImage: `url(${cover})`}} className={`flx ${styles.lgmtThumbnail}`}>
            <Link to={`/fichesLogements/${id}`}></Link>
            <p>{title}</p>
        </div>
    )
}

export default LgmtThumbnail