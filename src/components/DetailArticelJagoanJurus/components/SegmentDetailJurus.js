import React from 'react';
import {
  Segment,
  Header,
  Button,
  Divider,
  Container,
  Grid,
  Image,
} from 'semantic-ui-react';

const array = [1, 2, 3];
export default class SegmentDetailJurus extends React.Component {
  render() {
    return (
      <Segment>
        <Button
          content="Jagoan Digim"
          style={{
            borderRadius: '0px',
            backgroundColor: '#283989',
            color: 'white',
          }}
        />
        <Header as="h2" content="Hanabi" />
        <Container content="20 Januari 2018 | Oleh: Aldri Rizky Kurniawan/Reiner Rekado" />
        <Divider />
        <Grid centered columns={2}>
          <Grid.Column>
            <Button
              content="Panduan"
              size="big"
              style={{
                borderRadius: '0px',
                color: '#283989',
                backgroundColor: 'white',
              }}
            />
            <Button
              content="Jurus"
              size="big"
              style={{
                borderRadius: '0px',
                color: '#283989',
                backgroundColor: 'white',
              }}
            />
            <Button
              content="Racikan"
              size="big"
              style={{
                borderRadius: '0px',
                color: '#283989',
                backgroundColor: 'white',
              }}
            />
          </Grid.Column>
        </Grid>
        {array.map(data => (
          <Grid key={data}>
            <Grid.Column width={6}>
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="medium"
              />
            </Grid.Column>
            <Grid.Column width={9}>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Grid.Column>
          </Grid>
        ))}
      </Segment>
    );
  }
}
