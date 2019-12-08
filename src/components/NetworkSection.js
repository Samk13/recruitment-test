import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NetworkList from '../task1/NetworkList';

const styles = theme => ({
  root: {
    paddingTop: 72,
    paddingBottom: 86,
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      paddingRight: 20
    }
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightLight,
    marginBottom: 44,

    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    }
  }
});

const NetworkSection = props => {
  const { classes } = props;
  return (
    <Grid container justify={'center'} className={classes.root}>
      <Grid item xs={12} sm={10} md={8}>
        <Typography variant={'h4'} className={classes.title}>
        Networks
          <NetworkList />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(NetworkSection);
