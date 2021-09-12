(function ($) {
    "use strict";
    var $window = $(window),
        $document = $(document),
        // $dir = $('html').attr("dir"),
        $body = $("body"),
        $loaderWrapper = $('.loader-wrapper'),
        $hasDropdown = $(".has-dropdown"),
        $hasDropdown_a = $(".has-dropdown a"),
        $bznsNavBar = $(".bzns-nav-bar"),
        $menuTrigger = $('.menu-trigger a'),
        $closeMenu = $('.close-menu'),
        $select2Init = $('.select-2-init'),
        $customScroll = $('.custom-scroll'),
        $compleationBar = $('#compleation_bar'),
        $planObjectives_li = $('.check-list li'),
        $date_picker = $('.date_picker'),
        $start_date_picker = $('.start_date_picker'),
        $end_date_picker = $('.end_date_picker'),
        $inputmask = $(".inputmask"),
        $DataTableInit = $('.dataTableInit'),
        $ChaptersSubMenu = $('.chapters .sidebar .side-menu .has-sub > a'),
        $AuthorizedUsers = $('.authorized-users'),
        // $AuthorizedUsers_inner = $('.authorized-users-inner');
        $textareaEditing = $('.textarea-editing'),
        $sidebar_section_options = $('.sidebar-section-options'),
        $close_section_options = $('#close_section_options'),
        $options_trigger = $('#options_trigger'),
        $team_members_slider = $('.team-members-slider'),
        $milestones_slider_wrapper = $('.milestones-slider-wrapper'),
        $BB_tooltip_white = $('.BB_tooltip_white');




    var direction = $('html').attr('dir');

    if (direction == 'rtl') {
        var dir = true,
            lang = 'ar',
            bmDatePicker_cancelText = 'الغاء',
            bmDatePicker_okText = 'حسنا',
            bmDatePicker_clearText = 'مسح';
    } else {
        var dir = false,
            lang = 'en',
            bmDatePicker_cancelText = 'Cancel',
            bmDatePicker_okText = 'Ok',
            bmDatePicker_clearText = 'Clear';
    }


    $window.on("load", function () {
        $loaderWrapper.delay(350).fadeOut("slow");
        // $body.css("overflow", "");
    });
    $document.ready(function () {

        $document.on('click', function () {
            $('.bzns-dropdown').hide();
            $hasDropdown.removeClass('show');
        });
        $menuTrigger.on('click', function (e) {
            e.preventDefault();
            if ($bznsNavBar.hasClass('nav-open')) {
                $bznsNavBar.removeClass('nav-open');
                $body.removeClass('body-nav-open')
            } else {
                $bznsNavBar.addClass('nav-open');
                $body.addClass('body-nav-open')
            }

        });
        $closeMenu.on('click', function (e) {
            e.preventDefault();
            $bznsNavBar.removeClass('nav-open');
            $body.removeClass('body-nav-open')
        });
        $hasDropdown_a.on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            //$('.bzns-dropdown').hide()
            if ($(this).parent().hasClass('show')) {
                $('.bzns-dropdown').hide();
                $hasDropdown.removeClass('show');
                $hasDropdown_a.next('.bzns-dropdown').hide();
            } else {
                $('.bzns-dropdown').hide()
                $hasDropdown.removeClass('show');
                $(this).parent().addClass('show');
                $(this).next('.bzns-dropdown').show();
            }

        });

        if ($select2Init.length > 0) {
            $select2Init.select2();
        }
        if ($DataTableInit.length > 0) {
            $DataTableInit.DataTable({
                responsive: true
            });
        }

        if ($customScroll.length > 0) {
            $customScroll.scrollbar();
        }
        if ($compleationBar.length > 0) {
            $compleationBar.barfiller({
                barColor: '#00a5fe'
            });
        }

        $planObjectives_li.each(function () {
            var planObjectives_Text = $(this).text();
            $(this).attr("title", planObjectives_Text);
        });

        if ($date_picker.length > 0) {
            $date_picker.bootstrapMaterialDatePicker({
                weekStart: 0,
                time: false,
                format: 'DD/MM/YYYY',
            });
        }

        if ($start_date_picker.length > 0) {
            $end_date_picker.bootstrapMaterialDatePicker({
                weekStart: 0,
                time: false,
                format: 'MM/YYYY',
            });
            $start_date_picker.bootstrapMaterialDatePicker({
                weekStart: 0,
                time: false,
                format: 'MM/YYYY',
            }).on('change', function (e, date) {
                $end_date_picker.bootstrapMaterialDatePicker('setMinDate', date);
            });;

        }
        if ($inputmask.length > 0) {
            $inputmask.inputmask();
        }


        //////////////////////////////////////
        // Company -- uploade image
        function readCompanyImageURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();


                reader.onload = function (e) {
                    //console.log(e.target.result);
                    var img_url = e.target.result;
                    var images_src = $('#profile_image_preview').attr('src');
                    $('#profile_image_preview').attr('data-avatar', images_src);
                    $('#profile_image_preview').removeAttr('src');
                    $('#profile_image_preview').css("background-image", 'url("' + img_url + '")');
                    // $('.profile-up-btn').css('opacity', '0');
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#profile_img_upload_btn").change(function () {
            readCompanyImageURL(this);
        });

        // End Company -- uploade image
        /////////////////////////////////////

        //////////////////////////////////////
        // Profile -- uploade image
        function readProfileImageURL_Company_logo(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                console.log(reader);

                reader.onload = function (e) {
                    var img_url = e.target.result;
                    // console.log(img_url);
                    var images_src = $('#company_logo_image_preview').attr('src');
                    $('#company_logo_image_preview').attr('data-avatar', images_src);
                    $('#company_logo_image_preview').removeAttr('src');
                    // $('#company_logo_image_preview').css("background-image", 'url("' + img_url + '")');
                    $('#company_logo_image_preview').attr("src", img_url);
                    // $('.profile-up-btn').css('opacity', '0');
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#company_logo_upload_btn").change(function () {
            readProfileImageURL_Company_logo(this);
        });


        function readProfileImageURL_Company_Cover(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                console.log(reader);

                reader.onload = function (e) {
                    var img_url = e.target.result;
                    // console.log(img_url);
                    var images_src = $('#company_cover_image_preview').attr('src');
                    $('#company_cover_image_preview').attr('data-avatar', images_src);
                    $('#company_cover_image_preview').removeAttr('src');
                    // $('#company_cover_image_preview').css("background-image", 'url("' + img_url + '")');
                    $('#company_cover_image_preview').attr("src", img_url);
                    // $('.profile-up-btn').css('opacity', '0');
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#company_cover_upload_btn").change(function () {
            readProfileImageURL_Company_Cover(this);
        });

        // End Profile -- uploade image

        /////////////////////////////////////
        $('#select_your_company').on('change', function (e) {
            // console.log($(this).val());
            var val = $(this).val();
            if (val == 'add_company') {
                $('#add_company_Modal').modal('show');
            }
        });

        /////////////////////////////////////////////////

        $("#change_profile_image").change(function (e) {
            var img = e.target.files[0];

            if (!iEdit.open(img, true, function (res) {
                    $("#Profile_image_result").attr("src", res);
                })) {
                alert("Whoops! That is not an image!");
            }
        });

        ////////////////////////////////////////////////

        $ChaptersSubMenu.each(function () {
            // e.preventDefault();
            if ($(this).parent('li').hasClass('open')) {
                $(this).parent('li').find('ul').slideDown();
            }
        })

        $ChaptersSubMenu.on('click', function (e) {
            // console.log('a')
            e.preventDefault();
            if (!$(this).parent('li').hasClass('open')) {
                $ChaptersSubMenu.parent('li').removeClass('open').find('ul').slideUp();
                $(this).parent('li').toggleClass('open').find('ul').slideToggle();
            }
        })


        ////////////////////////
        if ($AuthorizedUsers.length > 0) {
            var num = $AuthorizedUsers.data('num');
            // console.log(num);
            $AuthorizedUsers.slick({
                // dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: num,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 9,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 7,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }

        /*if ($AuthorizedUsers_inner.length > 0) {

            $AuthorizedUsers_inner.slick({
                // dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 15,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 9,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 7,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }*/

        //////////// Chapters > authorized-users-modal Checkboxs

        $('.select-all-read').on('change', function () {
            if ($(this).is(':checked')) {
                $(this).parents('.card-header').next('.collapse').find('.select-read').prop('checked', true);
            } else {
                $(this).parents('.card-header').next('.collapse').find('.select-read').prop('checked', false);
            }
        })

        $('.select-all-write').on('change', function () {
            if ($(this).is(':checked')) {
                $(this).parents('.card-header').next('.collapse').find('.select-write').prop('checked', true);
                $(this).parents('.authorized').find('.select-all-read').prop('checked', true).change();



            } else {
                $(this).parents('.card-header').next('.collapse').find('.select-write').prop('checked', false);
                $(this).parents('.authorized').find('.select-all-read').prop('checked', false);
                $(this).parents('.card').find('.select-read').prop('checked', false);



            }
        })

        $('.select-write').on('change', function () {
            if ($(this).is(':checked')) {
                $(this).parents('.authorized').find('.select-read').prop('checked', true);
            } else {
                $(this).parents('.authorized').find('.select-read').prop('checked', false);
            }
        })
        /*/////////////////////////////////////////////*/

        $close_section_options.on('click', function (e) {
            e.preventDefault();
            $sidebar_section_options.removeClass('show');
        });
        $options_trigger.on('click', function (e) {
            e.preventDefault();
            $sidebar_section_options.addClass('show');
        });

        /*/////////////////////////////////////////////*/



        /* ////////////////////////////////////////////////*/

        $('.readmore').on('click', function (e) {
            e.preventDefault();
            $(this).hide().parents('.with-readmore').find('.hide').fadeIn();
        })

        /*//////////////////////////////////////////////*/

        //              Start Pitch Page                //

        /*///////////////////////////////////////////////*/

        if ($team_members_slider.length > 0) {
            var num = $team_members_slider.data('num');
            // console.log(num);
            $team_members_slider.slick({
                // dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: num,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }


        /*-----------------------*/

        if ($milestones_slider_wrapper.length > 0) {
            var num = $milestones_slider_wrapper.data('num');
            // console.log(num);
            $milestones_slider_wrapper.slick({
                // dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: num,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }

        /*------------------------------------------------*/

        $('.edit-in-the-box').on('click', function (e) {
            e.preventDefault();
            $(this).parent('.edit-view').hide().next('.editing-area').show();
        });

        $('.save-action').on('click', function (e) {
            e.preventDefault();
            $(this).parent('.editing-area').hide().prev('.edit-view').show();
        });


        //////////////////////////////////////
        // pitch-company-image -- uploade image
        function readProfileImageURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();


                reader.onload = function (e) {
                    //console.log(e.target.result);
                    var img_url = e.target.result;
                    var images_src = $('#pitch_company_image_preview').attr('src');
                    $('#pitch_company_image_preview').attr('data-avatar', images_src);
                    $('#pitch_company_image_preview').removeAttr('src');
                    $('#pitch_company_image_preview').css("background-image", 'url("' + img_url + '")');
                    // $('.profile-up-btn').css('opacity', '0');
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#pitch_company_upload_btn").change(function () {
            readProfileImageURL(this);
        });

        // End Profile -- uploade image

        /////////////////////////////////////


        $(".Forecast-dropdown  .dropdown-item .dropdown-item-trigger").click(function () {
            $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        });


        if($BB_tooltip_white.length){
            $BB_tooltip_white.tooltipster({
                position: 'top',
                contentAsHTML: true,
                multiple: true,
                theme: 'tooltipster-white',
                trigger:'click'
            });
        }






    });
})(jQuery);