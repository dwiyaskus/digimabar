import React from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CardSearchPage from '../Card/CardSearch';
import SpecialReport from '../SpecialReport/SegmentSpecialReport';
import DummySpecial from '../home/services/dummyDataSpecialReport';
// import DummySearch from './services/dummySeacrh';
import { connect } from 'react-redux';
import {
  getArticlesAction,
  resetArticlesAction,
} from '../../action/articlesAction';
class digimabar extends React.Component {
  state = {
    data: [],
  };
  static propTypes = {
    resetArticlesAction: PropTypes.func,
    getArticleSearch: PropTypes.array,
    getArticlesAction: PropTypes.func,
    getArticleSearchStatus: PropTypes.bool,
    resetHomeAction: PropTypes.func,
    loading: PropTypes.bool,
  };
  componentDidMount() {
    // eslint-disable-next-line
    const { Types } = this.props.match.params;
    this.props.getArticlesAction(1, 100, 'terbaru', Types);
  }
  componentDidUpdate() {
    const {
      resetArticlesAction,
      getArticleSearch,
      getArticleSearchStatus,
    } = this.props;
    if (getArticleSearchStatus === true) {
      this.setState({ data: getArticleSearch.data });
      resetArticlesAction();
    }
  }
  render() {
    const { loading } = this.props;
    return (
      <Segment>
        <Grid>
          <Grid.Column width={12}>
            {this.state.data.length > 0 ? (
              this.state.data.map((object, index) => (
                <CardSearchPage object={object} key={index} loading={loading} />
              ))
            ) : (
              <Header content="Oops, Pencarian Anda Tidak Ditemukan" />
            )}
          </Grid.Column>
          <Grid.Column width={4}>
            <SpecialReport object={DummySpecial.article} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

digimabar.propTypes = {
  object: PropTypes.shape({
    description: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
  }),
};

function mapStateToProps(state) {
  return {
    getArticleSearchStatus: state.articlesStore.getArticleSearchStatus,
    getArticleSearch: state.articlesStore.getArticleSearch,
    loading: state.articlesStore.loading,
  };
}
export default connect(
  mapStateToProps,
  {
    getArticlesAction,
    resetArticlesAction,
  }
)(digimabar);
// export default digimabar;
