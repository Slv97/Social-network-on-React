let initialState = {
    navbarData: [
      { path: "/profile", name: "Profile" },
      { path: "/dialogs", name: "Messages" },
      { path: "/users", name: "Users" },
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
  }

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;