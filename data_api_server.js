import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import restify from 'express-restify-mongoose';
import cookieParser from 'cookie-parser';

import {
    Season,
    Team,
    Player,
    Match,
    BasketBallStatPack
} from './Models';

const app = express();
const router = express.Router();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/statasaurusDev');

[Season, Team, Player, Match, BasketBallStatPack].map(model => {
    restify.serve(router, model);
});

app.use(router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(3000, () => {
    console.log('Express server listening on port 3000');
});
