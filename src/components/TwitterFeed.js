import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tweet from './Tweet';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      // width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid #00AEFD`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: '#00AEFD',
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
    // backgroundColor: '#00AEFD',
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
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
    // backgroundColor: theme.palette.grey[800],
    backgroundColor: '#00AEFD',
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
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

class TwitterFeed extends React.Component {
  
  state = {
    tweets: []
  }

  getTweets() {
    console.log('Hi there')
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
      console.log(3)
      console.log(data)
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
    // console.log(this.state.tweets)
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