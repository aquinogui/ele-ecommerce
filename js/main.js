<script>
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function (e) {
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').hide();
            $(target).show();

        }) <
        /scri


        <
        script >
        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
</script>

<!---

<script type="text/javascript">
    $(".prateleira").slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 6

    });
</script>-->

<script>
$(document).on('ready', function() {

$(".prateleira").slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,

    pauseOnHover: true,

  responsive: [
  {
      breakpoint: 1024,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
      }
  },
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3
      }
  },
  {
      breakpoint: 480,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
  }

]


}); 
});</script>