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
    const featuredPosts = [
        {
          title: 'Drones for search and rescue operations',
          link: 'https://www.youtube.com/watch?v=VxIKaBXUkBc'
        },
        {
          title: 'UNICEF and the Government of Kazakhstan establish two drone testing corridors',
          link: 'https://www.unicef.org/kazakhstan/en/press-releases/unicef-collaboration-government-republic-kazakhstan-establishes-two-drone-testing'
        },
        {
          title: 'UNICEF and the Government of Kazakhstan start testing drones for emergency response',
          link: 'https://www.unicef.org/innovation/stories/unicef-and-government-kazakhstan-begin-test-flights-emergency-response'
        },
    ];
    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={24}>
              <Grid key={1} item xs={12} sm={12}>
                <Paper className={classes.paper}>
                  <Typography variant="h3" align="center" gutterBottom>
                    Welcome to the Drone Corridor Certificates Page
                  </Typography>
                </Paper>
              </Grid>          
          </Grid>
        </Grid>      
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={24}>
              <Grid key={1} item xs={12} sm={12} md={8}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" align="left" gutterBottom>
                      KZ Drones Certificates
                    </Typography>
                    <CertificateTable />
                </Paper>
              </Grid>
              <Grid key={2} item xs={12} sm={12} md={4}>
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