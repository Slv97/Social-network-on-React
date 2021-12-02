import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar
        navbarData={props.state.sidebar.navbarData}
        friendsData={props.state.sidebar.friendsData}
      />

      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                postData={props.state.profilePage.postData}
                dispatch={props.dispatch}
                newPostText={props.state.profilePage.newPostText}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                dialogData={props.state.dialogPage.dialogData}
                messageData={props.state.dialogPage.messageData}
                dispatch={props.dispatch}
                newMessageText={props.state.dialogPage.newMessageText}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
