import React from 'react';
import { Grid, Image, Loader } from 'semantic-ui-react';
import SegmentComentar from './components/segmentComentar';
import SegmentDetailJurus from './components/SegmentDetailJurus';
import SegmentSpecialReport from '../SpecialReport/SegmentSpecialReport';
import SegmentDetailArticelOnlyOneContent from '../DetailArticel/index';
import styles from '../home/styles';
// import dataArticel from './services/dummyDataDetailArticel';
// import DummySpecial from '../home/services/dummyDataSpecialReport';
// import setDataDefault from './services/setDataDefault';
import SetDataSpecialReport from '../SpecialReport/services/setDataSpecialReport';
import SetDataDetailArticle from './services/setDataArticle';

import {
  getSpecialReportAction,
  resetHomeAction,
} from '../../action/homeAction';
import {
  getDetailArticlesAction,
  resetArticlesAction,
} from '../../action/articlesAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class DetailJurus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSpecialReport: {
        coverSmall: '',
        description: '',
      },
      // dataArticel: setDataDefault,
      dataArticel: {
        id: '',
        title: '',
        cover: {
          original: '',
          large: '',
          medium: '',
          small: '',
        },
        description: '',
        author: {
          id: '',
          name: '',
        },
        category: {
          id: '',
          name: '',
        },
        tags: [],
        sub_contents: [],
        created_at: '',
      },
    };
  }

  static propTypes = {
    getSpecialReportAction: PropTypes.func,
    getDetailArticlesAction: PropTypes.func,
    specialReportStatus: PropTypes.bool,
    specialReport: PropTypes.array,
    resetHomeAction: PropTypes.func,
    detailArticleStatus: PropTypes.bool,
    detailArticle: PropTypes.array,
    resetArticlesAction: PropTypes.func,
    loadingArticle: PropTypes.bool,
  };
  componentDidMount() {
    // eslint-disable-next-line
    let { ID } = this.props.match.params;
    this.props.getSpecialReportAction();
    this.props.getDetailArticlesAction(ID);
  }
  componentDidUpdate() {
    if (this.props.specialReportStatus) {
      this.setState({
        dataSpecialReport: SetDataSpecialReport(this.props.specialReport),
      });
      this.props.resetHomeAction();
    }
    if (this.props.detailArticleStatus) {
      this.setState({
        dataArticel: SetDataDetailArticle(this.props.detailArticle),
      });
      this.props.resetArticlesAction();
    }
  }
  render() {
    const { dataSpecialReport, dataArticel } = this.state;
    const { loadingArticle } = this.props;
    return (
      <Grid
        stretched
        style={styles.quickLaunchContainerStyle}
        className="padding-side-twentyfive container-fit"
      >
        <Loader active={loadingArticle} />
        <Grid.Row style={styles.segment}>
          <Grid.Column width={16} style={styles.noPadding}>
            <Grid columns={2}>
              <Grid.Column style={{ width: '100%', marginBottom: '1px' }}>
                <Image src={dataArticel.cover.original} />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>

        <Grid stretched className="padding-side-twentyfive container-fit">
          {dataArticel.sub_contents.length <= 1 ? (
            <SegmentDetailArticelOnlyOneContent
              data={dataArticel}
              specialReport={dataSpecialReport}
            />
          ) : (
            <Grid>
              <Grid.Row>
                <Grid.Column width={12} style={{ marginTop: '-5em' }}>
                  <SegmentDetailJurus data={dataArticel} />
                </Grid.Column>
                <Grid.Column
                  width={3}
                  style={styles.quickLaunchSecondColumnStyle}
                >
                  <SegmentSpecialReport object={dataSpecialReport} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={12} style={{ marginTop: '1em' }}>
                  <SegmentComentar />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        </Grid>
      </Grid>
    );
  }
}
function mapStateToProps(state) {
  return {
    specialReport: state.homeStore.specialReport,
    specialReportStatus: state.homeStore.specialReportStatus,
    detailArticleStatus: state.articlesStore.detailArticleStatus,
    detailArticle: state.articlesStore.detailArticle,
    loading: state.homeStore.loading,
    loadingArticle: state.articlesStore.loading,
  };
}
export default connect(
  mapStateToProps,
  {
    getSpecialReportAction,
    resetHomeAction,
    getDetailArticlesAction,
    resetArticlesAction,
  }
)(DetailJurus);
