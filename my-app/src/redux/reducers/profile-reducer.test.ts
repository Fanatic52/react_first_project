import profileReducer, {actions} from "./profile-reducer";
import {PostType, ProfileType} from "../../types/types";

let state = {
    posts: [
        {id: 1, message: 'hi bro', likes: 12},
        {id: 2, message: 'you look very well', likes: 13},
        {id: 3, message: 'some message', likes: 2},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

test('add post', () => {
    let action = actions.addPost("some post text");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
    expect(newState.posts[3].message).toBe("some post text");
});

test('delete  post', () => {
    let action = actions.deletePost(2);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

test('delete post, if postId is incorrect', () => {
    let action = actions.deletePost(33);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});