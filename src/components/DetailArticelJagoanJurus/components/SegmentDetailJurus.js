import React from 'react';
import {
  Segment,
  Header,
  Button,
  Divider,
  Container,
  Grid,
} from 'semantic-ui-react';
// import DummyData from '../services/dummyDataDetailArticel';
import { convertDateFormat } from '../../../scripts/moment';
export default class SegmentDetailJurus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panduan: true,
      jurus: false,
      racikan: false,
    };
  }
  handleJurus = () => {
    this.setState({ jurus: true, panduan: false, racikan: false });
  };
  handlePanduan = () => {
    this.setState({ panduan: true, jurus: false, racikan: false });
  };
  handleRacikan = () => {
    this.setState({ racikan: true, panduan: false, jurus: false });
  };
  renderDetail = () => {
    const { jurus, panduan, racikan } = this.state;
    const { data } = this.props;
    if (jurus) {
      return (
        <div>
          {data.sub_contents.map(object => (
            <Grid key={object}>
              <Grid.Column width={9}>
                {object.id.replace(/<(.|\n)*?>/g, '')}
                {object.content.replace(/<(.|\n)*?>/g, '')}
              </Grid.Column>
            </Grid>
          ))}
        </div>
      );
    } else if (panduan) {
      return (
        <div>
          {data.sub_contents.map(object => (
            <Grid key={object}>
              <Grid.Column width={9}>
                {object.id.replace(/<(.|\n)*?>/g, '')}
                {object.content.replace(/<(.|\n)*?>/g, '')}
              </Grid.Column>
            </Grid>
          ))}
        </div>
      );
    } else if (racikan) {
      return (
        <div>
          {data.sub_contents.map(object => (
            <Grid key={object}>
              <Grid.Column width={9}>
                {object.id.replace(/<(.|\n)*?>/g, '')}
                {object.content.replace(/<(.|\n)*?>/g, '')}
              </Grid.Column>
            </Grid>
          ))}
        </div>
      );
    }
  };
  render() {
    // const props = this.props;
    const { panduan, jurus, racikan } = this.state;
    const { data } = this.props;
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
        <Header as="h2" content={data.title} />
        <Container
          content={`${convertDateFormat(
            data.created_at,
            'DD MMMM YYYY'
          )} | Oleh ${data.author.name}`}
        />
        <Divider />
        <Grid centered columns={2}>
          <Grid.Column>
            <Button
              content="Panduan"
              size="big"
              style={{
                borderRadius: '0px',
                color: panduan ? '#283989' : 'grey',
                backgroundColor: 'white',
              }}
              onClick={this.handlePanduan}
            />
            <Button
              content="Jurus"
              size="big"
              style={{
                borderRadius: '0px',
                color: jurus ? '#283989' : 'grey',
                backgroundColor: 'white',
              }}
              onClick={this.handleJurus}
            />
            <Button
              content="Racikan"
              size="big"
              style={{
                borderRadius: '0px',
                color: racikan ? '#283989' : 'grey',
                backgroundColor: 'white',
              }}
              onClick={this.handleRacikan}
            />
          </Grid.Column>
        </Grid>
        {this.renderDetail()}
      </Segment>
    );
  }
}
