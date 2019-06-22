import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {

  state = {
    isAuthenticated: false
  }

  toggleAuth = () => {
    this.setState((state) => {
      return {
        isAuthenticated: !state.isAuthenticated
      }
    });
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          toggleAuth: this.toggleAuth
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
