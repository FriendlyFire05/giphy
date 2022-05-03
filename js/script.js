
$(".search-button").click(function() {
  
  let UserInput = $("input").val() ||"puppies" ;
  let ApiUrl = `https://api.giphy.com/v1/gifs/search?q=${UserInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`
  let RanGenNum = 0
  
  fetch(ApiUrl)
    .then(function(response) {
      return response.json();
  })
    .then(function(data) {
      console.log(data["data"][0])
    
    RanGenNum = Math.floor(Math.random() * data["data"].length)
    $(".main").append(`${data["data"][RanGenNum]["images"]["original"]["url"]}`)
    $(".main").html(`<img src ="${data["data"][RanGenNum]["images"]["original"]["url"]}">`);
  })
  $(".main").click(function() {
      $(".main")
  })

});