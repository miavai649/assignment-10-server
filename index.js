const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.Port || 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('knowledge media server is running')
})

app.listen(port, () => {
    console.log('knowledge media server running on port:', port)
})