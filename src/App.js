import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Header from './components/Header'
import NetworkSection from './components/NetworkSection'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Worldfavor recruitment test
          </Typography>
        </Toolbar>
      </AppBar>
      <Header />
      <NetworkSection />
      <Footer />
    </div>
  );
}


export default App;
