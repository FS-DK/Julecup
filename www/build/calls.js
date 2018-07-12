$.ajax({
  type: "GET",
  url: "https://nyside.julecup.dk/wp-json/wp/v2/page?slug=turnering",
  crossDomain: true,
  cache: true,
  success: function(result) {
    $("#output").html(result[0].content.rendered)
  }
});
