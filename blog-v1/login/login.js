$(document).ready(function () {

  $('.input').focus(function () {
    $(this).parent().find(".label-txt").addClass('label-active');
  });

  $(".input").focusout(function () {
    if ($(this).val() == '') {
      $(this).parent().find(".label-txt").removeClass('label-active');
    };
  });



  $("#login_user").click((e) => {
    e.preventDefault();

    var username = $("#username").val();
    var userpass = $("#userpass").val();
   // console.log(username);
  //  console.log("hi");
    var testresult = [];
    $.ajax({
      url: `http://localhost:3000/users?username=${username}&userpass=${userpass}`,
      type: "GET",
      success: function (result) {
        //console.log(result);
        testresult = result;
      },
    }).done(() => {
      if (testresult.length == 0) {
        console.log("not valid user")
      }
      else{
        sessionStorage.setItem("user",testresult[0]);
        window.location.replace("../userhomepage/userhome.html");
      }
    })

  });



});

