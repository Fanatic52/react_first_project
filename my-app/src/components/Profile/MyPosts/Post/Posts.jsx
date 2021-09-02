import React from 'react';
import PostsCss from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={PostsCss.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXg1MHjGJ-sxWWf-oOWEXtatJc4iiJFhE-LQ&usqp=CAU'/>
            {props.message}
            <div>
                <span>like : {props.likes}</span>
            </div>
        </div>
    )
}

export default Posts;