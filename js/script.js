
$(".search-button").click(function() {
let UserInput = $("input").val();
let ApiUrl = `https://api.giphy.com/v1/gifs/search?q=${UserInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`
console.log(UserInput)
  fetch(ApiUrl)
    .then(function(response) {
      return response.json();
  })
    .then(function(data) {
      console.log(data["data"][0])
    
    $(".main").append(`${data["data"][0]["images"]["original"]["url"]}`)
    $(".main").html(`<img src ="${data["data"][0]["images"]["original"]["url"]}">`);
    
  })

});