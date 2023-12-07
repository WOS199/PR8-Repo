import { useState } from "react";
import styles from './TextCollapse.module.scss'

function TextCollapse ({children}) {

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

export default TextCollapse