import React, { useState } from 'react';
import styles from './PostCardComponent.module.scss'

export default function PostCardComponent({post, hideShare=false}) {
  const [shared, setIsShared] = useState(false);

  console.log(post)  

  // in future will be great to create function which move after click card to public container
  const handleClick = () => {
    setIsShared(!shared);
  }

  return (
    <div className={styles.postCard}>
        {
          post.shared 
          ? <div className={styles.sharedContent}>
             {(() => {
                switch (post.sharedInfo.sharedBy) {
                  case 'weblink':
                    return <p className={`${styles.sharedText} ${styles.weblink}`}><img src='./icons/link.svg' alt="link"/> Shared by weblink</p>
                  case 'group':
                    return <p className={`${styles.sharedText} ${styles.group}`}> Shared to <span className={styles.groupName}>
                      {post.sharedInfo.to.length > 24 ? post.sharedInfo.to.slice(0, 24) + '...' : post.sharedInfo.to}</span>
                      </p>
                  default:
                    return null
                }
              })()}
          </div> 
          : <p className={`${styles.sharedText} ${styles.empty}`}></p>
        }

        <div className={styles.postText}>{post.text}</div>

        <div className={styles.authorContent}>
          <div className={styles.authorInfo}>
            <div className={styles.authorAvatar}>
              {
                post.authorAvatar !== "" 
                ? <img className={styles.authorAvatarImg} src={`./avatars/${post.authorAvatar}`} alt={post.authorAvatar}/>
                : <div className={styles.noAvatar}></div>
              }
            </div>

            <span className={styles.author}>{post.author}</span>
          </div>

          <div className={styles.shareInfo}>
            {
              post.shared 
              ? <div className={styles.sharedInfoContent}>
                  <div className={styles.viewsContent}>
                    <div className={styles.viewImageContent}>
                      <img className={styles.viewImg} src={`./icons/view.svg`} alt="view logo"/>
                    </div>

                    <span className={styles.viewNumber}>{post.sharedInfo.views}</span>
                </div>

                <div className={styles.likesContent}>
                    <div className={styles.likeImageContent}>
                      <img className={styles.likeImg} src={`./icons/like.svg`} alt="like logo"/>
                    </div>

                    <span className={styles.likeNumber}>{post.sharedInfo.likes}</span>
                </div>
              </div>
              : !hideShare && <button type='button' className={styles.sharedInfoButton} onClick={handleClick}>
                {shared ? 'Shared' : 'Share'}
              </button>
            }
          </div>
        </div>
    </div>
  )
}
