import styles from '../styles/starScale.module.scss'

function StarScale (rating) {

    const range = [ 1, 2, 3, 4, 5 ];
    const itemRating = parseInt(rating.rating)

    return (
        <div className={styles.starScaleContainer}>
        {range.map((rangeElem, index) => (
            itemRating >= rangeElem ? 
            <img key={`StarFull-${index}`} src="../src/assets/starFull.png" alt="Une étoile de couleur rouge" /> : 
            <img key={`Star-${index}`} src="../src/assets/star.png" alt="Une étoile de couleur grise" />
        ))}
        </div>
    )
}

export default StarScale