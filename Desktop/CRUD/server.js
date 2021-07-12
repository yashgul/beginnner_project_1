const express = require('express')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();




let a=1;



  MongoClient.connect('mongodb+srv://username:idcffs@cluster0.aybfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, database) => {
    if (err) return console.log(err)
  db = database.db('star-wars-quotes')
 



  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/filter', (req, res) => {
  a=req.body.filterorder;
 db.collection('filter').save(req.body, (err, result) => {
   if (err) return console.log(err)
   console.log('saved to database')
   res.redirect('/')
 })
})

app.post('/delete', (req, res) => {
  b=req.body.timedelete;
  myquery={time:b}

  db.collection('delete').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
   
  })

  db.collection("quotes").deleteOne(myquery, function(err, obj) {
    if (err) return console.log(err)
    res.redirect('/')
    console.log(obj.result.n + " document(s) deleted");
    
  })

  })


   
    
  
   

  app.post('/update', (req, res) => {
    
    db.collection('update').save(req.body, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
     
    })
    
    
    db.collection('quotes').findOneAndUpdate({ time: req.body.timeupdate },
    {
      $set: {
        music:req.body.score
      }
    },
    {
     
    })


    res.redirect('/')
    console.log(obj.result.n + " document(s) updated")
      .then(result => {
        console.log(result)
       })
      .catch(error => console.error(error))
  })








app.get('/', (req, res) => {
  


  if(a=="Rating")
  db.collection('quotes').find().sort({music:-1}).toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})




app.post('/quotes', (req, res) => {
 
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
  
