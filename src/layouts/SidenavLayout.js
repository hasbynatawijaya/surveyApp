import React, { Component, createRef } from "react";
import { Menu } from "semantic-ui-react";

export default class SidenavLayout extends Component {
  contextRef = createRef();

  render() {
    return (
      <Menu fluid vertical>
        <Menu.Item>
          <Menu.Header>Dashboard</Menu.Header>

          <Menu.Menu>
            <Menu.Item name="Analytics" onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Survey</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="Daftar Pertanyaan"
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Tambah Pertanyaan"
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
