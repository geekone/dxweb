/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-19
 * Time: 下午5:45
 * To change this template use File | Settings | File Templates.
 */

SiteContrller = function(app,mongoose,config) {
    app.get('/?',function(req,res,next){
        res.render('index',{'title':'首页'});
    });

    app.get('/500/?', function(req, res, next) {
        next(new Error('Technical error occured'));
    });
}

module.exports = SiteContrller;