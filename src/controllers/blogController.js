const Article = require('../models/article')

// function saveArticleAndRedirect(path){
//     return async (req, res) => {

//         let article = req.article
//         article.title = req.body.title
//         article.description = req.body.description
//         article.markdown = req.body.markdown
//         try{
//             article = await article.save();
//             res.redirect(`./${article.slug}`)
//         }
//         catch (e){
//             console.log(e);
//             res.render(`blog/articles/${path}`, {article: article})
//         }
//     }
// }

const controller = {

    index: async (req, res) => {
      const articles = await Article.find().sort({
        createdAt: 'desc' });
        res.render('blog/blog', {articles:articles})},

    articlesNew:  (req, res) => { res.render('blog/articles/new', {article: new Article()})},
    articlesCreate: async (req, res) => {
        let article = new Article({
            title:req.body.title,
            description:req.body.description,
            markdown:req.body.markdown,
            img: req.body.img
        })
        try{
            article = await article.save();
            res.redirect(`./${article.slug}`)
        }
        catch (e){
            console.log(e);
            res.render('blog/articles/new', {article: article})
        }
    },
    article: async (req, res) => {
        const article = await Article.findOne( {slug: req.params.slug} );
        if (article == null) {res.redirect('/')}
        res.render('blog/articles/show', {article: article})
    },
    showEdit: async (req, res) => {
        const article = await Article.findById( req.params.id );
        res.render('blog/articles/edit', {article: article})
    },
    edit: async (req, res) => {
        let article = await Article.findById(req.params.id);
        article.title = req.body.title
        article.description = req.body.description
        article.markdown = req.body.markdown
        article.img = req.body.img
        try{
            article = await article.save();
            res.redirect(`/blog/articulos/${article.slug}`)
        }
        catch (e){
            console.log(e);
            res.render('blog/articles/edit', {article: article})
        }
    },

    delete: async (req, res) => {
        await Article.findByIdAndDelete(req.params.id);
        res.redirect('/blog');
    }

    
    
}

module.exports = controller
