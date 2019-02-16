import logo from './logo.png';
import appStyles from './appStyles';
import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';

const yard = {
  /**
   * Component styles
   */
  document: {
    background: colors.lightGray,
    color: colors.black,
    fontFamily: fonts.type.default,
    fontSize: fonts.size.default,
    logo,
    logoHeightSmall: '30px',
    logoHeightTablet: '50px',
  },
  header: {
    background: colors.white,
    boxShadow: appStyles.boxShadow,
    marginBottom: '40px',
    padding: `${metrics.spacing.xl} ${metrics.spacing.xl}`,
  },
  inputWrapper: {
    margin: `0 0 ${metrics.spacing.lg} 0`,
  },
  input: {
    background: colors.white,
    borderColor: colors.gray,
    borderError: colors.red,
    borderRadius: '50px',
    fontFamily: fonts.type.roboto,
    fontSize: '16px',
    fontWeight: fonts.weight.regular,
    height: '50px',
    padding: metrics.spacing.lg,
    width: '100%',
  },
  modalClose: {
    color: colors.blue,
    fontSize: '18px',
    fontWeight: 'bold',
  },
  modalTrigger: {
    color: colors.blue,
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default yard;
