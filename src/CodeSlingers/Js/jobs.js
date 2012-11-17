$(function () {
    $(".apply-button").click(function (evt) {
        showModal();
    });

    $("body").keydown(function (evt) {
        if (evt.keyCode === 27) {
            hideModal(evt);
        }
    });
    $("#jobs-modal-container").click(function (evt) {
        hideModal(evt);
    });


    var showModal = function () {
        var template = $("#jobs-modal-template").children(":first").clone();
        $("#jobs-modal-container").html(template);
        $("#jobs-modal-wrapper").show();
        var marginTop = ($(window).height() - $(".jobs-modal", "#jobs-modal-container").height()) / 2;
        $(".jobs-modal", "#jobs-modal-container").css({ marginTop: marginTop });

        startValidation();
    }

    var hideModal = function (evt) {
        if ($(evt.target).closest(".jobs-modal").length === 0) {
            $("#jobs-modal-wrapper").hide();
            $("#jobs-modal-container").empty();
        }
    }

    var startValidation = function () {
        $("#jobs-modal-container .job-form").validate({
            rules: {
                Name:{
                    required: true,
                    regex: /^[a-zA-Z \'\-\.]*$/
                },
                Email: {
                    required: true,
                    email: true
                },
                PhoneNumber: {
                    required:true,
                    regex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                },
                About: {
                    regex: /^[a-zA-Z0-9 \.\-\_\!\?\,\;\:\"\'\(\)]*$/
                }
            },
            errorPlacement: function () {
            },
            submitHandler: function (evt) {
                console.log(evt);
                var form = $("#jobs-modal-container .job-form").serialize();
                $.ajax({
                    type: 'post',
                    url: 'jobs',
                    data: form
                });
                return false;
            }
        });
    }

    $.validator.addMethod(
            "regex",
                function (value, element, regexp) {
                    var re = new RegExp(regexp);
                    return this.optional(element) || re.test(value);
                },
                        "Please check your input."
                );
});