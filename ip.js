// imports below
const fs = require('fs');
const prompt = require('prompt');
const axios = require('axios');
//imports end

//variable below
var url = "http://v2.api.iphub.info/ip/";
var obj = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
//varibale end


//actual code below
prompt.start();

prompt.get(['ipAddress'], (err, results) => {
	let config = {
		headers: {
			'X-Key' : obj.apiKey
		}
	}
	axios.get(url + results.ipAddress, config)
		.then(r => {
			const ip = convert.toIP(r.data);
			console.log(r.data);
			console.log("I have no idea how to convert the json objects into actual single objects so you have go here \nhttps://iphub.info/api")
		})
		.catch((error) => {
			console.log(error);
		});
});
//actual code end
