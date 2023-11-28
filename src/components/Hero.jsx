import styles from '../styles/hero.module.scss'

function Hero({children}) {
    return (
        <div className={`flx ${styles.heroContainer}`}>
            <h2>{children}</h2>
        </div>
    )
}

export default Hero