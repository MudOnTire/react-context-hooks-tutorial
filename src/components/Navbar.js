import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class Navbar extends Component {

  // static contextType = ThemeContext;

  render() {
    // const { isLightTheme, light, dark } = this.context;
    // const theme = isLightTheme ? light : dark;
    return (
      <ThemeContext.Consumer>
        {
          (context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (
              <div>
                <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              </div>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}
