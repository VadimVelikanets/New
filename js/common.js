// var swiper = new Swiper('.swiper-container', {
//     pagination: {
//       el: '.swiper-pagination',
//       dynamicBullets: true,
//     },
//   });

$(function() {

    $(window).on('load', function (e) {
        $('h1, .p, .hidden_btn').addClass('show');
        $('.design').css('opacity', '1');
      });



    /*Всплывающее окно */
    $('body').on('scroll', function (e) {
   
        var animateScrollStart = 200;
        var animateScrollBottom = $(window).scrollTop() + $(window).height();
        var animateScrollBottomStart = animateScrollBottom - animateScrollStart;

        $('.fade-up, .fade-right').each(function () {
            var offSetTopAnimateBlock = $(this).offset().top;
            if(animateScrollBottomStart > offSetTopAnimateBlock){
                $(this).addClass('animate');

            } else {
                 $(this).removeClass('animate');
         
            }
        })
    });
    /* Конец */

    $('.mail_box').on({
        mouseenter: function() {
            $(this).find('img').attr('src', './images/mail__white.svg');
        },
        mouseleave: function() {
            $(this).find('img').attr('src', './images/mail.svg');
        }
      });
   
    $('#hamburger').click(function(){
        $('.mobile__menu').addClass('scroll');

    });
    $('#close_menu').click(function(){
        $('.mobile__menu').removeClass('scroll');
    });


    $('.portfolio__wrapper__slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,   
        arrows: false
    });
    //Получаем имя приклепленного файла
    $('.file_input').change(function(e){
        if ($(this).val() !== ''){
          let fileName = e.target. files[0]. name;
          $('.file__name').html('Выбран файл ' + fileName)
          $('.file__name').attr('id', 'file')
          $('.file__name').parent().attr('id', 'file_wrap')
          $('.file__about').css("max-width", "280px");
          $('.take__files').css('align-items', 'end');
        }
      })

     //Phone validation    
     $(".phone_input").mask("999(99) 999-9999");
      //AJAX
      $('.form').submit(function(e){
        e.preventDefault();
        const form_data = $(this).serialize();
        let url = $(this).attr('action');
        
        $.ajax({
           url: url,
           type: 'POST',
           data: form_data,
            dataType: "text",
            success: function(data){
              alert(data);
              $("input").val('');
           }
           , error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err);
               $("input").val('');
           }
        })
    });


});
