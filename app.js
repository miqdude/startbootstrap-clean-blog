const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/post', function(req, res) {
  res.render('post');
})

app.get('/', function(req, res){
  const posts = [
    {
      title: 'title one',
      subtitle: 'subtitle one',
      author: 'author one',
      date: 'date one'
    },
    {
      title: 'title two',
      subtitle: 'subtitle two',
      author: 'author two',
      date: 'date two'
    }
  ]
  res.render('home', { posts: posts} );
})

app.listen(3000);