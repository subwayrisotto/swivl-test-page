import React from 'react';
import styles from './SwitchComponent.module.scss'

export default function SwitchComponent(props) {
  const {isPrivate, handleToggle} = props;

  return (
    <div className={styles.switchContent}>
      <p className={`${styles.switchText} ${!isPrivate && "active"}`}>Public</p>

      <div className={`${styles.switcher} ${isPrivate ? styles.private : styles.public}`} onClick={handleToggle}>
        <div className={styles.circle}></div>
      </div>

      <p className={`${styles.switchText} ${isPrivate && "active"}`}>Private</p>
    </div>
  )
}
