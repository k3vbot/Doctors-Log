$(document).ready(() => {
    $.get("/patients", results => {
      for (let i = 0; i < results.length; i++) {
        const row = $("<div>");
        row.addClass("allPatients").addClass("card");
        row.attr("id", "post-number-" + i);
        $("#chirp-area").prepend(row);
        $("#post-number-" + i).append("<h2 class='card-header'>" + results[i].first_last_name + "</h2>");
        $("#post-number-" + i).append("<p>DOB: " + results[i].DOB + "</p>");
        $("#post-number-" + i).append("<p>Gender: " + results[i].gender + "</p>");
        $("#post-number-" + i).append("<p>Postal Code: " + results[i].postal_code + "</p>");
        $("#post-number-" + i).append("<p>Description: " + results[i].Description + "</p>");
        $("#post-number-" + i).append("<p>Appointment Date: " + results[i].Appointment_Date + "</p>");
      }
    });
  });