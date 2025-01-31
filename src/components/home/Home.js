import React from 'react';
import {
  Grid,
  Image,
  Button,
  Header,
  Loader,
  Dimmer,
  Segment,
  Container,
  Divider,
} from 'semantic-ui-react';
import styles from './styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHeadlineAction, resetHomeAction } from '../../action/homeAction';
import { getArticlesAction } from '../../action/articlesAction';
import { Redirect } from 'react-router-dom';
// import DummyHeadLine from '../../scripts/dummyHeadline';

// const options = {
//   method: 'GET',
//   data: {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   },
//   credentials: 'include',
//   headers: {},
//   // headers: {
//   //   Accept: 'application/json',
//   //   'Content-Type': 'application/json',
//   //   'Access-Control-Allow-Origin': '*',
//   // },
// };

class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: {},
      changePage: false,
      gotoLink: '',
    };
  }

  static propTypes = {
    getHeadlineAction: PropTypes.func,
    getArticlesAction: PropTypes.func,
    articlesStatus: PropTypes.bool,
    articles: PropTypes.array,
    resetHomeAction: PropTypes.func,
    loading: PropTypes.bool,
  };
  componentDidMount() {
    this.props.getHeadlineAction();
  }
  componentDidUpdate() {
    if (this.props.articlesStatus) {
      this.setState({
        data: this.props.articles,
        data1: this.props.articles[0],
        data2: this.props.articles[1],
        data3: this.props.articles[2],
      });
      this.props.resetHomeAction();
    }
  }
  handleOnClickReview = (e, { name }) => {
    let link = `/Detail-Articel-Jurus/${name}`;
    this.setState({ changePage: true, gotoLink: link });
  };

  render() {
    const { data, changePage, gotoLink } = this.state;
    let data1 = data.length > 0 && data[0];
    if (changePage) {
      return <Redirect to={gotoLink} />;
    }
    return (
      <Grid
        stretched
        style={styles.quickLaunchContainerStyle}
        className="padding-side-twentyfive container-fit"
      >
        <Dimmer active={this.props.loading} inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
        <Grid.Row style={styles.segment}>
          <Grid.Column width={16} style={styles.noPadding}>
            <Grid columns={2}>
              <Grid.Column style={{ width: '100%', marginBottom: '1px' }}>
                <Image
                  src={
                    data.length > 0
                      ? data1.article.cover.large
                      : require('../../assets/coverGOT.jpg')
                  }
                  fluid
                />
                <Segment style={styles.divOpacity} loading={this.props.loading}>
                  <Button
                    content="Review"
                    primary
                    name={data.length > 0 ? data1.article.slug : ''}
                    onClick={this.handleOnClickReview}
                  />
                  <Header as="h1">
                    {data.length > 0 ? data1.article.title : ''}
                  </Header>
                  <Container textAlign="justified" as="h4">
                    <Divider />
                    <p>{data.length > 0 ? data1.article.description : ''}</p>
                  </Container>
                </Segment>
              </Grid.Column>
              <Grid.Row columns={3} style={{ marginTop: '-2em' }}>
                <Grid.Column>
                  <Image src={data.length > 0 && data[0].article.cover.large} />
                  {/* <Image src={require('../../assets/telkomsel.jpg')} /> */}
                  <Segment
                    style={styles.divOpacitySmall}
                    loading={this.props.loading}
                  >
                    <Button
                      content="Review"
                      primary
                      name={data.length > 0 ? data1.article.slug : ''}
                      onClick={this.handleOnClickReview}
                    />
                    <Container style={{ fontWeight: 'bold' }}>
                      {data.length > 0 ? data1.article.title : ''}
                    </Container>
                    <Container textAlign="justified">
                      <p>
                        {data.length > 0
                          ? data1.article.description.substring(0, 100)
                          : ''}
                      </p>
                    </Container>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Image src={data.length > 0 && data[1].article.cover.large} />
                  <Segment
                    style={styles.divOpacitySmall}
                    loading={this.props.loading}
                  >
                    <Button
                      content="Review"
                      primary
                      name={data.length > 0 ? data[1].article.slug : ''}
                      onClick={this.handleOnClickReview}
                    />
                    <Container style={{ fontWeight: 'bold' }}>
                      {data.length > 0 ? data[1].article.title : ''}
                    </Container>
                    <Container textAlign="justified">
                      <p>
                        {data.length > 0
                          ? data[1].article.description.substring(0, 100)
                          : ''}
                      </p>
                    </Container>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Image src={data.length > 0 && data[2].article.cover.large} />
                  <Segment
                    style={styles.divOpacitySmall}
                    loading={this.props.loading}
                  >
                    <Button
                      content="Review"
                      primary
                      name={data.length > 0 ? data[2].article.slug : ''}
                      onClick={this.handleOnClickReview}
                    />
                    <Container style={{ fontWeight: 'bold' }}>
                      {data.length > 0 ? data[2].article.title : ''}
                    </Container>
                    <Container textAlign="justified">
                      <p>
                        {data.length > 0
                          ? data[2].article.description.substring(0, 100)
                          : ''}
                      </p>
                    </Container>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
function mapStateToProps(state) {
  return {
    articlesStatus: state.homeStore.articlesStatus,
    articles: state.homeStore.articles,
    loading: state.homeStore.loading,
  };
}
export default connect(
  mapStateToProps,
  {
    getHeadlineAction,
    getArticlesAction,
    resetHomeAction,
  }
)(Headline);
