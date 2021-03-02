const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const routes=require('./routes/blogRoutes');
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(routes);
app.listen(3000);