import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import TwoFactorAuth from './components/Auth/TwoFactorAuth';
import EditUserDetails from './components/Dashboard/EditUserDetails';
import ChangePassword from './components/Dashboard/ChangePassword';
import VideoUpload from './components/Dashboard/VideoUpload';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/two-factor-auth" component={TwoFactorAuth} />
        <Route path="/edit-user-details" component={EditUserDetails} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/video-upload" component={VideoUpload} />
      </Switch>
    </Router>
  );
}

export default App;