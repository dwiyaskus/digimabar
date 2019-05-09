const BLACK_COLOR = '#252525';
const GOLD_COLOR = '#e6ca6b';
const WHITE_COLOR = '#FFF';

const style = {
  segment: {
    border: 'none',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
    padding: '0px',
    margin: '5px 10px 20px 10px',
  },
  backgroundPrimary: {
    background: BLACK_COLOR,
  },
  backgroundWhite: {
    background: WHITE_COLOR,
    height: '100%',
  },

  colorWhite: {
    color: WHITE_COLOR,
  },
  roundShape: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '60px',
    height: '60px',
    backgroundColor: WHITE_COLOR,
    border: 'solid 4px',
    borderRadius: '50%',
    position: 'absolute',
    top: '-6px',
    left: '-15px',
    marginTop: '80px',
    color: GOLD_COLOR,
    textAlign: 'center',
    paddingTop: '10px',
  },
  centerAlignIcon: {
    textAlign: 'center',
    marginTop: '15px',
  },
  centerAlign: {
    textAlign: 'center',
  },
  centerAlignGold: {
    color: GOLD_COLOR,
    textAlign: 'center',
    marginTop: '100px',
  },
  button: {
    background: GOLD_COLOR,
    paddingLeft: '45px',
    paddingRight: '45px',
    marginBottom: '10px',
    marginTop: '0px',
  },
  quickLaunchContainerStyle: {
    marginBottom: '15px',
    position: 'relative',
    top: '-15px',
  },
  noMarginTop: { marginTop: 0 },
  noPadding: { padding: '0px' },
  quickLaunchSecondColumnStyle: { paddingLeft: '0px', height: '100%' },
  floatRight: { float: 'right' },
  textCenterMarginBotFive: {
    textAlign: 'center',
    marginBottom: '5px',
  },
  filterHeaderStyle: { fontSize: '25px', fontWeight: '900' },
  divOpacity: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: '999999',
    width: '60em',
    height: '30em',
    position: 'absolute',
    marginTop: '-40em',
    marginLeft: '5em',
  },
  divOpacitySmall: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: '999999',
    width: '20em',
    height: '10em',
    position: 'absolute',
    marginTop: '-12em',
    marginLeft: '1em',
  },
};

export default style;
