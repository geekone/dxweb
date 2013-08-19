/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-19
 * Time: 下午5:35
 * To change this template use File | Settings | File Templates.
 */

utils = {
    connectToDatabase:function(mongoose,config,cb){
        var dbPath;

        dbPath = "mongodb://" + config.USER + ":";
        dbPath += config.PASS + "@";
        dbPath += config.HOST + ((config.PORT.length > 0) ? ":" : "");
        dbPath += config.PORT + "/";
        dbPath += config.DATABASE;
        return mongoose.connect(dbPath, cb);
    }
};
module.exports = utils;