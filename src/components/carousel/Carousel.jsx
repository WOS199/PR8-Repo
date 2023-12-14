import CarouselItem from './CarouselItem';
import { useState } from 'react'; 
import styles from './carousel.module.scss'
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'

function Carousel ({itemId, pics}) {

// Initializing the hook for the index state
const [activeIndex, setActiveIndex] = useState(0);
// Managing the index
const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = pics.length - 1;
    } else if (newIndex >= pics.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const hide = pics.length === 1 ? {display: 'none'} : {display: 'flex'};

 return (
    <>
        <div className={`${styles.carouselContainer}`}>
            <div 
            className={`${styles.inner}`}
            style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
                {pics.map((item, index) => (
                <CarouselItem key={`${itemId}-${index}`} item={item}/>
                ))}
            </div>
            <div className={`${styles.carouselNav}`} style={hide}>
                <img src={arrowLeft} onClick={() => {updateIndex(activeIndex - 1)}}></img>
                <img src={arrowRight} onClick={() => {updateIndex(activeIndex + 1)}}></img>
            </div>
            <div className={`${styles.carouselNumber}`} style={hide}>
              <p>{activeIndex + 1} / {pics.length}</p>
            </div>
        </div>
    </>
 )
}

export default Carousel