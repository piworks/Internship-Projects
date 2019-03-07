$(document).ready(function () {
    var part = $('#part');

    $('#getAll').ngclick(function () {
        $.ajax({
            type: 'GET',
            url: 'api/Values/GetAll',
            dataType: 'json',
            success: function (data) {

                part.empty();
                $.each(data, function (index, val) {
                    var fullName = val.firstname + ' ' + val.lastname + ' ' ;
                    var info = val.id+' '+ val.email + ' ' + val.workfrom + ' ';
                    part.append('<li>' + fullName + info + '</li>');

                });
            }

        });

    });

    $('#getId').click(function () {
        $.get('api/Values/Get/' + $('#txtId').val(), function (data) {

            var items = '<table><tr><th>firstname</th><th>lastname</th></tr>';
            $.each(data, function (i, val) {
                items += "<tr><td>" + val.firstname + "</td><td>" + val.lastname+ "</td></tr>";
            });
            items += "</table>";
            part.append(items);
        });

    });

    $('#submit').click(function () {
        console.log('submitteyim');
        var url = "api/Values/Add/";
        var firstname = $("#FirstName").val();
        var lastname = $("#LastName").val();
        var email = $('#Email').val();
        var workfrom = $('#Workfrom').val();
        $.post(url, { firstname: firstname, lastname: lastname, email: email, workfrom: workfrom }, function (data) {
            part.append(data);
        });
    })

 
});  