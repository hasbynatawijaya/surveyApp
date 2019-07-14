import React, { Component } from "react";
import HeaderLayout from "./HeaderLayout";
import { Grid } from "semantic-ui-react";

class DefaultLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderLayout />
        <div className="dashboard-body">
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column>{this.props.children}</Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default DefaultLayout;
