$(document).ready(function(){
  $("form#appointment").submit(function(event){
    event.preventDefault();
    var fullName = $("#full-name").val();
    var date = $("#date").val();
    var startTime = $("#start-time").val();
    var endTime = $("#end-time").val();

    $("#confirm-name").text(fullName);
    $("#confirm-start").text(startTime);
    $("#confirm-date").text(date);

    $("#confirmation").show();

  });
});
