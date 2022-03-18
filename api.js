const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app);

patient_data = {
	1 : {
		'general' : {
			'name' : 'levi',
			'age'  : 21,
		},
		'fall_status' : 0.5
	}
}

app.get('/patients', (req,res) => {
	//Get all data 	
	console.log("here is all the data")
	res.send("data")
})
app.post('/patients', (req,res) => {
	//Set all data
	console.log("data set")
	res.sendStatus(201)
})
app.put('/patients', (req,res) => {
	//update all data
	console.log("data updated")
	res.sendStatus(201)
})



app.post('/patient/:id', (req,res) => {
	//Set patient data
	console.log("patient data udpated")
	res.sendStatus(201)
})
app.put('/patient/:id', (req,res) => {
	//update patient data
	console.log("patient data updated")
	res.sendStatus(201)
})
app.delete('patient/:id', (req,res) => {
	//delete patient data
	console.log("patient deleted")
	res.sendStatus(204) //Currently returns error: patient ... can't be deleted
})
app.get('/patient/:id', (req,res) => {
	//Get patient data
	let id = req.params.id;
	console.log("patient data")
	res.send(patient_data[id].general.name)
})


app.listen(3000, () => {
	console.log('listening on port 3000')
	}
)