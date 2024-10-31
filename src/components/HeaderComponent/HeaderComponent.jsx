import React from 'react';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import styles from './HeaderComponent.module.scss';

function HeaderComponent() {
  const currentUser = "Arthur Wood";

  return (
    <div className={`content ${styles.contentHeader}`}>
      <div className={`wrapper ${styles.wrapperHeader}`}>
        <div className={styles.topContent}>
          <div className={styles.logoContainer}>
            <img src='./icons/logo.svg' alt='logo'/>
          </div>

          <div className={styles.profile}>
            <div className={styles.user}>
              <p className={styles.currentUser}>{currentUser}</p>

              <img 
                src={`./avatars/${currentUser.toLowerCase().replace(" ", "_")}.png`} 
                alt={`User: ${currentUser}`} 
                className={styles.userAvatar}
              />

              <img 
                src='./icons/down_arrow.svg' 
                alt='Open more...' 
                className={styles.downArrow}
              />
            </div>

            <div className={styles.iconsContainer}>
              <img 
                src='./icons/notifications.svg' 
                alt='Notifications'
                className={styles.icon}
              />
              <img 
                src='./icons/present.svg' 
                alt='Gift'
                className={styles.icon}
              />
              <img 
                src='./icons/medium.svg' 
                alt='Medium'
                className={styles.icon}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottomContent}>
          <NavbarComponent />

          <div className={styles.actionButton}>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
