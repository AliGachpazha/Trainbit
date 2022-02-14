$(document).ready(function () {

    $("#login").click(function (event) {
        console.log('Clicked')
        event.preventDefault();
        const form = $('#form-post')[0];
        const data = new FormData(form);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function () {
                console.log("SUCCESS :");
                alert('SUCCESS :')
            },
            error: function (e) {
                console.log("ERROR : ", e);
                alert("ERROR :  ")
            }
        });

    });

});