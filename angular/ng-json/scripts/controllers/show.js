
app.controller("jsoncontroller",function($scope,$http){
 
 	//API requires a start date
	//var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);
  var url='https://builds.apache.org/api/json';
  //url='http://ip.jsontest.com/'
  $http.jsonp(url+'?callback=JSON_CALLBACK').success(function(data){
       console.log('success');
    })
    .error(function () {
      console.log('error')
    });
});


//function spotify_api($http) {

//})