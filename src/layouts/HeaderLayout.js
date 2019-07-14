import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Aplikasi Survey
          </Menu.Item>
        </Link>

        <Link to="/masterquestionnaire">
          <Menu.Item
            name="quizioner"
            active={activeItem === "quizioner"}
            onClick={this.handleItemClick}
          >
            Data Kuisioner
          </Menu.Item>
        </Link>

        <Menu.Menu position="right">
          <Menu.Item
            name="signup"
            active={activeItem === "signup"}
            onClick={this.handleItemClick}
          >
            Signup
          </Menu.Item>

          <Menu.Item
            name="help"
            active={activeItem === "help"}
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
