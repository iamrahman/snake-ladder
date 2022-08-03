import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'black',
    border: 0,
    color: 'white',
    height: '100vh',
  },
  stats: {
    background: 'black',
    height: '100vh',
  },
  board: {
    marginTop: '10px !important',
  },
  logo: {
      width: '30%',
  },
  loading: {
      width: '40vw',
      border: '1px solid white',
      height: 30,
      alignItems: 'center',
      padding: 2
  },
  playText: {fontSize: 55, fontFamily: 'monospace', color: 'yellow'}
});

export default useStyles;