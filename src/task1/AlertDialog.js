import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class AlertDialog extends React.Component {
  state = {
    open: false
  }


  handleToggle = ()=> {
    this.setState({
      open: !this.state.open
    })
  }
  handleClose = ()=> {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const { open } = this.state
    
    return (
      <Fragment>
        <button varint='fab' mini onClick={this.handleToggle}></button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              close
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
