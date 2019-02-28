import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
      // maxWidth: 250,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });


class Tweet extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
  
    render() {
        const data = this.props.data;
        const { classes } = this.props;
        const pics = [
          '/images/UN018674_Zehbrauskas.jpg'
          ,'/images/UNI76753_Holmes.jpg'
          ,'/images/UNI136147_Mawa.jpg'
          ,'/images/UNI174101_Hallahan.jpg'
          // 'https://www.unicef.org/innovation/sites/unicef.org.innovation/files/2018-11/UN070230_duotone_cropped_GIF_0.gif'
          // , 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/assets/2018/11/19-11-2028-UNICEF_MBB_UN0248272.jpg/image1170x530cropped.jpg'
          // , 'https://cdn1.thr.com/sites/default/files/2017/01/unicef_conflict_support.jpg'
        ]
        return (
            <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="@unicefinnovate"
          subheader={data.created_at}
        />
        { data.extended_entities ? (
        <CardMedia
          className={classes.media}
          image={data.extended_entities.media[0].media_url}
        />) : (
          <CardMedia
            className={classes.media}
            image={pics[[Math.floor(Math.random() * pics.length)]]}
          />
        )
        }
        <CardContent>
          <Typography component="p">
            {data.full_text}
          </Typography>
        </CardContent>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
                {data.text}
                {new Date(data.created_at).toLocaleTimeString()}
                <a href={`https://twitter.com/${data.user.screen_name}`} target="_blank">{`@${data.user.screen_name}`}</a>
            </Typography>
    
          </CardContent>
        </Collapse>
      </Card>
        );
    }
}

Tweet.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Tweet);