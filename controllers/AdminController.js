/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-19
 * Time: 下午5:45
 * To change this template use File | Settings | File Templates.
 */

var util = require('util');

AdminContrller = function(app,mongoose,config) {

    var News = mongoose.model('News');
    var NewsCategory = mongoose.model('NewsCategory');
    var Blog = mongoose.model('Blog');
    var BlogCategory = mongoose.model('BlogCategory');
    var Cook = mongoose.model("Cook");
    var CookCategory = mongoose.model("CookCategory");


    app.get('/admin/?',function(req,res,next){
        util.log(req.method + " request to url :" + req.route.path);
        res.render("admin/index",{layout:'admin/layout'});
    });


    /* cook  */

    //分类列表
    app.get('/admin/cookcategory/?',function(req,res,next){
        var query = CookCategory.find({});
        query.execFind(function(err,cookCategories){
            if(err){
                console.log(err);
            }else{
                res.render('admin/cookcategory',{
                    layout:'admin/layout',
                    'title':'Cook分类列表',
                    'cookCategories':cookCategories
                });
            }
        });
    });


    //添加分类
    app.post('/admin/cookcategorycreate/?',function(req,res,next){
            var name = req.body.name;
            var cookCategoryModel = new CookCategory();
            cookCategoryModel.name = name;
            cookCategoryModel.save(function(err){
                if(err){
                    console.log(err);
                }else{
                    res.redirect("/admin/cookcategory/");
                }
            });
    });

    //删除分类
    app.get('/admin/delcookcategory/:id',function(req,res,next){
        CookCategory.findOne({_id:req.params.id},function(err,category){
            if(category){
                category.remove();
                res.redirect("/admin/cookcategory/");
            }else{
                console.log(err);
            }
        });
    });


    //COOK列表
    app.get('/admin/cook/?',function(req,res,next){
        var query = Cook.find({});
        query.execFind(function(err,cooks){
            if(err){
                console.log(err);
            }else{
                res.render('admin/cooks',{
                    layout:'admin/layout',
                    'title':'cooks文章列表',
                    'cooks':cooks
                });
            }
        });
    });

    //跳转添加COOK页面
    app.get('/admin/addcook/?',function(req,res,next){
           res.render('admin/addcook',{
               layout:'admin/layout',
               'title':'添加cook'
           });
    });

    //添加COOK
    app.post('/admin/cookcreate/?',function(req,res,next){
           var title = req.body.title;
           var content = req.body.content;
           var author = "admin";
           var created = Date.now();
           var cookModel = new Cook();
           cookModel.title = title;
           cookModel.content = content;
           cookModel.author = author;
           cookModel.created = created;
           cookModel.save(function(err){
               if(err){
                   console.log(err);
               }else{
                   res.redirect("/admin/cook");
               }
           });
    });

    //删除cook
    app.get('/admin/delcook/:id',function(req,res,next){
        Cook.findById(req.params.id,function(err,cook){
            if(cook){
                cook.remove();
                res.redirect("/admin/cook/");
            }else{
                console.log(err);
            }
        });
    });

 /*  blog  */

    //BLOG分类列表
    app.get('/admin/blogcategory/?',function(req,res,next){
        var query = BlogCategory.find({});
        query.execFind(function(err,blogCategories){
            if(err){
                console.log(err);
            }else{
                res.render('admin/blogcategory',{
                    layout:'admin/layout',
                    'title':'BLOG分类',
                    'blogCategories':blogCategories
                })
            }
        });
    });

    //添加BLOG分类
    app.post('/admin/blogcategorycreate/?',function(req,res,next){
        var name = req.body.name;
        var blogCategoryModel = new BlogCategory();
        blogCategoryModel.name = name;
        blogCategoryModel.save(function(err){
            if(err){
                res.status(500);
                res.render('blog-new',{
                    title:"Create new blog post",
                    error:"Blog create failed" + util.inspect(err)
                });
            }else{
                res.redirect("/admin/blogcategory/");
            }
        });
    });

    //删除分类
    app.get('/admin/delblogcategory/:id',function(req,res,next){
        BlogCategory.findById(req.params.id,function(err,category){
            if(category){
                category.remove();
                res.redirect("/admin/blogcategory/");
            }else{
                console.log(err);
            }
        });
    });


    //BLOG 文章
    app.get('/admin/blog/?',function(req,res,next){
        var query = Blog.find({});
        query.execFind(function(err,blogs){
            if(err){
                console.log(err);
            }else{
                res.render('admin/blogs',{
                    layout:'admin/layout',
                    'title':'BLOG文章列表',
                    'blogs':blogs
                });
            }
        });
    });


    //跳转到添加BLOG页
    app.get('/admin/addblog/?',function(req,res,next){
        res.render('admin/addblog',{
            layout:'admin/layout',
            'title':'添加BLOG文章'
        });
    });

    //保存BLOG
    app.post('/admin/blogcreate/?',function(req,res,next){
            var title = req.body.title;
            var content = req.body.content;
            var author = "admin"
            var created = Date.now();
            var blogModel = new Blog();
            blogModel.title = title;
            blogModel.content = content;
            blogModel.author = author;
            blogModel.created = created;

            blogModel.save(function(err){
                if(err){
                    console.log(err);
                } else {
                    res.redirect('/admin/blog')
                }
            });

    });


    //删除文件
    app.get('/admin/delblog/:id',function(req,res,next){
        Blog.findById(req.params.id,function(err,blog){
            if(blog){
                blog.remove();
                res.redirect("/admin/blog/");
            }else{
                console.log(err);
            }
        });
    });



   /*   news */
    //分类列表
    app.get('/admin/newscategory/?',function(req,res,next){
        var  query = NewsCategory.find({});
        query.execFind(function(err,newsCategories){
            if(err){
                console.log(err);
            }else{
                res.render('admin/newscategory',{
                    layout:'admin/layout',
                    'title':'新闻分类',
                    'newsCategories':newsCategories
                });
            }
        });
    });

    //添加新闻分类
    app.post('/admin/newscategorycreate/?',function(req,res,next){
             var name = req.body.name;
             var newsCategoryModel = new NewsCategory();
             newsCategoryModel.name = name;
             newsCategoryModel.save(function(err){
                  if(err){
                      console.log(err);
                  }else{
                      res.redirect('/admin/newscategory');
                  }
             });
    });

    app.get('/admin/news/?',function(req,res,next){
        var query = News.find({});
        query.execFind(function(err,newses){
            if(err){
                console.log(err);
            }else{
                res.render('admin/news',{
                    layout:'admin/layout',
                    'title':'新闻列表',
                    'newses':newses
                });
            }
        });
    });

    app.get('/admin/addnews/?',function(req,res,next){
        res.render('admin/addnews',{layout:'admin/layout','title':'添加新闻'});
    });

    app.post('/admin/newscreate/?',function(req,res,next){
        var title = req.body.title;
        var content = req.body.content;
        var author = 'admin';
        var created = Date.now();
        var newsModel = new News();
        newsModel.title = title;
        newsModel.content = content;
        newsModel.author = author;
        newsModel.created = created;
        newsModel.save(function(err){
            if(err){
                console.log(err);
            }else{
                res.redirect("/admin/news");
            }
        });
    });
}



module.exports = AdminContrller;