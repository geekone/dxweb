/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-20
 * Time: 上午11:43
 * To change this template use File | Settings | File Templates.
 */


module.exports = function(mongoose){

    Schema = mongoose.Schema;

    Comment = new Schema({
        text:{
            type:String
        },
        author:{
            type:String
        },
        created:{
            type:String,
            required:false,
            default:Date.now()
        }
    });

    BlogCategory = new Schema({
        name:{
            type:String,
            required:true
        }
    });


    Blog = new Schema({
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
            defualt:Date.now()
        }
    });


    var BlogCategory = mongoose.model('BlogCategory',BlogCategory);

    return mongoose.model('Blog', Blog);
};