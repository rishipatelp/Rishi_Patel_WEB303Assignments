/*
    Name: - Rishi Patel
    Date: - 17/11/2022
    Student ID: - 0793722
*/ 

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "array.json",
    data: { get_param: "value" },
    dataType: "json",
    complete: function (data) {
      Char = data;
    },
  });


  $(document).ajaxComplete(function () {
    Char = $.parseJSON(Char.responseText);
    function SortOrder() {
      return function (a, b) {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
        return 0;
      };
    }

    Char.sort(SortOrder());
    AtoM = Char.filter((item) => /^[a-m]/i.test(item["name"]));
    NtoZ = Char.filter((item) => /^[n-z]/i.test(item["name"]));
    
    table(Char);
    $("#A-M").text(`Filter A-M (${Object.keys(AtoM).length})`);
    $("#N-Z").text(`Filter N-Z (${Object.keys(NtoZ).length})`);
  });
});

function table(data) {
     // adding rows
     var rows = "";
     $.each(data, function (key, value) {
       let row_name = `<tr>
             <td>${value.name}</td>  
             <td>${value.speciality}</td>  
             <td>${value.gender}</td>                
             <td>${value.team}</td>  
             <td>${value.rank}</td> 
             <td>${value.date}</td> 
         </tr>`;
       rows += row_name;
     });
 
     $("#tablebody").empty().append(rows);
}

$("button").on("click", function() {
    var id = $(this).attr("id");
    if(id == "A-M") {
        table(AtoM)
    } else if(id == "N-Z") {
        table(NtoZ)
    }
})

$("#search").on("keyup", function () {
  const value = $(this).val().toLowerCase();
  if(value){
      console.log("Value", value);
      $("#tablebody tr").filter(function () {
        const $team1 = $(this)[0];
    
        if($team1.firstElementChild.textContent.toLowerCase().indexOf(value) > -1){
            console.log($team1.firstElementChild.textContent);
            $($team1).addClass("searched");
        } else {
            $($team1).removeClass("searched");
        }
      });
    } 
    else {
        $("#tablebody tr").removeClass("searched");
    }
});