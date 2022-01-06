import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"

let state = {
  postData: [
    { id: 1, message: "Hi, how are you?", likesCount: 2 },
    { id: 2, message: "Hi, how old are you", likesCount: 4 },
    { id: 3, message: "Andy", likesCount: 6 },
  ],
  newPostText: "lena"
};

it("new post should be added", () =>{
  let action = addPostActionCreator('hah');

  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(4);
})

it("new message should be", () =>{
  let action = addPostActionCreator('hah');

  let newState = profileReducer(state, action);

  expect(newState.postData[3].message).toBe('lena');
})

it("after deleting length of messages shpould be decrement", () =>{
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(2);
})
