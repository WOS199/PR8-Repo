import styles from './lodgingTags.module.scss'

function LodgingTags ({tags}) {
    return (
        <div className={styles.LodgingTags}>
            {tags.map((tag, index) => (
                <div key={`${tag}-${index}`} className={styles.LodgingTag}><p>{tag}</p></div>
            ))}
        </div>
    )
}

export default LodgingTags