import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  media: {
    paddingTop: '20%', // 16:9
    backgroundColor: '#000000',

  },
  card: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '50px',
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
          image="/images/static/web-banner.png"
        />
      </Card>
    );
  }
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Jumbotron);
