
import React, { useState } from 'react'
import { navbar } from '../../helpers/navbar';
import styles from './NavbarComponent.module.scss';
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
    const [activeId, setActiveId] = useState(0);

    const toggleActive = id => {
        setActiveId(id === activeId ? null : id);
    }
    const navigate = useNavigate();

    // simple function which we can make more complex
    const handleClick = to => {
        navigate(to)
    }

    return (
        <ul className={styles.navbarList}>
            {
                navbar.map((navItem, index) => {
                    return(
                        <li 
                            className={`${styles.navbarListItem}  ${index === activeId && styles.active}`} 
                            key={index}
                            onClick={() => {
                                handleClick(navItem.link);
                                toggleActive(index)
                            }}
                        >
                            {navItem.name}
                        </li>
                    )
                })
            }
        </ul>
  )
}

export default NavbarComponent
