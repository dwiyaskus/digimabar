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
} from 'semantic-ui-react';
import InputWithLabel from '../../Input/InputWithLabel';
export default class ProgressExampleAutoSuccess extends React.Component {
  state = { percent: 0 };
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
                  <Progress percent={this.state.percent} indicating />
                  <Button onClick={this.decrease} name="No">
                    Tidak Suka
                  </Button>
                  <Button onClick={this.increment} name="Yes" floated="right">
                    Suka
                  </Button>
                  <Divider />
                  <Form>
                    <InputWithLabel
                      inline={false}
                      type="textArea"
                      // name="EndDate"
                      // value={props.contentField.EndDate}
                      placeholder="Tulis komentarmu disini…"
                      // handleChange={props.handleChange}
                      //validate={props.errorInformation}
                    />
                  </Form>
                </Grid.Column>
              </Grid.Row>
              <Button
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
