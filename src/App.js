import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import InputWord from "./components/InputWord";

const App = () => {  
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);
  
  return (
    <Router history={history}>
      <div>
        <nav className="navbar d-flex justify-content-center navbar-dark bg-danger">          
          <div>
            <InputWord/>            
          </div>          
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />            
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
