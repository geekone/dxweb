/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-20
 * Time: 上午11:42
 * To change this template use File | Settings | File Templates.
 */

var util = require('util');

BlogController = function(app,mongoose,config){
      app.get('/blog/?',function(req,res,next){
            util.log(req.method  + " request to url: " + req.route.path);
            res.render("blog/index",{layout:'blog/layout'});
      });


};

module.exports = BlogController;