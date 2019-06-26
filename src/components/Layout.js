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
import StaticCertificateTable from './StaticCertificateTable';


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
                  <Typography variant="h5" align="left" gutterBottom>
                    Participants for NYU Class: UN-chained: Assessing emerging technologies for social good
                  </Typography>
                  <CertificateTable />
                </Paper>
                <Paper className={classes.paper}>
                  <Typography variant="h5" align="left" gutterBottom>
                    Participants for UNICEF Kazakhstan Drone Corridor
                  </Typography>
                  <StaticCertificateTable />
                </Paper>
                <p>* Please note that loading the certificate from IPFS may take several minutes, as the certificate is loading from a decentralized file storage system.</p>
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
