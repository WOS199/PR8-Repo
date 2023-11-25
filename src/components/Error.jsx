import { Link } from "react-router-dom"
import styles from '../styles/error.module.scss'

function Error () {
    return (
        <div className={`flx ${styles.errorContainer}`}>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'éxiste pas.</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error