import React from 'react';
import MyPostsCss from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = (props) => {
    let postsJSX =
        props.posts.map(post => <Posts message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef();

    let onAddPostClick = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={MyPostsCss.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPostClick}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={MyPostsCss.posts}>
                { postsJSX }
            </div>
        </div>
    )
}

export default MyPosts;