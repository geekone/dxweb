/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-20
 * Time: 下午1:59
 * To change this template use File | Settings | File Templates.
 */

//新闻分类
module.exports = function(mongoose){
    Schema = mongoose.Schema;

    NewsCategory = new Schema({
        name:{
            type:String
        }
    });
    return mongoose.model('NewsCategory',NewsCategory);
};