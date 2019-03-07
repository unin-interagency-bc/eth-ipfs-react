const Twitter = require('twitter');

module.exports = (app, io) => {

    let twitter = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    let socketConnection;
    let twitterStream;

    app.locals.searchTerm = 'unicefinnovate'; //Default search term for twitter stream.
    app.locals.showRetweets = false; //Default

    /**
     * Resumes twitter stream.
     */
    const stream = () => {
        console.log('Resuming for ' + app.locals.searchTerm);
        twitter.stream('statuses/filter', { track: app.locals.searchTerm }, (stream) => {
            stream.on('data', (tweet) => {
                sendMessage(tweet);
            });

            stream.on('error', (error) => {
                console.log(error);
            });

            twitterStream = stream;
        });
    }

    getUnicefInnovateTweets = () => {
        console.log('Getting tweets from @unicefinnovate');
        let params = { 
            screen_name: 'unicefinnovate',
            count: 3,
            tweet_mode: 'extended'
        }
        return new Promise((resolve, reject) => {
            twitter.get('statuses/user_timeline', params)
            .then(tweets => {
                console.log('Tweets retrieved')
                resolve(tweets)
            })
            .catch(err => {
                reject(err)
            })        
        })
    }
    // getUnicefInnovateTweets()
    /**
     * Sets search term for twitter stream.
     */
    app.post('/setSearchTerm', (req, res) => {
        let term = req.body.term;
        app.locals.searchTerm = term;
        twitterStream.destroy();
        stream();
    });

    /**
     * Pauses the twitter stream.
     */
    app.post('/pause', (req, res) => {
        console.log('Pause');
        twitterStream.destroy();
    });

    /**
     * Resumes the twitter stream.
     */
    app.post('/resume', (req, res) => {
        console.log('Resume');
        stream();
    });

    //Establishes socket connection.
    io.on("connection", socket => {
        socketConnection = socket;
        stream();
        socket.on("connection", () => console.log("Client connected"));
        socket.on("disconnect", () => console.log("Client disconnected"));
    });

    /**
     * Emits data from stream.
     * @param {String} msg 
     */
    const sendMessage = (msg) => {
        if (msg.text.includes('RT')) {
            return;
        }
        socketConnection.emit("tweets", msg);
    }

    app.get('/getTweets', (req, res) => {
        getUnicefInnovateTweets()
        .then(tweets => {
            console.log(1)
            res.send(tweets)
            // return tweets
        })
        .catch(err => {
            console.log(err)
            res.send({err})
        })
            
    });
};