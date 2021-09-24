import React from 'react';
import MyPostsCss from './MyPosts.module.css';
import Posts from "./Post/Posts";
import AddNewPostForm from "./MyPostsForms";

const MyPosts = (props) => {
    let postsJSX =
        props.posts.map(post => <Posts message={post.message} likes={post.likes}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={MyPostsCss.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={addNewPost}/>
            <div className={MyPostsCss.posts}>
                { postsJSX }
            </div>
        </div>
    )
}

export default MyPosts;