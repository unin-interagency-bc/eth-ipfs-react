import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '25.25%', // 16:9
    // opacity: 0.8,
    backgroundColor: '#000000'
  },
  card: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '100px',
    left: '100px',
    color: 'white',
  }
});

class Jumbotron extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/images/static/kazakhstan2.jpg"
        />
        <div className={classes.overlay}>
        <Typography color='white' variant='h2'>Help Delivered From the Sky</Typography>
        </div>
      </Card>
    );
  }
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Jumbotron);