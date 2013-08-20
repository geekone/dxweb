/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-20
 * Time: 下午3:46
 * To change this template use File | Settings | File Templates.
 */

module.exports = function(mongoose){
    Schema = mongoose.Schema;
    Cook = new Schema({
        title:{
            type:String
        },
        content:{
            type:String
        },
        auther:{
            type:String
        },
        created:{
            type:Date,
            default:Date.now()
        }
    });

    return mongoose.model('Cook',Cook);
}
