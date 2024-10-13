//pgm to input the height and weight and age.
//compare Height and weight wrt to age.
//Suggest the options to increase/decrease weight wrt height and age.
//Suggest to increase height wrt to weight and age.
//condition age<18 weight<45 height<4.5
//Suggest to increase weight and height
//condition age<18 weight>=45 and <60 height<4.5
//Suggest to increase height
//condition age<18 weight<60 height<4.5
//Suggest to increase height and decrese weight

const express= require ('express');
const bodyParser = require('body-parser');
const app= express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req,res){
const formData = req.body;
  console.log(formData); // Log the form data
  res.send('Form data received!');
});

app.listen(8056, () => {
  console.log('Server listening on port 8056');
});