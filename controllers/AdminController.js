/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-19
 * Time: 下午5:45
 * To change this template use File | Settings | File Templates.
 */

var util = require('util');

AdminContrller = function(app,mongoose,config) {
    app.get('/admin/?',function(req,res,next){
        util.log(req.method + " request to url :" + req.route.path);
        res.render("admin/index",{layout:'admin/layout'});
    });

}

module.exports = AdminContrller;