import React from "react";
import {
  Segment,
  Grid,
  Header,
  Icon,
  Divider,
  Button
} from "semantic-ui-react";

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

        <Button primary>Isi Kuisioner</Button>
        <Button secondary>Login Sebagai Admin</Button>
      </Grid.Column>
    </Grid>
  );
};

export default Home;
