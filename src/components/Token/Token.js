// var express = require('express')
// var app = express();
// const https = require ('https');
// const event = ('');
// let accessKey = '1c575b5debde4b22b7cbcf172280f9c6';

//  const uri = 'northeurope.api.cognitive.microsoft.com';
//   //https://northeurope.api.cognitive.microsoft.com/text/analytics/v2.0

//  const path = '/text/analytics/v2.0/';
//   // add the attr. routes
//   app.get('/documents', function (req, res) {
//     res.send('Got a GET request')

//   });
//   app.post('/documents', function (req, res) {
//     res.send('Got a POST request')
//   });
//   app.put('/documents', function (req, res) {
//     res.send('Got a PUT request at ')
//   });
//   app.delete('/documents', function (req, res) {
//     res.send('Got a DELETE request')
//   });
//   app.get('/keyphrases', function ( req, res) {
//     res.send( 'GET request to KeyPhrase')
//   });


//   let response_handler = function (response) {
//       let body = '';
//       response.on ('data', function (d) {
//           body += d;
//       });
//       response.on ('end', function () {
//         let body_ = JSON.parse (body);
//         let body__ = JSON.stringify (body_, null, '  ');
//         console.log (body__);
//     });
//       response.on ('error', function (e) {
//           console.log ('Error: ' + e.message);
//       });
//   };

//   let get_key_phrases = function (documents) {
//     let body = JSON.stringify (documents);

//     let request_params = {
//         method : 'POST',
//         hostname : 'northeurope.api.cognitive.microsoft.com',
//         path : '/text/analytics/v2.0/keyphrases',
//         headers : {
//             'Ocp-Apim-Subscription-Key' : accessKey,
//         }
//     };

//     let req = https.request (request_params, response_handler);
//     req.write (body);
//     req.end (body, documents);
// }


//   let documents = { 'documents': [
//       { 'id': '1', 'language': 'en', 'text': 'I really enjoy the new XBox One S. It has a clean look, it has 4K/HDR resolution and it is affordable.' },
//       { 'id': '2', 'language': 'es', 'text': 'Si usted quiere comunicarse con Carlos, usted debe de llamarlo a su telefono movil. Carlos es muy responsable, pero necesita recibir una notificacion si hay algun problema.' },
//       { 'id': '3', 'language': 'en', 'text': 'The Grand Hotel is a new hotel in the center of Seattle. It earned 5 stars in my review, and has the classiest decor I\'ve ever seen.' }
//   ]};
//   get_key_phrases (documents);
//   app.get('/', function(req, res) {
//   app.use(express.static('cilent'));
//    res.sendFile('/Users/adapttech/interflora-text-categorisation/cilent/');

//   });
 
//   app.listen(3000);
import React from 'react';






let accessKey = 'a4807f2cd9df40618a09757e5726ffb7'  || '29ca4ec0158b4f5292bb051064fcab79';

 const apiUrl = 'northeurope.api.cognitive.microsoft.com';
  //https://northeurope.api.cognitive.microsoft.com/text/analytics/v2.0

 //let path = '/text/analytics/v2.0/';
  // add the attr. routes


  


    let request_params = {
        method : 'POST',
        apiUrl : 'northeurope.api.cognitive.microsoft.com',
        path : '/text/analytics/v2.0/keyphrases',
        headers : {
            'Ocp-Apim-Subscription-Key' : accessKey,
        }
    };

   console.log(request_params, apiUrl );
 
 


class Token extends React.Component {
render(){
    return(
       
         <div>
     Demo Api for no import just yet.
       
        </div>
   
    );
}
}


export default Token;


