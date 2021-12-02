let store = {
  _subscribe() {
    console.log("no subscribers (observers)");
  },
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", likesCount: 2 },
        { id: 2, message: "Hi, how old are you", likesCount: 4 },
        { id: 3, message: "Andy", likesCount: 6 },
      ],
      newPostText: "lena",
    },
    dialogPage: {
      dialogData: [
        {
          id: 1,
          name: "Lena",
          img:
            "https://www.b17.ru/foto/uploaded/f3b538ed0993ae5cd5c458bf02088d1a.jpg",
        },
        {
          id: 2,
          name: "Leha",
          img:
            "https://cdnn11.img.sputnik.by/img/07e5/05/18/1047704580_134:-1:1280:720_1920x0_80_0_0_63757a89f346a7ecf2af69af9eb1a559.jpg",
        },
        {
          id: 3,
          name: "Andy",
          img: "https://lifeglobe.net/x/entry/4163/1.jpg",
        },
      ],
      messageData: [
        { id: 1, text: "hi" },
        { id: 2, text: "kaka" },
        { id: 3, text: "lol" },
        { id: 4, text: "hi" },
      ],
      newMessageText: "message",
    },
    sidebar: {
      navbarData: [
        { path: "/profile", name: "Profile" },
        { path: "/dialogs", name: "Messages" },
        { path: "/news", name: "News" },
        { path: "/music", name: "Music" },
        { path: "/settings", name: "Settings" },
      ],
      friendsData: [
        {
          id: 2,
          name: "Leha",
          img:
            "https://cdnn11.img.sputnik.by/img/07e5/05/18/1047704580_134:-1:1280:720_1920x0_80_0_0_63757a89f346a7ecf2af69af9eb1a559.jpg",
        },
        {
          id: 3,
          name: "Andy",
          img: "https://lifeglobe.net/x/entry/4163/1.jpg",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscribe = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._subscribe(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._subscribe(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 5,
        text: this._state.dialogPage.newMessageText,
      };

      this._state.dialogPage.messageData.push(newMessage);
      this._state.dialogPage.newMessageText = "";
      this._subscribe(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogPage.newMessageText = action.newText;
      this._subscribe(this._state);
    }
  },
};

//window.store = store;

export default store;
