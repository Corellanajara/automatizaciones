const fs = require('fs');
let rawdata = fs.readFileSync('./ruts.json');
var alldata = JSON.parse(rawdata);
var request = require('request');
var ruts = [];
var rutsRepetidos = [];
var idRepetidos = [];
var i = 0; 
for(var data of alldata){
        i++
        //ruts.push(data.rut);
        if(ruts.includes(data.rut)){
          //console.log("reptido : "+i);
          rutsRepetidos.push(data.rut);
          idRepetidos.push(data._id);
        }
        ruts.push(data.rut)
}
console.log(ruts.length);
console.log(rutsRepetidos.length);

for(var i = 0;i < rutsRepetidos.length;i++){
  console.log("rut : "+rutsRepetidos[i]+ " repetido : "+idRepetidos[i])  
  /*let repetido = idRepetidos[i];
  var options = {
    'method': 'DELETE',
    'url': 'http://165.22.188.157:3000/persona/'+repetido,
    'headers': {
      'Content-Type': 'application/json'
    }  
  };
  
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log("borrado");
    //console.log(response.body);
  });
  */
}

