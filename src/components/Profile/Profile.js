import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';


const Profile = () => {
  return (
    <div>
     <img className={s.item} src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' />
     <div></div>
     <img className={s.item_img} src='http://webresizer.com/images2/bird1_before.jpg'/>
        <MyPost />
        </div>
  )
}
export default Profile;