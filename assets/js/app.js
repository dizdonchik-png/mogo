$(function() {
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(), /* функция innerHeight возвращает высоту первого из выбранных элементов страницы */
        scrollOffset = $(window).scrollTop();
    
    
    /* Fixed Header */
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {
        
        scrollOffset = $(this).scrollTop(); /* Получает значение отступа прокрутки сверху для первого элемента в наборе. */
        
        checkScroll(scrollOffset);

    });
    
   function checkScroll(scrollOffset) {
        
        if( scrollOffset >= introH ) {
            header.addClass("fixed"); /* добавляет к связанному элементу класс */
        } else {
            header.removeClass("fixed"); /* удаляет класс, который связан с элементом */
        }
        
    }
    
    
    
    
    /*Smooth scroll - плавный скролл */
    $("[data-scroll]").on("click", function(event) {
        
       event.preventDefault();    // Если будет вызван данный метод, то действие события по умолчанию не будет выполнено. К примеру, клик по ссылке не отправит пользователя по новому URL.   
                        
       var $this = $(this),
           blockId = $this.data('scroll'),
           blockOffset = $(blockId).offset().top; // .offset() - Метод позволяет получить текущее положение элемента относительно документа. top - относительно верхнего блока
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({ // .animate - позволяет выполнить пользовательскую анимацию основанную на изменении CSS свойств для выбранных элементов
            
            scrollTop: blockOffset
            
        }, 500);
        
    });
    
    
    
    /* Menu nav toggle */
    $("#nav-toggle").on("click", function(event) {
        
        event.preventDefault(); 
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active").show();
        
    });
    
                       
                       
                       
    /* Hiding burger menu */
        window.onscroll = magic; // Событие onscroll происходит, когда элемент прокручивается. В отличие от события onwheel (колесико мыши), его могут генерировать только прокручиваемые элементы или окно window. Но зато оно генерируется всегда, при любой прокрутке, не обязательно «мышиной».
    
        function magic() {
            
            if(window.pageYOffset) {   //Свойство pageYOffset - вертикальная прокрутка страницы. Фактически это scrollTop специально для страницы, но со scrollTop для страницы могут возникать некоторые проблемы. Свойство pageYOffset нельзя менять (в отличии от scrollTop).
                
                $("#nav").removeClass("active");
                $("#nav-toggle").removeClass("active");
                
            }
            
        };
                 
    
    
    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        
        event.preventDefault();
        
        var $this = $(this),
           blockId = $this.data('collapse');
        
        $(blockId).slideToggle();
            
    });
                       
                 
    
    
    
    /* Slider */
    $("[data-slider]").slick({
        
        infinite: true,
        fade: false, // элементы скролятся, либо если будет true - то элементы будут мерцать, когда будут меняться
        slidesToShow: 1,
        slidesToScroll: 1
        
    }); 
                       
                       
                       
}); 

























