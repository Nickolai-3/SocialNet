import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
  return (
    <div className={s.content}>
      <img className={s.item} src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' />
      <div></div>
      <img className={s.item_img} src='http://webresizer.com/images2/bird1_before.jpg' />
    </div>

  )
}
export default ProfileInfo;