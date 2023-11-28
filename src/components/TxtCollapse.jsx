import { useState } from "react";
import styles from '../styles/CollapseTxtBox.module.scss'
import arrowUp from '../assets/arrowUp.png'

function CollapseTxtBox ({children}) {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div className={`flx ${styles.collapseContainer} ${isCollapsed ? styles.collapsed : styles.expanded}`} onClick={toggleCollapse}>
                <>
                    {children}
                </>
            </div>
            
        </>
    )
}

export default CollapseTxtBox