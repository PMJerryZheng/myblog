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
    
    
  })
}(jQuery)