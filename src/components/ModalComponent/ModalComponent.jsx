import React, { useState } from 'react';
import styles from './ModalComponent.module.scss'

export default function ModalComponent({modalItems}) {
  // use 0 because of example on Figma, for sure we can store it and parse data
  const [activeId, setActiveId] = useState(0);

  const toggleActive = id => {
   setActiveId(id === activeId ? null : id);
  }

  return (
    <div className={styles.modalContent}>
      <ul className={styles.modalList}>
        {
          modalItems.map((item, index) => {
            return(
              <li className={`${styles.modalListItem}  ${index === activeId ? styles.active : ''}`}  key={index} onClick={() => toggleActive(index)}>
                <div className={styles.modalListItemIcon}>
                  <img 
                    src={`./icons/${item.name.toLowerCase().replace(" ", "_")}.svg`} 
                    alt={`User: ${item.name}`} 
                  />
                </div>
                <p className={styles.modalListItemName}>{item.name}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
