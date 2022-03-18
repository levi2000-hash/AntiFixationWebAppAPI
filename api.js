const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app);


app.get('/patients', (req,res) => {
	//Get all data 	
})
app.post('/patients', (req,res) => {
	//Set all data
})
app.put('/patients', (req,res) => {
	//update all data
})


app.post('/patient/:id', (req,res) => {
	//Set patient data
})
app.put('/patient/:id', (req,res) => {
	//update patient data
})
app.delete('patient/:id', (req,res) => {
	//delete patient data
})
app.get('/patient/:id', (req,res) => {
	//Get patient data
})


app.listen(3000, () => {
	console.log('listening on port 3000')
	}
)