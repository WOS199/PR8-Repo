import logementData from '../../data/logements.json'
import LodgingThumbnail from '../lodgingThumbnail/LodgingThumbnail'
import styles from '../../components/lodgingList/lodgingList.module.scss'

function LodgingList() {
    return (
        <div className={`flx ${styles.LodgingContainer}`}>
            {logementData.map(({id, title, cover}) => (
                <LodgingThumbnail 
                    key={id}
                    id={id}
                    title={title}
                    cover={cover}
                />
            ))}
        </div>
    )
}

export default LodgingList