import React from 'react';
import { Grid, Container, Button, Divider } from 'semantic-ui-react';
import { style } from './styles';
const account = () => {
  return (
    <Grid>
      <Grid.Column width={15}>
        <Container fluid content="Alamat Email" as="h3" />
        <input style={style.border} placeholder="Search..." />
        {/* <Input fluid placeholder="Search..." style={{ bo: '0px' }} /> */}
        <Divider />
        <Button content="Ubah" floated="right" style={style.buttonChange} />
      </Grid.Column>
      <Grid.Column width={15}>
        <Container fluid content="Nama Akun" as="h3" />
        <input style={style.border} placeholder="Search..." />
        <Divider />
        {/* <Input fluid placeholder="Search..." style={style.border} /> */}
        <Button content="Ubah" floated="right" style={style.buttonChange} />
      </Grid.Column>
      <Grid.Column width={15}>
        <Container fluid content="Kata Sandi" as="h3" />
        <input style={style.border} placeholder="Search..." />
        <Divider />
        {/* <Input fluid placeholder="Search..." style={style.border} /> */}
      </Grid.Column>
      <Grid.Column width={15}>
        {/* <Input fluid placeholder="Search..." style={style.border} /> */}
        <input style={style.border} placeholder="Search..." />
        <Divider />
        <Button content="Ubah" floated="right" style={style.buttonChange} />
      </Grid.Column>
      <Grid.Column width={15}>
        <Button content="Simpan" floated="left" style={style.buttonSave} />
      </Grid.Column>
    </Grid>
  );
};

export default account;
