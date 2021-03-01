$(function () {
      //모바일 nav
      $(".hamBtn>a").click(function () {
            $(this).toggleClass("active");
            $(".navWrap").toggleClass("active");
            $("#nav").toggleClass("active");

      });
})