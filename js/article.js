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
    $(".fancybox").fancybox({
        }
      );
    var elem = document.querySelector(".navbar");
    // 创建 Headroom 对象，将页面元素传递进去
    var headroom = new Headroom(elem, {
      "tolerance": 20,
      "offset": 20,
      "classes": {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
      }
    });
    headroom.init();
  })
}(jQuery)