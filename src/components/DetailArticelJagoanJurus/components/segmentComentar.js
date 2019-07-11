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
  Image,
  Popup,
} from 'semantic-ui-react';
import InputWithLabel from '../../Input/InputWithLabel';
export default class ProgressExampleAutoSuccess extends React.Component {
  state = { percent: 0, comment: '' };
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

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };
  handleKirim = () => {
    const { percent, comment } = this.state;
    alert(percent, comment);
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
                onClick={this.handleKirim}
                content="Kirim"
                primary
                size="medium"
                style={{
                  marginLeft: '10em',
                  marginBottom: '1em',
                  width: '10em',
                }}
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
              <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Elliot Fu</Feed.User> added you as a friend
                      <Feed.Date>1 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like" />4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image="/images/avatar/small/helen.jpg" />
                  <Feed.Content>
                    <Feed.Summary>
                      <a>Helen Troy</a> added <a>2 new illustrations</a>
                      <Feed.Date>4 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra images>
                      <a>
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                      </a>
                      <a>
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                      </a>
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like" />1 Like
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image="/images/avatar/small/jenny.jpg" />
                  <Feed.Content>
                    <Feed.Summary
                      date="2 Days Ago"
                      user="Jenny Hess"
                      content="add you as a friend"
                    />
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like" />8 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image="/images/avatar/small/joe.jpg" />
                  <Feed.Content>
                    <Feed.Summary>
                      <a>Joe Henderson</a> posted on his page
                      <Feed.Date>3 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                      Ours is a life of constant reruns. Were always circling
                      back to where wed we started, then starting all over
                      again. Even if we dont run extra laps that day, we surely
                      will come back for more of the same another day soon.
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like" />5 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image="/images/avatar/small/justen.jpg" />
                  <Feed.Content>
                    <Feed.Summary>
                      <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                      <Feed.Date>4 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra images>
                      <a>
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                      </a>
                      <a>
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                      </a>
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like" />
                        41 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
