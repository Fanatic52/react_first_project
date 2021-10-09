import React from 'react';
import MyPostsCss from './MyPosts.module.css';
import Posts from "./Post/Posts";
import AddNewPostForm from "./MyPostsForms";

let MyPosts = (props) => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(post => <Posts message={post.message} likes={post.likes} key={post.id}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={MyPostsCss.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={addNewPost}/>
            <div className={MyPostsCss.posts}>
                { postsElements }
            </div>
        </div>
    )
};
MyPosts = React.memo(MyPosts);

export default MyPosts;