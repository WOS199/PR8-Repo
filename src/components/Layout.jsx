import styles from '../styles/layout.module.scss'
import logoSmall from '../assets/LogoKasa_small.png'
import logoSmallWhite from '../assets/LogoKasa_small_white.png'
import { NavLink } from 'react-router-dom'

function Layout() {
    return (
        <>
        <div className={`${styles.flx} ${styles.header}`}>
            <img src={logoSmall}></img>
            <div className={`${styles.flx} ${styles.nav}`}>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='Apropos'>A propos</NavLink>
            </div>
        </div>
        <div className={styles.placeholder}></div>
        <div className={`${styles.flx} ${styles.footer}`}>
            <img src={logoSmallWhite}></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
        </>
    )
}

export default Layout

