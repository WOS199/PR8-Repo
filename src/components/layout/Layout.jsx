import styles from './layout.module.scss'
import logoSmall from '../../assets/LogoKasa_small.png'
import logoSmallWhite from '../../assets/LogoKasa_small_white.png'
import { NavLink } from 'react-router-dom'

function Layout({children}) {
    return (
        <>
        <div className={`flx ${styles.header}`}>
            <img src={logoSmall}></img>
            <div className={`flx ${styles.nav}`}>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/About'>A propos</NavLink>
            </div>
        </div>
        <div>{children}</div>
        <div className={`flx ${styles.footer}`}>
            <img src={logoSmallWhite}></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
        </>
    )
}

export default Layout

