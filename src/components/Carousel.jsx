import logementData from '../data/logements.json'

function Carousel ({itemId}) {

let itemPics = [];
logementData.forEach ((logement) => {
    if (logement.id === itemId) {
        itemPics = [...logement.pictures]
    }
})

 return (
    <>
        <p>La carousel correspondant à {itemId}</p>
        {itemPics.map((pic, index) => (
            <img key={`${itemId}-${index}`} src={pic}></img>
            )
        )};
    </>
 )
}

export default Carousel