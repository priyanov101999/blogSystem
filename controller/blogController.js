const Blog=require('../models/blog');
exports.getAddBlog=(req,res,next)=>{
	res.render('add-blog',{
		pageTitle:'This is ADD BLOG PAGE'
	});
};

exports.postAddBlog=(req,res,next)=>{
	const title=req.body.title;
	const description=req.body.description;
	const author=req.body.author;
	return Blog.create({
		 title:title,
	 description:description,
	 author:author
	}).then((result)=>{

		console.log("done");
		res.redirect("/all");

	}).catch((err)=>{
		console.log("ERROR FROM ME:"+err);
	});
	
};

exports.getAllBlogs=(req,res,next)=>{
	 Blog.findAll()
	.then(blog => {
        res.render('blogs',{
        	blogs:blog
        });
	})
	.catch(err => {
      console.log(err);
    });


};

exports.getEditBlog=(req,res,next)=>{
	const blogId=req.params.blogID;
	
	 Blog.findOne({ where: { id: blogId } })
	.then((blog)=>{
		console.log(blog);
		res.render('edit-blog',{
			blog:blog
		});
	})
	.catch((err)=>{
		console.log("ERROR"+err);
	});
	
};

exports.postEditBlog=(req,res,next)=>{
	const blogId=req.body.id;
	
	 Blog.findOne({ where: { id: blogId } })
	.then((blog)=>{
		blog.title=req.body.title;
		blog.description=req.body.description;
		blog.author=req.body.author;
		return blog.save();
	}).then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect("/all");
    })
	.catch((err)=>{
		console.log("ERROR"+err);
	});
	
};

exports.postAuthorSearch=(req,res,next)=>{
	const author=req.body.search;
	console.log(author);
	 Blog.findAll({ where: { author: author } })
	 .then(blog => {
        res.render('blogs',{
        	blogs:blog,
        	author:author
        });
	})
	.catch(err => {
      console.log(err);
    });
	
};

exports.deleteBlog=(req,res,next)=>{
	const blogId=req.params.blogID;
	
	 Blog.destroy({ where: { id: blogId } })
	.then((blog)=>{
		res.redirect("/all");
	})
	.catch((err)=>{
		console.log("ERROR"+err);
	});
	
};