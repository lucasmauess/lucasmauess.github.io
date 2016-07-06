var header = document.querySelector("#header");

new Headroom(header, {
  tolerance: {
    down : 2,
    up : 5
  },
  offset : 10,
  classes: {
    initial: "slide",
    pinned: "slide--reset",
    unpinned: "slide--up"
  }
}).init();

$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $("header").addClass("scroll");
    } else {
        //remove class (changes defined in css)
       $("header").removeClass("scroll");
    }
});