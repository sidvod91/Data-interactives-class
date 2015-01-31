
$(document).ready(function(){
  console.log("Hello World")
  getData();
});


function getData(){
  $.getJSON("jss/object.json", function(data,error) {
    playerData = data;
    drawStuff();

  });
}

function drawStuff(){
  $(".chart").html(playerData.name);
  $.each(playerData.stats, function(i,item){
    $(".chart").append(item.ba);
  });
}
