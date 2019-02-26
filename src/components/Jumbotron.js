import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CertificateTable from './CertificateTable';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    Card: {
      padding: theme.spacing.unit * 2,
      textAlign: '',
      color: theme.palette.text.secondary,
    },
  });
  

function Jumbotron(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs = {12}>
                <Card className={classes.Card}>
                    <Typography variant="h3" color="black" className={classes.grow}>
                        UNICEF Drone Certificates
                    </Typography>
                </Card>
            </Grid>  
            <Grid item xs = {8}>
                <Card className={classes.Card}>
                    <Typography variant="p" color="black" className={classes.grow}>
                        A Drone Corridor is a place where drones can be tested for humanitarian purposes.  It provides a controlled platform for the private sector, universities and other partners to explore how drones, also known as unmanned aerial vehicles (UAVs), can help deliver services that benefit communities and schools.
                    </Typography><br/>   
                    <Typography variant="p" color="black" className={classes.grow}>
                    The goal? Help the poorest and hardest to reach families around the world. The choice of location for the corridor will allow companies to test drones in a rural setting with a variety of landscape and several remote areas, where health clinics and schools struggle with transportation and mobile reception.
                    </Typography><br/>           
                    <Typography variant="p" color="black" className={classes.grow}>
                        The UNICEF Drone Corridor issues certificates on the Ethereum blockchain.  The certificates represent a successful pilot within a Drone Corridor.
                    </Typography>                
                </Card>
                <br/>
                <Card className={classes.Card}>
                    <Typography variant="h4" color="black" >
                        Newest Certificates
                    </Typography>
                </Card>
                <CertificateTable />
            </Grid>  
            <Grid item xs = {4}>
                <Card className={classes.Card}>
                    <Typography variant="h4" color="black" >
                        Twitter
                    </Typography>
                </Card>
                <Card className={classes.Card}>
                    <Typography variant="p" color="black" className={classes.grow}>
                        A Drone Corridor is a place where drones can be tested for humanitarian purposes.  It provides a controlled platform for the private sector, universities and other partners to explore how drones, also known as unmanned aerial vehicles (UAVs), can help deliver services that benefit communities and schools.
                    </Typography><br/>   
                    <Typography variant="p" color="black" className={classes.grow}>
                    The goal? Help the poorest and hardest to reach families around the world. The choice of location for the corridor will allow companies to test drones in a rural setting with a variety of landscape and several remote areas, where health clinics and schools struggle with transportation and mobile reception.
                    </Typography><br/>           
                    <Typography variant="p" color="black" className={classes.grow}>
                        The UNICEF Drone Corridor issues certificates on the Ethereum blockchain.  The certificates represent a successful pilot within a Drone Corridor.
                    </Typography>                
                </Card>
            </Grid>          
        </Grid>
    </div>
  );
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Jumbotron);