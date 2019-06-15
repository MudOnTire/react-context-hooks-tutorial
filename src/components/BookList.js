import React, { Component } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";

export default class BookList extends Component {

  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className='book-list' style={{ color: theme.syntax, backgroundColor: theme.bg }}>
        <ul>
          <li style={{ backgroundColor: theme.ui }}>the way of kings</li>
          <li style={{ backgroundColor: theme.ui }}>the name of the wind</li>
          <li style={{ backgroundColor: theme.ui }}>the final empire</li>
        </ul>
      </div>
    )
  }
}
