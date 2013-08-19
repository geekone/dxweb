/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-19
 * Time: 下午5:23
 * 新闻模型
 */

module.exports = function(moogoose){

    News = new Schema({
        title:{
            type:String
        },
        content:{
            type:String
        },
        author:{
            type:String
        },
        created:{
            type:Date,
            default:Date.now
        }
    });

    return mongoose.model('News',News);
}
