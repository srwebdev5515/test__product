import { makeStyles } from '@material-ui/core/styles';
import { Colors } from '../../styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 14px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    background: Colors.Secondary,
    color: Colors.Text,
    borderRadius: 40
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 0,
    color: Colors.Border
  },
}));
