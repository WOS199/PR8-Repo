import { useState } from "react";
import styles from '../styles/CollapseTxtBox.module.scss'
import arrowUp from '../assets/arrowUp.png'

function CollapseTxtBox () {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div className={`flx ${styles.collapseContainer} ${isCollapsed ? styles.collapsed : styles.expanded}`} onClick={toggleCollapse}>
                <h3>Fiabilité</h3>
                <img src={arrowUp} />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
            </div>
            
        </>
    )
}

export default CollapseTxtBox