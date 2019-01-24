const app = require("express")();
const mongoose = require("mongoose");

mongoose.connect("mongodb://ligiano:ligiano01@ds211865.mlab.com:11865/produtos", {
	useNewUrlParser: true
}, () => {
	console.log("Banco de dados conectado");
})

app.listen(8080,() => {
	console.log("API rodando!");
})