import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginForm from './Login';
import Register from './Register';

function Home() {
  const [isLoginPage, setLoginPage] = useState(true);

  const handleLoginToggle = () => {
    setLoginPage(!isLoginPage);
  };

  return (
    <Router>
      <div>
        <div>
          <Link to="/login">
            <button onClick={handleLoginToggle}>Login</button>
          </Link>
          <Link to="/register">
            <button onClick={handleLoginToggle}>Register</button>
          </Link>
        </div>

        <div>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;
