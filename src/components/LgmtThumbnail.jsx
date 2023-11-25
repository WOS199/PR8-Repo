import styles from '../styles/lgmtThumbnail.module.scss'

function LgmtThumbnail({id, title, cover}) {
    return (
        <div style={{backgroundImage: `url(${cover})`}} className={`flx ${styles.lgmtThumbnail}`}>
            <p>{title}</p>
        </div>
    )
}

export default LgmtThumbnail