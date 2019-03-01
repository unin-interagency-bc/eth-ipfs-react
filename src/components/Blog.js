import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import CertificateTable from './CertificateTable';
import TwitterFeed from './TwitterFeed'
import Toolbar from '@material-ui/core/Toolbar';

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
    // marginBottom: theme.spacing.unit * 4,
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

const featuredPosts = [
  {
    title: 'Drones for search and rescue operations',
    // date: 'Nov 12',
    // description:
      // 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://www.youtube.com/watch?v=VxIKaBXUkBc'
  },
  {
    title: 'UNICEF and the Government of Kazakhstan establish two drone testing corridors',
    // date: 'Nov 11',
    // description:
      // 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://www.unicef.org/kazakhstan/en/press-releases/unicef-collaboration-government-republic-kazakhstan-establishes-two-drone-testing'
  },
  {
    title: 'UNICEF and the Government of Kazakhstan start testing drones for emergency response',
    // date: 'Nov 11',
    // description:
      // 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link: 'https://www.unicef.org/innovation/stories/unicef-and-government-kazakhstan-begin-test-flights-emergency-response'
  },
];

// const posts = [post1, post2, post3];

const social = ['GitHub', 'Twitter', 'Facebook'];

function Blog (props) {

  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <br/>
      <div className = {classes.layout}>
        <Grid container spacing={24}>
            <Grid item xs={12} md={12}>
              <Paper className={classes.mainFeaturedPost}>
                 <Grid item md={10}>
                   <div className={classes.mainFeaturedPostContent}>
                     <Typography component="h3" variant="h5" color="inherit" gutterBottom>
                     UNICEF issues certificates on the Ethereum blockchain to companies testing drones for emergency and response in Kazakhstan corridor
                     </Typography>
                     <Typography variant="body1" color="inherit" paragraph>
                       28 February 2019, Astana, Kazakhstan: This week, UNICEF and the Center for Emergency Situations and Disaster Risk Reduction, from the Government of Kazakhstan, conducted a training seminar on how to integrate drones as part of emergency preparedness and response efforts. 42 participants from emergency response agencies of Kazakhstan and neighboring Central Asian countries - Kyrgyzstan, Tajikistan, Turkmenistan, Uzbekistan and Afghanistan - participated in this event.
                       <br/><br/>A large country with diverse terrain, Kazakhstan is vulnerable to nearly every type of natural disaster: floods, extreme temperature events, earthquakes, landslides, mudslides, storms and wildfires. Every year, close to 4,000 emergencies cause 3,000-5,000 injuries and claim several dozen lives. The changing climate also affects the rise of weather-related disasters.
                       <br/><br/>One day after the training seminar, all participants traveled to the drone corridor in the Akmola province for a second round of testing, after the {<Link href='https://www.unicef.org/innovation/stories/unicef-and-government-kazakhstan-begin-test-flights-emergency-response'>initial tests</Link>} in January 22. Drones were used in search and rescue real-life scenarios, forest wildfire location and mapping in mountainous terrains for damage assessment in cases of mudslides and avalanches. Four companies from Kazakhstan ({<Link href='http://www.kazuav.kz/'>KazUAV</Link>}, UAV Service Group, AltF4, UAV Group) came to the Zhambyl district of Almaty province to show how their drones perform and can help save lives.
                       <br/><br/>UNICEF Kazakhstan issued certificates of recognition to these drone companies. The certificates were issued in the Ethereum blockchain.
                     </Typography>
                   </div>
                 </Grid>
             </Paper>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h6" gutterBottom>
                Newest Certificates
              </Typography>
              <CertificateTable/>
            </Grid>
            <Grid item xs={12} md={12}>
              <Paper className={classes.mainFeaturedPost}>
                 <Grid item md={10}>
                   <div className={classes.mainFeaturedPostContent}>
                     <Typography component="h3" variant="h5" color="inherit" gutterBottom>
                     Contract on Etherscan
                     </Typography>
                     <Typography variant="body1" color="inherit" paragraph>
                       <Link href='https://kovan.etherscan.io/address/0xFdF80E31D061a88F4dEA4e4A190236AD0Ff37C5A'>View the smart contract on Etherscan</Link>
                     </Typography>
                   </div>
                 </Grid>
             </Paper>
            </Grid>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={4}>
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
              </Grid>
            ))}
          <Grid item xs={12} md={12}>
            <TwitterFeed/>
          </Grid>
          
        </Grid>
      </div>
       <footer className={classes.footer}>
         <Typography variant="h6" align="center" gutterBottom>
          All UAS/drones projects tested in the corridors will abide by the UNICEF innovation principles – meaning open source, open data, shareable, designed for scale, and others.
         </Typography>
         <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
         Companies and individuals can register their interest in using the testing corridors by completing an online form {<Link href="https://form.jotform.me/82913409891465">here</Link>}.
        </Typography>
      </footer>
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);