import React from 'react'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    position: '',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer: {
    borderTop: '1px solid #e1e1e1',
    padding: '17px 0 15px',
    margin: 'auto',
    color: '#888',
    fontSize: 12,

    '&>span': {
      marginRight: 16,
    }
  },
}

const Footer = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid container justify={'center'}>
        <Grid item xs={12} sm={10} md={8}>
          <footer
            className={classes.footer}
            role="contentinfo"
          >
            <span>{'Base code provided by © Worldfavor AB'}</span>
            <span>{'Final result: candidate\'s property'}</span>
          </footer>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Footer)
