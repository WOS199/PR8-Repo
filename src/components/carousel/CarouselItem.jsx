import styles from './carousel.module.scss'

function CarouselItem ({item}) {

    const carouselPicStyle = {backgroundImage:`url(${item})`};

    return (
        <div>
            <div className={styles.carouselPic} style={carouselPicStyle}></div>
        </div>
    )
}

export default CarouselItem