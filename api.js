const express = require('express');
const { json } = require('express/lib/response');
const app = express()
const http = require('http')
const server = http.createServer(app);

app.use(express.json())

let patient_data = [
	{
		'name': 'levi',
		'age': 21,
		'fall_status': 0.5
	},
	{
		'name': 'bob',
		'age': 35,
		'fall_status': 0,
	},
	{
		'name': 'elsa',
		'age': 27,
		'fall_status': 1,
	},
]

app.get('/patients', (req, res) => {

	//Get all data 	
	console.log("here is all the data")
	res.send(patient_data)
})

app.post('/patients', (req, res) => {

	//Create patient 
	let name = req.body.name
	let age = req.body.age
	let fall_status = req.body.fall_status

	patient_data.push({
		"name": name,
		"age": age,
		"fall_status": fall_status
	})

	console.log("patient created")
	res.sendStatus(201)
})
app.put('/patient/:id', (req, res) => {
	//update patient data
	let id = req.params.id - 1

	patient_data[id].name = req.body.name 
	patient_data[id].age = req.body.age 
	patient_data[id].fall_status = req.body.fall_status

	console.log("patient data updated")
	res.sendStatus(201)
})

app.delete('/patient/:id', (req, res) => {
	//delete patient data
	console.log("patient deleted")
	//TODO: implement delete functionality
	let id = req.params.id - 1
	try{
		patient_data.splice(id,1);
	} catch(err){
		console.log(err);
	}	
	res.sendStatus(200) //Currently returns error: patient ... can't be deleted
})
app.get('/patient/:id', (req, res) => {
	//Get patient data
	console.log("patient data")
	res.send(patient_data[req.params.id-1])
})


app.listen(3000, () => {
	console.log('listening on port 3000')
}
)