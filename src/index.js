import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import cors from 'cors'

const path = require('path');

const app = express()
const port = 3000

// middleware
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
  }))
app.use('/api',routes)
app.use(express.static(__dirname+'/public/'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/public/', 'index.html'));
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


