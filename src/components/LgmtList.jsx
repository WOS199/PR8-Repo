import logementData from '../data/logements.json'
import LgmtThumbnail from './LgmtThumbnail'

function LgmtList() {
    return (
        <div>
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