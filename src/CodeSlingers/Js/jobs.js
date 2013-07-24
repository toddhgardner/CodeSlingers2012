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

    function handleFileSelect(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        var files = evt.dataTransfer.files; // FileList object.

        $('#jobs-modal-container .upload').addClass('has-file');
        $('#jobs-modal-container .upload').html(files[0].name);

        window.jobFile = files[0];
    }

    function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        $('#jobs-modal-container .upload').addClass('hover');

        //evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }


    function handleDragOut(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        $('#jobs-modal-container .upload').removeClass('hover');

        //evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }

    var showModal = function () {
        var template = $("#jobs-modal-template").children(":first").clone();
        $("#jobs-modal-container").html(template);
        $("#jobs-modal-wrapper").show();
        var marginTop = ($(window).height() - $(".jobs-modal", "#jobs-modal-container").height()) / 2;
        $(".jobs-modal", "#jobs-modal-container").css({ marginTop: marginTop });

        // Setup the dnd listeners.
        var dropZone = $('#jobs-modal-container .upload').get(0);
        dropZone.addEventListener('dragover', handleDragOver, false);
        dropZone.addEventListener('dragleave', handleDragOut, false);
        dropZone.addEventListener('drop', handleFileSelect, false);

        // Setup the close listeners
        $('.cancel-button').on('click', function () {
            $("#jobs-modal-wrapper").hide();
            $("#jobs-modal-container").html('');
        });

        startValidation();
    }

    var hideModal = function (evt) {
        if ($(evt.target).closest(".jobs-modal").length === 0) {
            $("#jobs-modal-wrapper").hide();
            $("#jobs-modal-container").empty();
        }
    }

    var formSuccess = function () {
        $("#jobs-modal-container .job-form").hide();
        $("#jobs-modal-container .success").show();
    };

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
            errorPlacement: function () { },
            invalidHandler: function () {
                $("#jobs-modal-container .subtitle").show();
            },
            submitHandler: function (evt) {
                if (!window.jobFile) {
                    var form = $("#jobs-modal-container .job-form").serialize();
                    $.ajax({
                        type: 'post',
                        url: 'jobs',
                        data: form,
                        complete: formSuccess
                    });
                } else {
                    var formData = new FormData($("#jobs-modal-container .job-form").get(0));
                    formData.append("file", window.jobFile);

                    $.ajax({
                        type: 'post',
                        url: 'jobs',
                        data: formData,
                        processData: false,
                        contentType: false,
                        complete: formSuccess
                    });
                }
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