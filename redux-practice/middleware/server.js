let express = require('express')


const PORT = 3000
const app = express()

let router = express.Router()

router.use('/user/:userId?', function (req, res) {
  console.log(req.url)
  res.end('hello ')
})

app.use('/uploader/', router)

app.listen(PORT, () => {
  console.log(`server is listen at ${PORT}`)
})