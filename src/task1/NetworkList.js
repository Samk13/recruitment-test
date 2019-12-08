import React from 'react';
import data from '../mockData';
import NetworkListItem from './NetworkListItem';
import Grid from '@material-ui/core/Grid';



const NetworkList = props => {
  return (
    <div>
      <Grid container cols={3}   justify={'center'} spacing={3}>
          {data.data.map(network => {
            return <NetworkListItem key={network.guid} network={network} />;
          })}
      </Grid>
    </div>
  );
};

export default NetworkList;
