import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// Trying this out:
import TwitterFeed from './TwitterFeed'
import CertificateTable from './CertificateTable';
import BlogPosts from './BlogPosts';
import Blog from './Blog';
import Footer from './Footer';
import ContractDetails from './ContractDetails';
import Jumbotron from './Jumbotron';
import Hidden from '@material-ui/core/Hidden';


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    // paddingBottom: theme.spacing.unit * 3
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Layout extends React.Component {


  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={24}>
              <Hidden smDown>
                <Grid key={1} item md={12} lg={12} xl={12}>
                  <Paper className={classes.paper}>
                    <Typography variant="h3" align="center" gutterBottom>
                      {/* Welcome to the Drone Corridor Certificates Page */}
                    </Typography>
                    <Jumbotron />
                  </Paper>
                </Grid>          
              </Hidden>
          </Grid>
        </Grid>      
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={24}>
              <Grid key={1} item xs={12} sm={12} md={12}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" align="left" gutterBottom>
                  UNICEF issues certificates on blockchain to companies testing in drone corridors
                    </Typography>
                    <CertificateTable />
                    <p>* Please note that loading the certificate from IPFS may take several minutes, as the certificate is loading from a decentralized file storage system. </p>
                </Paper>
              </Grid>
              <Grid key={2} item xs={12} sm={12} md={12}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" align="left" gutterBottom>
                    Featured Articles
                  </Typography>
                  <BlogPosts />
                </Paper>
              </Grid>              
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={24}>
              <Grid key={1} item xs={12} sm={12} md={8}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" align="left" gutterBottom>
                    UNICEF issues certificates on the Ethereum blockchain to companies testing drones for emergency and response in Kazakhstan corridor.
                  </Typography>
                  <Blog /><br/>
                  <Typography variant="h6" align="left" gutterBottom>
                    Contract on Etherscan<br/>
                    <Link href='https://etherscan.io/address/0x87f74b6d00dd8bd8ff6e3b805bda09ca34390258'>View the smart contract on Etherscan</Link>
                  </Typography>
                  <ContractDetails />
                  <p>[*Why is this auditability important? <br/><br/>In our digital age, it’s easier than ever to falsify claims and documents. It’s sometimes hard to tell the difference between a phishing scam and real emails. To increase trust in the information being shared, we are providing a transparent way to verify the information that UNICEF Ventures has published.]</p>
                  <p>[**What this means? <br/><br/>The purpose of sharing this wallet is to prove who has authenticated this certificate. UNICEF Ventures is the only holder of this wallet. Therefore, only credentials issued from this wallet are considered endorsed by UNICEF Ventures.] </p>

                </Paper>
              </Grid>
              <Grid key={2} item xs={12} sm={12} md={4}>
                <Paper className={classes.paper}>
                    <TwitterFeed />
                </Paper>
              </Grid>              
          </Grid>
        </Grid>     
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={24}>
              <Grid key={2} item xs={12} sm={12}>
                <Paper className={classes.paper}>
                    <Footer />
                </Paper>
              </Grid>              
          </Grid>
        </Grid>     
      </Grid>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);