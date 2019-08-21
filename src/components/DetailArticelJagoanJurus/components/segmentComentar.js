import React from 'react';
import {
  Grid,
  Segment,
  Feed,
  Icon,
  Header,
  Divider,
  Form,
  Progress,
  Button,
  Popup,
  Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InputWithLabel from '../../Input/InputWithLabel';
import { getProfileAction } from '../../../action/authAction';
import {
  postArticleFeedback,
  getArticleFeebackAction,
} from '../../../action/articlesAction';
import { connect } from 'react-redux';
import ModalAlert from '../../GlobalFunction/modalAlert';
import moment from 'moment';

class ProgressExampleAutoSuccess extends React.Component {
  state = {
    percent: 0,
    comment: '',
    idUser: 0,
    modalOpen: false,
    headerAlert: '',
    contentAlert: '',
    loading: false,
    dataFeedback: [],
    loadingFeedBack: true,
  };
  increment = () => {
    if (this.state.percent !== 100) {
      this.setState(prevState => ({
        percent: prevState.percent + 20,
      }));
    }
  };

  decrease = () => {
    if (this.state.percent !== 0) {
      this.setState(prevState => ({
        percent: prevState.percent - 20,
      }));
    }
  };
  static propTypes = {
    getProfileAction: PropTypes.func,
    getArticleFeebackAction: PropTypes.func,
    postArticleFeedback: PropTypes.func,
  };

  componentDidMount() {
    this.props
      .getProfileAction()
      .then(res => {
        this.getData(res.value.data.id);
        this.setState({
          idUser: res.value.data.id,
        });
      })
      .catch(() => {
        this.modalFailed();
      });
  }

  getData = id => {
    this.setState({ loadingFeedBack: true });
    this.props
      .getArticleFeebackAction(id, 1, 5)
      .then(res => {
        this.setState({ dataFeedback: res.value.data.data });
        this.setState({ loadingFeedBack: false });
      })
      .catch(() => {
        this.modalFailed();
        this.setState({ loadingFeedBack: false });
      });
  };
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };
  handleKirim = () => {
    const { percent, comment, idUser } = this.state;
    const data = {
      rating: percent / 20,
      comment: comment,
    };
    this.setState({
      loading: true,
    });
    this.props
      .postArticleFeedback(idUser, data)
      .then(() => {
        this.setState({
          modalOpen: true,
          contentAlert: 'Feedback successfully entered ',
          headerAlert: 'Success',
          loading: false,
        });
        this.getData(this.state.idUser);
      })
      .catch(() => {
        this.setState({
          modalOpen: true,
          contentAlert: 'failed to entered feedback ',
          headerAlert: 'Failed',
          loading: false,
        });
      });
  };

  modalFailed = () => {
    this.setState({
      modalOpen: true,
      contentAlert: 'failed to load the data ',
      headerAlert: 'Failed',
      loading: false,
    });
  };

  handleCloseAlert = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Segment>
        <Header as="h2" content="Kolom Komentar" textAlign="center" />
        <Grid>
          <Grid.Column width={8}>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Header
                    as="h4"
                    content="Apakah kamu menyukai artikel diatas?"
                  />
                  <Progress
                    percent={this.state.percent}
                    indicating
                    label={`${this.state.percent}%`}
                  />
                  <Popup
                    content="klik untuk menurunkan presentase kesukaan anda"
                    trigger={
                      <Button
                        onClick={this.decrease}
                        name="No"
                        style={{ backgroundColor: 'white', color: 'red' }}
                        content="Tidak Suka"
                      />
                    }
                  />
                  <Popup
                    content="klik untuk menaikan presentase kesukaan anda"
                    trigger={
                      <Button
                        onClick={this.increment}
                        name="No"
                        floated="right"
                        style={{ backgroundColor: 'white', color: 'green' }}
                        content="Suka"
                      />
                    }
                  />
                  <Divider />
                  <Form>
                    <InputWithLabel
                      inline={false}
                      type="textArea"
                      name="comment"
                      value={this.state.comment}
                      placeholder="Tulis komentarmu disini…"
                      handleChange={this.handleChange}
                    />
                  </Form>
                </Grid.Column>
              </Grid.Row>
              <Button
                onClick={() => this.handleKirim()}
                content="Kirim"
                primary
                size="medium"
                style={{
                  marginLeft: '10em',
                  marginBottom: '1em',
                  width: '10em',
                }}
                loading={this.state.loading}
              />
            </Grid>
          </Grid.Column>
          <Grid.Column width={8}>
            <Grid
              style={{
                margin: '0px',
                width: '100%',
                overflow: 'auto',
                maxHeight: '250px',
              }}
            >
              <Feed
                as={Segment}
                loading={this.state.loadingFeedBack}
                style={{ width: '27em', border: 'none' }}
              >
                {this.state.dataFeedback &&
                  this.state.dataFeedback.map((data, idx) => {
                    return (
                      <Feed.Event key={idx}>
                        <Feed.Label>
                          <Image src={data.user.profile_picture} />
                        </Feed.Label>
                        <Feed.Content>
                          <Feed.Summary>
                            <Feed.User>{data.user.name}</Feed.User>{' '}
                            {data.comment}
                            <Feed.Date>
                              {moment(data.created_at).format('DD MMMM YYYY')}
                            </Feed.Date>
                          </Feed.Summary>
                          <Feed.Meta>
                            <Feed.Like>
                              <Icon name="star" /> {data.rating} Star
                            </Feed.Like>
                          </Feed.Meta>
                        </Feed.Content>
                      </Feed.Event>
                    );
                  })}
              </Feed>
            </Grid>
          </Grid.Column>
        </Grid>
        <ModalAlert
          openModal={this.state.modalOpen}
          handleClose={this.handleCloseAlert}
          header={this.state.headerAlert}
          content={this.state.contentAlert}
          nameButton="OK"
        />
      </Segment>
    );
  }
}
function mapStateToProps() {
  return {};
}
export default connect(
  mapStateToProps,
  {
    getProfileAction,
    getArticleFeebackAction,
    postArticleFeedback,
  }
)(ProgressExampleAutoSuccess);
