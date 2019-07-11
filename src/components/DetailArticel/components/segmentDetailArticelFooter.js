import React from 'react';
import { Segment, Header, Image, Divider, Container } from 'semantic-ui-react';
export default class SegmentDetailJurus extends React.Component {
  render() {
    return (
      <Segment>
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
        </Header>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="medium"
          centered
        />
        <Divider />
        <Container as="h3" textAlign="center" text>
          Donec posuere metus varius purus congue facilisis. Aliquam pretium
          ante in neque varius efficitur.
        </Container>
      </Segment>
    );
  }
}
