import logementData from '../data/logements.json'
import LgmtThumbnail from './LgmtThumbnail'
import styles from '../styles/lgmtThumbnail.module.scss'

function LgmtList() {
    return (
        <div className={`flx ${styles.lgmtContainer}`}>
            {logementData.map(({id, title, cover}) => (
                <LgmtThumbnail 
                    key={id}
                    id={id}
                    title={title}
                    cover={cover}
                />
            ))}
        </div>
    )
}

export default LgmtList