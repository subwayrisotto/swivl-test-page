import React from 'react';
import UserCardComponent from '../UserComponent/UserComponent';
import styles from './MainComponent.module.scss';
import { users } from '../../helpers/users';
import PostsComponent from '../PostsComponent/PostsComponent';

function MainComponent() {
  // simple parse of current user
  const currentUserId = 0;

  return (
    <div className={`content ${styles.contentMain}`}>
      <div className={`wrapper ${styles.wrapperMain}`}>
        <UserCardComponent currentUser={users[currentUserId]}/>  
        <PostsComponent />
      </div>
    </div>
  )
}

export default MainComponent
