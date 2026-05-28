require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const githubData={
    "login": "vanpelt",
    "id": 17,
    "node_id": "MDQ6VXNlcjE3",
    "avatar_url": "https://avatars.githubusercontent.com/u/17?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vanpelt",
    "html_url": "https://github.com/vanpelt",
    "followers_url": "https://api.github.com/users/vanpelt/followers",
    "following_url": "https://api.github.com/users/vanpelt/following{/other_user}",
    "gists_url": "https://api.github.com/users/vanpelt/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vanpelt/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vanpelt/subscriptions",
    "organizations_url": "https://api.github.com/users/vanpelt/orgs",
    "repos_url": "https://api.github.com/users/vanpelt/repos",
    "events_url": "https://api.github.com/users/vanpelt/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vanpelt/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  }
app.get('/', (req, res) => {
  res.send('Hello World!');
});
  
app.get('/instagram', (req, res) => {
  res.redirect('https://www.instagram.com/srusti.sam/');
}); 

app.get('/login',(req,res)=>{
  res.send('<h1>please login at my channel</h1> ')
})

app.get('/youtube',(req,res)=>{
  res.send("<h2>Learn from youtube cnc</h2>")
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});