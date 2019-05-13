import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  media: {
    paddingTop: '30%', // 16:9
    backgroundColor: '#000000',

  },
  card: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '20px',
  }
});

class Jumbotron extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/images/static/web-banner-2.gif"
        />
        <div className={classes.overlay}>
          <Typography variant="h1" style={{ color: '#FFFFFF' }} align="left" gutterBottom>
            <b>UNICEF Innovation</b>
          </Typography>      
          <Typography variant="h3" style={{ color: '#FFFFFF' }}  align="left" gutterBottom>
            Exploring blockchain for certifications
          </Typography>              
        </div>        
      </Card>
    );
  }
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Jumbotron);
