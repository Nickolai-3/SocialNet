import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

  return (

    <div>Post

        <div >

        <img className={s.item_img} src='https://fakty.com.ua/wp-content/uploads/2019/03/14/Bez-nazvanyya-1-e1552570144483.png' />
        <div></div>
        <div>{props.message}</div>
        <div>{props.likecount}{props.id}</div>

      </div>


    </div>

  )
}
export default Post;