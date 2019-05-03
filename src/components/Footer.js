import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainFeaturedPost: {
    backgroundColor: '#55BA7A',
    color: theme.palette.common.white,
    textAlign: 'center'
  },
  featuredPostTitle: {
    padding: `${theme.spacing.unit * 2}px`,
    backgroundColor: '#55BA7A',
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
  },
  twitterBox: {
    color: theme.palette.common.white,
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
    height: '150px'
  },
  cardDetails: {
    flex: 1,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: '#55BA7A',
    color: theme.palette.common.white,
  },
  link: {
    color: theme.palette.common.white,
    margin: theme.spacing.unit,
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing.unit * 4,
    padding: `${theme.spacing.unit * 4}px 0`,
  },
});

function Footer (props) {

  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <br/>
       <footer className={classes.footer}>
         <Typography variant="h6" align="center" gutterBottom>
         All UAS/drones projects tested in the corridors will abide by the UNICEF innovation principles – meaning open source, open data, shareable, designed for scale, and others.
         </Typography>
         <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Companies and individuals can register their interest in using the testing corridors by completing an online form {<Link href="https://form.jotform.me/82913409891465">here</Link>}.
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          For questions on drones, reach out to <Link href='mailto=drones@unicef.org'>drones@unicef.org</Link>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          For questions on blockchain, reach out to <Link href='mailto=blockchain@unicef.org'>blockchain@unicef.org</Link>
        </Typography>
      </footer>
    </React.Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);