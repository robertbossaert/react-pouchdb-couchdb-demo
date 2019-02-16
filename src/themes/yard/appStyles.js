import colors from './colors';
import metrics from './metrics';

const baseInput = {
  boxSizing: 'border-box',
  width: '100%',
  outline: 'none',
  borderRadius: '50px',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: colors.gray,
  padding: metrics.spacing.lg,
  background: colors.white,
  transition: 'all 0.3s ease',
};

const appStyles = {
  view: {
    boxSizing: 'border-box',
    height: '100%',
    background: colors.lightGray,
    padding: metrics.spacing.xl,
  },
  input: {
    ...baseInput,
  },
  inputError: {
    ...baseInput,
    borderColor: colors.red,
  },
  boxShadow: '0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08)',
};

export default appStyles;
