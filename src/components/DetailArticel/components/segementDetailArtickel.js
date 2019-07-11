import React from 'react';
import {
  Segment,
  Header,
  Button,
  Divider,
  Container,
  List,
  Image,
} from 'semantic-ui-react';
export default class SegmentDetailJurus extends React.Component {
  render() {
    return (
      <Segment>
        <Button
          content="Review"
          style={{
            borderRadius: '0px',
            backgroundColor: '#283989',
            color: 'white',
          }}
        />
        <Header
          as="h1"
          content="Join The Battle:The Game of Thrones Conquest Game is Here"
        />
        <Container content="20 Januari 2018 | Oleh: Aldri Rizky Kurniawan/Reiner Rekado" />
        <Divider />
        <List bulleted>
          <List.Item content="	Kategorisasi 1: Lorem ipsum" />
          <List.Item content="	Kategorisasi 1: Lorem ipsum" />

          <List.Item content="	Kategorisasi 1: Lorem ipsum" />
        </List>
        <Header as="h3">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
        </Header>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="medium"
          centered
        />
      </Segment>
    );
  }
}
