import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";
import Signup from "./components/Login/Signup";
import { Route, Switch } from 'react-router-dom'
import React from "react";
import Home from "./components/Home";
import background from "./assets/background.mov"
import Combos from "./components/Combos";
import ViewCombo from "./components/ViewCombo";
import Submit from "./components/Submit";

function App() {
  const [user, setUser] = useState(null)
  const [bio, setBio] = useState("I main everyone");


  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => setUser(userData));
      }
    });
  }, []);

  if (!user) {
    return <LoginContainer setUser={setUser} bio={bio} setBio={setBio}/>
  }

  return (
    <div className="main">
      <video className="video" src={background} autoPlay loop muted/>
      <div className="App">
        <NavBar user={user} setUser={setUser} className="navbar"/>
          <Switch>
            <Route exact path="/">
              <Home user={user}/>
            </Route>

            <Route exact path="/login">
              <Login setUser={setUser}/>
            </Route>

            <Route exact path="/signup">
              <Signup setUser={setUser}/>
            </Route>

            <Route exact path="/combos/:id">
              <Combos />
            </Route>

            <Route exact path="/combo/:id">
              <ViewCombo />
            </Route>

            <Route exact path="/combos/submit/:charID">
              <Submit user={user}/>
            </Route>

          </Switch>
      </div>
    </div>
  );
}

export default App;