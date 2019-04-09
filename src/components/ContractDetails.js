import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  layout: {
    width: 'auto',
    padding: theme.spacing.unit * 3,
  }
});

function Blog (props) {
  const { classes } = props;
  return (
    <React.Fragment>
        <CssBaseline />
        <Paper className = {classes.layout}>
            <Typography variant="h6" color="inherit">
                <p>UNICEF Ventures is leveraging a public blockchain, Ethereum, to make claims in a transparent and immutable way. In the first phase of the prototype, UNICEF Ventures is issuing certificates confirming the participation of organizations who test in our drone corridors.</p>
                <p>The authentic certificates issued by UNICEF will start a trail of tamper-proof and immutable credentials for the participants. The time-stamped certificate will enable participants to store, share and verify their qualifications to whomever. Participants will no longer have to go through an intermediary with cumbersome and expensive processes to share and validate achievements and certifications with third parties.</p>
                <p>The certifications are auditable through this <Link href={'https://etherscan.io/address/0x49880Bae91e8Bc7129A08cfDEF089888D6EEB006'}>smart contract</Link>.* The wallet that the certifications are issued from is 0x49880Bae91e8Bc7129A08cfDEF089888D6EEB006, that is held by UNICEF Ventures**.</p>
            </Typography>
        </Paper>
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);