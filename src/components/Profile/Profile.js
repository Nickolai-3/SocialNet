import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';


const Profile = () => {
  return (
    <div className={`${s.content} ${s.content.img}`}>
      <img src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' />
      <div> <img src='http://webresizer.com/images2/bird1_before.jpg'></img>
        <MyPost />
      </div>
    </div>

  )
}
export default Profile;