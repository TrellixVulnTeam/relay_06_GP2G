import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PostPage from "../pages/PostPage";
import GalleryPage from "../pages/GalleryPage";
import GalleryUploadPage from "../pages/GalleryUploadPage";
import GalleryPhotoPage from "../pages/GalleryPhotoPage";
import SignUp from "../pages/SignUp";
import LoginPage from "../pages/LoginPage";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/diaryHome" component={Home} />
        <Route exact path="/diary" component={PostPage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/gallery/upload" component={GalleryUploadPage} />
        <Route exact path="/gallery/:id" component={GalleryPhotoPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default Routes;
