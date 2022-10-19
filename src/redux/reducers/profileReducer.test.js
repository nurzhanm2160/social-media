import { addPostAC, profileReducer, removePost } from './profileReducer';

const initialState = {
    posts: [
        { name: 'nurik2160', message: 'post 1', id: 1 },
        { name: 'dauren', message: 'post 2', id: 2 },
        { name: 'narkoz520', message: 'post 3', id: 3 },
    ],
};

it('length of posts should be incremented', () => {
    let action = addPostAC('Тестируем добавление нового поста');

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(4);
});

it("message should be 'Тестируем добавление нового поста'", () => {
    let action = addPostAC('Тестируем добавление нового поста');

    let newState = profileReducer(initialState, action);

    expect(newState.posts[3].message).toBe('Тестируем добавление нового поста');
});

it('length of posts should be decremented', () => {
    let action = removePost(3);

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(2);
});
