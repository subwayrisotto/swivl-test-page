import React, { useState } from 'react';
import { posts } from '../../helpers/posts';
import PostCardComponent from '../PostCardComponent/PostCardComponent';
import SwitchComponent from '../SwitchComponent/SwitchComponent';
import styles from './PostsComponent.module.scss'

export default function PostsComponent() {  
  const [isPrivate, setIsPrivate] = useState(true);
  console.log(isPrivate)

  const handleToggle = () => {
    setIsPrivate(!isPrivate);
  }

  return (
    <div className={styles.postsContent}>
      <SwitchComponent isPrivate={isPrivate} handleToggle={handleToggle}/>

      <div className={styles.postCardsWrapper}>
        {
          isPrivate 
          ? posts.private.map((post, index) => {
            return(
              <PostCardComponent post={post} key={index} />
            );
          }) 
          
          : posts.public.map((post, index) => {
            return(
              <PostCardComponent post={post} key={index} hideShare={true}/>
            );
          })
        }
      </div>
    </div>
  )
}
