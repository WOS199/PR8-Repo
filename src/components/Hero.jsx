import styles from '../styles/hero.module.scss'

function Hero({children, background}) {
    return (
        <div className={`flx ${styles.heroContainer}`} style={{backgroundImage: `url(${background})`}}>
            <h2>{children}</h2>
        </div>
    )
}

export default Hero