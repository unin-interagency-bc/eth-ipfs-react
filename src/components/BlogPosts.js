import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

const styles = theme => ({

  mainFeaturedPost: {
    backgroundColor: '#55BA7A',
    color: theme.palette.common.white,
    textAlign: 'center'
    // marginBottom: theme.spacing.unit * 4,
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
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

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

function BlogPosts (props) {

  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <br/>
      <div className = {classes.layout}>
            {featuredPosts.map(post => (
              <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <Link href ={post.link}>Link to article</Link>
                  </Typography>
                </CardContent>
              </div>
            </Card>      
            ))}
      </div>
    </React.Fragment>
  );
}

BlogPosts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogPosts);