
$(document).ready(function(){
  console.log("Hello World")
  getData();
});


function getData(){
  $.getJSON("js/object.json",function(data,error){
    console.log(data,error);

  });
}
