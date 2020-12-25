import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favorites from "./Components/Favorites/Favorites";
import Planets from "./Components/Planets/Planets";
import Header from "./Components/Header/Header";
import Spinner from "./Components/Spinner/Spinner";

function App() {
  const [planet, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://assignment-machstatz.herokuapp.com/planet")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError(false);
        setPlanets(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err.message);
      });
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/favorite'>
            <Header />
            <Favorites />
          </Route>
          <Route path='/'>
            <Header />
            {loading ? (
              <Spinner />
            ) : error ? (
              <div className='App__error'>
                <img
                  src='https://i.pinimg.com/564x/18/04/bf/1804bfc38fb43e90ed3dbf71b492851f.jpg'
                  className='App__error__thanos'
                ></img>
                <h4 className='App__error__headline'>
                  ohhh snap...an error occured
                </h4>
              </div>
            ) : (
              <Planets planetArr={planet} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
