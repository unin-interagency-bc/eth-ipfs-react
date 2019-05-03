import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tweet from './Tweet';

const styles = theme => ({
  toolbarMain: {
    borderBottom: `1px solid #55BA7A`,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: '#55BA7A',
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  twitterBox: {
    color: theme.palette.common.white,
  },
  mainGrid: {
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: '#55BA7A',
    color: theme.palette.common.white,
    textAlign: 'center'
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
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

class TwitterFeed extends React.Component {

  state = {
    tweets: []
  }

  getTweets() {
    fetch('/getTweets',
    {
      method: 'GET'
      , headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({tweets: data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentWillMount = () => {
    this.getTweets()
  }

  render() {
    const { classes } = this.props;
    const tweets  = this.state.tweets
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <br/>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="h5" className={classes.twitterBox} gutterBottom>
                    Tweets by:<Link href={'https://twitter.com/UNICEFinnovate'} className={classes.link}>@UNICEFinnovate</Link>
                  </Typography>
                </Paper>
                {tweets.slice().map((row, i) => (
                  <Tweet key={i} data={row}/>
                ))}
              {/* End sidebar */}
        </div>
      </React.Fragment>
    );
  }
}

TwitterFeed.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TwitterFeed);
