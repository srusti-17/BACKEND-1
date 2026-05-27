require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

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
app.listen(process.env, () => {
  console.log(`Example app listening on port ${port}`);
});