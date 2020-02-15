import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  state = {
    isDarkMode: false
  };
  toggleTheme = () => {
    const current = this.state.isDarkMode;
    this.setState({
      isDarkMode: !current
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
