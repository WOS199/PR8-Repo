import styles from '../styles/lgmtFiche.module.scss'

function LgmtTags ({tags}) {
    return (
        <div className={styles.lgmtTags}>
            {tags.map((tag, index) => (
                <div key={`${tag}-${index}`} className={styles.lgmtTag}><p>{tag}</p></div>
            ))}
        </div>
    )
}

export default LgmtTags