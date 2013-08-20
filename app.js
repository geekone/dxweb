var express = require('express')
   ,mongoose = require('mongoose')
   ,partials = require('express-partials')
  , http = require('http')
  , path = require('path')
  , config = require('config')
    ,utils = require('./lib/utils');

var app = express();

mongoose = utils.connectToDatabase(mongoose,config.db);

// all environments

app.configure('all', function () {
    app.engine('html', require('ejs').renderFile);
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session({secret: 'SEKRET!!!'}));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(partials());
    app.use(app.router);
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


require('./models/Blog')(mongoose);
require('./models/News')(mongoose);
require('./models/NewsCategory')(mongoose);
require('./models/Cook')(mongoose);
require('./models/CookCategory')(mongoose);


// Register Controllers
['Site', 'Admin','Blog'].forEach(function (controller) {
    require('./controllers/' + controller + 'Controller')(app, mongoose, config);
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
