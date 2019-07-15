import React, { Component } from "react";
import {
  Button,
  Icon,
  Label,
  Segment,
  Header,
  Divider,
  Grid,
  Message
} from "semantic-ui-react";
import Form from "../../reusable/Formsy/Form";
import { connect } from "react-redux";
import { registerUser } from "../../action/SignupAction";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";

class Signup extends Component {
  onValidSubmit = formData => {
    this.props.registerUser(formData);
  };

  render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        <SemanticToastContainer />
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form
              ref={ref => (this.form = ref)}
              onValidSubmit={this.onValidSubmit}
              size="large"
            >
              <Segment stacked>
                <Header as="h2" color="teal" textAlign="center">
                  Daftar Akun
                </Header>
                <Form.Input
                  name="email"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  name="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                />
                <Form.Input
                  name="password"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button
                  loading={loading}
                  disabled={loading}
                  type="submit"
                  color="teal"
                  fluid
                  size="large"
                >
                  Daftar
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.async.asyncAction
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Signup);
