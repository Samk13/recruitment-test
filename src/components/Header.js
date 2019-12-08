import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
const styles = theme => ({
  root: {
    paddingTop: 64,
    paddingBottom: 72,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      paddingRight: 20
    }
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightLight,

    [theme.breakpoints.down('sm')]: {
      fontSize: 40
    }
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium
  }
});

const Header = props => {
  const { classes } = props;
 
  const firstName = 'xxxx';
  return (
    <div className={classes.root}>
      <Grid container justify={'center'}>
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant={'h3'} className={classes.title}>
            {'Welcome back, '}
            <strong>{firstName}!</strong>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    user : state.user
  }
}
const HeaderWithStyle= withStyles(styles)(Header)

export default connect(mapStateToProps)(HeaderWithStyle) ;
