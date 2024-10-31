import React, { useState } from 'react';
import { modalItems } from '../../helpers/modalItems';
import ModalComponent from '../ModalComponent/ModalComponent';
import styles from './UserComponent.module.scss'

export default function UserCardComponent({currentUser}) {

  const [isModalToggled, setIsModalToggled] = useState(false)

  const toggleModal = () => {
    setIsModalToggled(!isModalToggled)
  }

  return (
    <div className={styles.userProfile}>
      <div className={styles.personalInfoContent}>
        <div className={styles.userAvatar}>
          <img 
            src={`./avatars/${currentUser.name.toLowerCase().replace(" ", "_")}.png`} 
            alt={`User: ${currentUser.name}`} 
          />
        </div>
        <div className={styles.userInfo}>
          <p className={styles.name}>{currentUser.name}</p>
          <p className={styles.username}>{currentUser.username}</p>
          <div className={styles.editUser}>
            <img src='./icons/edit.svg' alt="edit logo"/>
            <p>Edit Profile</p>
          </div>
        </div>
      </div>

      <div className={styles.statsContent}>
        <ul className={styles.statsList}>
          <li className={styles.statsListItem}>
            <p className={styles.values}>{currentUser.synths}</p>
            <p className={styles.name}>synths</p>
          </li>
          <li className={styles.statsListItem}>
            <p className={styles.values}>{currentUser.followers}</p>
            <p className={styles.name}>followers</p>
          </li>
          <li className={styles.statsListItem}>
            <p className={styles.values}>{currentUser.following}</p>
            <p className={styles.name}>following</p>
          </li>
        </ul>
      </div>

      <div className={styles.bioContent}>
        <p className={styles.bio}>
          {currentUser.bio}
        </p>
      </div>

      <div className={styles.settings} onClick={toggleModal}>
        <img src='./icons/dots.svg' alt="dots logo"/>
      </div>

      {
        isModalToggled && <ModalComponent modalItems={modalItems} />
      }
    </div>
  )
}
