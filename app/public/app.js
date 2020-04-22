$(document).ready(() => {
  $("#submitBtn").on("click", (e) => {
    e.preventDefault();

    const newMatch = {
      name: $("#nameInput").val(),
      photo: $("#photoInput").val(),
      answers: [
        parseInt($("#question1").val()),
        parseInt($("#question2").val()),
        parseInt($("#question3").val()),
        parseInt($("#question4").val()),
        parseInt($("#question5").val()),
        parseInt($("#question6").val()),
        parseInt($("#question7").val()),
        parseInt($("#question8").val()),
        parseInt($("#question9").val()),
        parseInt($("#question10").val()),
      ],
    };

    console.log(newMatch);

    $.ajax({
      type: "POST",
      url: "/api/friends",
      data: newMatch,
    }).then((res) => {
      console.log(res);
      $("#matchName").text(res[0].name);
      $("#matchPhoto").attr("src", res[0].photo);
      $("#myAlert").modal("show");
    });
  });
});
