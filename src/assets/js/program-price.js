(function ($) {
    "use strict";
    var $window = $(window),
        $document = $(document),
        $switcher_program_price = $(".switcher-program-price");

    $document.ready(function () {

        $switcher_program_price.on('click', function (e) {
            var priceItem = $(this).parents('.modal-body').find('.price-item-wrapper');


            if ($(this).is(':checked')) {
                // console.log(priceItem_priceInteger_monthly+priceItem_pricedecimal_monthly);
                // console.log(priceItem_priceInteger_yearly+priceItem_priceInteger_decimal);
                priceItem.each(function () {
                    var priceItem_price_integer = $(this).find('.integer-part');
                    var priceItem_price_decimal = $(this).find('.decimal-part');

                    // var priceItem_priceInteger_monthly = priceItem_price_integer.data('monthly-integer');
                    // var priceItem_pricedecimal_monthly = priceItem_price_decimal.data('monthly-decimal');

                    var priceItem_priceInteger_yearly = priceItem_price_integer.data('yearly-integer');
                    var priceItem_priceInteger_decimal = priceItem_price_decimal.data('yearly-decimal');
                    priceItem_price_integer.text(priceItem_priceInteger_yearly)
                    priceItem_price_decimal.text(priceItem_priceInteger_decimal)
                })
            } else {
                priceItem.each(function () {
                    var priceItem_price_integer = $(this).find('.integer-part');
                    var priceItem_price_decimal = $(this).find('.decimal-part');

                    var priceItem_priceInteger_monthly = priceItem_price_integer.data('monthly-integer');
                    var priceItem_pricedecimal_monthly = priceItem_price_decimal.data('monthly-decimal');

                    // var priceItem_priceInteger_yearly = priceItem_price_integer.data('yearly-integer');
                    // var priceItem_priceInteger_decimal = priceItem_price_decimal.data('yearly-decimal');
                    priceItem_price_integer.text(priceItem_priceInteger_monthly)
                    priceItem_price_decimal.text(priceItem_pricedecimal_monthly)
                })
            }
        })
    });
})(jQuery);


$(function () {
    $('#modalToggle').click(function () {
        $('#modal').modal({
            backdrop: 'static'
        });
    });

    $('#infoNormalContinue').click(function (e) {
        e.preventDefault();
        $('.progress-bar').css('width', '60%');
        $('.progress-bar').html('Step 2 of 3');
        $('#myTab a[href="#info_normal"]').tab('show');
    });

    $('#infoColorContinue').click(function (e) {
        e.preventDefault();
        $('.progress-bar').css('width', '60%');
        $('.progress-bar').html('Step 2 of 3');
        $('#myTab a[href="#info_color"]').tab('show');
    });

    $('.priceContinue').click(function (e) {
        e.preventDefault();
        $('.progress-bar').css('width', '100%');
        $('.progress-bar').html('Step 3 of 3');
        $('#myTab a[href="#placementPanel"]').tab('show');
    });


    $('.back_chooseIcon').click(function (e) {
        e.preventDefault();
        $('.progress-bar').css('width', '20%');
        $('.progress-bar').html('Step 1 of 3');
        $('#myTab a[href="#infoPanel"]').tab('show');
    });


    $('#finishSteps').click(function (e) {
        e.preventDefault();
        $('#modal').modal('toggle');
    });


})