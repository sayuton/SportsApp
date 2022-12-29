import React, { Component } from 'react';

class Auth extends Component {
  state = {
    isLogin: true,
    username: ""
  };

  toggleForm = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    if (this.state.isLogin) {
      // handle login
    } else {
      // handle register
    }
  };

  render() {
    const { isLogin, username } = this.state;
    return (
      <div>
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <form onSubmit={this.handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          )}
          <input type="password" name="password" />
          <button type="submit">Submit</button>
        </form>
        <p>
          {isLogin
            ? "Don't have an account? "
            : "Already have an account?"}
          <button type="button" onClick={this.toggleForm}>
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    );
  }
}

export default Auth;