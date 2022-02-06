import React from 'react';
import PostsCss from './Posts.module.css';
import {PostType} from "../../../../types/types";

type PropsType = {
    message: string
    likes: number
}

const Posts: React.FC<PropsType> = (props) => {
    return (
        <div className={PostsCss.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXg1MHjGJ-sxWWf-oOWEXtatJc4iiJFhE-LQ&usqp=CAU' alt={"photo"}/>
            {props.message}
            <div>
                <span>like : {props.likes}</span>
            </div>
        </div>
    )
}

export default Posts;