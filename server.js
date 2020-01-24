const express = require('express') //importing express package
const path=require('path') //
const app = express() // app  is 
const port =process.env.PORT || 3000 //if the environment var is not there it will take port no 3000

//server static files
app.use(express.static(__dirname+'/dist/ngproject')) //this way of giving path name is wrong so we used path

//Backend route
//send index.html from home(root) route
app.get('/', (req, res) => res.sendFile(path.join(__dirname +'/dist/ngproject/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//dist ->distribution ->for creating file so that it can be distributed
//
//