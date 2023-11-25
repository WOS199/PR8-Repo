import styles from '../styles/hero.module.scss'

function Hero() {
    return (
        <div className={`flx ${styles.heroContainer}`}>
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Hero