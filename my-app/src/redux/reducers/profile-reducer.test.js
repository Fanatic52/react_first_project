import profileReducer, {addPost, deletePost} from "./profile-reducer";

test('add post', () => {
    let action = addPost("some post text");
    let state = {
        posts: [
            {id: 1, message: 'hi bro', likes: 12},
            {id: 2, message: 'you look very well', likes: 13},
            {id: 3, message: 'some message', likes: 2},
        ],
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
    expect(newState.posts[3].message).toBe("some post text");
});

test('delete  post', () => {
    let action = deletePost(2);
    let state = {
        posts: [
            {id: 1, message: 'hi bro', likes: 12},
            {id: 2, message: 'you look very well', likes: 13},
            {id: 3, message: 'some message', likes: 2},
        ],
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

test('delete post, if postId is incorrect', () => {
    let action = deletePost(33);
    let state = {
        posts: [
            {id: 1, message: 'hi bro', likes: 12},
            {id: 2, message: 'you look very well', likes: 13},
            {id: 3, message: 'some message', likes: 2},
        ],
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});