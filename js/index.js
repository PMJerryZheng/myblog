!function ($) {

  $(function(){
    var $window = $(window)
    var $body   = $(document.body)

    var navHeight = $('.navbar').outerHeight(true) + 10

    setTimeout(function () {
      var $sideBar = $('.jz-sidebar')
      
      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
            var navOuterHeight = $('.jz-docs-nav').height()

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
          }
        , bottom: function () {
            return (this.bottom = $('.jz-footer').outerHeight(true))
          }
        }
      })
    }, 100)

    $('.jz-container [href=#]').click(function (e) {
      e.preventDefault()
    })
    setTimeout(function () {
      $('.article').each(function(i){
        var time = $(this).children('.time');
        var content = $(this).children('.title-box');
        time.css('height',content.css('height'));
      })
    }, 100)
    
    $(".fancybox").fancybox({
          width   : '200px',
          height    : '200px'
        }
      );
        // 获取页面元素
    var elem = document.querySelector(".navbar");
    // 创建 Headroom 对象，将页面元素传递进去
    var headroom = new Headroom(elem, {
      "tolerance": 50,
      "offset": 20,
      "classes": {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
      }
    });
    headroom.init();

    function preloader() 
    { 
      // counter 
      var i = 0; 
      // create object 
      imageObj = new Image(); 
      // set image list 
      images = new Array(); 
      images[0] = "./img/weibo-hover.png" 
      images[1] = "./img/wechat-hover.png" 
      images[2] = "./img/mail-hover.png" 
      // start preloading 
      for(i=0; i<=2; i++ ) 
        imageObj.src=images[i]; 
    } 
  })
}(jQuery)