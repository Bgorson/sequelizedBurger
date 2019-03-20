//submit click event
$("#submit").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
      name: $("#burger").val().trim()
    }
    //makes a post to ajax route
    $.ajax("/api/burgers", {
      type: 'POST',
      data: newBurger
    }).then(
      function () {
        console.log("created new burger")
        location.reload();
      }
    )
  })
  //devour button click event
  $(".devour").on("click", function () {
      let customer = $("#customer").val();
     console.log("devour was clicked")
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "POST",
      data: {name:customer}
    }).then(function () {
        window.location.href = "/burgers";
        
      }
    )
  })