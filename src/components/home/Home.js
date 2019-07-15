import React from "react";
import {
  Segment,
  Grid,
  Header,
  Icon,
  Divider,
  Button
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid columns="equal">
      <Grid.Column as={Segment} textAlign="center">
        <Header size="huge">
          {/* <Icon name="write" /> */}
          Aplikasi Survey Online
        </Header>

        <Header size="medium">Desa Cerdas Mandiri</Header>
        <Divider />
        <Header size="small">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Header>
        <Link to="/questionnaire">
          <Button primary>Isi Kuisioner</Button>
        </Link>
        <Button color="green">Login Sebagai Admin</Button>
      </Grid.Column>
    </Grid>
  );
};

export default Home;
