const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.Port || 5000

app.use(cors())

const courses = require("./Data/course.json")

app.get('/', (req, res) => {
    res.send('knowledge media server is running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourse = courses.find(c => c.id === id);
    res.send(selectedCourse)
})

app.get('/checkout/:title', (req, res) => {
    const title = req.params.title
    const selectedCourse = courses.find(c => c.title === title)
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('knowledge media server running on port:', port)
})