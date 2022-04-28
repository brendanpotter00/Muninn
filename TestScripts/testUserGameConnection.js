var request = require('request'),
postData = {},
postConfig = {},
postSuccessHandler = null;

//Add User Post Request =========
postData = {userId : "626363f6e5c8edda33892eb2", gameId : "626041737f1f6c0a235d0545", desc: "too much dancing", rating: 5}

searchInformation = {searchTerm: "Animal Crossing"}

postConfig = {
    url: 'http://localhost:8000/add_review',
    form: postData
}

postSuccessHandler = function (err, httpResponse, body) {
    console.log('JSON response from the server: ' + body)
}
//Dont uncomment request.post unless you want to actually add data
request.post(postConfig, postSuccessHandler);
//=============================================


//Example Get Request =========================
//url/search_game is the router, and then /just dance is the query. Also can use things like /animal crossing, /doom, etc
//As of april 23rd at noon, just dance is the only thing in the test database
request({url:"http://localhost:8000/search_game/just dance"}, function(err, response, body) {
  if(err) { console.log(err); return; }
  console.log("Get response code " + response.statusCode + " with text: " + response.body);
});

//================================================