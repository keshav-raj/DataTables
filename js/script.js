
$(document).ready(function(){
    let arrayOne = [];
    $.getJSON("https://my.api.mockaroo.com/users.json?key=cde45810", function(result){
      $.each(result, function(i, field){
        arrayOne.push(field);
      });
        var dataSet = arrayOne.map(function(obj) {
            return Object.keys(obj).map(function(key) {
                return obj[key];
            });
        });

        console.log(dataSet);
      $('#example').DataTable(
          {
              data: dataSet,
              columns: [
                  { title: "Id" },
                  { title: "First Name" },
                  { title: "Last Name" },
                  { title: "Email." },
                  { title: "Gender" }
              ]
          }
      );
    });
 
});