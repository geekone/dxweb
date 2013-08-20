/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-20
 * Time: 下午3:46
 * To change this template use File | Settings | File Templates.
 */

module.exports = function(mongoose){
    Schema = mongoose.Schema;
    CookCategory = new Schema({
        name:{
            type:String
        }
    });
    return mongoose.model('CookCategory',CookCategory);
};