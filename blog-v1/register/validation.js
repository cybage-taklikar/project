$(document).ready(function () {

    $(".form").validate({
        rules: {

            email: {
                required: true,
                email: true
            },

            username: {
                required: true,
                minlength: 6
            },
            password: {
                required: true,
                minlength: 6
            },
            number: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            confirmPass: {
                required: true,
                minlength: 6,
                equalTo: "#password"
            },

        },
        messages: {

            email: "Please enter a valid email address",


            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 6 characters"
            },

            number: {
                required: "Please enter a phone number",
                minlength: "Your phone must consist of 10 number",
                maxlength: "Your phone must consist of 10 number"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirmPass: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long",
                equalTo: "Please enter the same password as above"
            },

        }
    });


    $("#registeruser").click(function (event) {
        event.preventDefault();

        var username1 = $("#rusername").val();
        var userpass1 = $("#ruserpass").val();
        var useremail1 = $("#ruseremail").val();
        var name1 = $("#name").val();
        var mobile1 = $("#number").val();

        var user = {
            "username": username1,
            "useremail": useremail1,
            "userpass": userpass1,
            "name": name1,
            "mobilenumber": mobile1
        };

        // console.log(username);
        console.log("hi");

        $.ajax({
            method: "POST",
            url: "http://localhost:3000/users",
            data: JSON.stringify(user),
            dataType: "text",
            contentType: "application/json",
            success: data => console.log(data)

        });

    });

}); 