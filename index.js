const express = require('express')
const courseStatus = require('./routes/courseStatus')

const app = express()
app.use(express.json())

app.use("/", courseStatus)

const router = express.Router()


app.use('/', router)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`port ${port}`))
