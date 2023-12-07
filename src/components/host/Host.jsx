import styles from './host.module.scss'

function Host (host) {

    const hostName = host.host.name;
    const splitHostName = hostName.split(' ');

    return (
        <div className={`flx ${styles.hostContainer}`}>
            <div>
                {splitHostName.map((elem, index) => (
                    <p className={styles.textRight} key={elem}>{elem}</p>
                ))}
            </div>
            <img src={host.host.picture} alt="Photo de profil de l'hôte" />
        </div>
    )
}

export default Host