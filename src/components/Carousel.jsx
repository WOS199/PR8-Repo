import logementData from '../data/logements.json'
import CarouselItem from './CarouselItem';
import { useState } from 'react'; 
import styles from '../styles/carousel.module.scss'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'

function Carousel ({itemId}) {

// Creating a table containing the pictures needed for our specific item
let itemPics = [];
logementData.forEach ((logement) => {
    if (logement.id === itemId) {
        itemPics = [...logement.pictures]
    }
})

// Initializing the hook for the index state
const [activeIndex, setActiveIndex] = useState(0);
// Managing the index
const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = itemPics.length - 1;
    } else if (newIndex >= itemPics.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

 return (
    <>
        <div className={`${styles.carouselContainer}`}>
            <div 
            className={`${styles.inner}`}
            style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
                {itemPics.map((item, index) => (
                <CarouselItem key={`${itemId}-${index}`} item={item}/>
                ))}
            </div>
            <div className={`${styles.carouselNav}`}>
                <img src={arrowLeft} onClick={() => {updateIndex(activeIndex - 1)}}></img>
                <img src={arrowRight} onClick={() => {updateIndex(activeIndex + 1)}}></img>
            </div>
        </div>
    </>
 )
}

export default Carousel