import React from 'react';
import MyPostsCss from './MyPosts.module.css';
import Posts from "./Post/Posts";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsJSX =
        props.posts.map(post => <Posts message={post.message} likes={post.likes}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={MyPostsCss.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={MyPostsCss.posts}>
                { postsJSX }
            </div>
        </div>
    )
}

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component="textarea"
                    name="newPostText"
                    placeholder="Enter your post"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddPostReduxForm = reduxForm({
    form: "profileAddPostForm"
})(AddPostForm);

export default MyPosts;